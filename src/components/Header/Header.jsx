import { Link } from "react-router"
import "./Header.css";

export default function Header({
    user
}) {
    
    console.log(`Header userProfil`, user);

    return (
        <section className="Header">
            <div className="media">
                <img src="/images/logo.png" alt="" />
            </div>
            <nav>
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    {
                        user
                            ? <li><Link to="/profile">Profile</Link></li>
                            : <><li><Link to="/login">LogIn</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                    }

                </ul>
            </nav>
        </section>
    )

}