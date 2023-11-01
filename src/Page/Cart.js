import React, { Fragment, useEffect } from "react";
import { ShoppingBag, XCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../reducers/cartSlice";

const Cart = () => {
    const userId = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart(userId));
    }, []);
    return (
        <Fragment>
            <h1 className="text-center my-4">Cart</h1>

            <div className="cart-section mb-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th
                                        scope="col"
                                        colSpan="2"
                                        className="text-center"
                                    >
                                        Product
                                    </th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody id="cart-data">
                                <tr>
                                    <td scope="col" className="cart-icon-sec">
                                        <XCircle className="feather" />
                                    </td>
                                    <td
                                        scope="col"
                                        className="cart-img-section"
                                    >
                                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                                    </td>
                                    <td scope="col">
                                        Fjallraven - Foldsack No. 1 Backpack,
                                        Fits 15 Laptops
                                    </td>
                                    <td scope="col">$109.95</td>
                                    <td scope="col">
                                        <input
                                            type="number"
                                            value="4"
                                            className="form-control"
                                            min="1"
                                            max="10"
                                            style={{ width: "60px" }}
                                        />
                                    </td>
                                    <td scope="col">$439.8</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="cart-icon-sec">
                                        <XCircle className="feather" />
                                    </td>
                                    <td
                                        scope="col"
                                        className="cart-img-section"
                                    >
                                        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
                                    </td>
                                    <td scope="col">Mens Cotton Jacket</td>
                                    <td scope="col">$55.99</td>
                                    <td scope="col">
                                        <input
                                            type="number"
                                            value="6"
                                            className="form-control"
                                            min="1"
                                            max="10"
                                            style={{ width: "60px" }}
                                        />
                                    </td>
                                    <td scope="col">$335.94</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="cart-icon-sec">
                                        <XCircle className="feather" />
                                    </td>
                                    <td
                                        scope="col"
                                        className="cart-img-section"
                                    >
                                        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
                                    </td>
                                    <td scope="col">
                                        Mens Casual Premium Slim Fit T-Shirts{" "}
                                    </td>
                                    <td scope="col">$22.3</td>
                                    <td scope="col">
                                        <input
                                            type="number"
                                            value="1"
                                            className="form-control"
                                            min="1"
                                            max="10"
                                            style={{ width: "60px" }}
                                        />
                                    </td>
                                    <td scope="col">$22.3</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-7">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="form-control"
                                            placeholder="Coupon code"
                                        />
                                    </div>
                                    <div className="col-md-5">
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                        >
                                            Apply Coupon
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-end">
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    disabled=""
                                >
                                    Update Card
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="calculation">
                            <div className="total">Cart Totals</div>
                            <div className="subtotal-section">
                                <div className="title">Subtotal:</div>
                                <div className="amount" id="subtotal">
                                    $798.04
                                </div>
                            </div>
                            <div className="subtotal-section">
                                <div className="title">Shipping:</div>
                                <div className="free-shipping text-warning">
                                    free shipping
                                </div>
                            </div>
                            <div className="subtotal-section">
                                <div className="title">Total:</div>
                                <div className="amount" id="total">
                                    $798.04
                                </div>
                            </div>
                            <div className="d-grid mt-3">
                                <button
                                    type="button"
                                    className="btn btn-warning checkout-btn"
                                >
                                    <ShoppingBag className="feather" /> Proceed
                                    to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;
