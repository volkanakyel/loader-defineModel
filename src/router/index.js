import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import DefineModelView from '../views/DefineModel.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/defineModel', component: DefineModelView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router