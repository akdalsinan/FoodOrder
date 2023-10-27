import { configureStore } from "@reduxjs/toolkit";

import foodReducer from "../reducer/foodReducer";
import userReducer from "../reducer/userReducer";
import tokenBoolean from "../reducer/tokenBoolean"

export default configureStore({
  reducer: { foods: foodReducer, users: userReducer, tokenBool:tokenBoolean },
});
