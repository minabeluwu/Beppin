<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/shoppingCart.css';
import Product from './product';
import ShoppingCartAPIResponse from '../API/ShoppingCartAPIResponse';
import Cost from './Cost'
import OverallPrice from './OverallPrice';

export default () => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let ShoppingCartAPITotal = [];

    ShoppingCartAPIResponse.productList.forEach( (producto) => {
      const precio = producto.precio
      ShoppingCartAPITotal.push(precio)
    })

    const sumaTotal = ShoppingCartAPITotal.reduce((a, b) => a + b)

    setTotal(sumaTotal)
  }, [])

=======
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/shoppingCart.css'
import Product from './Product'
import ShoppingCartAPIResponse from '../API/ShoppingCartAPIResponse'
import Cost from './Cost'

export default () => {
>>>>>>> 1762f7221bc2e56dbc5b807fb47cb7189ae93e83
  return (
    <>
      <section className='shoppingCart'>
        <div className='shoppingCart-shoppingList'>
          {ShoppingCartAPIResponse.productList.map(
            ({ id, nombre, precio, img, descripcion }) => (
              <Product
                id={id}
                precio={precio}
                imgSrc={img}
                nombre={nombre}
                descripcion={descripcion}
              />
            )
          )}
        </div>

        <div className='cardCost'>
          {ShoppingCartAPIResponse.productList.map(({ nombre, id, precio }) => (
<<<<<<< HEAD
              <Cost nombre={nombre} id={id} precio={precio} />
          ))}

          <OverallPrice allPrice precio={total}/>
        </div>  
      

      </section>

=======
            <Cost nombre={nombre} id={id} precio={precio} />
          ))}
        </div>
      </section>
>>>>>>> 1762f7221bc2e56dbc5b807fb47cb7189ae93e83
      <div className='buttons-container'>
        <div className='buttons'>
          <a href='#' className='button'>
            Cancel
          </a>
<<<<<<< HEAD
          
          {/* Este boton anula todas las compras agregadas, hace un reset. */}
          <Link to={`/Buy`} className='button'> 
=======
          {/* Este boton anula todas las compras agregadas, hace un reset. */}
          <Link to={`/Buy`} className='button'>
>>>>>>> 1762f7221bc2e56dbc5b807fb47cb7189ae93e83
            Buy
          </Link>
        </div>
      </div>
    </>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> 1762f7221bc2e56dbc5b807fb47cb7189ae93e83
