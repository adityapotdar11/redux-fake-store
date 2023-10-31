import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../reducers/productsSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { ShoppingCart } from "react-feather";
import { addToCart } from "../reducers/cartSlice";

const SingleProduct = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const prodId = queryParams.get("data");

    if (!prodId) {
        <Navigate to="/products" />;
    }

    const products = useSelector((state) => state.products);
    const userId = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(atob(prodId)));
    }, []);

    const navigate = useNavigate();

    const onclick = () => {
        let date = new Date().toISOString();
        date = date.split("T")[0];
        const payload = {
            userId,
            date,
            products: [
                {
                    productId: atob(prodId),
                    quantity: 1,
                },
            ],
        };
        dispatch(addToCart(payload));
        navigate("/cart");
    };

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
                                        <Button
                                            variant="light"
                                            onClick={() => onclick()}
                                        >
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
