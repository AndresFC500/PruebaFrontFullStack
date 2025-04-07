<!-- src/views/Productos.vue -->
<template>
  <div class="container mt-4">
    <h1>Productos</h1>
    <router-link to="/nuevo" class="btn btn-primary mb-3">Crear nuevo producto</router-link>

    <div v-if="cargando">Cargando...</div>
    <div v-else>
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in productos" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.attributes.nombre }}</td>
            <td>{{ item.attributes.precio }}</td>
            <td>
              <router-link :to="`/producto/${item.id}`" class="btn btn-info btn-sm">Ver</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const productos = ref([])
const cargando = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8081/productos')
    productos.value = res.data.data
  } catch (err) {
    alert('Error al cargar productos')
  } finally {
    cargando.value = false
  }
})
</script>
