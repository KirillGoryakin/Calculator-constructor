import { Display } from 'components/CalculatorParts/Display';
import { Equal } from 'components/CalculatorParts/Equal';
import { Numbers } from 'components/CalculatorParts/Numbers';
import { Operators } from 'components/CalculatorParts/Operators';
import { Constructor } from 'components/Constructor';
import { useAppSelector } from 'hooks/reduxHooks';

const CalculatorConstructor = () => {
  const mode = useAppSelector(state => state.mode.mode);
  
  return (
    <Constructor
      className='main-wrap__constructor'
      mode={mode}
    >
      <Display value='0' />
      <Operators />
      <Numbers />
      <Equal />
    </Constructor>
  );
};

export { CalculatorConstructor };