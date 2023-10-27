import { createSlice } from "@reduxjs/toolkit";

export const tokenBoolean = createSlice({
  name: "token",
  initialState: { bool: "" },
  reducers: {
    tokenState: (state, action) => {
      state.bool = action.payload.token;
      console.log("actionooo",action)
    },
  },
});

export const { tokenState } = tokenBoolean.actions;
export default tokenBoolean.reducer;