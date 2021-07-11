import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ApiReducer from './apiSlice';
import confirmReducer from './confirmSlice';
import toastReducer from './toastSlice';
import sidebarShowReducer from './sidebarSlice'
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware(),
  sagaMiddleware
];

export default configureStore({
  reducer: {
    api: ApiReducer,
    confirm: confirmReducer,
    toast: toastReducer,
    sidebarShow: sidebarShowReducer,
  },
  middleware
});

sagaMiddleware.run(sagas);
