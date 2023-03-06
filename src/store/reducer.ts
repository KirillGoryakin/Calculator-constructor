import { combineReducers } from '@reduxjs/toolkit';
import constructorReducer from './slices/constructorSlice';
import calculatorReducer from './slices/calculatorSlice';
import modeReducer from './slices/modeSlice';

export default combineReducers({
  mode: modeReducer,
  constructor: constructorReducer,
  calculator: calculatorReducer,
});