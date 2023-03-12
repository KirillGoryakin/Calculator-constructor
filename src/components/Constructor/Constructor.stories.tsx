import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Constructor } from './Constructor';
import spaceIcon from 'assets/icons/space.svg';
import { Display } from 'components/CalculatorParts/Display';
import { Operators } from 'components/CalculatorParts/Operators';
import { NumbersPad } from 'components/CalculatorParts/NumbersPad';
import { Equal } from 'components/CalculatorParts/Equal';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import {
  commaInput,
  equalInput,
  numberInput,
  operatorInput
} from 'store/slices/calculatorSlice';
import { Provider } from 'react-redux';
import store from 'store';

export default {
  title: 'Components/Constructor',
  component: Constructor,
  argTypes: {
    children: {
      description: 'Constructor parts',
      control: false,
      table: { type: { summary: 'ReactNode[]' } },
    },
    mode: {
      description: 'Constructor mode',
      defaultValue: 'constructor',
      table: { type: { summary: 'Mode' } },
    },
    className: {
      type: 'string',
      description: 'Extra classes',
      control: false,
    },
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
        <style>{`
          .parts__wrap { max-width: 250px; }
        `}</style>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Constructor>;

export const Playground: ComponentStory<typeof Constructor> = args =>
  <Constructor {...args} />;
Playground.args = {
  children: [
    <div>Some part</div>,
    <div style={{
      width: 100,
      height: 50,
      background: 'red',
    }}>Another part</div>,
    <img
      src={spaceIcon}
      alt='Icon'
      style={{ width: 150, height: 150 }}
    />,
  ],
};

export const CalculatorConstructor: ComponentStory<typeof Constructor> =
args => {
  const dispatch = useAppDispatch();
  const display = useAppSelector(state => state.calculator.display);
  
  return (
    <Constructor {...args}>
      <Display value={display} />
      <Operators onClick={(_, o) => dispatch(operatorInput(o))} />
      <NumbersPad
        onNumberClick={(_, n) => dispatch(numberInput(n))}
        onCommaClick={() => dispatch(commaInput())}
      />
      <Equal onClick={() => dispatch(equalInput())} />
    </Constructor>
  );
};
CalculatorConstructor.args = { mode: 'constructor' };