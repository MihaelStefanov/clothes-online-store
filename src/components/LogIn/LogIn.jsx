import { useState } from "react";
import styles from "./LogIn.module.css";
export default function LogIn() {

    const [data, setData] = useState({});

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.email]: [e.target.password]
        }));
    }

    


    return (



        <div className={styles["form-login-wrapper"]}>
            <h2>LogIn</h2>

            <form action="" className={styles["login-form"]}>
                <div>
                    <label className={styles["label"]} >Email Address</label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                    />
                </div>
                
                <div>
                    <label className={styles["label"]} >Password</label>
                    <input
                        type="password"
                        placeholder="Ivan Ivanov"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                    />
                </div>

            </form>

        </div>

    )
}
