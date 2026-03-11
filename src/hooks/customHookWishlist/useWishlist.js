import { useNavigate } from "react-router";

export default function useWishlist(id, user) {
  const navigate = useNavigate();

  return () => {
    if (!user) {
        alert('You need to login to save items.')
      navigate("/login");
      return;
    }
    console.log("save item", id, `to user wishlist`, user);
  };
}
