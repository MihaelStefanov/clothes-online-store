import { useState } from "react";
import styles from "./AddItem.module.css";

export default function AddItem() {

    const ItemData = {
        name: '',
        brand: '',
        color: '',
        price: '',
        size: '',
        images: '',
    }

    const [data, setData] = useState(ItemData);

    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))

    }

    const addImageHandler = () => {

    }


    return (
        <div className={styles["form-login-wrapper"]}>
            <h1>Add Item  Page!</h1>

            <form className={styles["login-form"]}>

                <div>
                    <label className={styles["label"]} >Name</label>
                    <input
                        type="name"
                        placeholder="product name"
                        id="name"
                        name="name"
                        onChange={changeHandler}
                        value={data.name}
                    />
                </div>

                <div>
                    <label className={styles["label"]} >Barnd</label>
                    <input
                        type="brand"
                        placeholder="Name of the brand"
                        id="brand"
                        name="brand"
                        onChange={changeHandler}
                        value={data.brand}
                    />
                </div>


                <div>
                    <label className={styles["label"]} >Color</label>
                    <input
                        type="text"
                        placeholder="color"
                        id="color"
                        name="color"
                        onChange={changeHandler}
                        value={data.color}

                    />
                </div>

                <div>
                    <label className={styles["label"]} >Price</label>
                    <input
                        type="text"
                        placeholder="price for exsample: 82.00"
                        id="price"
                        name="price"
                        onChange={changeHandler}
                        value={data.price}
                    />
                </div>

                <div>
                    <label className={styles["label"]} >Size</label>
                    <input
                        type="text"
                        placeholder="Size"
                        id="size"
                        name="size"
                        onChange={changeHandler}
                        value={data.size}
                    />
                </div>

                <div>
                    <label className={styles["label"]} >Images</label>
                    <input
                        type="text"
                        placeholder="images"
                        id="images"
                        name="images"
                        onChange={changeHandler}
                        value={data.images}
                    />
                    <button type="button" onclick={addImageHandler}>Add Image</button>
                </div>

                <div>
                    <input className={styles["btn-submit"]} type="submit" value={"Add Item"} />
                </div>
            </form>

        </div>
    )
}