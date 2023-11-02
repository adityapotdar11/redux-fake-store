import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
const cookies = new Cookies();

axios.defaults.baseURL = process.env.API_BASE_URL; // eslint-disable-line

const initialState = {
    isAuthenticated: cookies.get("x-auth-token") ? true : false,
    loading: cookies.get("x-auth-token") ? false : true,
    user: cookies.get("x-auth-token") ? 1 : 0,
};

const config = {
    headers: {
        "Content-type": "application/json",
    },
};

export const userLogin = createAsyncThunk(
    "user/login",
    async (payload, thunkAPI) => {
        const res = await new axios.post(
            "/auth/login",
            payload,
            config,
            thunkAPI
        );
        return res;
    }
);

export const register = createAsyncThunk(
    "user/register",
    async (formData, thunkAPI) => {
        const payload = {
            email: formData.email,
            username: formData.email,
            password: formData.password,
            name: {
                firstname: formData.firstname,
                lastname: formData.lastname,
            },
            address: {
                city: formData.city,
                street: formData.street,
                number: formData.number,
                zipcode: formData.number,
                geolocation: formData.geolocation,
            },
            phone: formData.phone,
        };
        const res = await new axios.post("/users", payload, config, thunkAPI);
        return res;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            cookies.remove("x-auth-token");
            state.loading = false;
            state.isAuthenticated = false;
            state.user = 0;
            toast.success("Logged out");
        },
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = 1;
            cookies.set("x-auth-token", action.payload.data.token);
            toast.success("Login successfull");
        },
        [userLogin.rejected]: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = 0;
            toast.error("Invalid credentials");
        },
        [register.pending]: (state) => {
            state.loading = true;
        },
        [register.fulfilled]: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = 0;
            toast.success("Register successfull");
        },
        [register.rejected]: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = 0;
            toast.success("Register successfull");
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
