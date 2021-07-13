import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './styles/main.css'

library.add(
    faChevronLeft, 
    faChevronRight,
    faFacebook
)

createApp(App)
    .component('f-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
