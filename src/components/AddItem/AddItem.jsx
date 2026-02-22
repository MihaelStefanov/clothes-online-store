import styles from "./AddItem.module.css";

export default function AddItem() {

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
                    />
                </div>

                <div>
                    <label className={styles["label"]} >Barnd</label>
                    <input
                        type="brand"
                        placeholder="Name of the brand"
                        id="brand"
                        name="brand"
                    />
                </div>


                <div>
                    <label className={styles["label"]} >Color</label>
                    <input
                        type="text"
                        placeholder="color"
                        id="color"
                        name="color"

                    />
                </div>

                <div>
                    <label className={styles["label"]} >Price</label>
                    <input
                        type="text"
                        placeholder="price for exsample: 82.00"
                        id="price"
                        name="price"

                    />
                </div>

                <div>
                    <label className={styles["label"]} >Size</label>
                    <input
                        type="text"
                        placeholder="Size"
                        id="size"
                        name="size"

                    />
                </div>

                <div>
                    <label className={styles["label"]} >Images</label>
                    <input
                        type="text"
                        placeholder="color"
                        id="color"
                        name="color"
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