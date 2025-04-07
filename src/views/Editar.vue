<template>
  <div class="container mt-5">
    <h2>Editar Producto</h2>
    <form @submit.prevent="actualizarProducto">
      <input class="form-control mb-2" v-model="producto.nombre" placeholder="Nombre" />
      <input class="form-control mb-2" v-model="producto.descripcion" placeholder="Descripción" />
      <input class="form-control mb-2" v-model="producto.precio" type="number" placeholder="Precio" />
      <button class="btn btn-success">Actualizar</button>
    </form>
  </div>
</template>

<script>
import api from '../axios'

export default {
  data() {
    return {
      producto: {}
    }
  },
  async created() {
    const res = await api.get(`/productos/${this.$route.params.id}`)
    this.producto = res.data
  },
  methods: {
    async actualizarProducto() {
      await api.put(`/productos/${this.$route.params.id}`, this.producto)
      alert('Producto actualizado')
      this.$router.push('/listar')
    }
  }
}
</script>