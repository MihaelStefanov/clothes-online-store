import "./MatchedItemsList.css";

export default function MatchedItemsList({
    id,
    item
}) {

    console.log(id);
    return (
        <div className="mached-items-list-media">
            <img src={item.images} alt={id} />
        </div>
    )

}