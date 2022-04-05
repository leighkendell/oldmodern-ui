import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = { children: 'Filled button', variant: 'filled' };

export const FilledLink = Template.bind({});
FilledLink.args = { children: 'Filled button', variant: 'filled', as: 'a' };

export const Outline = Template.bind({});
Outline.args = { children: 'Outline button', variant: 'outline' };

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'Outline light button',
  variant: 'outlineLight',
};
