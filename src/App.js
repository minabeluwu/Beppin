import React from "react";
import Header from "./pages/header/Header";
import ListResult from "./pages/result/ListResult";
import Product from "./components/product/Product";
import ProductChoice from "./components/product/ProductChoice";
import Categories from "./pages/home/Categories";

import Woman from "./pages/categories/Woman";
import Man from "./pages/categories/Man";
import Kids from "./pages/categories/Kids";
import Babies from "./pages/categories/Babies";
import Accessories from "./pages/categories/Accessories";
import Beauty from "./pages/categories/Beauty";

import Offers from "./pages/offers/Offers";
import MyShopping from "./pages/myShopping/MyShopping";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Buy from "./pages/shoppingCart/Buy";
import Pay from "./pages/shoppingCart/Pay";
import Summary from "./pages/shoppingCart/Summary";
import Home from "./Home";
import "./App.css";
import Store from "./store";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/product" exact>
            <Product />
          </Route>

          <Route path="/result" exact>
            <ListResult />
          </Route>

          <Route path="/categories" exact>
            <Categories />
          </Route>

          <Route path="/woman" exact>
            <Woman />
          </Route>
          <Route path="/man" exact>
            <Man />
          </Route>
          <Route path="/kids" exact>
            <Kids />
          </Route>
          <Route path="/babies" exact>
            <Babies />
          </Route>
          <Route path="/accessories" exact>
            <Accessories />
          </Route>
          <Route path="/beauty" exact>
            <Beauty />
          </Route>

          <Route path="/offers" exact>
            <Offers />
          </Route>

          <Route path="/myShopping" exact>
            <MyShopping />
          </Route>
          <Route path="/productView/:id" component={ProductChoice} exact />

          <Route path="/shoppingCart" exact>
            <ShoppingCart />
          </Route>
          <Route path="/buy" exact>
            <Buy />
          </Route>
          <Route path="/pay" exact>
            <Pay />
          </Route>
          <Route path="/summary" exact>
            <Summary />
          </Route>
        </Switch>
      </BrowserRouter>
    </Store>
  );
}

export default App;
