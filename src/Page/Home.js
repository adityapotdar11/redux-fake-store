import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "react-feather";

const Home = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col md={12} className="text-center my-7-rem">
                        <Link className="btn btn-primary btn-lg">
                            <LogIn className="feather" /> Login
                        </Link>{" "}
                        <Link className="btn btn-light btn-lg">
                            <UserPlus className="feather" /> Register
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Home;
