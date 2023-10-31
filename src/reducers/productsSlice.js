import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    products: [],
    product: null,
    loading: true,
};

export const getAllProducts = createAsyncThunk(
    "products/all",
    async (thunkAPI) => {
        const res = await new axios.get("/products", thunkAPI);
        return res;
    }
);

export const getProductsByCategory = createAsyncThunk(
    "products/category",
    async (payload, thunkAPI) => {
        const res = await new axios.get(
            "/products/category/" + payload,
            thunkAPI
        );
        return res;
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.products = [];
            state.product = null;
            state.loading = true;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.products = action.payload.data;
            state.product = null;
            state.loading = false;
            toast.success("Products fetched successfully");
        },
        [getAllProducts.rejected]: (state) => {
            state.products = [];
            state.product = null;
            state.loading = false;
            toast.error("Products not found");
        },
        [getProductsByCategory.pending]: (state) => {
            state.products = [];
            state.product = null;
            state.loading = true;
        },
        [getProductsByCategory.fulfilled]: (state, action) => {
            state.products = action.payload.data;
            state.product = null;
            state.loading = false;
            toast.success("Products fetched successfully");
        },
        [getProductsByCategory.rejected]: (state) => {
            state.products = [];
            state.product = null;
            state.loading = false;
            toast.error("Products not found");
        },
    },
});

export default productsSlice.reducer;
