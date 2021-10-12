import { mount } from '@vue/test-utils';
import About from '@/views/About.vue';

test('Verify what is displayed', () => {
  const wrapper = mount(About);
  expect(wrapper.find('h1').text()).toEqual("This is an about page")
});