import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    route: '',
    method: ''
};

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    modalAction: (state, {payload}) => ({
      ...state,
      isOpen: payload.isOpen,
      route: payload.route,
      method: payload.method
    }),
  },
});

export const { modalAction } = confirmSlice.actions;
export const selectConfirm = state => state.confirm;
export default confirmSlice.reducer;
