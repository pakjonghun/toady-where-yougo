import { fork, all, call, put, takeLatest } from 'redux-saga/effects';
import { loginFail, loginRequest, loginSuccess } from '../reducers/user';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

function fetchLogin(payload) {
  return {
    id: uuidv4(),
    socialId: uuidv4(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    nickname: faker.name.findName(),
  };
}

function* login({ payload }) {
  try {
    const user = yield call(fetchLogin, payload);
    yield put(loginSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(loginFail({ error: error.response }));
  }
}

function* watchLogin() {
  yield takeLatest(loginRequest, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
