<template>
  <div class="container mt-5">
    <h2>Lista de Productos</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prod in productos" :key="prod.id">
          <td>{{ prod.nombre }}</td>
          <td>{{ prod.descripcion }}</td>
          <td>{{ prod.precio }}</td>
          <td>
            <router-link :to="`/editar/${prod.id}`" class="btn btn-warning btn-sm">Editar</router-link>
            <button class="btn btn-danger btn-sm" @click="eliminar(prod.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '../axios'

export default {
  data() {
    return {
      productos: []
    }
  },
  async created() {
    const res = await api.get('/productos')
    this.productos = res.data.content || res.data // depende del paginado
  },
  methods: {
    async eliminar(id) {
      if (confirm('¿Seguro que deseas eliminarlo?')) {
        await api.delete(`/productos/${id}`)
        this.productos = this.productos.filter(p => p.id !== id)
      }
    }
  }
}
</script>
