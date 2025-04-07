import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081', // cambia si usas nginx o proxy
});

export default api;