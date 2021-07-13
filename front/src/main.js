import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './styles/main.css'

library.add(
    faChevronLeft, 
    faChevronRight,
    faFacebookSquare,
    faTwitterSquare,
    faLinkedin
)

createApp(App)
    .component('f-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
