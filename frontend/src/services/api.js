import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dslist-production-1f5c.up.railway.app'
});

export default api;
