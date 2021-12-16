import React from "react";
import "./style/SaleItem.css";

function SaleItem(props) {
    return (
        <div className="saleItem">
            <div className="saleItemHeader">
                <p>ITEM {props.name}</p>
            </div>
            <p>Description: {props.desc}</p>
            <p>Price: ${props.price}</p>
        </div>
    );
}

export default SaleItem;
