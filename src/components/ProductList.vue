<template>
    <div>
      <h1>Productos</h1>
      <div v-if="loading">Cargando productos...</div>
      <div v-else-if="error">{{ error }}</div>
      <ul v-else>
        <li v-for="producto in productos" :key="producto.id">
          {{ producto.nombre }} - <router-link :to="`/producto/${producto.id}`">Ver detalle</router-link>
        </li>
      </ul>
      <button @click="prevPage" :disabled="pagina <= 1">Anterior</button>
      <button @click="nextPage">Siguiente</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import api from '../services/api';
  
  const productos = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const pagina = ref(1);
  
  const obtenerProductos = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await api.get(`/productos?page=${pagina.value}&size=5`);
      productos.value = res.data.data;
    } catch (err) {
      error.value = 'Error al cargar productos';
    } finally {
      loading.value = false;
    }
  };
  
  const nextPage = () => {
    pagina.value++;
    obtenerProductos();
  };
  
  const prevPage = () => {
    if (pagina.value > 1) {
      pagina.value--;
      obtenerProductos();
    }
  };
  
  onMounted(obtenerProductos);
  </script>
  