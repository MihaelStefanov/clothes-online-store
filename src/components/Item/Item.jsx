import "./Item.css";
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
        <div className="product-item">
            <Link to={`/items/${id}/details`}>
            <div className="product-item-image-wrapper">
                <img src={img} alt={title} />
                <button
                    className="add-to-cart-btn"
                    onClick={onAddToCart}
                >
                    Добави в кошницата
                </button>
            </div>
            <div className="product-item-title-wrapper">
                <h3>{title}</h3>
                <p className="price">{price}</p>
            </div>
            </Link>
        </div>
    )

}