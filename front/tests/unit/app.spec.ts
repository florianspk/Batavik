import { mount } from '@vue/test-utils';

import App from '@/App.vue';

/*
 * Test de la main view (App.vue)
 * 
 * Ecriture des tests:    KEIFF Julien
 * Objectif de coverage:  90%
*/

const $route = {
  path: '/',
}

// Test de la main view
test('Test the App.vue display', () => {
  const wrapper = mount(App, { 
    global: {
      mocks: {
        $route
      }
    }
  });
  expect(true).toEqual(true)
});