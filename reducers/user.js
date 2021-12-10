import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoginLoading: false,
    isLoginDone: false,
    isLoginError: null,
    isSignupLoading: false,
    isSignupDone: false,
    isSignupError: null,
  },
  reducers: {
    loginRequest: state => {
      console.log('loginRequest');
      state.isLoginLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      console.log('loginSuccess');
      state.isLoginLoading = false;
      state.isLoginDone = true;
    },
    loginFail: (state, { payload }) => {
      state.isLoginLoading = false;
      state.isLoginError = payload.error;
    },
    signupRequest: state => {
      state.isSignupLoading = true;
    },
    signupSuccess: (state, { payload }) => {
      state.isSignupLoading = false;
      state.isSignupDone = true;
    },
    signupFail: (state, { payload }) => {
      state.isSignupLoading = false;
      state.isSignupError = payload.error;
    },
  },
});
export const {
  loginRequest,
  loginFail,
  loginSuccess,
  signupRequest,
  signupSuccess,
  signupFail,
} = userSlice.actions;

export default userSlice;
