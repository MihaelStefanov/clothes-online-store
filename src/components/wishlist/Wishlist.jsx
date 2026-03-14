import { use, useEffect } from "react"
import { useNavigate } from "react-router";

export default function Wishlist({
    user,
    setUser,
}) {
    const navigate = useNavigate();
    
    useEffect (() => {
        
        if (!user) {
          navigate("/login");
          return;
        }

        const response = fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users/${user.key}/wishlist.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }, []);

    // useEffect(() => {
    //     if (user) {
    //         const response = fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users/${user.key}/wisjlist.json`)
    //             .then(response = response.json())
    //             .then(response.map(ItemId => console.log(ItemId)))
    //     }
    // }, [])


    return (
        <h1>wishlist page !</h1>
    )
} 