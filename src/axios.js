import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'x-api-key': '1234567890',
    'Content-Type': 'application/json'
  }
})

export default api
