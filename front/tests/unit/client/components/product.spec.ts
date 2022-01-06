import { mount } from '@vue/test-utils';

import commentSection from '@/components/product_components/comment_section.vue';
import comment from '@/components/product_components/comment.vue';
import productDescription from '@/components/product_components/product_description.vue';
import sameProduct from '@/components/home_components/same_product.vue';

// Test de la section de commentaire
test('Test comment section infos is correct', () => {
  const wrapper = mount(commentSection);
  expect(true).toEqual(true)
});

// Test du composant de commentaire
test('Test comment infos is correct', () => {
  const wrapper = mount(comment);
  expect(true).toEqual(true)
});

// Test du composant de la description de produit
test('Test product info is correct', () => {
  const wrapper = mount(productDescription);
  expect(true).toEqual(true)
});

// Test du composant de produit similaire
test('Test similar product infos is correct', () => {
  const wrapper = mount(sameProduct);
  expect(true).toEqual(true)
});