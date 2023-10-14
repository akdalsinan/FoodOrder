// import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import rootReducer from "../reducer";
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../reducer/foodReducer";

export default configureStore({
  reducer: { foods: foodReducer},
});
