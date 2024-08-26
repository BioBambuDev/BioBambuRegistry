import './assets/main.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(router, bootstrap)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component(VueFeather.name, VueFeather)

app.mount('#app')
