import { PayloadAction } from '@reduxjs/toolkit';
import {
  CalculatorState,
  numberInput,
  setDisplay,
  setFirstOperand,
  setSecondOperand,
} from 'store/slices/calculatorSlice';
import { takeEvery, select, put } from 'redux-saga/effects';
import { RootState } from 'store';
import { Operand } from 'types';
import { getStringFromOperand } from 'utils/getStringFromOperand';

function* numberInputWorker(action: PayloadAction<number>) {
  const {
    firstOperand,
    operator,
    secondOperand,
  }: CalculatorState = yield select((state: RootState) => state.calculator);

  if (operator === null) {
    const res: Operand = 
      firstOperand.hasComma ?
      {
        ...firstOperand,
        afterComma: firstOperand.afterComma * 10 + action.payload,
      } : 
      {
        ...firstOperand,
        beforeComma: firstOperand.beforeComma * 10 + action.payload,
      };

    yield put(setFirstOperand(res));
    yield put(setDisplay(getStringFromOperand(res)));
  }
  else {
    const res: Operand =
      secondOperand.hasComma ?
        {
          ...secondOperand,
          afterComma: secondOperand.afterComma * 10 + action.payload,
        } :
        {
          ...secondOperand,
          beforeComma: secondOperand.beforeComma * 10 + action.payload,
        };

    yield put(setSecondOperand(res));
    yield put(setDisplay(getStringFromOperand(res)));
  }
}

export function* watchNumberInput() {
  yield takeEvery(numberInput.type, numberInputWorker);
}