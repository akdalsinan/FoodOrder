import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchFood = createAsyncThunk("fetchFood", async () => {
  const responce = await axios.get("localhost:3000/food/getAllHamburger");
  return responce.data;
});

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFood.pending, (state, action) => {
        state.loading=true;
        state.error="";
    });
    builder.addCase(fetchFood.fulfilled,(state,action)=>{
        state.data=action.payload;
        loading=false
    })
    builder.addCase(fetchFood.rejected,(state,action)=>{
        state.loading=false;
        state.error="ERROR"
    })
  },
});
export default foodSlice.reducer;
