import axios from "axios";

const instance = axios.create({
  baseURL: "https://kisankart.netlify.app/.netlify/functions/index",
});

export default instance;
