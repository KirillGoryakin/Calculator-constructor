import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from 'types';

type ModeState = {
  mode: Mode;
};

const initialState: ModeState = {
  mode: 'constructor',
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;