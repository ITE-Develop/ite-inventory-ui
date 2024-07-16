import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from "vue-router";
import Login from "../page/Login.vue";
import Error404 from "../page/Error404.vue";
import DashBoard from "../page/Dashboard.vue";
import HomePage from "../views/Home.vue";
import Card from "../views/Card.vue";
import Modal from "../views/Modal.vue";
import Blank from "../views/Blank.vue";
import Table from "../views/Tables.vue";
import Forms from "../views/Forms.vue";
import UIElements from "../views/UIElements.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: { layout: 'emty' },
  },
  {
    path: '/e404',
    name: 'error',
    component: Error404,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
  },
  {
    path: "/blank",
    name: 'Blank',
    component: Blank,
  },
  {
    path: "/home",
    name: 'Home',
    component: HomePage,
  },
  {
    path: "/cards",
    name: 'Cards',
    component: Card,
  },
  {
    path: "/modal",
    name: 'Modal',
    component: Modal,
  },
  {
    path: "/tables",
    name: 'Tables',
    component: Table,
  },
  {
    path: "/forms",
    name: 'Forms',
    component: Forms,
  },
  {
    path: "/ui-elements",
    name: 'UIElements',
    component: UIElements,
  },
  /*
  { 
    path: '/dashboard', 
    component: Dashboard, 
    children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome }
    ]
  },
  */
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
