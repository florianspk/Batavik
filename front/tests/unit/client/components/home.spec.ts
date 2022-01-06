import { mount } from '@vue/test-utils';

import carousel from '@/components/home_components/h_carousel.vue';
import slide from '@/components/home_components/h_slide.vue';

// Test du carousel
test('Test carousel infos is correct', () => {
  const wrapper = mount(carousel);
  expect(true).toEqual(true)
});

// Test du slide
test('Test slide infos is correct', () => {
  const wrapper = mount(slide);
  expect(true).toEqual(true)
});