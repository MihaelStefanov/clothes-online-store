import { use, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import Item from "../Item/Item";
import "./Wishlist.css";

export default function Wishlist({
    user,
    setUser,
}) {
    
    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    const onRemoveHandler = (id) => setItems(prev => prev.filter(([itemId]) => itemId !== id))
   
    items.map(item => console.log(`wishlist item state`, item))

    useEffect(() => {

        if (!user) {
            navigate("/login");
            return;
        }

        fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users/${user.key}/wishlist.json`)
            .then(response => response.json())
            .then(data => {
                const promises = data.map(itemId => {
                    return fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}.json`)
                        .then(res => res.json())
                        .then(data => [itemId, data])
                })
                return Promise.all(promises);
            })
            .then(items => {
                setItems(items)
                console.log(items);
                
            });

    }, []);




    if (!user) return null;

    return (
        <div className="container">
               {items.map(([id, item]) => (     
                   <Item key={id} id={id} img={item?.images[0]}
                       title={item?.name}
                       price={item?.price}
                       user={user}
                       setUser={setUser}
                       onRemove={() => onRemoveHandler(id)}
                       />
               ))}
        </div>
    )
} 