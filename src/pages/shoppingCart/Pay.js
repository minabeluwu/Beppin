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
              <h1>Tipo de pago</h1>

              <form>
                <label for="" className="invoiceData-label">account number</label>
                <input type="text" className="invoiceData-text"/>

                <label for="" className="invoiceData-label">verification code</label>
                <input type="text" className="invoiceData-text"/>
              </form>

              <p>date <br/> 18/07/2020</p>
              <p>Nombre <br/> Ana Maria</p>

              <Link to={`/summary`}>continue</Link>
            </div>

      </section>
    </>
  )
}