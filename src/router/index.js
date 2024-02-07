import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/pages/registration.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/pages/me.vue')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('@/pages/other/index.vue'),
    },
    {
      path: '/other-auth',
      name: 'other-auth',
      component: () => import('@/pages/other/other-auth.vue'),
    },
    {
      path: '/other/:id',
      name: 'other-result',
      component: () => import('@/pages/other/item.vue'),
    },
    {
      path: '/protection',
      name: 'protection',
      component: () => import('@/pages/protection.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('@/pages/api.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/pages/support/index.vue')
    },
    {
      path: '/support-ticket',
      name: 'support-ticket',
      component: () => import('@/pages/support/item.vue')
    },
    {
      path: '/monitoring',
      name: 'monitoring',
      component: () => import('@/pages/monitoring.vue')
    },
    {
      path: '/buy',
      name: 'buy',
      component: () => import('@/pages/buy.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/pages/payment/index.vue')
    },
    {
      path: '/payment/:slug',
      name: 'payment-item',
      component: () => import('@/pages/payment/item.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/pages/profile.vue')
    }
  ]
})

export default router
