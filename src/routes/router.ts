import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Home.vue';
import Forms from '../views/Forms.vue';
import Tables from '../views/Tables.vue';
import UIElements from '../views/UIElements.vue';
import Login from '../components/UI/Login.vue';
import Modal from '../views/Modal.vue';
import Card from '../views/Card.vue';
import Blank from '../views/Blank.vue';
import Admin from "../components/UI/DashboardLayout.vue"
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: { layout: 'empty' },
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/forms',
        name: 'Forms',
        component: Forms,
    },
    {
        path: '/cards',
        name: 'Cards',
        component: Card,
    },
    {
        path: '/tables',
        name: 'Tables',
        component: Tables,
    },
    {
        path: '/ui-elements',
        name: 'UIElements',
        component: UIElements,
    },
    {
        path: '/modal',
        name: 'Modal',
        component: Modal,
    },
    {
        path: '/blank',
        name: 'Blank',
        component: Blank,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router