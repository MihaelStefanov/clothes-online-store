import styles from "./Item.module.css";
import { Link } from "react-router";

export default function Item({
    key,
    id,
    img,
    title,
    price,
    onAddToCart
}) {

    return (
        <div className={styles["product-item"]}>
            <Link to={`/items/${id}/details`}>
            <div className={styles["product-item-image-wrapper"]}>
                <img src={img} alt={title} />
                <button
                    className={styles["add-to-cart-btn"]}
                    onClick={onAddToCart}
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