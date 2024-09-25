import { createRouter, createWebHistory } from 'vue-router'
import MainEvent from '@/views/PublicPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/evento/evento'
        },
        {
            path: '/evento/:name?',
            name: 'EventPublic',
            component: MainEvent,
            props: (route) => ({ name: route.params.name || 'default' })
        },
        {
            path: '/evento/:name?/modal',
            name: 'EventModal',
            component: MainEvent,
            props: (route) => ({ name: route.params.name || 'default', modal: true })
        }
    ]
})

export default router
