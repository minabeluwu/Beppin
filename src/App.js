import React from "react";
import Header from "./pages/header/Header";
import Footer from "./components/footer/Footer";
import ListResult from "./pages/result/ListResult";
import Product from "./components/product/Product";
import ProductChoice from "./components/product/ProductChoice";
import Categories from "./pages/home/Categories";
import CategoriesList from "./pages/categories/CategoriesList";
import Offers from "./pages/offers/Offers";
import MyShopping from "./pages/myShopping/MyShopping";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Buy from "./pages/shoppingCart/Buy";
import Pay from "./pages/shoppingCart/Pay";
import Summary from "./pages/shoppingCart/Summary";
import Home from "./Home";
import "./App.css";
import Store from "./store";
import ErrorPage from "./components/error/ErrorPage";

import PageNotFound from "./components/error/PageNotFound";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product" component={Product} exact />
          <Route path="/result" component={ListResult} exact />
          <Route path="/categories" component={Categories} exact />
          <Route
            path="/categories/:categoria"
            component={CategoriesList}
            exact
          />
          <Route path="/offers" component={Offers} exact />
          <Route path="/myShopping" component={MyShopping} exact />
          <Route path="/productChoice/:id" component={ProductChoice} exact />
          <Route path="/shoppingCart" component={ShoppingCart} exact />
          <Route path="/buy" component={Buy} exact />
          <Route path="/pay" component={Pay} exact />
          <Route path="/summary" component={Summary} exact />
          <Route path="/error" component={ErrorPage} exact />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </Store>
  );
}

export default App;
