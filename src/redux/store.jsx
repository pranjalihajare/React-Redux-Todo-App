import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import userReducer from "../features/userSlice";


const store = configureStore({
  

  reducer: {
    main:reducer,
    user: userReducer,
  },
});

export default store;