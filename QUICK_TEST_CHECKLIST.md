# 🧪 QUICK TEST CHECKLIST - Astro Aryabhata

## ✅ SERVERS STATUS

```
Frontend: http://localhost:5174 ✅
Backend:  http://localhost:5000 ✅
Database: MongoDB Connected ✅
```

---

## 🎯 TEST FLOW (Step by Step)

### 1. HOME PAGE VERIFICATION
- [ ] Page loads without errors
- [ ] Hero section displays with image
- [ ] "Begin Consultation" button works
- [ ] Smooth scroll on anchor links
- [ ] Header shrinks when scrolling down
- [ ] Language toggle works (if using)
- [ ] Mobile responsive (test on 375px width)
- [ ] All images load properly
- [ ] Text is readable and well-spaced

### 2. ABOUT PAGE
- [ ] About page displays correctly
- [ ] "What Sets Us Apart" section visible
- [ ] "Built on Expertise & Integrity" displays well
- [ ] No layout issues on mobile

### 3. SERVICES PAGE
- [ ] 6 consultation types display
- [ ] Pricing visible for each
- [ ] "Our Approach" section renders correctly
- [ ] "Book Your Consultation" button links to /book

### 4. BOOKING PAGE (THE CRITICAL TEST)
- [ ] Book page loads without errors
- [ ] Calendar date picker works
- [ ] Can select a date (use future date)
- [ ] "Continue to Available Slots" button works
- [ ] Slots load and display (if any exist in DB)
- [ ] Can select a time slot
- [ ] Form fields appear (name, email, birth details)
- [ ] Form validation works (try submitting empty)
- [ ] Language toggle visible and works
- [ ] Submit button triggers Razorpay payment modal

### 5. PAYMENT FLOW (TEST PAYMENT)
- [ ] Razorpay modal appears
- [ ] Test card shows: 4111111111111111
- [ ] Can enter test CVV/expiry
- [ ] Payment processes (no real charge)
- [ ] After payment, redirected to success page
- [ ] Confirmation message displays

### 6. SUCCESS PAGE
- [ ] Success page shows confirmation
- [ ] Shows booking details
- [ ] "What Happens Next" section visible
- [ ] "Go Home" button works

### 7. API ENDPOINTS (Terminal Test)
```bash
# Test 1: Check API is running
curl http://localhost:5000

# Test 2: Get available slots
curl http://localhost:5000/api/slots

# Test 3: View server logs for any errors
# Check terminal where backend is running
```

### 8. DATABASE VERIFICATION
- [ ] MongoDB shows new booking in collection
- [ ] Booking has all fields filled correctly
- [ ] Payment status is "completed"
- [ ] Email sent (check inbox/spam)

### 9. MOBILE RESPONSIVENESS
- [ ] Open http://localhost:5174 on mobile/tablet
- [ ] Test Safari on iPhone
- [ ] Test Chrome on Android
- [ ] Book page form works on mobile
- [ ] Payment modal appears correctly
- [ ] No layout overflow

### 10. PERFORMANCE
- [ ] Page loads in <2 seconds
- [ ] No console errors
- [ ] No console warnings (or just deprecation notices)
- [ ] Images load smoothly
- [ ] Transitions are smooth (not too fast, not too slow)

---

## 📝 TEST BOOKING DATA

**Use this test data when booking:**

```
Full Name: John Doe
Email: test@example.com
Phone: +91 9876543210

Birth Details:
Date: 15 January 1990
Time: 10:30 AM
Location: Delhi, India
```

**Test Payment Card (Razorpay Test Mode):**
```
Card Number: 4111 1111 1111 1111
Expiry: 12/25
CVV: 123
OTP: 000000
```

---

## 🐛 COMMON ISSUES & FIXES

| Issue | Cause | Fix |
|-------|-------|-----|
| "Cannot reach backend" | Backend not running | `cd server && npm run dev` |
| Slots not loading | No slots in database | Create slots via API or seed data |
| Payment fails | Wrong Razorpay keys | Check .env file, use test keys |
| Emails not sending | Gmail blocked | Enable 2FA and use App Password |
| Images not loading | Wrong URLs | Check image URLs in jsx files |
| Header not scrolling | CSS not loaded | Hard refresh (Ctrl+Shift+R) |

---

## 📊 EXPECTED RESULTS

After complete test flow:

✅ New booking created in MongoDB
✅ Payment marked as "completed"
✅ Confirmation email received
✅ Success page displays booking info
✅ No errors in console or terminal
✅ Frontend responsive on all devices
✅ Smooth transitions and animations

---

## 🚀 WHEN TESTS PASS - READY FOR PRODUCTION!

If all tests pass:
1. Code is production-ready
2. Deploy frontend to Vercel
3. Deploy backend to Railway/Render
4. Configure domain
5. Switch Razorpay to live mode
6. Monitor for 24 hours
7. Go live! 🎉

---

## 📞 SUPPORT DURING TESTING

If you encounter issues:
1. Check console (F12) for errors
2. Check terminal for backend logs
3. Verify database connection
4. Test API with curl command
5. Review TEST_RUN_AND_DEPLOYMENT.md guide

**Current Status: READY FOR TESTING** ✅
