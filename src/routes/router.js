import { createRouter, createWebHistory } from "vue-router";
import LoginUser from "../page/Login.vue";
import ErrorScreen from "../page/Error404.vue";
import About from "../views/About.vue";
import AdminBoard from "../views/AdminBoard.vue";
import Error404 from "../components/Error404.vue";
import SideBar from "../components/SideBar.vue";
import BoardComponent from "../layout/MainBoard.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginUser,
  },
  {
    path: "/err",
    name: "error",
    component: ErrorScreen,
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
    component: AdminBoard,
    children: [
      {
        path: "/error",
        name: "error404",
        component: Error404,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const BASE_URL = "/";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
