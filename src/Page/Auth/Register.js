import React, { Fragment, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../reducers/authSlice";
import { validEmail, validPhone, validZip } from "../../utils/regex";

const Register = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const initialState = {
        email: "",
        username: "",
        password: "",
        cpassword: "",
        firstname: "",
        lastname: "",
        city: "",
        street: "",
        number: 3,
        zipcode: "",
        geolocation: {
            lat: "-37.3159",
            long: "81.1496",
        },
        phone: "",
    };
    const [formData, setFormData] = useState(initialState);

    const {
        email,
        username,
        password,
        cpassword,
        firstname,
        lastname,
        city,
        street,
        zipcode,
        phone,
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        let errCount = 0;
        if (firstname === "") {
            toast.error("First name is required");
            errCount++;
        }
        if (lastname === "") {
            toast.error("Last name is required", "danger");
            errCount++;
        }
        if (username === "") {
            toast.error("Username is required", "danger");
            errCount++;
        }
        if (email === "") {
            toast.error("Email is required", "danger");
            errCount++;
        }
        if (!validEmail.test(email)) {
            toast.error("Enter valid email", "danger");
            errCount++;
        }
        if (password === "") {
            toast.error("Password is required", "danger");
            errCount++;
        }
        if (password !== cpassword) {
            toast.error("Password must match", "danger");
            errCount++;
        }
        if (phone === "") {
            toast.error("Phone is required", "danger");
            errCount++;
        }
        if (!validPhone.test(phone)) {
            toast.error("Please enter valid phone number", "danger");
            errCount++;
        }
        if (street === "") {
            toast.error("Street is required", "danger");
            errCount++;
        }
        if (city === "") {
            toast.error("City is required", "danger");
            errCount++;
        }
        if (zipcode === "") {
            toast.error("Zipcode is required", "danger");
            errCount++;
        }
        if (!validZip.test(zipcode)) {
            toast.error("Please enter valid zipcode number", "danger");
            errCount++;
        }
        if (errCount === 0) {
            dispatch(register(formData));
            setFormData(initialState);
        }
    };
    // Redirect if logged in
    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <Fragment>
            <h1 className="my-4 text-center">Register</h1>
            <Form onSubmit={(e) => onSubmit(e)} noValidate={true}>
                <Row>
                    <Col md={2}></Col>
                    <Col md={10}>
                        <h5>Billing details:</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="firstname">
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                name="firstname"
                                value={firstname}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                name="lastname"
                                value={lastname}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={password}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="cpassword">
                            <Form.Label>Confirm Password*</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                name="cpassword"
                                value={cpassword}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={10}>
                        <h5>Address:</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="street">
                            <Form.Label>Street*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter street"
                                name="street"
                                value={street}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city"
                                name="city"
                                value={city}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="zipcode">
                            <Form.Label>Zipcode*</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter zipcode"
                                name="zipcode"
                                value={zipcode}
                                onChange={(e) => onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}></Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div className="d-grid gap-2 mb-4">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Form>
        </Fragment>
    );
};

export default Register;
