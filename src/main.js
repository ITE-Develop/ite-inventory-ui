import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import route from './routes/router'
createApp(App).use(route).mount('#app')
