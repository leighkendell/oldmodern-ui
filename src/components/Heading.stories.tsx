import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'Heading level 1',
  level: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'Heading level 2',
  level: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'Heading level 3',
  level: 'h3',
};

export const Heading3AsHeading2Size = Template.bind({});
Heading3AsHeading2Size.args = {
  children: 'Heading level 3',
  level: 'h2',
  as: 'h3',
};
