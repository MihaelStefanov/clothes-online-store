import useWishlist from "../../hooks/customHookWishlist/useWishlist";
import styles from "./BasketItem.module.css";

export default function BasketItem({
    item,
    user,
    setUser,
}) {

    console.log(`basketItem user: `, user, item);
    
    // const [id, ] = item;
    // console.log(`item id basketItem: `, id);
    
    // const saveItemHandler = useWishlist(id, user, setUser );
    //    const isWishlisted = user?.wishlist?.includes(id);



    return (

        <div className={styles['wrapper-item']}>

            {/* <button className={styles["add-to-wishlist"]} onClick={saveItemHandler}><i className={
                isWishlisted
                    ?
                    "fa-solid fa-heart"
                    :
                    "fa-regular fa-heart"}></i></button> */}
            <div className={styles['media']}>
                <img src={item.images[0]} alt="" />
            </div>

            <div>
                <h3>{item.name}</h3>
                <p>{item.categoryIds[2]}</p>
                <p>{item.size}</p>
                <p>{item.color}</p>
            </div>

            <div className={styles['item-price']}>
                <p>{item.price}</p>
            </div>
        </div>


    )
}