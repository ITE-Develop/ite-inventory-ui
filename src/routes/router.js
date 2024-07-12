
import ErrorScreen from "../page/Error404.vue"
import TodoAppScreen from "../page/TodoApp.vue"
import ProductListScreen from "../page/ProductList.vue"
import ProductTable from '../components/ProductTable.vue'
import { createRouter, createWebHistory } from "vue-router";

import Error404 from "../components/Error404.vue";
import SideBar from "../components/SideBar.vue";
import BoardComponent from "../layout/MainBoard.vue";
import Admin from "../page/Admin.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginUser,
  },
  {
    path: '/e404',
    name: 'error',
    component: ErrorScreen
  },
  {
    path: '/todoapp',
    name: 'TodoApp',
    component: TodoAppScreen
  },
  {
    path: '/product',
    name: 'ProductTable',
    component: ProductTable
  },
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductListScreen
  },
    path: "/sidebar",
    name: "side",
    component: SideBar,
  },
  {
    path: "/component",
    name: "board",
    component: BoardComponent,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  // { 
  //   path: '/', 
  //   redirect: { name: 'DashboardHome' } 
  // },
  { 
    path: '/dashboard', 
    component: Dashboard, 
    children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome }
    ]
  },
  {
    path:'/g',
    redirect: {name: 'admin'},
    component: Admin,
  }
];

const BASE_URL = "/";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
