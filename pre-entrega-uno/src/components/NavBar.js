import React from "react";
import CartWidget from "./CartWidget";
import logoPrin from "../image/logo.svg";
import "./cartWidget.css";

function NavBar() {
  return (
    <div className="nav">
      <img className="image_logo" src={logoPrin}></img>
      <ul className="ul">
        <li>
          <a href="/">Juegos</a>
        </li>
        <li>
          <a href="/">Computadores</a>
        </li>
        <li>
          <a href="/">Portatiles</a>
        </li>
        <li>
          <a href="/">Consolas</a>
        </li>
        <li>
          <a href="/">Herramientas</a>
        </li>
        <li>
          <a href="/">Otros</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
