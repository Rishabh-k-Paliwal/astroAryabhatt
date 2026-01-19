import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const fetchSlots = (date,mode)=>
  API.get(`/slots?date=${date}&mode=${mode}`);

export const createBooking = (data) =>
  API.post("/bookings/create",data);

export const createOrder = async (bookingId, amount) => {
  const res = await API.post("/payment/create-order", {
    bookingId,
    amount
  });
  return res.data;
};
