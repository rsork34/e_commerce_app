import React from "react";
import "./style/Header.css";

function Header(props) {
    return (
        <div id="mainHeader">
            <div id="titleContainer">
                <h1>Welcome to the e commerce app</h1>
            </div>
            <div id="shoppingCartContainer">
                <p>Items in Cart: {props.numItems}</p>
                <img id="shoppingCart" src={shoppingCart} alt="Shopping Cart Icon"  width="50px" height="50px" />
            </div>
        </div>
    );
}

export default Header;
