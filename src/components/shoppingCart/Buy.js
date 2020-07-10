import React from "react"
import {
  Link
} from 'react-router-dom'
import "../../styles/buy.css"

export default () => {

  return (
    <>
      <section className="buy">
            <div className="summaryBuy">
              <h1 className="summaryBuy-title">Purchase summary</h1>
              <div className="summaryBuy-container">
                  <h2 className="count">Count</h2>
                  <p className="count-paragraph">
                    <span>id - Name Of The Product</span>
                    <br/>
                    $12100
                  </p>

                  <p className="count-paragraph">
                    <span>overall price</span>
                    <br/>
                    $432000
                  </p>
              </div>
            </div>

            <div className="midPayment">
              <h2 className="midPayment-title">Payment method</h2>
                <form action="" className="midPayment-form">
                  <input type="checkbox" className="midPayment-checkbox"/>
                  <label for="" className="midPayment-label">Visa</label>

                  <input type="checkbox" className="midPayment-checkbox" />
                  <label for="" className="midPayment-label">Debito</label>

                  <input type="checkbox" className="midPayment-checkbox" />
                  <label for="" className="midPayment-label">Master</label>

                  <input type="checkbox" className="midPayment-checkbox" />
                  <label for="" className="midPayment-label">Sele</label>
                </form>
            </div>
            <div className="invoiceData">
              <h2 className="invoiceData-title">Payment method</h2>
              
              <form className="invoiceData-form">
                <label for="" className="invoiceData-label">Name</label>
                <input type="text" className="invoiceData-text"/>

                <label for="" className="invoiceData-label">address</label>
                <input type="text" className="invoiceData-text"/>

                <label for="" className="invoiceData-label">Number</label>
                <input type="text" className="invoiceData-text"/>

                <label for="" className="invoiceData-label">Email</label>
                <input type="text" className="invoiceData-text"/>

                <Link to={`/Pay`}>
                  <input type="submit" value="procesar" className="invoiceData-buttom"/>
                </Link>
              </form>          
            </div>
      </section>
    </>
  )
}

