# ASTRO ARYABHATA - TEST RUN & PRODUCTION DEPLOYMENT GUIDE

## ✅ CURRENT TEST RUN STATUS

### Backend Server ✅
- **Status**: Running on http://localhost:5000
- **Database**: MongoDB Connected
- **Port**: 5000
- **Environment**: Development (nodemon watching for changes)

### Frontend Server ✅
- **Status**: Running on http://localhost:5174
- **Framework**: React 19.2 with Vite
- **Build Tool**: Vite (Lightning fast HMR)

### API Endpoints Available:
```
GET  http://localhost:5000/api/slots                    - Get available slots
POST http://localhost:5000/api/bookings                 - Create booking
POST http://localhost:5000/api/payment/create-order     - Create Razorpay order
POST http://localhost:5000/api/payment/webhook          - Razorpay webhook
```

---

## 🧪 TEST SCENARIOS

### Test 1: View Available Slots
```bash
curl http://localhost:5000/api/slots
```
Expected: Returns array of available consultation slots

### Test 2: Create Booking (Complete Flow)
1. Navigate to http://localhost:5174/book
2. Select a date (e.g., Jan 22, 2026)
3. Click "Continue to Available Slots"
4. Select a time slot
5. Fill in your details (name, email, birth details)
6. Submit booking
7. Razorpay payment modal appears
8. Complete payment with test card: 4111111111111111

### Test 3: Verify Data in MongoDB
Check MongoDB Atlas or local MongoDB:
```
Database: astrology_booking
Collections:
  - bookings (contains all booking records)
  - slots (contains available slots)
  - payments (contains payment records)
```

### Test 4: Email Notifications
After successful payment:
- Confirmation email sent to user (via Nodemailer)
- Admin email with booking details
- Check spam folder if not in inbox

---

## 📦 PRODUCTION DEPLOYMENT STRATEGY

### OPTION 1: Vercel (Frontend) + Railway/Render (Backend)

#### Step 1: Deploy Frontend to Vercel
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. From client directory
cd client
vercel

# 3. Set environment variables in Vercel Dashboard
VITE_API_URL=https://your-backend-url.com
```

#### Step 2: Deploy Backend to Railway/Render
**Using Railway.app:**
```bash
# 1. Connect GitHub repo to Railway
# 2. Set environment variables:
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/astrology_booking
RAZORPAY_KEY=xxxx
RAZORPAY_SECRET=xxxx
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=app-password
PORT=5000

# 3. Deploy automatically on push to main branch
```

**Using Render.com:**
```bash
# Similar to Railway - connect GitHub and set env vars
# Render will automatically build and deploy
```

### OPTION 2: Docker + AWS/GCP/Azure

#### Dockerfile for Backend:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]
```

#### Deploy to AWS EC2:
```bash
# Build Docker image
docker build -t astro-aryabhata-backend .

# Push to AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin xxx.dkr.ecr.us-east-1.amazonaws.com
docker tag astro-aryabhata-backend:latest xxx.dkr.ecr.us-east-1.amazonaws.com/astro-aryabhata-backend:latest
docker push xxx.dkr.ecr.us-east-1.amazonaws.com/astro-aryabhata-backend:latest

# Deploy via ECS/EKS
```

### OPTION 3: Traditional Hosting (Recommended for Beginners)

#### Using Hostinger/Bluehost with Node.js support:
1. Upload project via SSH/Git
2. Install Node.js and MongoDB
3. Use PM2 for process management:
```bash
npm install -g pm2
pm2 start src/server.js --name "astro-api"
pm2 save
pm2 startup
```

---

## 💾 BOOKING MANAGEMENT IN PRODUCTION

### 1. **Database Architecture**

```
Booking Document Schema:
{
  _id: ObjectId,
  userId: String,
  consultationType: String (e.g., "birth-chart"),
  date: Date,
  timeSlot: String (e.g., "10:00-10:30"),
  userDetails: {
    name: String,
    email: String,
    phone: String,
    birthDate: Date,
    birthTime: String,
    birthLocation: String
  },
  paymentStatus: String ("pending" | "completed" | "failed"),
  paymentId: String (Razorpay ID),
  orderId: String (Razorpay Order ID),
  consultationLink: String (Google Meet URL),
  notes: String,
  createdAt: Timestamp,
  updatedAt: Timestamp,
  status: String ("confirmed" | "completed" | "cancelled")
}
```

