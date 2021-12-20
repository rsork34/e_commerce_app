import React, { useState } from "react";
import SaleItem from "./SaleItem";
import Header from "./Header";

function Home() {
    const items = [
        {
            name: "Item 1",
            description: "Item 1 Description",
            price: 4.99,
        },
        {
            name: "Item 2",
            description: "Item 2 Description",
            price: 4.99,
        },
        {
            name: "Item 3",
            description: "Item 3 Description",
            price: 4.99,
        },
        {
            name: "Item 4",
            description: "Item 4 Description",
            price: 4.99,
        },
        {
            name: "Item 5",
            description: "Item 5 Description",
            price: 4.99,
        },
        {
            name: "Item 6",
            description: "Item 6 Description",
            price: 4.99,
        },
    ];
    // const [items, setItems] = useState(defaultItems);

    return (
        <>
            <Header/>

            <div className="itemContainer">
                {items.map((item) => (
                    <SaleItem
                        name={item.name}
                        desc={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;
