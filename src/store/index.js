import { configureStore } from "@reduxjs/toolkit";

import tokenBoolean from "../reducer/tokenBoolean";
import userToken from "../reducer/userToken";
import basketReducer from "../reducer/basket";
import adminMessage from "../reducer/adminMessage";

export default configureStore({
  reducer: {
    tokenBool: tokenBoolean,
    userToken: userToken,
    basket: basketReducer,
    adminMessage: adminMessage,
  },
});
