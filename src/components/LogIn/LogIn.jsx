import styles from "./LogIn.module.css";
export default function LogIn() {


    return (
        <div className={styles["form-login-wrapper"]}>
            <h2>LogIn</h2>

            <form action="" className={styles["login-form"]}>
                <div>
                    <label className={}>Full Name</label>
                    <input
                        type="text"
                        placeholder="Ivan Ivanov"
                        name="name"
                        value={''}
                    />
                </div>

                <div>
                    <label className="">Email Address</label>
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
