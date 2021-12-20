import React from "react";
import "./style/SaleItem.css";
import DefaultImage from "../images/default-img.jpg";

function SaleItem(props) {
    return (
        <div className="saleItem">
            <div className="saleItemHeader">
                <p>ITEM {props.name}</p>
            </div>
            <div className="saleItemBody">
                <p>Description: {props.desc}</p>
                <p>Price: ${props.price}</p>
                <img id="shoppingCart" src={DefaultImage} alt="Default Item Image"/>
            </div>
        </div>
    );
}

export default SaleItem;
