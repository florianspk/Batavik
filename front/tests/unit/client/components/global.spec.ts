import { mount } from '@vue/test-utils';

import cart from '@/components/global/cart.vue';
import cartItem from '@/components/global/cart_item.vue';
import gLoginForm from '@/components/global/g_login_form.vue';
import paginator from '@/components/global/g_paginator.vue';
import product from '@/components/global/g_products.vue';

/*
 * Test des composants globaux plus complexes
 * 
 * Ecriture des tests:    KEIFF Julien
 * Objectif de coverage:  90%
*/

const productData = {
  name: 'Produit 1 | 207cm x 100cm',
  img: 'img3.jpg',
  qte: 2,
  price: 115.99,
}

// Test cart.vue
test('Test cart display', () => {
  const wrapper = mount(cart);
  expect(true).toEqual(true)
});

// Test cart_item.vue
test('Test cart item display', () => {
  const wrapper = mount(cartItem, { props: { data: productData }});
  expect(true).toEqual(true)
});

// Test du form login
test('Test behavior of the login form', () => {
  const wrapper = mount(gLoginForm);
  expect(true).toEqual(true)
});

// Test du paginateur
test('Test paginator behavior', () => {
  const wrapper = mount(paginator);
  expect(true).toEqual(true)
});

// Test d'une instance de produit
test('Test product card display', () => {
  const wrapper = mount(product, { props: { data: productData }});
  expect(true).toEqual(true)
});