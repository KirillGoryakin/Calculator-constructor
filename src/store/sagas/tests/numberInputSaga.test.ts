import { Action } from '@reduxjs/toolkit';
import { runSaga } from 'redux-saga';
import { RootState } from 'store';
import {
  numberInput,
  setDisplay,
  setFirstOperand,
  setSecondOperand,
} from 'store/slices/calculatorSlice';
import { getStringFromOperand } from 'utils/getStringFromOperand';
import { numberInputWorker } from '../numberInputSaga';

describe('numberInputSaga', () => {
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
  
  it('should add number to the first operand before comma', async () => {
    await runSaga(options, numberInputWorker.bind(this, numberInput(1)) as any);
    rootState.calculator.firstOperand.beforeComma = 1;
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0])
      .toEqual(setFirstOperand(rootState.calculator.firstOperand));
    expect(dispatched[1]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.firstOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(7)) as any);
    rootState.calculator.firstOperand.beforeComma = 17;
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2])
      .toEqual(setFirstOperand(rootState.calculator.firstOperand));
    expect(dispatched[3]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.firstOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(9)) as any);
    rootState.calculator.firstOperand.beforeComma = 179;
    expect(dispatched[4])
      .toEqual(setFirstOperand(rootState.calculator.firstOperand));
    expect(dispatched[5]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.firstOperand)
    ));
  });

  it('should add number to the first operand after comma', async () => {
    rootState.calculator.firstOperand.hasComma = true;
    
    await runSaga(options, numberInputWorker.bind(this, numberInput(1)) as any);
    rootState.calculator.firstOperand.afterComma = 1;
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0])
      .toEqual(setFirstOperand(rootState.calculator.firstOperand));
    expect(dispatched[1]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.firstOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(7)) as any);
    rootState.calculator.firstOperand.afterComma = 17;
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2])
      .toEqual(setFirstOperand(rootState.calculator.firstOperand));
    expect(dispatched[3]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.firstOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(9)) as any);
    rootState.calculator.firstOperand.afterComma = 179;
    expect(dispatched[4])
      .toEqual(setFirstOperand(rootState.calculator.firstOperand));
    expect(dispatched[5]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.firstOperand)
    ));
  });

  it('should add number to the second operand before comma', async () => {
    rootState.calculator.operator = '+';
    
    await runSaga(options, numberInputWorker.bind(this, numberInput(1)) as any);
    rootState.calculator.secondOperand.beforeComma = 1;
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0])
      .toEqual(setSecondOperand(rootState.calculator.secondOperand));
    expect(dispatched[1]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.secondOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(7)) as any);
    rootState.calculator.secondOperand.beforeComma = 17;
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2])
      .toEqual(setSecondOperand(rootState.calculator.secondOperand));
    expect(dispatched[3]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.secondOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(9)) as any);
    rootState.calculator.secondOperand.beforeComma = 179;
    expect(dispatched[4])
      .toEqual(setSecondOperand(rootState.calculator.secondOperand));
    expect(dispatched[5]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.secondOperand)
    ));
  });

  it('should add number to the second operand after comma', async () => {
    rootState.calculator.operator = '+';
    rootState.calculator.secondOperand.hasComma = true;

    await runSaga(options, numberInputWorker.bind(this, numberInput(1)) as any);
    rootState.calculator.secondOperand.afterComma = 1;
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0])
      .toEqual(setSecondOperand(rootState.calculator.secondOperand));
    expect(dispatched[1]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.secondOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(7)) as any);
    rootState.calculator.secondOperand.afterComma = 17;
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2])
      .toEqual(setSecondOperand(rootState.calculator.secondOperand));
    expect(dispatched[3]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.secondOperand)
    ));

    await runSaga(options, numberInputWorker.bind(this, numberInput(9)) as any);
    rootState.calculator.secondOperand.afterComma = 179;
    expect(dispatched[4])
      .toEqual(setSecondOperand(rootState.calculator.secondOperand));
    expect(dispatched[5]).toEqual(setDisplay(
      getStringFromOperand(rootState.calculator.secondOperand)
    ));
  });
});

export {};