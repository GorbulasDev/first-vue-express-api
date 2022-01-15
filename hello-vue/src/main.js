import { createApp } from 'vue'
import App from './App.vue'

import HelloAPI from '@/services/HelloAPI'

// Vue app entry point.
let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI

// Inject Vue into our app div.
app.mount('#app')
