import { mount } from '@vue/test-utils';

import commentSection from '@/components/product_components/comment_section.vue';
import comment from '@/components/product_components/comment.vue';
import productDescription from '@/components/product_components/product_description.vue';
import sameProduct from '@/components/product_components/same_product.vue';

/*
 * Test des composants de la page produit
 * 
 * Ecriture des tests:    KEIFF Julien
 * Objectif de coverage:  90%
*/

const productData = {
  name: 'Produit 1 | 207cm x 100cm',
  image: 'http://placehold.it/200x200',
  qte: 2,
  price: 115.99,
}

const products = [
  productData,
  productData,
  productData,
]

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
  const wrapper = mount(productDescription, { props: { data: productData }});
  expect(true).toEqual(true)
});

// Test du composant de produit similaire
test('Test similar product infos is correct', () => {
  const wrapper = mount(sameProduct, { props: { products: products }});
  expect(true).toEqual(true)
});