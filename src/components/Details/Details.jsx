import { useParams } from "react-router";
import styles from "./Details.module.css";
import { useEffect, useState } from "react";
import MatchedItemsList from "../Matched-Items-List/MatchedItemsList";

export default function Details() {

    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [matchProductIDs, setmatchProductIDs] = useState([]);

    console.log(`current item ig ?`, item.color);


    const currentProductID = item.productId;

    useEffect(() => {
        fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}.json`)
            .then(response => response.json())
            .then(result => setItem(result))
            .catch(err => alert(err.message));

    }, [itemId]);

    useEffect(() => {
        fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/items.json`)
            .then(response => response.json())
            .then(result => {
                const matchesArr = [];
                Object.entries(result).forEach(([itemId, itemProps]) => {
                    if (itemProps.productId === currentProductID) {
                        matchesArr.push({ itemId, ...itemProps })
                    }
                })

                setmatchProductIDs(matchesArr);
            })
            .catch(err => alert(err.message));
    }, [currentProductID]);

    const availableColors = [];
    const availableSizes = [];

    for (const matchItemObj of matchProductIDs) {
        if (matchItemObj.color === item.color) {
            availableSizes.push(matchItemObj.size);
        }
    }

    console.log(`availableSizes`, availableSizes);


    

    const uniqueItemsColors = [...new Map(matchProductIDs.map(i=> [i.color, i])).values()];

    



    console.log(`??`, availableColors);


    if (!item.images) {
        return <p>Loading...</p>;
    }

    return (
        <section className={styles["section-wrapper"]}>
            <div className={styles["media"]}>
                <img src={item.images[0]} alt={item.name} />
            </div>

            <div className={styles["section-details"]}>
                <div className="header-details">
                    <h2>{item.brand}</h2>
                    <h3>{item.name}</h3>
                </div>

                <div className={styles["price-details"]}>
                    <p>{item.price}€</p>
                </div>

                <div className={styles["color-details"]}>
                    <p>Color: {item.color}</p>
                    <span>Налични цветове: {uniqueItemsColors.map(item => <li>{item.color}</li>)}</span>
                    <div className={styles["mached-items-list-wrapper"]}>
                        {uniqueItemsColors.map((matchItem) => (
                            matchItem.color !== item.color && (
                                <MatchedItemsList
                                    key={matchItem.itemId}
                                    id={matchItem.itemId}
                                    item={matchItem}
                                />
                            )
                        )
                        )}

                    </div>
                </div>

                <select className={styles["size-select-details"]} value={item.size}>
                    {availableSizes.map(size => <option value >{size}</option>)}
                </select>

                <div className={styles["buttons-wrapper"]}>
                    <button className={styles["add-to-bag"]}>Add To Bag</button>
                    <button className={styles["add-to-wishlist"]}><i className={"fa-regular fa-heart"}></i></button>
                </div>

            </div>

        </section>
    );

}

