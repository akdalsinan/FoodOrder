import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../reducer/foodReducer";
import userReducer from "../reducer/userReducer";

export default configureStore({
  reducer: { foods: foodReducer, users: userReducer },
});
