import React from "react"
import Presentation from "./components/home/Presentation"
import Promotions from "./components/home/Promotions"
import Discount from "./components/home/Discount"
import Categories from "./components/home/Categories"

function Home() {
  return (
    <>
      <Presentation />
      <Promotions />
      <Discount />
      <Categories />
    </>
  )
}

export default Home