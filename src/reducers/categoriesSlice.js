import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    categories: [],
    loading: true,
};

export const getAllCategories = createAsyncThunk(
    "products/categories",
    async (thunkAPI) => {
        const res = await new axios.get("/products/categories", thunkAPI);
        return res;
    }
);

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCategories.pending]: (state) => {
            state.loading = true;
            state.categories = [];
        },
        [getAllCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload.data;
            toast.success("Categories fetched successfully");
        },
        [getAllCategories.rejected]: (state) => {
            state.loading = false;
            state.categories = [];
            toast.error("Categories not found");
        },
    },
});

export default categoriesSlice.reducer;
