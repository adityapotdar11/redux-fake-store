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
                    </Routes>
                </Container>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
