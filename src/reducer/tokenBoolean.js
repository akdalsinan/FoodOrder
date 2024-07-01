import { createSlice } from "@reduxjs/toolkit";

export const tokenBoolean = createSlice({
  name: "token",
  initialState: {
    data: null, // res.data'yı burada tutacağız
  },
  reducers: {
    tokenState: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { tokenState } = tokenBoolean.actions;
export default tokenBoolean.reducer;
