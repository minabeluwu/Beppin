import React from 'react'
import {Link} from 'react-router-dom' 

export default ({ img, id, precio, descripcion }) => {
    
  return (
    <>
        <Link to={`/productView/${id}`} className="promotions-link">
            <img src={img} alt=" " className="promotions-img" />
        </Link>

        <p className="promociones-content">
            <span>${precio}</span>
            <br />{descripcion}
        </p>

    </>
  )
}   

