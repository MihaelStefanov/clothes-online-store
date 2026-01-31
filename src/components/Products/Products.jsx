import "./Products.css";
import { useEffect, useState } from "react"
import Item from "../Item/Item";

const BASE_URL = 'https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/items.json';

export default function Products() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(BASE_URL);
                const result = await response.json();

                setItems(Object.entries(result));
                console.log(result);

            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);

    return (
        <div className="container">
            {items.map(([id, item]) => (                
                <Item key={id} id={id} img={item.images[0]}
                    title={item.name}
                    price={item.price} />
            ))}
        </div>
    )

}