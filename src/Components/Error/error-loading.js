/* eslint-disable arrow-parens */
import React from "react";
import PropTypes from "prop-types";
import "./error-loading.css";
import { connect } from "react-redux";

const ErrorLoading = (props) => {
  return (
    <div className="error__wrapper">
      <div className="icon__wrapper">
        <i className="fas fa-times" />
      </div>
      <div className="text__wrapper">
        <p>Something went wrong...</p>
        <p>{props.errorMessage}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    errorMessage: state.beerReducer.errorMsg,
  };
};

ErrorLoading.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(ErrorLoading);
