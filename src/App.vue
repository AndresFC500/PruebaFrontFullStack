<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-emerald shadow-sm rounded-bottom px-4 py-2">
      <router-link class="navbar-brand fw-bold" to="/">Gestor de Productos</router-link>
      <div class="navbar-nav ms-auto">
        <router-link class="nav-link me-3" to="/listar">📋 Listar</router-link>
        <router-link class="nav-link" to="/crear">➕ Crear</router-link>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Color verde esmeralda */
.bg-emerald {
  background-color: #2ecc71 !important;
}

/* Estilo suave para enlaces */
.navbar .nav-link {
  color: #f5f5f5;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.navbar .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}
</style>
