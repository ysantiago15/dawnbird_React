import reparacion from '../assets/pagina-en-construccion.jpg'

export default function AboutUs() {

    return (

        // <div className='bg-black/50 text-white w-full '>
        //     <h1> En reparaciones</h1>
                
        //     <img src={reparacion} alt="Página en construcción" className=" object-contain"/>
        // </div>

        <div className='w-screen h-[100dvh] text-center text-[blue] flex flex-col items-center bg-black/50'>
            <h1 className=''>En reparaciones</h1>
            {/* <div className='w-full'> */}
                <img src={reparacion} alt="Página en construcción" className='w-[50%]'/>
            {/* </div> */}
        </div>

    )

}



