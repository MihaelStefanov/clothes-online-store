import styles from "./MatchedItemsList.module.css";
import { Link } from "react-router";

export default function MatchedItemsList({
    id,
    item
}) {

    console.log(id);
    return (
        <Link to={`/items/${id}/details`}>
        <div className={styles["mached-items-list-media"]}>
            <img src={item.images} alt={id} />
        </div>
        </Link>
    )

}