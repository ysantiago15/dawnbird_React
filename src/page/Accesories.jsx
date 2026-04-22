import reparacion from '../assets/pagina-en-construccion.jpg'

export default function Accesories() {

    return (

        <div className='text-center text-[blue] w-screen flex flex-col items-center overflow-hidden'>
            <h1> En reparaciones</h1>
            <img src={reparacion} alt="Página en construcción" className="w-[50%] object-fill" />
        </div>

    )

}

