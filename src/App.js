/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Authorization from "./Components/Authorization/authorization";
import DetailsPage from "./Components/details-page/details-page";
import Header from "./Components/header/header";
import CatalogPage from "./Views/catalog-page/catalog-page";
import FavoritePage from "./Views/favorite-page/favorite-page";
import PrivateRoute from "./Components/private-route/private-route";
import RegistrationPage from "./Components/Registration/Registration";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <PrivateRoute
            exact
            path="/beer"
            showCatalog={this.props.isLogged}
            component={CatalogPage}
          />
          <Route exact path="/" component={Authorization} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route path="/beer/:id" component={DetailsPage} />
          <Route exact path="/registration" component={RegistrationPage} />
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.authReducer.isLogin,
  };
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);
