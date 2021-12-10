import { createSlice } from '@reduxjs/toolkit';

const frontCommonSlice = createSlice({
  name: 'FrontCommon',
  initialState: {
    totalOptions: 10,
    curOption: 0,
  },
  reducers: {
    updateCurOption: (state, { payload }) => {
      state.curOption = payload.curOption;
    },
  },
});

export const { updateCurOption } = frontCommonSlice.actions;
export default frontCommonSlice;
