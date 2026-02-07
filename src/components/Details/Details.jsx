import { useParams } from "react-router";
import "./Details.css";
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
        <section className="section-wrapper">
            <div className="media">
                <img src={item.images[0]} alt={item.name} />
            </div>

            <div className="section-details">
                <div className="header-details">
                    <h2>{item.brand}</h2>
                    <h3>{item.name}</h3>
                </div>

                <div className="price-details">
                    <p>{item.price}€</p>
                </div>

                <div className="color-details">
                    <p>Color: {item.color}</p>
                    <span>Налични цветове: {availableColors.map(color => <li>{color}</li>)}</span>
                    <div className="mached-items-list-wrapper">
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
                    <select className="size-select-details" value={item.size}>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                ) : item.categoryIds?.[1] === 'shoes' ? (
                    <select className="size-select-details" value={item.size}>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                    </select>
                ) : null}

                <div className="buttons-wrapper">
                    <button className="add-to-bag">Add To Bag</button>
                    <button className="add-to-wishlist"><i className="fa-regular fa-heart"></i></button>
                </div>

            </div>

        </section>
    );

}

