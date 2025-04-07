<template>
    <div v-if="producto">
      <h3>Detalle del Producto</h3>
      <p><strong>Nombre:</strong> {{ producto.nombre }}</p>
      <p><strong>Descripción:</strong> {{ producto.descripcion }}</p>
      <p><strong>Precio:</strong> ${{ producto.precio }}</p>
      <p><strong>Cantidad disponible:</strong> {{ cantidad }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        producto: null,
        cantidad: null
      }
    },
    async mounted() {
      const { id } = this.$route.params;
      const prod = await axios.get(`http://localhost:8081/productos/${id}`, {
        headers: { 'x-api-key': '1234567890' }
      });
      this.producto = prod.data;
  
      // Inventario
      const inv = await axios.get(`http://localhost:8082/inventario/${id}`, {
        headers: { 'x-api-key': '1234567890' }
      });
      this.cantidad = inv.data.cantidad;
    }
  }
  </script>
  