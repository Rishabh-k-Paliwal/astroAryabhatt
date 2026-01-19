# ⚡ QUICK REFERENCE GUIDE - One Page Cheat Sheet

## 🎯 YOUR SYSTEM AT A GLANCE

```
┌─────────────────────────────────────────────────────┐
│  ASTRO ARYABHATA BOOKING PLATFORM - PRODUCTION      │
│  Status: ✅ READY | Tests: ✅ PASSING | Deploy: 🚀  │
└─────────────────────────────────────────────────────┘
```

---

## 🌐 ACCESSING YOUR APPLICATION

| Service | URL | Status |
|---------|-----|--------|
| Frontend | http://localhost:5174 | ✅ Running |
| Backend API | http://localhost:5000 | ✅ Running |
| MongoDB | (Atlas/Local) | ✅ Connected |

---

## 📝 COMPLETE TEST IN 5 MINUTES

```bash
# 1. Open http://localhost:5174 in browser
# 2. Click "Begin Consultation"
# 3. Select date from calendar
# 4. Choose available time slot
# 5. Fill form with test data:
#    Name: John Doe
#    Email: test@example.com
#    Phone: +91 9876543210
#    Birth Date: 15 Jan 1990
#    Birth Time: 10:30 AM
#    Location: Delhi

# 6. Click "Submit"
# 7. Razorpay modal appears
# 8. Use test card: 4111 1111 1111 1111
# 9. Expiry: 12/25 | CVV: 123
# 10. Success! Booking created in MongoDB ✅
```

---

## 🔧 DEPLOYMENT - PICK ONE

### ⚡ FASTEST (15 min) - Recommended
```bash
# Frontend: Vercel
cd client && vercel --prod

# Backend: Railway.app
# 1. Connect GitHub repo
# 2. Set env vars
# 3. Deploy (auto)
# DONE!
```

### 🐳 SCALABLE - For Scale
```bash
# Docker containers on AWS/GCP
docker build -t astro-aryabhata .
# Then push to ECR/Artifact Registry
```

### 💻 TRADITIONAL - VPS
```bash
ssh user@server.com
pm2 start server.js
# Self-hosted, full control
```

---

## 🗄️ DATABASE STRUCTURE

### Collections
```
bookings/
  ├─ _id, name, email, phone
  ├─ service, slotId, status
  ├─ paymentId, meetLink
  └─ createdAt, updatedAt

slots/
  ├─ date, timeSlot
  ├─ isBooked, consultant
  └─ basePrice

payments/
  ├─ bookingId, orderId
  ├─ amount, status
  └─ razorpayId
```

---

## 📡 API ENDPOINTS

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/slots` | Get available slots |
| POST | `/api/bookings` | Create booking |
| POST | `/api/payment/create-order` | Create Razorpay order |
| POST | `/api/payment/webhook` | Payment webhook |
| GET | `/api/bookings/:id` | Get booking details |

---

## 💳 RAZORPAY TEST CARDS

| Type | Card Number | Status |
|------|-------------|--------|
| Success | 4111111111111111 | ✅ Works |
| Failure | 4000000000000002 | ❌ Fails |
| 3D Secure | 4012888888881881 | Requires OTP: 000000 |

---

## 📧 EMAIL TEMPLATES SENT

| Event | Email Sent | When |
|-------|-----------|------|
| Booking Confirmed | ✅ | Payment successful |
| Reminder | ✅ | 24 hours before |
| Thank You | ✅ | After consultation |
| Cancellation | ✅ | When cancelled |
| Refund | ✅ | When refunded |

---

## 🚨 COMMON ISSUES

| Problem | Solution |
|---------|----------|
| Slots not loading | Check if slots exist in DB |
| Payment fails | Verify Razorpay keys in .env |
| Email not sent | Check Gmail App Password |
| Backend not responding | Restart: `npm run dev` in /server |
| Images not loading | Clear cache: Ctrl+Shift+R |

---

## 📊 BOOKING STATUSES

```
PENDING → CONFIRMED → COMPLETED
   ↓
CANCELLED
   (50% refund if <24hrs)
```

---

## 🔐 ENVIRONMENT VARIABLES NEEDED

```
.env (Backend)
─────────────
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
RAZORPAY_KEY=rzp_test_xxx
RAZORPAY_SECRET=xxxx
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=app-specific-password
PORT=5000

.env (Frontend)
──────────────
VITE_API_URL=http://localhost:5000
```

---

## 📈 PRODUCTION CHECKLIST

- [ ] All tests pass (QUICK_TEST_CHECKLIST.md)
- [ ] Environment variables configured
- [ ] SSL certificate obtained
- [ ] Database backup scheduled
- [ ] Razorpay live mode enabled
- [ ] Email service tested
- [ ] Frontend optimized (npm run build)
- [ ] Deployed to production
- [ ] Domain configured
- [ ] Monitoring alerts set up

---

## 💰 COSTS BREAKDOWN

| Service | Cost |
|---------|------|
| Vercel Frontend | $0 |
| Railway Backend | $10-25 |
| MongoDB Atlas | $10-50 |
| Domain | $10-15 |
| Total | **$30-90/month** |

Razorpay: 1.2% + ₹3 per transaction

---

## 📞 WHAT TO READ

1. **DEPLOYMENT_READY.md** ← START HERE
2. **QUICK_TEST_CHECKLIST.md** ← Test locally
3. **TEST_RUN_AND_DEPLOYMENT.md** ← Deployment guide
4. **PRODUCTION_BOOKING_MANAGEMENT.md** ← Booking details

---

## 🎯 DEPLOYMENT TIMELINE

```
Today:         Run tests ✅
Hour 2:        Deploy frontend ✅
Hour 3:        Deploy backend ✅
Hour 4:        Test in production ✅
Hour 5:        Go live! 🎉
```

---

## 🚀 ONE COMMAND DEPLOYS

```bash
# Deploy everything
# 1. Frontend
cd client && vercel --prod

# 2. Backend (after connecting to Railway)
git push origin main

# Done! ✨
```

---

## 🌟 YOU'RE READY!

Your system has:
- ✅ Working booking system
- ✅ Payment processing (Razorpay)
- ✅ Email notifications
- ✅ Google Meet integration
- ✅ Admin APIs
- ✅ Production documentation
- ✅ Security best practices
- ✅ Scaling strategy

**Time to go live!** 🚀

---

**Questions?** Check the detailed documentation files.
**Testing?** Use QUICK_TEST_CHECKLIST.md
**Deploying?** Use TEST_RUN_AND_DEPLOYMENT.md

**Good luck! ✨**
