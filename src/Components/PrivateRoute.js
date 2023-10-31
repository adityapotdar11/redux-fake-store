import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const auth = useSelector((state) => state.auth);

    return auth.isAuthenticated && !auth.loading ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" />
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired,
};

export default PrivateRoute;
