import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Text input',
};

export const TextArea = Template.bind({});
TextArea.args = {
  label: 'Text input',
  as: 'textarea',
};
