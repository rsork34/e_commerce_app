import React from "react";
import "./style/Header.css";
import shoppingCart from "../images/header/shopping-cart.png";

function Header() {
    return (
        <div id="mainHeader">
            <div id="titleContainer">
                <h1>Welcome to the e commerce app</h1>
            </div>
            <div id="shoppingCartContainer">
                <img id="shoppingCart" src={shoppingCart} alt="Shopping Cart Icon"  width="50px" height="50px" />
            </div>
        </div>
    );
}

export default Header;
