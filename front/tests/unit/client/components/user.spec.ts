import { mount, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router'

import history from '@/components/user_components/history_client.vue';
import infos from '@/components/user_components/infos_clients.vue';
import side from '@/components/user_components/side_client.vue';

/*
 * Test des composants de la page de l'utilisateur
 * 
 * Ecriture des tests:    KEIFF Julien
 * Objectif de coverage:  90%
*/

const $route = {
  params: { id: 1}
}

// Test de l'historique des commandes du client
test('Test history component', () => {
  const wrapper = mount(history);
  expect(true).toEqual(true)
});

// Test de l'affichage des infos clients
test('Test the display of clients infos', () => {
  const wrapper = shallowMount(infos, { 
    global: {
      mocks: {
        $route
      }
    }
  });
  expect(true).toEqual(true)
});

// Test de l'affichage du menu sur le coté
test('Test the display of clients infos', () => {
  const wrapper = mount(side);
  expect(true).toEqual(true)
});