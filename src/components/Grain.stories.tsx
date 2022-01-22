import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grain } from './Grain';

export default {
  title: 'Grain',
  component: Grain,
} as ComponentMeta<typeof Grain>;

const Template: ComponentStory<typeof Grain> = (args) => <Grain {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { width: '500px', height: '500px' },
};
