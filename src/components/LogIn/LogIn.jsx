import { useState } from "react";
import styles from "./LogIn.module.css";
export default function LogIn() {

    const [data, setData] = useState({});

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: [e.target.value]
        }));
    }

    


    return (



        <div className={styles["form-login-wrapper"]}>
            <h2>LogIn</h2>

            <form action="" className={styles["login-form"]}>
                <div>
                    <label className={styles["label"]} >Full Name</label>
                    <input
                        type="text"
                        placeholder="Ivan Ivanov"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label className={styles["label"]} >Email Address</label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={''}
                    />
                </div>
            </form>

        </div>

    )
}
