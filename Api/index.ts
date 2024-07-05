import axios from "axios";

const api = axios.create({
  url: "https://google.serper.dev",
  headers: {
    "X-API-KEY": "1334ea67e022f1843a4c158e7a5cee4fdb69fb2d",
    "Content-Type": "application/json",
  },
});

export default api;
