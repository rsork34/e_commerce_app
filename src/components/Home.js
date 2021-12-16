import React, { useState } from "react";
import SaleItem from "./SaleItem";
import Header from "./Header";

function Home(props) {
    const defaultItems = [
        {
            name: "Item 1",
            description: "Item 1 Description",
            price: 4.99
        },
        {
            name: "Item 2",
            description: "Item 2 Description",
            price: 4.99
        },
        {
            name: "Item 3",
            description: "Item 3 Description",
            price: 4.99
        },
        {
            name: "Item 4",
            description: "Item 4 Description",
            price: 4.99
        },
    ];
    const [items, setItems] = useState(defaultItems);

    return (
        <>
            <Header />
            <h1>Welcome to the e commerce app</h1>

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
