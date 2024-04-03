import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import DefineModelView from '../views/DefineModel.vue'
import SkeletonLoadingView from '../views/SkeletonLoading.vue'
import ApiView from '../views/ApiView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/defineModel', component: DefineModelView },
  { path: '/skeletonLoading', component: SkeletonLoadingView },
  { path: '/api', component: ApiView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router