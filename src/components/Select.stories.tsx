import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select input',
  children: (
    <>
      <option>woop</option>
      <option>cool</option>
      <option>yo</option>
    </>
  ),
};
