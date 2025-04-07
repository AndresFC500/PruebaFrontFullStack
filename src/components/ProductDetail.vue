<template>
    <div v-if="producto">
      <h2>{{ producto.nombre }}</h2>
      <p>{{ producto.descripcion }}</p>
      <p>Precio: ${{ producto.precio }}</p>
      <p v-if="inventario !== null">Stock disponible: {{ inventario }}</p>
      <button @click="comprarProducto">Comprar</button>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import api from '../services/api';
  
  const route = useRoute();
  const producto = ref(null);
  const inventario = ref(null);
  
  const cargarDatos = async () => {
    try {
      const resProducto = await api.get(`/productos/${route.params.id}`);
      producto.value = resProducto.data.data;
  
      const resInventario = await api.get(`http://localhost:8082/inventario/${route.params.id}`);
      inventario.value = resInventario.data.cantidad;
    } catch (e) {
      console.error('Error cargando datos', e);
    }
  };
  
  const comprarProducto = async () => {
    try {
      await api.put(`http://localhost:8082/inventario/comprar/${route.params.id}`);
      await cargarDatos();
    } catch (e) {
      console.error('Error al comprar');
    }
  };
  
  onMounted(cargarDatos);
  </script>
  