import { createRouter, createWebHistory } from "vue-router";
import LoginUser from "../page/Login.vue";
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
