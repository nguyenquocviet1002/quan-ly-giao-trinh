import axios from "axios";

const http = axios.create({
    baseURL: 'https://scigroup.com.vn/app/documents/admin/public/api',
    headers: { "Content-Type": 'application/json' }
})

export default http