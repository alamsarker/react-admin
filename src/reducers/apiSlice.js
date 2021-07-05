import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    response: null,
    error: null,
    operationId: null,
    parameters: null
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    callApi: (state, {payload}) => ({
      ...state,
      loading: true,
      operationId : payload.operationId,
      parameters: payload.parameters || {}
    }),
    succeed: (state, {payload}) => {
      const output = payload.output || 'output';
      return {
        ...state,
        loading: false,
        [output]: payload.response
      };
    },
    failed: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
  },
});

export const { callApi, succeed, failed } = apiSlice.actions;
export const selectApi = state => state.api;
export default apiSlice.reducer;
