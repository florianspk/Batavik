import { mount } from '@vue/test-utils';
import Shower from '@/views/Shower.vue';

import SectionProduct from '@/components/global/g_section.vue';

test('Verify what is displayed', () => {
  const wrapper = mount(Shower);
  expect(wrapper.findAllComponents(SectionProduct)).toHaveLength(1);
});