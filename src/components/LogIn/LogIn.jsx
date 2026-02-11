export default function LogIn() {


    return (
        <div>
            <h2>LogIn</h2>

            <form action="">
                <div>
                    <label className="">Full Name</label>
                    <input
                        type="text"
                        placeholder="Ivan Ivanov"
                        name="name"
                        value={''}
                    />
                </div>

                <div>
                    <label className="">Email Address</label>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={''}
                    />
                </div>
            </form>

        </div>

    )
}
