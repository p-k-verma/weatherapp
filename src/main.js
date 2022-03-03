import { createApp } from 'vue'
import App from './App.vue'
import './assets/bootstrap.min.css'
import "bootstrap"
import VueAgile from 'vue-agile'

createApp(App)
.use(VueAgile)
createApp(App).mount('#app')

