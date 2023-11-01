import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ShoppingBag } from "react-feather";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const auth = useSelector((state) => state.auth);
    const authLinks = (
        <Fragment>
            <Link to="/dashboard" className="navbar-brand">
                <ShoppingBag className="feather" /> Fake Store
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/products" className="nav-link">
                        Products
                    </Link>
                    <Link to="/categories" className="nav-link">
                        Categories
                    </Link>
                    <Link to="/cart" className="nav-link">
                        Cart
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Fragment>
    );
    const guestLinks = (
        <Fragment>
            <Link to="/" className="navbar-brand">
                <ShoppingBag className="feather" /> Fake Store
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Fragment>
    );
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {
                        <Fragment>
                            {auth.isAuthenticated ? authLinks : guestLinks}
                        </Fragment>
                    }
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;
