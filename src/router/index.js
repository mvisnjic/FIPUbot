import { createRouter, createWebHistory } from 'vue-router'
import indexPage from '../views/indexPage.vue'
import chatBotPage from '../views/chatBotPage.vue'
import aboutPage from '../views/aboutPage.vue'
import contactPage from '../views/contactPage.vue'
const routes = [
    {
        path: '/',
        name: 'indexPage',
        component: indexPage,
        meta: { title: 'Welcome | FIPUbot' },
    },
    {
        path: '/chatbot',
        name: 'chatBotPage',
        component: chatBotPage,
    },
    {
        path: '/contact',
        name: 'contactPage',
        component: contactPage,
        meta: { title: 'Contact | FIPUbot' },
    },
    {
        path: '/about',
        name: 'aboutPage',
        component: aboutPage,
        meta: { title: 'About | FIPUbot' },
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
