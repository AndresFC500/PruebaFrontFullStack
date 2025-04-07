<template>
    <div>
      <h3>Crear Producto</h3>
      <form @submit.prevent="crearProducto">
        <div class="mb-3">
          <label>Nombre</label>
          <input v-model="producto.nombre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Descripción</label>
          <input v-model="producto.descripcion" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Precio</label>
          <input type="number" v-model="producto.precio" class="form-control" required />
        </div>
        <button class="btn btn-primary">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        producto: {
          nombre: '',
          descripcion: '',
          precio: ''
        }
      }
    },
    methods: {
      async crearProducto() {
        await axios.post('http://localhost:8081/productos', this.producto, {
          headers: { 'x-api-key': '1234567890' }
        });
        this.$router.push('/');
      }
    }
  }
  </script>
  