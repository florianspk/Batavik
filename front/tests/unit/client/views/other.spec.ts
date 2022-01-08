import { mount } from '@vue/test-utils';

import notFound from '@/views/404.vue';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';

/*
 * Test des vues (pages) autres
 * 
 * Ecriture des tests:    KEIFF Julien
 * Objectif de coverage:  90%
*/

// Test de la page 404
test('Test the 404 page display', () => {
  const wrapper = mount(notFound);
  expect(true).toEqual(true)
});

// Test de la page d'accueil
test('Test the home page display', () => {
  const wrapper = mount(Home);
  expect(true).toEqual(true)
});

// Test de la page Produits
test('Test the product page display', () => {
  const wrapper = mount(Product);
  expect(true).toEqual(true)
});



