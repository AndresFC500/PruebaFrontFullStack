import { createRouter, createWebHistory } from 'vue-router'
import Crear from '../views/Crear.vue'
import Listar from '../views/Listar.vue'
import Editar from '../views/Editar.vue'

const routes = [
  { path: '/', redirect: '/listar' },
  { path: '/crear', component: Crear },
  { path: '/listar', component: Listar },
  { path: '/editar/:id', component: Editar }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router