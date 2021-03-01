/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DetailsPage from "./Components/details-page/details-page";
import Header from "./Components/header/header";
import CatalogPage from "./Views/catalog-page/catalog-page";
import FavoritePage from "./Views/favorite-page/favorite-page";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CatalogPage} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route path="/beer/:id" component={DetailsPage} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
