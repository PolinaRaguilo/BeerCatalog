/* eslint-disable arrow-parens */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, showCatalog, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      showCatalog ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  showCatalog: PropTypes.bool.isRequired,
};
export default PrivateRoute;
