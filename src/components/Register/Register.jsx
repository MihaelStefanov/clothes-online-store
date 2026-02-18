import { use, useState } from "react";
import styles from "./Register.module.css";

export default function Register() {

    const [user, setUser] = useState(null) 

    const registerSubmit = (FormData) => {
        const name = FormData.get('name');
        const email = FormData.get('email');
        const password = FormData.get('password');
        const comfirmPasspord = FormData.get('comfirmPasspord');

        console.log(email);
        console.log(password);
        console.log(comfirmPasspord);


        // validation
        if (!email || !password) {
            return alert('Email and Password are required!');
        }

        if (password !== comfirmPasspord) {
            return alert('Password missatch!');
        }

        setUser({
            name,
            email,
            password
        })
        

    }

    console.log(user);
    

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
