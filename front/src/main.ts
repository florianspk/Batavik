import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router/index';
import Port from './helpers/portList';

import './styles/main.css';

library.add(
  faChevronLeft, 
  faChevronRight,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
);

const app = createApp(App);
app.use(router);
app.component('f-icon', FontAwesomeIcon);
app.mount('#app');

// Define global var
app.config.globalProperties.$env = process.env.NODE_ENV;
app.config.globalProperties.$baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://julienkeiff.fr';

console.log(Port.AUTH_SERVICE);
