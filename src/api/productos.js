import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8081/api',
})

export const getProductos = () => API.get('/productos')
export const getProducto = (id) => API.get(`/productos/${id}`)
