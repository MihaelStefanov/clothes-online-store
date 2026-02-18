import { use, useState } from "react";
import styles from "./LogIn.module.css";
import { useNavigate } from "react-router";

const BASE_URL = 'https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users.json';

export default function LogIn({
    onLogin,
}) {
    const navigate = useNavigate();

    // const [userProfil, setUserProfil] = useState({});

    const loginSubmit = async (FormData) => {
        const email = FormData.get("email");
        const password = FormData.get("password");

        if (!email || !password) {
            return alert('Email and Password are required!');
        }

        const response = await fetch(BASE_URL);
        const users = await response.json() || {};
        const foundUser = Object.values(users).find(user =>
            (user.email === email && user.password == password)
        );

        if (!foundUser) {
            return alert("Wrong email or password!");
        }

        // setUserProfil(foundUser)
        onLogin(foundUser)
        navigate("/");
    }


    return (
        <div className={styles["form-login-wrapper"]}>
            <h2>LogIn</h2>

            <form action={loginSubmit} className={styles["login-form"]}>
                <div>
                    <label className={styles["label"]} >Email Address</label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        id="email"
                        name="email"
                    />
                </div>

                <div>
                    <label className={styles["label"]} >Password</label>
                    <input
                        type="password"
                        placeholder="Ivan Ivanov"
                        id="password"
                        name="password"
                    />
                </div>

                <div>
                    <input className={styles["btn-submit"]} type="submit" value={"Login"} />
                </div>


            </form>

        </div>

    )
}
