import React from "react";
import Header from "./components/home/Header";
import ListResult from "./components/result/ListResult";
import Product from "./components/Products/Product";
import ProductChoice from "./components/Products/ProductChoice";
import Categories from "./components/home/Categories";
import Woman from "./components/categories/Woman";
import Man from "./components/categories/Man";
import Kids from "./components/categories/Kids";
import Babies from "./components/categories/Babies";
import Accessories from "./components/categories/Accessories";
import Beauty from "./components/categories/Beauty";
import Offers from "./components/offers/Offers";
import MyShopping from "./components/myShopping/MyShopping";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Buy from "./components/shoppingCart/Buy";
import Pay from "./components/shoppingCart/Pay";
import Summary from "./components/shoppingCart/Summary";
import Home from "./Home";
import "./App.css";
import Store from "./store";

import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

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
          {/* lo que esta despues del punto es lo que va a recibir. */}
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
