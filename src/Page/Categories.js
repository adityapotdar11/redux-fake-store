import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../reducers/categoriesSlice";

const Categories = () => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    const navigate = useNavigate();

    const viewProducts = (category) => {
        const cat = btoa(category);
        navigate("/products?data=" + cat);
    };

    return (
        <Fragment>
            <h1 className="text-center my-4">Categories</h1>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Row>
                        {!categories.loading && categories.categories ? (
                            categories.categories.map((category) => (
                                <Col md={6} className="my-3" key={category}>
                                    <Card
                                        className="cursor-pointer"
                                        onClick={() => viewProducts(category)}
                                    >
                                        <Card.Body>
                                            <Card.Title className="text-center mb-0 text-capitalize">
                                                {category}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col md={12} className="text-center">
                                <h5>No categories found.</h5>
                            </Col>
                        )}
                    </Row>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Fragment>
    );
};

export default Categories;
