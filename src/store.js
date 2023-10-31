import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import categoriesReducer from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoriesReducer,
        products: productsReducer,
    },
});
