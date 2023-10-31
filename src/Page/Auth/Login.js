import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../../reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const initialState = {
        username: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { username, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        let errCount = 0;
        if (username === "") {
            toast.error("Username is required");
            errCount++;
        }
        if (password === "") {
            toast.error("Password is required");
            errCount++;
        }
        if (errCount === 0) {
            dispatch(userLogin({ username, password }));
        }
    };
    // Redirect if logged in
    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Fragment>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h1 className="my-4 text-center">Login</h1>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-4"
                            controlId="formGroupPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Fragment>
    );
};

export default Login;
