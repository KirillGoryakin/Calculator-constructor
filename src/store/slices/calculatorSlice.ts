import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Operand, Operator } from 'types';
import { getStringFromOperand } from 'utils/getStringFromOperand';

export type CalculatorState = {
  display: string;
  firstOperand: Operand;
  operator: Operator | null;
  secondOperand: Operand;
};

const initialState: CalculatorState = {
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
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDisplay(state, action: PayloadAction<string>) {
      state.display = action.payload;
    },
    setFirstOperand(state, action: PayloadAction<Operand>) {
      state.firstOperand = action.payload;
    },
    setOperator(state, action: PayloadAction<Operator>) {
      state.operator = action.payload;
    },
    setSecondOperand(state, action: PayloadAction<Operand>) {
      state.secondOperand = action.payload;
    },
    reset(state) {
      state.display = '0';
      state.firstOperand = {
        beforeComma: 0,
        hasComma: false,
        afterComma: 0,
      };
      state.operator = null;
      state.secondOperand = {
        beforeComma: 0,
        hasComma: false,
        afterComma: 0,
      };
    },
    numberInput(_, action: PayloadAction<number>) {},
    commaInput() {},
    operatorInput(state, action: PayloadAction<Operator>) {
      if (getStringFromOperand(state.firstOperand) !== '0')
        state.operator = action.payload;
    },
    equalInput() {},
  },
});

export const {
  setDisplay,
  setFirstOperand,
  setOperator,
  setSecondOperand,
  reset,
  numberInput,
  commaInput,
  operatorInput,
  equalInput,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;