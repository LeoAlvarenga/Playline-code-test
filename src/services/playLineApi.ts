import axios from "axios";

const playLineApi = axios.create({
    baseURL: "https://playline-dev-test.s3-us-west-2.amazonaws.com",
});

export default playLineApi;
