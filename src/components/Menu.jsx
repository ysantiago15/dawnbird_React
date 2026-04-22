import { Link } from "react-router-dom";

export default function Menu() {

    return (


        // <div className="w-full h-18 ">
            <header className="w-full flex justify-center items-center bg-black/30 ">
                <nav className="flex w-full justify-evenly items-center">
                    <div className="flex gap-3 ">
                        <Link to='/men'>
                            MEN
                        </Link>

                        <Link to='/woman'>
                            WOMAN

                        </Link>

                        <Link to='/accesories'>
                            ACCESORIES
                        </Link>
                    </div>

                    <h1>
                        <Link to='/'>
                            DAWNBIRD.
                        </Link>
                    </h1>

                    <h3>
                        <Link to='/aboutUs'>
                            ABOUT US
                        </Link>
                    </h3>
                </nav>
            </header>
        // </div>


    )

}