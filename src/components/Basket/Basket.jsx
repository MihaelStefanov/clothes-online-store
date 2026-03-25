import { useEffect, useState } from "react";
import BasketItem from "../BasketItem/BasketItem";
import styles from "./Basket.module.css";

export default function Basket({
    user,
    setUser,
}) {

    const [item, setItem] = useState([]);

    const itemId = '-OkAkT-yjNeQsclJrWmU';

    useEffect(() => {

        // fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users/${user.key}/basket.json`)
        // .then(response => response.json())
        // .then()


        fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}.json`)
            .then(response => response.json())
            .then(item => setItem(item))
            .catch(err => console.error(err.message));
    }, []);

    console.log(`Basket`, item.name);

    if (!item.name) return <p>Loading...</p>;

    return (
        <div className={styles['wrapper-basket']}>

        <BasketItem
        item={item}
        itemId={itemId}
        user={user}
        setUser={setUser} 
        />
        
        </div>
    
    )

}