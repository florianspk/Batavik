import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTachometerAlt, faUsers, faBoxes, faStore, faBars, faEye, faPen, faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { DateTime } from 'luxon';
import Axios from 'axios';

import App from './App.vue';
import router from './router/index';
import Port from './helpers/portList';

import './styles/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'element-plus/dist/index.css';

library.add(
  faTachometerAlt,
  faBars,
  faStore,
  faUsers,
  faBoxes,
  faEye,
  faPen,
  faTrash,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
);

const app = createApp(App);
app.use(router, app);
app.component('f-icon', FontAwesomeIcon);
app.mount('#app');

// Define global var
const baseurl = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://julienkeiff.fr';
const port = Port;

app.config.globalProperties.$env = process.env.NODE_ENV;
app.config.globalProperties.$baseURL = baseurl;
app.config.globalProperties.$port = port;
app.config.globalProperties.$axios = Axios;
app.config.globalProperties.$date = DateTime;

export { baseurl, port };
