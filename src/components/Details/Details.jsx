import { useParams } from "react-router";
import styles from "./Details.module.css";
import { useEffect, useState } from "react";
import MatchedItemsList from "../Matched-Items-List/MatchedItemsList";

export default function Details() {

    // itemId e samo za kliknatiq product !

    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [matchProductIDs, setmatchProductIDs] = useState([]);

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

    for (const matchItemObj of matchProductIDs) {

        availableColors.push(matchItemObj.color);
    }

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
                    <span>Налични цветове: {availableColors.map(color => <li>{color}</li>)}</span>
                    <div className={styles["mached-items-list-wrapper"]}>
                        {matchProductIDs.map((matchItem) => (
                            <MatchedItemsList
                                key={matchItem.itemId}
                                id={matchItem.itemId}
                                item={matchItem}
                            />
                        ))}
                    </div>
                </div>

                {item.categoryIds[1] == 'clothing' ? (
                    <select className={styles["size-select-details"]} value={item.size}>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                ) : item.categoryIds?.[1] === 'shoes' ? (
                    <select className={styles["size-select-details"]} value={item.size}>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                    </select>
                ) : null}

                <div className={styles["buttons-wrapper"]}>
                    <button className={styles["add-to-bag"]}>Add To Bag</button>
                    <button className={styles["add-to-wishlist"]}><i className={styles["fa-regular fa-heart"]}></i></button>
                </div>

            </div>

        </section>
    );

}

