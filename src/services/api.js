import axios from "axios"

const API = axios.create({
    baseURL: "https://server-s0mb.onrender.com/api",
    withCredentials: true,
})

export default API;