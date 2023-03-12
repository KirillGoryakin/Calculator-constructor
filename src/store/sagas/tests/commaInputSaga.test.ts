import { Action } from '@reduxjs/toolkit';
import { runSaga } from 'redux-saga';
import { RootState } from 'store';
import {
  setDisplay,
  setFirstOperand,
  setSecondOperand,
} from 'store/slices/calculatorSlice';
import { commaInputWorker } from '../commaInputSaga';

describe('commaInputSaga', () => {
  let dispatched: Action[] = [];
  let rootState: RootState = {
    mode: { mode: 'constructor' },
    calculator: {
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
    },
  };
  let options = {
    dispatch(action: Action) {
      dispatched.push(action);
    },
    getState() { return rootState; },
  };

  beforeEach(() => {
    dispatched = [];
    rootState = {
      mode: { mode: 'constructor' },
      calculator: {
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
      },
    };
  });
  
  it('should set comma to the first operand', async () => {
    await runSaga(options, commaInputWorker as any);
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0]).toEqual(setFirstOperand({
      ...rootState.calculator.firstOperand,
      hasComma: true,
    }));
    expect(dispatched[1]).toEqual(setDisplay(
      rootState.calculator.firstOperand.beforeComma + ','
    ));
  });

  it('should do nothing with the first operand', async () => {
    rootState.calculator.firstOperand.hasComma = true;
    await runSaga(options, commaInputWorker as any);
    expect(dispatched).toHaveLength(0);
  });

  it('should set comma to the second operand', async () => {
    rootState.calculator.operator = '+';
    await runSaga(options, commaInputWorker as any);
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0]).toEqual(setSecondOperand({
      ...rootState.calculator.secondOperand,
      hasComma: true,
    }));
    expect(dispatched[1]).toEqual(setDisplay(
      rootState.calculator.secondOperand.beforeComma + ','
    ));
  });

  it('should do nothing with the second operand', async () => {
    rootState.calculator.firstOperand.hasComma = true;
    rootState.calculator.operator = '+';
    rootState.calculator.secondOperand.hasComma = true;
    await runSaga(options, commaInputWorker as any);
    expect(dispatched).toHaveLength(0);
  });
});

export {};