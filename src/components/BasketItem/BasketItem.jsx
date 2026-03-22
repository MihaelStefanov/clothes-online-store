import useWishlist from "../../hooks/customHookWishlist/useWishlist";
import styles from "./BasketItem.module.css";

export default function BasketItem({
    item,
    itemId,
    user,
    setUser,
}) {

    const actions = {
       wishlist: 'wishlist'
    };

    const saveItemHandler = useWishlist(itemId, user, setUser, actions['wishlist']);
    
    const isWishlisted = user?.wishlist?.includes(itemId);

    return (

        <div className={styles['wrapper-item']}>

            <div className={styles['media']}>
                <button className={styles["add-to-wishlist"]} onClick={saveItemHandler}><i className={
                    isWishlisted
                        ?
                        "fa-solid fa-heart"
                        :
                        "fa-regular fa-heart"}></i></button>
                <img src={item.images[0]} alt="" />
            </div>

            <div>
                <h3>{item.name}</h3>
                <p>{item.categoryIds[2]}</p>
                <p>{item.size}</p>
                <p>{item.color}</p>
            </div>

            <button className={styles["remove-basket-btn"]} > <i className={"fa-solid fa-trash"}></i></button>

            <div className={styles['item-price']}>
                <p>{item.price} $</p>
            </div>
        </div>
    )
}