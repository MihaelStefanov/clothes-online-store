import styles from "./Item.module.css";
import { Link } from "react-router";
import useWishlist from "../../hooks/customHookWishlist/useWishlist";
import { useState } from "react";

export default function Item({
    key,
    id,
    img,
    title,
    price,
    user,
    setUser,
    onAddToCart,
    onRemove,
    isInWishlist
}) {

    const actions = {
        wishlist: 'wishlist',
        basket: 'basket',
    };

    const saveItemHandler = useWishlist(id, user, setUser,  actions['wishlist'], onRemove);

    const toBasketItemHandler = useWishlist(id, user, setUser, actions['basket'], onRemove);

    const isWishlisted = user?.wishlist?.includes(id);

    if (!isInWishlist) {
        isInWishlist = false;
    }

    return (
        <div className={styles["product-item"]}>
            {isInWishlist ?
                <button className={styles["wishlist-remove-button"]} onClick={saveItemHandler}><i className={"fa-solid fa-x"}></i></button>
                :
                <button className={styles["add-to-wishlist"]} onClick={saveItemHandler}><i className={
                    isWishlisted
                        ?
                        "fa-solid fa-heart"
                        :
                        "fa-regular fa-heart"}></i></button>
            }
            <Link to={`/items/${id}/details`}>
                <div className={styles["product-item-image-wrapper"]}>
                    <img src={img} alt={title} />
                    <button
                        className={styles["add-to-cart-btn"]}
                        onClick={toBasketItemHandler}
                    >
                        Добави в кошницата
                    </button>
                </div>
                <div className={styles["product-item-title-wrapper"]}>
                    <h3>{title}</h3>
                    <p className={styles["price"]}>{price}</p>
                </div>
            </Link>
        </div>
    )

}