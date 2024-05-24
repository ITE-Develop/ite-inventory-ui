import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from "../page/Login.vue"
import ErrorScreen from "../page/Error404.vue"
import InventoryPage from "../components/InventoryPage.vue" // Import InventoryPage

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginUser
  },
  {
    path: '/inventory', // Route for the inventory page
    name: 'inventory',
    component: InventoryPage
  },
  {
    path: '/err',
    name: 'error',
    component: ErrorScreen
  }
]

const BASE_URL = '/'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router
