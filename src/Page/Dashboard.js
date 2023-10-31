import React, { Fragment } from "react";
import { AlignJustify, Box } from "react-feather";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <Fragment>
            <div className="button-sec text-center">
                <Link to="/products" className="btn btn-primary btn-lg">
                    <Box className="feather" /> View all Products
                </Link>
                <Link to="/categories" className="btn btn-light btn-lg">
                    <AlignJustify className="feather" /> View all categories
                </Link>
            </div>
        </Fragment>
    );
};

export default Dashboard;
