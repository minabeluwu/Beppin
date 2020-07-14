import React from 'react'

export default ({ id, nombre, precio }) => {
  return (
    <div className='cardCost-container'>
      <p className='cardCost-productName'>
        <span>{id}</span>
        {nombre}
      </p>
<<<<<<< HEAD
      <p className='cardCost-price'>${precio}</p>
    </div>
  )
}
=======
      <p className='cardCost-price'>{precio}</p>
    </div>
  )
}
>>>>>>> 1762f7221bc2e56dbc5b807fb47cb7189ae93e83
