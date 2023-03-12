import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display } from './Display';

export default {
  title: 'Calculator Parts/Display',
  component: Display,
  argTypes: {
    value: {
      type: 'string',
      description: 'Display value',
    },
  },
} as ComponentMeta<typeof Display>;

export const Playground: ComponentStory<typeof Display> = args => 
  <Display {...args} />;
Playground.args = { value: '0' };