import { Link } from "react-router"
import "./Header.css";

export default function Header() {

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
            </ul>
        </nav>
        </section>
    )

}