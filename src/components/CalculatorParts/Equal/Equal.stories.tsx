import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Equal } from './Equal';

export default {
  title: 'Calculator Parts/Equal',
  component: Equal,
  argTypes: {
    onClick: {
      type: 'function',
      description: 'Click handler',
      control: false,
      table: { type: { summary: '(event: MouseEvent) => void' } },
    },
  },
} as ComponentMeta<typeof Equal>;

export const Playground: ComponentStory<typeof Equal> = args => 
  <Equal {...args} />;