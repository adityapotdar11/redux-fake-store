import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    cart: [],
    loading: true,
};
const config = {
    headers: {
        "Content-type": "application/json",
    },
};
export const addToCart = createAsyncThunk(
    "cart/add",
    async (payload, thunkAPI) => {
        const res = await new axios.post("/carts", payload, config, thunkAPI);
        return res;
    }
);

export const getCart = createAsyncThunk(
    "cart/get",
    async (payload, thunkAPI) => {
        const res = await new axios.get("/carts/user/" + payload, thunkAPI);
        return res;
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
        [addToCart.pending]: (state) => {
            (state.cart = []), (state.loading = true);
        },
        [addToCart.fulfilled]: (state) => {
            (state.cart = []), (state.loading = true);
            toast.success("Product added to cart");
        },
        [addToCart.rejected]: (state) => {
            (state.cart = []), (state.loading = true);
            toast.success("Some thing went wrong");
        },
        [getCart.pending]: (state) => {
            (state.cart = []), (state.loading = true);
        },
        [getCart.fulfilled]: (state, action) => {
            state.cart = action.payload.data;
            state.loading = false;
            toast.success("Cart fetched successfully");
        },
        [getCart.rejected]: (state) => {
            state.cart = [];
            state.loading = false;
        },
    },
});

export default cartSlice.reducer;
