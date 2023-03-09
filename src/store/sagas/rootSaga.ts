import { fork } from 'redux-saga/effects';
import { watchCommaInput } from './commaInputSaga';
import { watchEqualInput } from './equalInputSaga';
import { watchNumberInput } from './numberInputSaga';
function* rootSaga() {
  yield fork(watchNumberInput);
  yield fork(watchCommaInput);
  yield fork(watchEqualInput);
}

export default rootSaga;