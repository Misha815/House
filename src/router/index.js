import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/Product.view.vue'
import NewView from '@/views/NewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/new',
      name: 'new',
      component: NewView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/trash',
      name: 'trash',
      component: () => import('../views/TrashView.vue')
    },

  ]
})

export default router
