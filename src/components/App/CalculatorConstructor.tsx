import { Display } from 'components/CalculatorParts/Display';
import { Equal } from 'components/CalculatorParts/Equal';
import { NumbersPad } from 'components/CalculatorParts/NumbersPad';
import { Operators } from 'components/CalculatorParts/Operators';
import { Constructor } from 'components/Constructor';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import {
  commaInput,
  equalInput,
  numberInput,
  operatorInput
} from 'store/slices/calculatorSlice';

const CalculatorConstructor = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(state => state.mode.mode);
  const display = useAppSelector(state => state.calculator.display);
  
  return (
    <Constructor
      className='main-wrap__constructor'
      mode={mode}
    >
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

export { CalculatorConstructor };