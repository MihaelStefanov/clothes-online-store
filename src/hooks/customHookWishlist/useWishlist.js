import { useNavigate } from "react-router";

export default function useWishlist(id, user) {
  const navigate = useNavigate();

  return () => {
    if (!user) {
        alert('You need to login to save items.')
      navigate("/login");
      return;
    }

    if (!user.wishlist.find(itemId => itemId === id)) {
        user.wishlist.push(id)
        console.log("save item", id, `to user wishlist`, user.wishlist);
    } else {
        user.wishlist = user.wishlist.filter(itemId => itemId !== id);
        console.log("save item", id, `to user wishlist`, user.wishlist);
    }


  };
}
