import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BASE_URL =
  "https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users";

export default function useWishlist(itemId, user, setUser) {
  const navigate = useNavigate();

  console.log(`user key`, user.key);

  return async () => {
    if (!user) {
      alert("You need to login to save items.");
      navigate("/login");
      return;
    }

    const currentWishlist = user.wishlist ?? [];
    const updatedWishlist = currentWishlist.includes(itemId)
      ? currentWishlist.filter((id) => id !== itemId)
      : [...currentWishlist, itemId];

    await fetch(
      `https://clothing-store-9888e-default-rtdb.europe-west1.firebasedatabase.app/users/${user.key}/wishlist.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedWishlist),
      },
    );

    console.log(`user wishlist: `, user.wishlist);

    setUser({ ...user, wishlist: updatedWishlist });
  };
}
