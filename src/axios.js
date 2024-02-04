import axios from "axios";

const instance = axios.create({
  baseURL: "https://kisankart-api.vercel.app",
});

export default instance;
