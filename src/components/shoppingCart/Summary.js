import React from "react"
import {
  Link
} from 'react-router-dom'
import "../../styles/buy.css"

export default () => {

  return (
    <>
      <section className="buy">
            <div>
                <h1>purchase data</h1>

                <div>
                    <h2>Product</h2>

                    <ul>
                        <li>name of the product</li>
                    </ul>
                </div>

                <div>
                    <p>Total price</p>
                    <p>$1234</p>
                </div>
            </div>

            <div>
                <h1>payment details</h1>


            </div>

            <div>
                <h1>invoice data</h1>
            </div>

            <div>
                <a href="#">go out</a>
                <a href="#">Continue</a>
            </div>
      </section>
    </>
  )
}