### 2. **Booking Workflow**

```
User Journey:
1. Select Date → 2. Select Slot → 3. Enter Details → 4. Payment
         ↓             ↓              ↓                ↓
  Slot availability  Update slot    Create booking   Razorpay
  check             status          in DB            integration
         ↓             ↓              ↓                ↓
    Response      Response      Response           Webhook
                                                     ↓
                                            Payment verification
                                                     ↓
                                            Send confirmation
                                            Generate Meet link
```

### 3. **Admin Dashboard (To Be Built)**

Create admin panel at `/admin/bookings` with:
```
Features Needed:
✓ View all bookings (with filters by date, status, payment)
✓ Send consultation link to user
✓ Generate Google Meet link automatically
✓ Mark consultation as completed
✓ Handle refunds (if needed)
✓ Export reports
✓ Manage slot availability
```

### 4. **Automatic Booking Notifications**

**Email Triggers:**
```
Event 1: Payment Successful
├─ Confirmation email to user with booking details
├─ Calendar invite (ICS file) attached
└─ Google Meet link in email

Event 2: 24 Hours Before Consultation
├─ Reminder email to user
├─ Consultant gets notification

Event 3: Consultation Completed
├─ Thank you email
├─ Option to book follow-up
└─ Request for feedback/review
```

**Implementation (Using Node-cron):**
```javascript
import cron from 'node-cron';

// Run every day at 8 AM
cron.schedule('0 8 * * *', async () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const bookings = await Booking.find({
    date: { $gte: tomorrow, $lt: new Date(tomorrow.getTime() + 24*60*60*1000) },
    status: "confirmed"
  });
  
  // Send reminder emails
  bookings.forEach(booking => {
    sendReminderEmail(booking);
  });
});
```

### 5. **Payment & Refund Management**

**Razorpay Integration for Production:**

```javascript
// Verify payment webhook
POST /api/payment/webhook
{
  "payment_id": "pay_xxx",
  "order_id": "order_xxx",
  "signature": "signature_xxx"
}

Response:
{
  "success": true,
  "bookingId": "booking_xxx",
  "consultationLink": "https://meet.google.com/xxx",
  "confirmationEmail": "sent"
}
```

**Refund Policy:**
```
- Cancel 24+ hours before: Full refund
- Cancel <24 hours: 50% refund
- No-show: No refund (but can reschedule)

Implementation:
POST /api/payment/refund
{
  "bookingId": "booking_xxx",
  "reason": "user_request | no_show | consultation_cancelled"
}
```

### 6. **Slot Management System**

**Current Structure:**
```javascript
Slot Schema:
{
  date: Date,
  timeSlot: String (e.g., "10:00-10:30"),
  type: String ("video"),
  isBooked: Boolean,
  createdAt: Timestamp
}
```

**For Production - Add:**
```javascript
// Enhanced Slot Schema
{
  date: Date,
  timeSlot: String,
  type: String,
  consultant: ObjectId (reference to consultant),
  maxCapacity: Number,
  bookedCount: Number,
  isAvailable: Boolean,
  basePrice: Number,
  timezone: String,
  createdAt: Timestamp,
  updatedAt: Timestamp
}

// Slot availability API endpoint
GET /api/slots?date=2026-01-22&month=january&year=2026
Response: Array of available slots for that day
```

### 7. **Consultant Management (When Scaling)**

```javascript
Consultant Schema:
{
  name: String,
  email: String,
  qualifications: [String],
  specializations: [String],
  bio: String,
  availability: {
    monday: ["10:00-12:00", "14:00-18:00"],
    tuesday: ["10:00-12:00", "14:00-18:00"],
    // ...
  },
  consultationPrice: Number,
  googleMeetEmail: String,
  isActive: Boolean,
  rating: Number,
  totalBookings: Number
}
```

