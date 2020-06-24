import React from "react"
import Header from "./components/home/Header"
import ListResult from "./components/resultados/ListResult"
import Productos from "./components/Productos/Productos"
import SeleccionProduct from "./components/Productos/SeleccionProduct"
import Categorias from "./components/categorias/Categorias"
import Mujer from "./components/categorias/Mujer"
import Hombre from "./components/categorias/Hombre"
import Kids from "./components/categorias/Kids"
import Bebes from "./components/categorias/Bebes"
import Accesorios from "./components/categorias/Accesorios"
import Belleza from "./components/categorias/Belleza"
import Ofertas from "./components/ofertas/Ofertas"
import MisCompras from "./components/misCompras/MisCompras"
import Compra from "./components/misCompras/Compra"
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

          <Route path="/Productos" exact>
              <Productos/>
          </Route>
        
          <Route path="/resultados" exact>
            <ListResult />
          </Route>

          <Route path="/categorias" exact>
            <Categorias />
          </Route>
            <Route path="/Mujer" exact>
              <Mujer />
            </Route>
            <Route path="/Hombre" exact>
              <Hombre />
            </Route>
            <Route path="/Kids" exact>
              <Kids />
            </Route>
            <Route path="/Bebes" exact>
              <Bebes />
            </Route>
            <Route path="/Accesorios" exact>
              <Accesorios />
            </Route>
            <Route path="/belleza" exact>
            <Belleza />
          </Route>

          <Route path="/ofertas" exact>
            <Ofertas />
          </Route>

          <Route path="/misCompras" exact>
            <MisCompras />
          </Route>

          <Route path="/producto" exact>
            <SeleccionProduct />
          </Route>
          <Route path="/comprar" exact>
            <Compra />
          </Route>
      </BrowserRouter>

    </>
  )
}

export default App
