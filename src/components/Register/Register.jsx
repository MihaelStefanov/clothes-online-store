import { use, useState } from "react";
import styles from "./Register.module.css";

const BASE_URL = 'https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users.json';

console.log(BASE_URL);

export default function Register() {

    const registerSubmit = async (FormData) => {
        const name = FormData.get('name');
        const email = FormData.get('email');
        const password = FormData.get('password');
        const comfirmPasspord = FormData.get('comfirmPasspord');

        // validation
        if (!email || !password) {
            return alert('Email and Password are required!');
        }

        if (password !== comfirmPasspord) {
            return alert('Password missatch!');
        }

        try {
            const usersResponse = await fetch(BASE_URL);
            if (!usersResponse.ok) throw new Error('Failed to fetch users');
            const users = await usersResponse.json() || {};

            const emailExists = Object.values(users).some(user => user.email === email);
            if (emailExists) {
                return alert('This email is already registered!');
            }

            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                throw new Error('Failed to register user!');
            }

            const data = await response.json();
            console.log('User registered successfully:', data);
            alert('Registration successful!');

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    return (

        <div className={styles["form-login-wrapper"]}>
            <h2>Register</h2>

            <form action={registerSubmit} className={styles["login-form"]}>

                <div>
                    <label className={styles["label"]} >Name</label>
                    <input
                        type="name"
                        placeholder="First and Last Name"
                        id="name"
                        name="name"

                    />
                </div>


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
                        placeholder="Password"
                        id="password"
                        name="password"

                    />
                </div>

                <div>
                    <label className={styles["label"]} >Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        id="comfirmPasspord"
                        name="comfirmPasspord"

                    />
                </div>

                <div>
                    <input className={styles["btn-submit"]} type="submit" value={"Register"} />
                </div>
            </form>

        </div>

    )
}
