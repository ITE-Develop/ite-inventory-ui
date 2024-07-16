import { createRouter, createWebHistory } from "vue-router";

import ProductListScreen from "../components/ProductList.vue"
import ProductTable from '../components/ProductTable.vue'




const routes = [

  {
    path: '/product',
    name: 'ProductTable',
    component: ProductTable
  },
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductListScreen
  }
]
  // { 
  //   path: '/', 
  //   redirect: { name: 'DashboardHome' } 
  // },
 
const BASE_URL = "/";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
