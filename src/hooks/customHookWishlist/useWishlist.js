import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BASE_URL =
  "https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users";

export default function useWishlist(itemId, user, setUser, onRemove, action) {
  const navigate = useNavigate();

  
  
  return async () => {
    if (!user) {
      alert("You need to login to save items.");
      navigate("/login");
      return;
    }

    console.log(`useWishlist : `, action );
    
    const currentList = user[action] ?? [];
    const updatedList = currentList.includes(itemId)
      ? currentList.filter((id) => id !== itemId)
      : [...currentList, itemId];

    await fetch(
      `https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users/${user.key}/${action}.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedList),
      },
    );

    console.log(`user ${action}`, user[action]);

    setUser({ ...user, [action]: updatedList });
    
    if (!updatedList.includes(itemId) && onRemove) {
    onRemove();
}
    
  };
}
