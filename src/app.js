import { createApp } from 'vue'
import './index.css'
import router from './routes/route'
import App from './App.vue'

const app = createApp(App)
app.use(router)

app.mount('#app')

