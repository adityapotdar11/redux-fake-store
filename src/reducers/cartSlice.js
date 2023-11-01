import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    cart: [],
    cartSubtotal: 0,
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
        let res = await new axios.get("/carts/user/" + payload, thunkAPI);
        res = res.data[0];
        let subT = 0;
        res = await Promise.all(
            res.products.map(async (product) => {
                let prod = await new axios.get(
                    "/products/" + product.productId,
                    thunkAPI
                );
                subT = subT + prod.data.price * product.quantity;

                return {
                    productId: product.productId,
                    quantity: product.quantity,
                    price: prod.data.price,
                    title: prod.data.title,
                    image: prod.data.image,
                };
            })
        );
        return {
            cart: res,
            subTotal: subT,
        };
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
            state.cart = [];
            state.cartSubtotal = 0;
            state.loading = true;
        },
        [getCart.fulfilled]: (state, action) => {
            state.cart = action.payload.cart;
            state.cartSubtotal = action.payload.subTotal;
            state.loading = false;
            toast.success("Cart fetched successfully");
        },
        [getCart.rejected]: (state) => {
            state.cart = [];
            state.cartSubtotal = 0;
            state.loading = false;
        },
    },
});

export default cartSlice.reducer;
