import axios from "axios";

const instance = axios.create({
  baseURL: "https://kisankart-api.vercel.app",
});

export default instance;

// "https://kisankart.netlify.app/.netlify/functions/index"
