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
    },
    {
        path: '/about',
        name: 'aboutPage',
        component: aboutPage,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
