import { Display } from 'components/CalculatorParts/Display';
import { Eaqual } from 'components/CalculatorParts/Eaqual';
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
      <Display />
      <Operators />
      <Numbers />
      <Eaqual />
    </Constructor>
  );
};

export { CalculatorConstructor };