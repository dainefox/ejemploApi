import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/pokemones'
  },
  {
    path: '/folder/pokemones',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/folder/crear-pokemon',
    component: () => import ('../views/Create.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
