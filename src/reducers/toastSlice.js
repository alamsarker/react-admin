import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    type: 'success',
    message: ''
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setMessage: (state, {payload}) => {
      return {
        counter:  state.counter + 1,
        type: payload.type,
        message: payload.message
      }
    },
  },
});

export const { setMessage } = toastSlice.actions;
export const selectToast = state => state.toast;
export default toastSlice.reducer;
