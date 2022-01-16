import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam consequatur quidem adipisci rem quo nesciunt temporibus neque ipsam quaerat ad voluptatem id perspiciatis similique atque, at tempore eum vel.',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam consequatur quidem adipisci rem quo nesciunt temporibus neque ipsam quaerat ad voluptatem id perspiciatis similique atque, at tempore eum vel.',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam consequatur quidem adipisci rem quo nesciunt temporibus neque ipsam quaerat ad voluptatem id perspiciatis similique atque, at tempore eum vel.',
  size: 'large',
};
