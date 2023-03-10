import React from "react";
import logo from "../image/cart.svg";
import "./cartWidget.css"

function CartWidget() {
  return (
    <div className="cart">
      <img src={logo}></img>
      <div>0</div>
    </div>
  );
}

export default CartWidget;
