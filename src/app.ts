import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import './assets/main.css'

import DashboardLayout from './components/imports/DashboardLayout.vue'
import EmptyLayout from './components/imports/EmptyLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(route)
app.mount('#app')