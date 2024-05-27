import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from "../page/Login.vue"
import ErrorScreen from "../page/Error404.vue"
import TodoAppScreen from "../page/TodoApp.vue"
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginUser
  },
  {
    path: '/e404',
    name: 'error',
    component: ErrorScreen
  },
  {
    path: '/report',
    name: 'error',
    component: ErrorScreen
  },
  {
    path: '/todoapp',
    name: 'TodoApp',
    component: TodoAppScreen
  }
]

const BASE_URL = '/'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router
