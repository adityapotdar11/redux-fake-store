import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "react-feather";

const Home = () => {
    return (
        <Fragment>
            <Row>
                <Col md={12} className="text-center my-7-rem btn-sec">
                    <Link to="/login" className="btn btn-primary btn-lg">
                        <LogIn className="feather" /> Login
                    </Link>{" "}
                    <Link to="/register" className="btn btn-secondary btn-lg">
                        <UserPlus className="feather" /> Register
                    </Link>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Home;
