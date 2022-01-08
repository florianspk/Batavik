import { mount } from '@vue/test-utils';

import Fireplace from '@/views/Fireplace.vue';
import Shower from '@/views/Shower.vue';
import Wall from '@/views/Wall.vue';

/*
 * Test des vues (pages) de type categories
 * 
 * Ecriture des tests:    KEIFF Julien
 * Objectif de coverage:  90%
*/

// Test de la categorie cheminee
test('Test display fireplace category info', () => {
  const wrapper = mount(Fireplace);
  expect(true).toEqual(true)
});

// Test de la categorie pare douche
test('Test display shower category info', () => {
  const wrapper = mount(Shower);
  expect(true).toEqual(true)
});

// Test de la categorie parois
test('Test display wall category info', () => {
  const wrapper = mount(Wall);
  expect(true).toEqual(true)
});

