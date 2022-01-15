import { ref } from 'vue';
import AuthService from './AuthService';

const isLogged = ref();
export default {
  isLogged,
  async getLoggined() {
    isLogged.value = await AuthService.get('/auth/validateToken')
      .then(() => true)
      .catch(() => false);
  },
};
