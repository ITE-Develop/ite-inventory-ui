import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './storge/store'
import route from './routes/router'
createApp(App).use(route).use(store).mount('#app')
