import { combineReducers } from '@reduxjs/toolkit';
import constructorReducer from './slices/constructorSlice';
import calculatorReducer from './slices/calculatorSlice';

export default combineReducers({
  constructor: constructorReducer,
  calculator: calculatorReducer,
});