import { Action } from '@reduxjs/toolkit';
import { runSaga } from 'redux-saga';
import { RootState } from 'store';
import {
  reset,
  setDisplay,
  setFirstOperand,
} from 'store/slices/calculatorSlice';
import { Operand } from 'types';
import { getOperandFromString } from 'utils/getOperandFromString';
import { equalInputWorker } from '../equalInputSaga';

const gofs = (str: string): Operand => {
  const o = getOperandFromString(str);
  if (o !== null) return o;
  return { beforeComma: 0, hasComma: false, afterComma: 0 };
};

describe('equalInputSaga', () => {
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
  
  it('should add two numbers', async () => {
    rootState.calculator.operator = '+';

    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0]).toEqual(reset());
    expect(dispatched[1]).toEqual(setDisplay('0'));

    rootState.calculator.firstOperand = gofs('1,1');
    rootState.calculator.secondOperand = gofs('5,8');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2]).toEqual(reset());
    expect(dispatched[3]).toEqual(setDisplay('6,9'));

    rootState.calculator.firstOperand = gofs('-115,429');
    rootState.calculator.secondOperand = gofs('185,119');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(6);
    expect(dispatched[4]).toEqual(reset());
    expect(dispatched[5]).toEqual(setDisplay('69,69'));
  });

  it('should subtract two numbers', async () => {
    rootState.calculator.operator = '-';

    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0]).toEqual(reset());
    expect(dispatched[1]).toEqual(setDisplay('0'));

    rootState.calculator.firstOperand = gofs('513,47');
    rootState.calculator.secondOperand = gofs('113,12');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2]).toEqual(reset());
    expect(dispatched[3]).toEqual(setDisplay('400,35'));

    rootState.calculator.firstOperand = gofs('-115,429');
    rootState.calculator.secondOperand = gofs('75,57');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(6);
    expect(dispatched[4]).toEqual(reset());
    expect(dispatched[5]).toEqual(setDisplay('-190,999'));
  });

  it('should multiply two numbers', async () => {
    rootState.calculator.operator = 'x';

    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0]).toEqual(reset());
    expect(dispatched[1]).toEqual(setDisplay('0'));

    rootState.calculator.firstOperand = gofs('51,5');
    rootState.calculator.secondOperand = gofs('100');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2]).toEqual(reset());
    expect(dispatched[3]).toEqual(setDisplay('5150'));

    rootState.calculator.firstOperand = gofs('111,111');
    rootState.calculator.secondOperand = gofs('-6');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(6);
    expect(dispatched[4]).toEqual(reset());
    expect(dispatched[5]).toEqual(setDisplay('-666,666'));
  });

  it('should divide two numbers', async () => {
    rootState.calculator.operator = '/';

    rootState.calculator.firstOperand = gofs('0');
    rootState.calculator.secondOperand = gofs('2');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0]).toEqual(reset());
    expect(dispatched[1]).toEqual(setDisplay('0'));

    rootState.calculator.firstOperand = gofs('396,12');
    rootState.calculator.secondOperand = gofs('-3');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(4);
    expect(dispatched[2]).toEqual(reset());
    expect(dispatched[3]).toEqual(setDisplay('-132,4'));

    rootState.calculator.firstOperand = gofs('-64,128');
    rootState.calculator.secondOperand = gofs('-8');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(6);
    expect(dispatched[4]).toEqual(reset());
    expect(dispatched[5]).toEqual(setDisplay('8,16'));
  });

  it('should give error message', async () => {
    rootState.calculator.operator = '/';

    rootState.calculator.firstOperand = gofs('256');
    rootState.calculator.secondOperand = gofs('0');
    await runSaga(options, equalInputWorker as any);
    expect(dispatched).toHaveLength(2);
    expect(dispatched[0]).toEqual(reset());
    expect(dispatched[1]).toEqual(setDisplay('Не определено'));
  });
});

export {};