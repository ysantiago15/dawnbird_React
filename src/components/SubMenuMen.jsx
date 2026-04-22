import { Link } from "react-router-dom";

export default function SubMenuMen() {

    return (

        <div className="p-4 bg-[#DCDBDB] w-full">
            <nav className='flex gap-5' >
                <Link to=''>Gorros</Link>
                <Link to=''>Abrigos y Chaquetas</Link>
                <Link to=''>Pantalones</Link>
                <Link to=''>Guantes</Link>
                <Link to=''>Bufandas</Link>
            </nav>
        </div>

    )

}