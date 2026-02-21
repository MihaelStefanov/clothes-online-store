import { useNavigate } from "react-router";
import styles from "./Profile.module.css";
import { useEffect } from "react";

export default function Profile({
    user,
    onLogOut,
}) {
    const navigate = useNavigate();

    console.log(`profile: `, user);

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className={styles["wrappper"]}>
            <ul>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <button className={styles["log-out-btn"]}
                    onClick={onLogOut}
                >Log out</button>
            </ul>
        </div>
    )
}