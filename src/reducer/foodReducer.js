import { createSlice } from "@reduxjs/toolkit";
import { getAllHamburger, getAllPizza,getAllMakarna } from "../actions/foodActions";

const initialState = { hamburger: [], pizza: [], makarna: [], loading: false };

export const foodReducer = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllHamburger.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllHamburger.fulfilled, (state, action) => {
      state.loading = false;
      state.hamburger = action.payload;
    });

    builder.addCase(getAllPizza.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllPizza.fulfilled, (state, action) => {
      state.loading = false;
      state.pizza = action.payload;
    });

    builder.addCase(getAllMakarna.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllMakarna.fulfilled, (state, action) => {
      state.loading = false;
      state.makarna = action.payload;
    });
  },
});

export default foodReducer.reducer;
