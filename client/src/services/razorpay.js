export const openRazorpay = (order,bookingId)=>{
    const options = {
        key:import.meta.env.VITE_RAZORPAY_KEY,
        amount:order.amount,
        currency:"INR",
        name:"Astrology Consultaion",
        description:"Consultation Booking",
        order_id:order.id,
        handler:function(){


            window.location.href = `/success?booking=${bookingId}`;

        }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
};