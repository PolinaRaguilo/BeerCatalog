/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainListItems from "../../Components/main-list-items/main-list-items";
import { fetchBeers } from "../../Redux/actions/beerAction";

class CatalogPage extends Component {
  componentDidMount = () => {
    this.props.getAllBeers();
  };

  render() {
    return (
      <>
        <MainListItems />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBeers: () => dispatch(fetchBeers()),
  };
};

CatalogPage.propTypes = {
  getAllBeers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CatalogPage);
