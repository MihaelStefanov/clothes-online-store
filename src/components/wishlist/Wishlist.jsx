import { useEffect } from "react"

export default function Wishlist(
    user
) {

    // const BASE_URL = "https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/items.json"

    console.log(user.wishlist);
    


    // useEffect(() => {
    //     if (user) {
    //         const response = fetch(`https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users/${user.key}/wisjlist.json`)
    //             .then(response = response.json())
    //             .then(response.map(item => console.log({ item })))
    //     }
    // }, [])


    return (
        <h1>wishlist page !</h1>
    )
} 