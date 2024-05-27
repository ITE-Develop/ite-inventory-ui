import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from "../page/Login.vue"
import ErrorScreen from "../page/Error404.vue"
import TodoApp from '../components/TodoApp.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginUser
  },
  {
    path: '/err',
    name: 'error',
    component: ErrorScreen
  },
  {
    path: '/todoapp',
    name: 'Todoapp',
    component: TodoApp
  }
]

const BASE_URL = '/'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router
