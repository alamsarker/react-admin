import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarShow: 'responsive'
};

export const sidebarShowSlice = createSlice({
  name: 'sidebarShow',
  initialState,
  reducers: {
    set: (state, {payload}) => {
      return {
        sidebarShow: payload.sidebarShow
      }
    },
  },
});

export const { set } = sidebarShowSlice.actions;
export default sidebarShowSlice.reducer;
