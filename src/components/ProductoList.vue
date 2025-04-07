<template>
    <div>
      <h3>Lista de Productos</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.id">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
            <td>
              <router-link :to="'/detalle/' + producto.id" class="btn btn-info btn-sm">Detalle</router-link>
              <button class="btn btn-danger btn-sm ms-2" @click="eliminar(producto.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return { productos: [] }
    },
    async mounted() {
      const res = await axios.get('http://localhost:8081/productos', {
        headers: { 'x-api-key': '1234567890' }
      });
      this.productos = res.data.content;
    },
    methods: {
      async eliminar(id) {
        await axios.delete(`http://localhost:8081/productos/${id}`, {
          headers: { 'x-api-key': '1234567890' }
        });
        this.productos = this.productos.filter(p => p.id !== id);
      }
    }
  }
  </script>

  