export default function Details() {

    return (
        <section className="section-wrapper">
            <h1>Details Page!</h1>
            <div className="media">
                {/* <img src={img} alt={title} /> */}
                <h2>gallery here.</h2>
            </div>

            <div className="section-details">
                <div className="header-details">
                    <h2>Brand goes here.</h2>
                    <h3>product name.</h3>
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
                    <button className="add-to-wishlist">Wishlist</button>
                </div>



            </div>


        </section>
    );

}

