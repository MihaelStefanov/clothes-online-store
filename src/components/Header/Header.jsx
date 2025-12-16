import { redirect } from "react-router"

export default function Header() {

    return (
        <section className="Header">
            <div className="media">
                <img src="/images/logo.png" alt="" />
            </div>
        <nav>
            <ul>
                <li>Explore</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </nav>
        </section>
    )

}