import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from './Switch';
import { SwitchItem } from './SwitchItem';
import { ReactComponent as GoldIcon } from 'assets/icons/gold.svg';
import { ReactComponent as SpaceIcon } from 'assets/icons/space.svg';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    children: {
      description: 'SwitchItems go here',
      control: false,
      table: { type: { summary: 'SwitchItem' } },
    },
    defaultValue: {
      type: 'string',
      description: 'Initial value. It has to be a value of one of the SwitchItems',
      control: false,
    },
    onSwitch: {
      type: 'function',
      description: 'Switch handler',
      control: false,
      table: { type: { 
        summary: '(value: string, prev: string) => void',
        detail: '`value` is a value of SwitchItem, that user clicked on.\n`prev` is preveous value, that was before the user click.',
      } },
    },
    className: {
      type: 'string',
      description: 'Extra classes for div element',
      control: false,
    },
  },
  subcomponents: {
    SwitchItem,
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  defaultValue: 'deep_purple',
  children: (
    <>
      <SwitchItem label='Deep Purple' value='deep_purple' />
      <SwitchItem label='Gold' value='gold' icon={<GoldIcon />} />
      <SwitchItem label='Silver' value='silver' />
      <SwitchItem label='Space Black' value='space_black'
        icon={<SpaceIcon />} />
    </>
  ),
};