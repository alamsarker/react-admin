import { takeEvery, call, put } from "redux-saga/effects";
//import SwaggerClient from 'swagger-client';
import {
  succeed,
  failed,
} from '../reducers/apiSlice';

import {
  setMessage
} from '../reducers/toastSlice';

import fetcher from '../lib/fetcher'

//const scheme = process.env.REACT_APP_API_PROTOCOL || 'https';

export default function* sagas() {
  yield takeEvery(({
    payload: {
      operationId = null
    }
  }) => {
    return typeof operationId === 'string' && operationId.length > 0;
  }, performApiAction);
}

function* performApiAction(action) {

  const {
    payload: {
      output = 'output',
      operationId = '',
      parameters = {}
    }
  } = action;

  try {

    let response = yield call(() => fetcher(operationId, parameters));
    console.log('saga response -> ', response)

    /*
    // FOR swaggerClient Support
    const client  = yield call(() => SwaggerClient(
      `${process.env.REACT_APP_T3_API}/${process.env.REACT_APP_T3_API_BASE_PATH}/swagger.json`
    ));

    let response = {};
      const result = yield call(() => client.execute({
        scheme,
        operationId,
        parameters
      }));

      response = result.obj;
    */

    yield put(succeed({
      response,
      output
    }));

    if(parameters.method) {
      yield put(setMessage({
        type: 'success',
        message: 'Operation has been completed successfully.'
      }));
    }

  } catch( error ) {
    let err = error.response
      ? error.response.obj.error : {
        message: 'Api call failed or check your internet connection'
      }

    yield put(failed({
      error: err
    }));

    yield put(setMessage({
      type: 'error',
      message: err
    }));
  }
}
