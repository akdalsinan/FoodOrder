import { createSlice } from "@reduxjs/toolkit";

export const basket = createSlice({
  name: "basket",
  initialState: { value: 0 },
  reducers: {
    basketCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { basketCount } = basket.actions;
export default basket.reducer;
