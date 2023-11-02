import React, { Fragment, useEffect } from "react";
import { ShoppingBag, XCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../reducers/cartSlice";

const Cart = () => {
    const userId = useSelector((state) => state.auth.user);
    const cartData = useSelector((state) => state.cart);
    const { cart, cartSubtotal, loading } = cartData;
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
                                {!loading && cart ? (
                                    cart.map((item) => (
                                        <tr key={btoa(item.productId)}>
                                            <td
                                                scope="col"
                                                className="cart-icon-sec"
                                            >
                                                <XCircle className="feather" />
                                            </td>
                                            <td
                                                scope="col"
                                                className="cart-img-section"
                                            >
                                                <img src={item.image} />
                                            </td>
                                            <td scope="col">{item.title}</td>
                                            <td scope="col">${item.price}</td>
                                            <td scope="col">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    className="form-control"
                                                    min="1"
                                                    max="10"
                                                    style={{ width: "60px" }}
                                                />
                                            </td>
                                            <td scope="col">
                                                ${item.totPrice}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6}>
                                            <h5 className="text-center">
                                                No data found
                                            </h5>
                                        </td>
                                    </tr>
                                )}
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
                                    disabled="true"
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
                                    ${!loading ? cartSubtotal : 0}
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
                                    ${!loading ? cartSubtotal : 0}
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
