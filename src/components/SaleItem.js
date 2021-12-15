import React from "react";
import "./style/SaleItem.css";

function SaleItem(props) {
    return (
        <div class="SaleItem">
            <p>ITEM {props.name}</p>
            <p>Description: {props.desc}</p>
            <p>Price: ${props.price}</p>
        </div>
    );
}

export default SaleItem;
