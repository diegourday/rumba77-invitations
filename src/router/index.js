import { createRouter, createWebHistory } from 'vue-router'
import EventPublicComponent from '@/views/PublicPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/eventos/evento'
    },
    // {
    //   path: '/evento/:name?',
    //   name: 'EventPublic',
    //   component: MainEvent,
    //   props: (route) => ({ name: route.params.name || 'default' })
    // },
    // {
    //   path: '/evento/:name?/modal',
    //   name: 'EventModal',
    //   component: MainEvent,
    //   props: (route) => ({ name: route.params.name || 'default', modal: true })
    // },
    {
      path: '/eventos/:name?',
      name: 'EventPublic',
      component: EventPublicComponent,
      props: true,
      children: [
        {
          path: 'info/:infoid?',
          name: 'EventModalInfo',
          component: EventPublicComponent,
          props: (route) => ({ infoid: route.params.infoid || 'default' })
        },
        {
          path: 'photo/:photoid?',
          name: 'EventModalPhoto',
          component: EventPublicComponent,
          props: (route) => ({ photoid: route.params.photoid || 'default' })
        }
      ]
    }
  ]
})

export default router
