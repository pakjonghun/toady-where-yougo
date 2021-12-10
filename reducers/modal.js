import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isLoginModalShow: false,
  },
  reducers: {
    toggleLoginModal: state => {
      state.isLoginModalShow = !state.isLoginModalShow;
    },
  },
});

export const { toggleLoginModal } = modalSlice.actions;
export default modalSlice;
