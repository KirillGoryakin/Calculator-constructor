import { createSlice } from '@reduxjs/toolkit';

type CalculatorState = {
  
};

const initialState: CalculatorState = {};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {

  },
});

export const {  } = calculatorSlice.actions;
export default calculatorSlice.reducer;