import axios from "axios";

const playLineApi = axios.create({
    baseURL: "http://localhost:3004",
});

export default playLineApi;
