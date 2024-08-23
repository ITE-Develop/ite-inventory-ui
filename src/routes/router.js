import{ createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../page/Dashboard.vue"
import Home from "../layout/Main.vue"
import Inventory from '../views/InventeryViews.vue'
import Card from "../views/Card.vue"
import Login from "../page/Login.vue"
import Modal from "../views/Modal.vue";
import Forms from "../views/Forms.vue";
import Table from "../page/Table.vue";
import RequestNote from "../page/RequestNote.vue";
import UserViews from '../views/UserViews.vue'
const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: '/dashboard',
                name: 'Home',
                component: Home,
            },
            {
                path: '/card',
                name: 'Card',
                component: Card
            },
            {
                path: '/inventery',
                name: 'Inventery',
                component: Inventory,
                children: [
                    {
                        path: '/inventery',
                        name: 'Inventery',
                        component: Inventory,
                    }
                ]
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
                path: "/staff",
                name: 'User',
                component: UserViews
            },
            {
                path: '/blank',
                name: 'blank',
                component: RequestNote,
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