import {
  CalculatorState,
  commaInput,
  setDisplay,
  setFirstOperand,
  setSecondOperand,
} from 'store/slices/calculatorSlice';
import { takeEvery, select, put } from 'redux-saga/effects';
import { RootState } from 'store';

function* commaInputWorker() {
  const {
    firstOperand,
    operator,
    secondOperand,
  }: CalculatorState = yield select((state: RootState) => state.calculator);

  if (operator === null) {
    if (firstOperand.hasComma) return;
    yield put(setFirstOperand({ ...firstOperand, hasComma: true }));
    yield put(setDisplay(firstOperand.beforeComma + ','));
  }
  else {
    if (secondOperand.hasComma) return;
    yield put(setSecondOperand({ ...secondOperand, hasComma: true }));
    yield put(setDisplay(secondOperand.beforeComma + ','));
  }
}

export function* watchCommaInput() {
  yield takeEvery(commaInput.type, commaInputWorker);
}