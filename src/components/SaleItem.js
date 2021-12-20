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
                <div className="saleItemBodyDesc">
                    <p>
                        <strong>Description:</strong> {props.desc}
                    </p>
                    <p>
                        <strong>Price:</strong> ${props.price}
                    </p>
                </div>
                <div className="saleItemBodyImgDiv">
                    <img
                        className="saleItemBodyImg"
                        src={DefaultImage}
                        alt="Default Item Image"
                    />
                </div>
            </div>
        </div>
    );
}

export default SaleItem;
