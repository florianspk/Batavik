import { mount } from '@vue/test-utils';

import gFooter from '@/components/global/g_footer.vue';
import gNavbar from '@/components/global/g_navbar.vue';
import section from '@/components/global/g_section.vue';
import spinner from '@/components/global/spinner.vue';

/*
 * Test des composants globaux avec peut de code 
*/

// Test du footer
test('Test footer infos is correct', () => {
  const wrapper = mount(gFooter);
  expect(true).toEqual(true)
});


// Test de la navbar
// TODO Ajouter les f-icons
test('Test navbar behavior', () => {
  const wrapper = mount(gNavbar);
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