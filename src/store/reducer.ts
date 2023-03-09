import { combineReducers } from '@reduxjs/toolkit';
import calculatorReducer from './slices/calculatorSlice';
import modeReducer from './slices/modeSlice';

export default combineReducers({
  mode: modeReducer,
  calculator: calculatorReducer,
});