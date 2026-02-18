import { Link } from "react-router"
import "./Header.css";

export default function Header({
    user
}) {

    console.log(user);
    

    return (
        <section className="Header">
            <div className="media">
                <img src="/images/logo.png" alt="" />
            </div>
        <nav>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/register">Register</Link></li>
                <h1>{user.name}</h1>
            </ul>
        </nav>
        </section>
    )

}