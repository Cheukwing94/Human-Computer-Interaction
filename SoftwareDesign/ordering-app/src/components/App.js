import React, { useState } from "react";
import HomePage from "./home/HomePage";
import Menu from "./menu/Menu";
import Sidebarr from "./navBar/Sidebarr";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Cart from "./cart/Cart";
import Order from "./order/Order";

const App = () => {

  const [basketNo, setBasketNo] = useState(0)

  const addBasketNumber = () => {
    setBasketNo(basketNo + 1)
  }

  const removeBasketNumber = () => {
    setBasketNo(0)

  }

  const minusBasketNumber = () => {
    setBasketNo(basketNo - 1)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route element={<Sidebarr basketNo={basketNo} />}>
          <Route path="menu" element={<Menu addNumber={addBasketNumber} />} />
          <Route path="cart" element={<Cart clearBasket={removeBasketNumber} removeBasket={minusBasketNumber} />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
