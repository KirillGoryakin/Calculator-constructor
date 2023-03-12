import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NumbersPad } from './NumbersPad';

export default {
  title: 'Calculator Parts/NumbersPad',
  component: NumbersPad,
  argTypes: {
    onNumberClick: {
      type: 'function',
      description: 'Number click handler',
      control: false,
      table: { type: { summary: '(e: MouseEvent, number: number) => void' } },
    },
    onCommaClick: {
      type: 'function',
      description: 'Comma click handler',
      control: false,
      table: { type: { summary: '(e: MouseEvent) => void' } },
    },
  },
} as ComponentMeta<typeof NumbersPad>;

export const Playground: ComponentStory<typeof NumbersPad> = args => 
  <NumbersPad {...args} />;