import React from "react"
import Presentation from "./components/home/Presentation"
import Discount from "./components/home/Discount"
import Categories from "./components/home/Categories"

function Home() {
  return (
    <>
      <Presentation />
      <Discount />
      <Categories />
    </>
  )
}

export default Home