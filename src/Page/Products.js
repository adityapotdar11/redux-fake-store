import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllProducts,
    getProductsByCategory,
} from "../reducers/productsSlice";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const category = queryParams.get("data");

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (category) {
            dispatch(getProductsByCategory(atob(category)));
        } else {
            dispatch(getAllProducts());
        }
    }, [category]);
    return (
        <Fragment>
            <h1 className="text-center my-4">Products</h1>
            <Row className="products">
                {!products.loading && products.products ? (
                    products.products.map((product) => (
                        <Col md={3} className="my-2" key={btoa(product.id)}>
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>
                                        {product.title.slice(0, 25)}
                                        {product.title.length > 25 ? "..." : ""}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <b>Price: </b> ${product.price}
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <b>Category: </b> {product.category}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {product.description.slice(0, 97)}
                                        {product.description.length > 97
                                            ? "..."
                                            : ""}
                                    </Card.Text>
                                    <Link
                                        to={"/product?data=" + btoa(product.id)}
                                        className="card-link"
                                    >
                                        View Product
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col md={12}>
                        <h5 className="text-center">No products found</h5>
                    </Col>
                )}
            </Row>
        </Fragment>
    );
};

export default Products;
