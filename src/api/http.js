import axios from "axios";

const http = axios.create({
    baseURL: 'http://10.195.0.171/project/documents/public/api',
    headers: { "Content-Type": 'application/json' }
})

export default http