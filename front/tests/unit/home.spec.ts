import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

import Carrousel from '@/components/home_components/h_carousel.vue';
import SectionProduct from '@/components/global/g_section.vue';

test('Verify what is displayed', () => {
  const wrapper = mount(Home);
  expect(wrapper.findAllComponents(Carrousel)).toHaveLength(1);
  expect(wrapper.findAllComponents(SectionProduct)).toHaveLength(2);
});

test('Verify displayed home category', () => {
  const wrapper = mount(Home);
  const section = wrapper.findAllComponents(SectionProduct);
  expect(section[0].text()).toMatch('NOS MEILLEURS VENTES');
  expect(section[1].text()).toMatch('NOS PRODUITS PHARES');
});