import React from "react";
import "./style/SaleItem.css";

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
}
const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

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
                        src={images[`${props.imgPath}`]}
                        alt="Default Item"
                    />
                </div>
            </div>
        </div>
    );
}

export default SaleItem;
