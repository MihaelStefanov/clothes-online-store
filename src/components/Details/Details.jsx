import "./Details.css";

export default function Details() {

    return (
        <section className="section-wrapper">
            <div className="media">
                <img src="https://cdn.aboutstatic.com/file/images/0237ad04256b2f009918954d1cf3ed75.png?bg=F4F4F5&quality=75&trim=1&height=1067&width=800" alt="" />
            </div>

            <div className="section-details">
                <div className="header-details">
                    <h2>HUGO</h2>
                    <h3>polo tshirt</h3>
                </div>

                <div price-details>
                    <p>price €</p>
                </div>

                <select className="size-select-details">
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>

                <div className="buttons-wrapper">
                    <button className="add-to-bag">Add To Bag</button>
                    <button className="add-to-wishlist"><i class="fa-regular fa-heart"></i></button>
                </div>



            </div>


        </section>
    );

}

