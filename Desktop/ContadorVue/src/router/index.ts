import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/Home',

        // Se define como contenedor de rutas hijas
        children: [
            {
                path: '/Home',
                name: 'Home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/Counter',
                name: 'counter',
                component: () => import('../views/Counter.vue'),
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})


export default router