import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to="/" className="navbar-brand">
                        Fake Store
                    </Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;
