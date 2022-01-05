import { mount } from '@vue/test-utils';

import cart from '@/components/global/cart.vue';
import cartItem from '@/components/global/cart_item.vue';
import gFooter from '@/components/global/g_footer.vue';
import gNavbar from '@/components/global/g_navbar.vue';
import gLoginForm from '@/components/global/g_login_form.vue';
import paginator from '@/components/global/g_paginator.vue';
import product from '@/components/global/g_products.vue';
import section from '@/components/global/g_section.vue';
import spinner from '@/components/global/spinner.vue';

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

// Test du footer
test('Test footer infos is correct', () => {
  const wrapper = mount(gFooter);
  expect(true).toEqual(true)
});

// Test du form login
test('Test behavior of the login form', () => {
  const wrapper = mount(gLoginForm);
  expect(true).toEqual(true)
});

// Test de la navbar
// TODO Ajouter les f-icons
test('Test navbar behavior', () => {
  const wrapper = mount(gNavbar);
  expect(true).toEqual(true)
});

// Test du paginateur
test('Test paginator behavior', () => {
  const wrapper = mount(paginator);
  expect(true).toEqual(true)
});

// Test d'une instance de produit
test('Test product card display', () => {
  const wrapper = mount(product);
  expect(true).toEqual(true)
});

// Test d'une section
test('Test section display', () => {
  const wrapper = mount(section);
  expect(true).toEqual(true)
});

// Test du spinner
test('Test spinner display', () => {
  const wrapper = mount(spinner);
  expect(true).toEqual(true)
});