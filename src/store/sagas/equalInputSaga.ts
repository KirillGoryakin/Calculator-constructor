import {
  CalculatorState,
  equalInput,
  reset,
  setDisplay,
} from 'store/slices/calculatorSlice';
import { takeEvery, select, put } from 'redux-saga/effects';
import { RootState } from 'store';
import { getStringFromOperand } from 'utils/getStringFromOperand';
import { getOperandFromString } from 'utils/getOperandFromString';

function* equalInputWorker() {
  const {
    firstOperand,
    operator,
    secondOperand,
  }: CalculatorState = yield select((state: RootState) => state.calculator);

  if (operator === null) return;

  const a = parseFloat(getStringFromOperand(firstOperand).replace(',', '.'));
  const b = parseFloat(getStringFromOperand(secondOperand).replace(',', '.'));
  let res = null;

  const convert = (n: number): string => 
    String(parseFloat(n.toFixed(8))).replace('.', ',');

  switch (operator) {
    case '+':
      res = getOperandFromString(convert(a + b));
      break;

    case '-':
      res = getOperandFromString(convert(a - b));
      break;

    case 'x':
      res = getOperandFromString(convert(a * b));
      break;

    case '/':
      try {
        res = getOperandFromString(convert(a / b));
      } catch {
        res = null;
      }
      break;

    default: 
      res = null;
      break;
  }

  yield put(reset());

  if (!res) {
    yield put(setDisplay('Не определено'));
    return;
  }

  yield put(setDisplay(getStringFromOperand(res)));
}

export function* watchEqualInput() {
  yield takeEvery(equalInput.type, equalInputWorker);
}