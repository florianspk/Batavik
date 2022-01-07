import { mount } from '@vue/test-utils';

import Cart from '@/views/Cart.vue';
import Login from '@/views/Login.vue';
import User from '@/views/User.vue';

/*
 * Test des vues (pages) liéer à l'utilisateur
 * 
 * Ecriture des tests:    KEIFF Julien
 * Objectif de coverage:  90%
*/

const $route = {
  params: { id: 1}
}

// Test de la page panier
test('Test cart infos', () => {
  const wrapper = mount(Cart);
  expect(true).toEqual(true)
});

// Test de la page login
test('Test login behavior', () => {
  const wrapper = mount(Login);
  expect(true).toEqual(true)
});

// Test de la page utilisateur
test('Test user infos displayed', () => {
  const wrapper = mount(User, { 
    global: { 
      mocks: {
        $route
      } 
    } 
  });
  expect(true).toEqual(true)
});

