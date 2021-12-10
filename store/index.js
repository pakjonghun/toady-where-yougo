import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootRecuder from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const createStore = () => {
  const store = configureStore({
    reducer: rootRecuder,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(createStore, { debug: true });
export default wrapper;
