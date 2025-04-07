import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8082/api', // microservicio inventario
})

export const getInventario = (id) => API.get(`/inventario/${id}`)
export const actualizarInventario = (id, cantidad) => 
  API.put(`/inventario/${id}`, { cantidad }) // según lo tengas en el backend
