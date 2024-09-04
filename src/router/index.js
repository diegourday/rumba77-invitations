import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BirthdayMan from '@/views/BirthdayMan.vue'
import BirthdayWoman from '@/views/BirthdayWoman.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cumpleanos-hombre',
      name: 'cumpleanos-hombre',
      component: BirthdayMan
    },
    {
      path: '/cumpleanos-mujer',
      name: 'cumpleanos-mujer',
      component: BirthdayWoman
    }
  ]
})

export default router
