import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Operators } from './Operators';

export default {
  title: 'Calculator Parts/Operators',
  component: Operators,
  argTypes: {
    onClick: {
      type: 'function',
      description: 'Operator click handler',
      control: false,
      table: { type: { summary: '(e: MouseEvent, o: Operator) => void' } },
    },
  },
} as ComponentMeta<typeof Operators>;

export const Playground: ComponentStory<typeof Operators> = args => 
  <Operators {...args} />;