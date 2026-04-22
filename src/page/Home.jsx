import banner from '../assets/imagen1.png'
import producto1 from '../assets/producto1.png'
import producto2 from '../assets/producto2.png'
import producto3 from '../assets/producto3.png'
import producto4 from '../assets/producto4.png'
import producto5 from '../assets/producto5.png'
import men from '../assets/men.png'
import woman from '../assets/woman.png'
import { Link } from 'react-router-dom'

export default function Home() {

    return (

        <div className='w-full'>
            <div className='relative overflow-hidden w-full'>
                <img src={banner} alt="imagen1" className=' w-full object-cover block' />
                <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center'>
                    <h2 className='text-white font-bold text-2xl'>Stay Warm, Look Cool</h2>
                    <button className='text-black px-4 py-1'>Discover</button>
                </div>
            </div>

            <div className='w-full mt-8'>
                <div className='text-center mb-10'>
                    <h3 className='font-bold text-xl mb-3'>NEW COLLECTIONS</h3>
                    <p className='px-10'>Browse through our curated selection of coats, knitwear,
                        boots, and more to ensure you’re ready for whatever winter throws your way.</p>
                </div>

                <div className='flex gap-3 justify-evenly text-center'>
                    <div className='w-[16%]'>
                        <img src={producto1} alt="Porducto 1" className='w-[100%] bg-[#F5F1ED]' />
                        <h5><a href="#">HATS </a></h5>
                    </div>
                    <div className='w-[16%]'>
                        <img src={producto2} alt="Porducto 2" className='w-[100%] bg-[#F5F1ED]' />
                        <h5><a href="#">PARKAS </a></h5>
                    </div>
                    <div className='w-[16%]'>
                        <img src={producto3} alt="Porducto 3" className='w-[100%] bg-[#F5F1ED]' />
                        <h5><a href="#">JACKETS </a></h5>
                    </div>
                    <div className='w-[16%] '>
                        <img src={producto4} alt="Porducto 4" className='w-[100%] bg-[#F5F1ED]' />
                        <h5><a href="#">GLOVES </a></h5>
                    </div>
                    <div className='w-[16%]'>
                        <img src={producto5} alt="Porducto 5" className='w-[100%] bg-[#F5F1ED]' />
                        <h5><a href="#">WRAPS</a></h5>
                    </div>
                </div>
            </div>

            <div className='flex w-full mt-8'>
                <div className='relative overflow-hidden w-[50%]'>
                    <img src={men} alt="Men" className='w-full object-cover block' />
                    <h3 className='absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold'>MEN COLLECTION</h3>
                    <Link to=''>
                        <button className='absolute bottom-4 left-1/2 -translate-x-1/2'>Shop Now </button>
                    </Link>

                </div>
                <div className='relative overflow-hidden w-[50%]'>
                    <img src={woman} alt="Woman" className='w-full object-cover block' />
                    <h3 className='absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold'>WOMAN COLLECTION</h3>
                    <Link to=''>
                        <button className='absolute bottom-4 left-1/2 -translate-x-1/2'>Shop Now </button>
                    </Link>
                </div>
            </div>
        </div>

    )

}