import axios from "axios";

const api = axios.create({
  baseURL: "https://giftgenie-ai-cir0.onrender.com",
});

export default api;