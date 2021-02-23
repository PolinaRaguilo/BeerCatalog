import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/header/header";
import CatalogPage from "./Views/catalog-page/catalog-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={CatalogPage}/>
      </BrowserRouter>
    </>
  );
}

export default App;
