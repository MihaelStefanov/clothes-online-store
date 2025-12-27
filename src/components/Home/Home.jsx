import "./Home.css";
import Item from "../Item/Item";

export default function Home() {

    return (
        <div className="container">
            < Item img={'https://cdn.aboutstatic.com/file/images/bbc12ef63793ba68a2928f01004ae39b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960'}
                title={"Ботуши"}
                price={`${330.25}$`} />

             < Item img={'https://cdn.aboutstatic.com/file/images/bbc12ef63793ba68a2928f01004ae39b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960'}
                title={"Ботуши"}
                price={`${330.25}$`} />

             < Item img={'https://cdn.aboutstatic.com/file/images/bbc12ef63793ba68a2928f01004ae39b.png?bg=F4F4F5&quality=75&trim=1&height=1280&width=960'}
                title={"Ботуши"}
                price={`${330.25}$`} />
        </div>
    )

}