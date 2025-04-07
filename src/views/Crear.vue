<template>
    <div class="container mt-5">
      <h2>Crear Producto</h2>
      <form @submit.prevent="crearProducto">
        <input class="form-control mb-2" v-model="producto.nombre" placeholder="Nombre" />
        <input class="form-control mb-2" v-model="producto.descripcion" placeholder="Descripción" />
        <input class="form-control mb-2" v-model="producto.precio" type="number" placeholder="Precio" />
        <button class="btn btn-primary">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../axios'
  
  export default {
    data() {
      return {
        producto: {
          nombre: '',
          descripcion: '',
          precio: 0
        }
      }
    },
    methods: {
      async crearProducto() {
        try {
          await api.post('/productos', this.producto)
          alert('Producto creado')
          this.$router.push('/listar')
        } catch (e) {
          console.error(e)
          alert('Error al crear producto')
        }
      }
    }
  }
  </script>
  