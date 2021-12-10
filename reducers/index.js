import { combineReducers } from 'redux';
import userSlice from './user';

const rootRecuder = combineReducers({ userReducer: userSlice.reducer });

export default rootRecuder;
