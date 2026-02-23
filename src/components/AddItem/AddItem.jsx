import { useState } from "react";
import styles from "./AddItem.module.css";

const BASE_URL = 'https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/items.json';

export default function AddItem() {

    const ItemData = {
        name: '',
        brand: '',
        color: '',
        price: '',
        size: '',
        images: '',
        categoryIds: '',
        productId: '',
    }

    const [data, setData] = useState(ItemData);


    const changeHandler = (e) => {

        setData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    console.log(`data: `, data);

    let imagesArr = [];

    const addImageHandler = () => {
        if (data.images.length === 0) {
            console.log(`${data.images} is not an image!`);
            return alert(`${data.images} is not an image!`);
        } 

        imagesArr.push(data.images)
        
        data.images = ''
    }

    console.log(data);

    const submitHandler = async (e) => {
        e.preventDefault()

        data.images = imagesArr;        
        data.categoryIds = String(data.categoryIds).split(' ');
        let nameOfItemToproductId = data.name;
        data.productId = nameOfItemToproductId.toLocaleLowerCase().replaceAll(` `, `-`);

        try {

            for (const [key, value] of Object.entries(data)) {
                if (!value || value.length === 0) {
                    console.log(`${key} does not have value!`);
                    
                    alert(`${key} does not have value!`)
                    return;
                }
            }
           
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to register user!');
            }

            console.log(data);
            

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
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
                    <label className={styles["label"]} >Category Ids</label>
                    <input
                        type="text"
                        placeholder="female shoes"
                        id="categoryIds"
                        name="categoryIds"
                        onChange={changeHandler}
                        value={data.categoryIds}
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
                    <button type="button" onClick={addImageHandler}>Add Image</button>
                </div>

                <div>
                    <input className={styles["btn-submit"]} onClick={submitHandler} type="submit" value={"Add Item"} />
                </div>
            </form>

        </div>
    )
}