import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '.';
import { Stack } from './Stack';

export default {
  title: 'Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {
  space: { initial: 1, small: 2, medium: 3, large: 4 },
  children: (
    <>
      <Text>Item one</Text>
      <Text>Item two</Text>
      <Text>Item three</Text>
      <Text>Item four</Text>
      <Text>Item five</Text>
    </>
  ),
};

export const Nested = Template.bind({});
Nested.args = {
  space: { initial: 1, small: 2, medium: 3, large: 4 },
  children: (
    <>
      <div>
        <Stack space={1}>
          <Text>Item one</Text>
          <Text>Item two</Text>
          <Text>Item three</Text>
          <Text>Item four</Text>
          <Text>Item five</Text>
        </Stack>
      </div>
      <div>
        <Stack space={2}>
          <Text>Item one</Text>
          <Text>Item two</Text>
          <Text>Item three</Text>
          <Text>Item four</Text>
          <Text>Item five</Text>
        </Stack>
      </div>
    </>
  ),
};
