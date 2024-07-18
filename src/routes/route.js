import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../page/Dashboard.vue"
import Home from "../layout/Main.vue"
import Card from "../views/Card.vue"
import Login from "../components/UI/Login.vue"
import Modal from "../views/Modal.vue";
import Blank from "../views/Blank.vue";
import Table from "../views/Tables.vue"
import Forms from "../views/Forms.vue";
import UIElements from "../views/UIElements.vue";
const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home,
            },
            {
                path: '/card',
                name: 'Card',
                component: Card
            },
            {
                path: "/modal",
                name: 'Modal',
                component: Modal
            },
            {
                path: "/tables",
                name: 'Tables',
                component: Table
            },
            {
                path: "/forms",
                name: 'Forms',
                component: Forms
            },
            {
                path: "/ui-elements",
                name: 'UIElements',
                component: UIElements
            },

        ],
    },
    {
        path: '/',
        name: 'login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 }
    },
    routes,
})

export default router
