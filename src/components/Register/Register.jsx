import { useState } from "react";
import styles from "./Register.module.css";
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
            <h2>Register</h2>

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
                        placeholder="Password"
                        name="passpord"
                        value={data.password}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label className={styles["label"]} >Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="passpord"
                        value={data.passpord}
                        onChange={changeHandler}
                    />
                </div>

                <div> 
                    <input className={styles["btn-submit"]} type="submit" value={"Register"} />
                </div>
            </form>

        </div>

    )
}
