import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue'),
      name: 'about'
    },
    {
      path: '/user',
      component: () => import('@/views/User.vue'),
      name: 'user'
    },
    {
      path: '/pays',
      component: () => import('@/views/Pays.vue'),
      name: 'pays'
    },
    {
      path: '/pays/:id',
      component: () => import('@/views/FichePays.vue'),
      name: 'fichePays'
    }
  ]
})

export default router
