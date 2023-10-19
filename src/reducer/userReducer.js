import { createSlice } from "@reduxjs/toolkit";
import { loginUser, addUser, getAllUsers } from "../actions/userAction";

const initialState = { user: [], loading: false };

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // ------------- getAllUsers ------------------- //
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    // ------------- addUser ------------------- //
    builder.addCase(addUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
    });

    // ------------- loginUser ------------------- //
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export default userReducer.reducer;
