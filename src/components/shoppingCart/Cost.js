import React from 'react'

export default ({ id, nombre, precio }) => {
  return (
    <div className='cardCost-container'>
      <p className='cardCost-productName'>
        <span>{id}</span>
        {nombre}
      </p>
      <p className='cardCost-price'>${precio}</p>
    </div>
  )
}