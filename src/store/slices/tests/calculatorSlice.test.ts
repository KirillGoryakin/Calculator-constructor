import { Operand } from 'types';
import reducer, {
  CalculatorState,
  commaInput,
  equalInput,
  numberInput,
  operatorInput,
  reset,
  setDisplay,
  setFirstOperand,
  setOperator,
  setSecondOperand,
} from '../calculatorSlice';

const mockState: CalculatorState = {
  display: '0',
  firstOperand: {
    beforeComma: 0,
    hasComma: false,
    afterComma: 0,
  },
  operator: null,
  secondOperand: {
    beforeComma: 0,
    hasComma: false,
    afterComma: 0,
  },
};

const mockOperand: Operand = {
  beforeComma: 0,
  hasComma: false,
  afterComma: 0,
};

describe('calculatorSlice', () => {
  it('should change display value with setDisplay action', () => {
    let state: CalculatorState = { ...mockState };
    
    state = reducer(state, setDisplay('123'));
    expect(state).toEqual({ ...mockState, display: '123' });

    state = reducer(state, setDisplay('123'));
    expect(state).toEqual({ ...mockState, display: '123' });

    state = reducer(state, setDisplay('Some other text'));
    expect(state).toEqual({ ...mockState, display: 'Some other text' });
  });

  it('should set first operand with setFirstOperand action', () => {
    let state: CalculatorState = { ...mockState };

    state = reducer(state, setFirstOperand({
      ...mockOperand,
      beforeComma: 123,
    }));
    expect(state).toEqual({
      ...mockState,
      firstOperand: { ...mockOperand, beforeComma: 123 },
    });

    state = reducer(state, setFirstOperand({
      ...mockOperand,
      beforeComma: -6574456,
    }));
    expect(state).toEqual({
      ...mockState,
      firstOperand: { ...mockOperand, beforeComma: -6574456 },
    });

    state = reducer(state, setFirstOperand({
      beforeComma: 52,
      hasComma: true,
      afterComma: 123,
    }));
    expect(state).toEqual({
      ...mockState,
      firstOperand: {
        beforeComma: 52,
        hasComma: true,
        afterComma: 123,
      },
    });
  });

  it('should set second operand with setSecondOperand action', () => {
    let state: CalculatorState = { ...mockState };

    state = reducer(state, setSecondOperand({
      ...mockOperand,
      beforeComma: 123,
    }));
    expect(state).toEqual({
      ...mockState,
      secondOperand: { ...mockOperand, beforeComma: 123 },
    });

    state = reducer(state, setSecondOperand({
      ...mockOperand,
      beforeComma: -6574456,
    }));
    expect(state).toEqual({
      ...mockState,
      secondOperand: { ...mockOperand, beforeComma: -6574456 },
    });

    state = reducer(state, setSecondOperand({
      beforeComma: 52,
      hasComma: true,
      afterComma: 123,
    }));
    expect(state).toEqual({
      ...mockState,
      secondOperand: {
        beforeComma: 52,
        hasComma: true,
        afterComma: 123,
      },
    });
  });

  it('should set operator with setOperator action', () => {
    let state: CalculatorState = { ...mockState };

    state = reducer(state, setOperator('+'));
    expect(state).toEqual({ ...mockState, operator: '+' });

    state = reducer(state, setOperator('+'));
    expect(state).toEqual({ ...mockState, operator: '+' });

    state = reducer(state, setOperator('-'));
    expect(state).toEqual({ ...mockState, operator: '-' });

    state = reducer(state, setOperator('x'));
    expect(state).toEqual({ ...mockState, operator: 'x' });

    state = reducer(state, setOperator('/'));
    expect(state).toEqual({ ...mockState, operator: '/' });
  });

  it('should reset state with reset action', () => {
    let state: CalculatorState = {
      display: 'fw rg3rg gh3h',
      firstOperand: {
        beforeComma: 5133,
        hasComma: true,
        afterComma: 14134,
      },
      operator: 'x',
      secondOperand: {
        beforeComma: -18491,
        hasComma: true,
        afterComma: 8952,
      },
    };

    state = reducer(state, reset());
    expect(state).toEqual(mockState);
  });

  it('should do nothing with numberInput, commaInput and equalInput actions', () => {
    let state: CalculatorState = { ...mockState };

    state = reducer(state, numberInput(123));
    expect(state).toEqual(mockState);

    state = reducer(state, commaInput());
    expect(state).toEqual(mockState);

    state = reducer(state, equalInput());
    expect(state).toEqual(mockState);
  });

  it('should set operator onli if first operand is not 0 with operatorInput action', () => {
    const getState =(
      prevState: CalculatorState,
      beforeComma: number
    ): CalculatorState => ({
      ...prevState,
      firstOperand: {
        beforeComma,
        hasComma: false,
        afterComma: 0,
      },
    });
    let state: CalculatorState = getState(mockState, 0);

    state = reducer(state, operatorInput('+'));
    expect(state).toEqual(mockState);

    state = getState(state, 3);
    state = reducer(state, operatorInput('+'));
    expect(state).toEqual({ ...getState(mockState, 3), operator: '+' });

    state = getState(state, 467);
    state = reducer(state, operatorInput('/'));
    expect(state).toEqual({ ...getState(mockState, 467), operator: '/' });

    state = getState(state, 0);
    state = reducer(state, operatorInput('x'));
    expect(state).toEqual({ ...mockState, operator: '/' });

    state = { ...mockState };
    state = reducer(state, operatorInput('-'));
    expect(state).toEqual(mockState);
  });
});

export {};