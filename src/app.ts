import { createApp } from 'vue'
import App from "./App.vue"
import route from '../src/routes/router'
import './assets/main.css'

import DashboardLayout from './page/Dashboard.vue'
import EmptyLayout from './components/UI/EmptyLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(route)
app.mount('#app')