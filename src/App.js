import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Page/Home";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" Component={Home} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
