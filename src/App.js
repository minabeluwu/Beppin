import React from "react"
import Header from "./components/home/Header"
import ListResult from "./components/result/ListResult"
import Product from "./components/Products/Product"
import ProductChoice from "./components/Products/ProductChoice"
import Categories from "./components/home/Categories"
import Woman from "./components/categories/Woman"
import Man from "./components/categories/Man"
import Kids from "./components/categories/Kids"
import Babies from "./components/categories/Babies"
import Accessories from "./components/categories/Accessories"
import Beauty from "./components/categories/Beauty"
import Offers from "./components/offers/Offers"
import MyShopping from "./components/myShopping/MyShopping"
import ShoppingCart from "./components/shoppingCart/ShoppingCart"
import Home from "./Home"
import "./App.css"

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route> 
        </Switch>

          <Route path="/product" exact>
              <Product/>
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

          <Route path="/productView" exact> {/* productos */}
            <ProductChoice />
          </Route>

          <Route path="/shoppingCart" exact> {/* productos */}
            < ShoppingCart/>
          </Route>

      </BrowserRouter>

    </>
  )
}

export default App
