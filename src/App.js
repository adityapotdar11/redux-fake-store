import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Page/Home";
import Login from "./Page/Auth/Login";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { store } from "./store";
import Toaster from "./Components/Toaster";
import Register from "./Page/Auth/Register";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Page/Dashboard";
import Categories from "./Page/Categories";
import Products from "./Page/Products";
import SingleProduct from "./Page/SingleProduct";
import Cart from "./Page/Cart";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Container>
                    <Toaster />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/login" Component={Login} />
                        <Route path="/register" Component={Register} />
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/categories"
                            element={
                                <PrivateRoute>
                                    <Categories />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/products"
                            element={
                                <PrivateRoute>
                                    <Products />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/product"
                            element={
                                <PrivateRoute>
                                    <SingleProduct />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <PrivateRoute>
                                    <Cart />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Container>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
