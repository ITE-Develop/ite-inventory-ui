import { createRouter, createWebHistory } from "vue-router";

import ProductListScreen from "../components/ProductList.vue"
//import ProductTable from '../components/ProductTable.vue'
import InventoryScreen from '../components/Inventory.vue'
import ReportScreen from '../components/Report.vue'
import ModelScreen from '../components/Model.vue'


const routes = [


  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductListScreen
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: InventoryScreen
  },
  {
    path: '/report',
    name: 'Report',
    component: ReportScreen
  },
  {
    path: '/model',
    name: 'Model',
    component: ModelScreen
  }
]

 
const BASE_URL = "/";

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
