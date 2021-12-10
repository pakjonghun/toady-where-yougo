import { combineReducers } from 'redux';
import modalSlice from './modal';
import userSlice from './user';
import frontCommonSlice from './FrontCommon';

const rootRecuder = combineReducers({
  userReducer: userSlice.reducer,
  modalReducer: modalSlice.reducer,
  frontCommonReducer: frontCommonSlice.reducer,
});

export default rootRecuder;
