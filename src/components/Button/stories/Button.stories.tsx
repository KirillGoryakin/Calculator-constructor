import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      description: 'Button label',
    },
    size: {
      description: 'Size of the button',
      defaultValue: 'md',
      table: { defaultValue: { summary: 'md' } },
    },
    variant: {
      description: 'Variant of the button',
      defaultValue: 'outline',
      table: { defaultValue: { summary: 'outline' } },
    },
    onClick: {
      type: 'function',
      description: 'Click handler',
      control: false,
      table: { type: { summary: '(event: MouseEvent) => void' } },
    },
    className: {
      type: 'string',
      description: 'Extra classes for button element',
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = { children: 'Click me!' };

export const Numbers: ComponentStory<typeof Button> = args => {
  return <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 72px)',
      gap: 10,
    }}
  >
    <Button {...args}>1</Button>
    <Button {...args}>2</Button>
    <Button {...args}>3</Button>
    <Button {...args}>4</Button>
    <Button {...args}>5</Button>
    <Button {...args}>6</Button>
    <Button {...args}>7</Button>
    <Button {...args}>8</Button>
    <Button {...args}>9</Button>
    <Button {...args}>0</Button>
  </div>;
};

export const Operators: ComponentStory<typeof Button> = args => {
  return <div
    style={{
      display: 'flex',
      gap: 10,
    }}
  >
    <Button {...args}>+</Button>
    <Button {...args}>-</Button>
    <Button {...args}>x</Button>
    <Button {...args}>/</Button>
  </div>;
};

export const Equal: ComponentStory<typeof Button> = args => {
  return <>
    <Button {...args} className='equal_button'>=</Button>
    <style>{`.equal_button { width: 232px; }`}</style>
  </>;
};
Equal.args = {
  size: 'lg',
  variant: 'filled',
};