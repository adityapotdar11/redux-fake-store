import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../reducers/productsSlice";
import { Navigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { ShoppingCart } from "react-feather";

const SingleProduct = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const prodId = queryParams.get("data");

    if (!prodId) {
        <Navigate to="/products" />;
    }

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(atob(prodId)));
    }, []);

    return (
        <Fragment>
            <div className="product-sec my-4">
                <Row>
                    {!products.loading && products.product ? (
                        <Fragment>
                            <Col md={5}>
                                <img
                                    className="product-img"
                                    src={products.product.image}
                                />
                            </Col>
                            <Col md={7} className="ps-3">
                                <h2>{products.product.title}</h2>
                                <div className="product-desc">
                                    {products.product.description}
                                </div>
                                <div className="text-primary fw-bold product-price">
                                    ${products.product.price}
                                </div>
                                <div className="category">
                                    <b>Category: </b>
                                    <span className="text-capitalize">
                                        {products.product.category}
                                    </span>
                                </div>

                                <Row className="mt-3">
                                    <Col md={12} className="d-grid">
                                        <Button variant="light">
                                            <ShoppingCart className="feather" />{" "}
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h5 className="text-center">No product found</h5>
                        </Fragment>
                    )}
                </Row>
            </div>
        </Fragment>
    );
};

export default SingleProduct;