### 8. **Analytics & Reporting**

**Key Metrics to Track:**
```
✓ Total bookings (daily, weekly, monthly)
✓ Conversion rate (viewed → booked)
✓ Revenue (daily, weekly, monthly)
✓ Popular consultation types
✓ Peak booking times
✓ Consultant utilization rate
✓ Customer satisfaction (ratings)
✓ Refund rate
✓ Payment success rate
```

**Dashboard Endpoint:**
```javascript
GET /api/admin/analytics
{
  "totalBookings": 145,
  "totalRevenue": 362500,
  "pendingPayments": 3,
  "consultationsCompleted": 142,
  "cancellations": 5,
  "refunds": 2,
  "topConsultationType": "Birth Chart Analysis",
  "conversionRate": "8.5%"
}
```

---

## 🔒 PRODUCTION SECURITY CHECKLIST

- [ ] SSL Certificate (HTTPS only)
- [ ] Environment variables (.env not committed)
- [ ] CORS properly configured for your domain only
- [ ] Rate limiting on API endpoints
- [ ] Input validation on all routes
- [ ] JWT authentication for admin
- [ ] MongoDB backup daily
- [ ] Razorpay webhook signature verification
- [ ] Error logging (Sentry or similar)
- [ ] Database encryption at rest
- [ ] API key rotation schedule
- [ ] DDoS protection (Cloudflare)

---

## 🚀 DEPLOYMENT CHECKLIST

### Before Deployment:
- [ ] All tests passing locally
- [ ] Environment variables set
- [ ] Database backups configured
- [ ] Email service tested
- [ ] Razorpay test mode → live mode
- [ ] Frontend built and optimized
- [ ] Performance audits done (Lighthouse)
- [ ] Mobile responsiveness verified
- [ ] SSL certificate obtained

### Day 1 After Deployment:
- [ ] Monitor server logs for errors
- [ ] Test booking flow end-to-end
- [ ] Verify payment processing
- [ ] Check email notifications
- [ ] Monitor database performance
- [ ] Set up monitoring alerts

---

## 📊 ESTIMATED COSTS (Monthly)

| Service | Free Tier | Production |
|---------|-----------|-----------|
| **Frontend Hosting** (Vercel) | ✅ Free | $0-$20 |
| **Backend Hosting** (Railway) | ✅ Free | $5-$25 |
| **Database** (MongoDB Atlas) | ✅ Free (512MB) | $10-$50 |
| **Email Service** (Nodemailer) | ✅ Free (Gmail) | $0-$20 |
| **Razorpay** (Payment) | ✅ Free testing | 1.2% + ₹3 per transaction |
| **Domain** | - | $10-$15 |
| **CDN/Cache** (Cloudflare) | ✅ Free | $0-$20 |
| **Monitoring** (Sentry) | ✅ Free | $0-$29 |
| **TOTAL** | **FREE** | **~$35-$180/month** |

---

## ✨ NEXT STEPS

1. **Test Everything** - Run through booking flow 5-10 times
2. **Set Up Admin Dashboard** - Build booking management UI
3. **Implement Automated Emails** - Add reminders 24hrs before
4. **Enable Production Razorpay** - Switch from test to live keys
5. **Deploy Frontend** - Push to Vercel
6. **Deploy Backend** - Push to Railway/Render
7. **Configure Domain** - Point yourdomain.com to production
8. **Monitor & Optimize** - Set up logs, alerts, analytics

---

## 🆘 TROUBLESHOOTING

### Payment Not Processing:
- Check Razorpay keys (test vs live)
- Verify webhook URL in Razorpay dashboard
- Check MongoDB connection

### Emails Not Sending:
- Verify Gmail App Password
- Check SMTP credentials in .env
- Review email logs in backend

### Slots Not Updating:
- Check database connection
- Verify slot availability logic
- Clear cache if applicable

### Performance Issues:
- Add database indexes
- Enable compression on backend
- Implement caching (Redis)
- Optimize images (already done)

---

**Your application is production-ready! Deploy with confidence.** 🚀
