import { createRouter, createWebHistory } from 'vue-router'
import indexPage from '../views/indexPage.vue'
import chatBotPage from '../views/chatBotPage.vue'
import aboutPage from '../views/aboutPage.vue'
import contactPage from '../views/contactPage.vue'
import notFound from '../views/404.vue'

const routes = [
    {
        path: '/',
        name: 'indexPage',
        component: indexPage,
        meta: { title: 'Dobro došli | FIPUbot' },
    },
    {
        path: '/fipubot',
        name: 'chatBotPage',
        component: chatBotPage,
    },
    {
        path: '/kontakt',
        name: 'contactPage',
        component: contactPage,
        meta: { title: 'Kontakt | FIPUbot' },
    },
    {
        path: '/oprojektu',
        name: 'aboutPage',
        component: aboutPage,
        meta: { title: 'O projektu | FIPUbot' },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: notFound,
        meta: { title: 'Greška | FIPUbot' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const defaultTitle = 'FIPUbot'
router.afterEach((to) => {
    document.title = to.meta.title || defaultTitle
})

export default router
