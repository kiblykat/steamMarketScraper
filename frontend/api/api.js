import axios from "axios";

const BASE_URL = "http://localhost:3001";
const steamApi = axios.create({ baseURL: BASE_URL });

export default steamApi;
