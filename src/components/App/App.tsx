import './App.scss';
import { ModeSwitch } from './ModeSwitch';
import { CalculatorConstructor } from './CalculatorConstructor';

const App = () => {
  return (
    <main className='main-wrap'>
      <ModeSwitch />

      <CalculatorConstructor />
    </main>
  );
};

export { App };