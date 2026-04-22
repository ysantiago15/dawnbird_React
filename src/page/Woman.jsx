import SubMenuMen from "../components/SubMenuMen";
import woman1 from '../assets/ChaquetasMujer1.jpg'
import woman2 from '../assets/JeansMujer1.jpg'
import woman3 from '../assets/JeansMujer2.jpg'
import woman4 from '../assets/SacoMujer1.jpg'
import woman5 from '../assets/PantalonMujer1.jpg'
import woman6 from '../assets/SacoMujer2.jpg'
import woman7 from '../assets/PantalonMujer2.jpg'
import woman8 from '../assets/SacoMujer3.jpg'
import woman9 from '../assets/ChaquetaMujer4.jpg'
import woman10 from '../assets/PoloMujer1.jpg'

export default function Woman() {

    return (

        <div className="w-full">
            <SubMenuMen />

            <div>
                <div>
                    <a href="#">WOMAN</a>
                    <h1>WOMAN COLLECTIONS</h1>
                </div>
                <div className='flex gap-3 flex-wrap w-full'>
                    <div className='w-[24%]'>
                        <div className='w-full'>
                            <img src={woman1} alt="" />
                            {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">XS</a></li>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>
                                    </div> */}
                        </div>
                        <h4>Chaqueta Utilitaria</h4>
                        <p>$189.900</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                            <img src={woman2} alt="" />
                            {/* <div >
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">6</a></li>
                                            <li><a href="#">8</a></li>
                                            <li><a href="#">10</a></li>
                                            <li><a href="#">12</a></li>
                                            <li><a href="#">14</a></li>
                                        </ul>
                                    </div> */}
                        </div>
                        <h4>Jeans Culotte Tono Claro</h4>
                        <p>$139.900</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman3} alt="" />
                                    {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">6</a></li>
                                            <li><a href="#">8</a></li>
                                            <li><a href="#">10</a></li>
                                            <li><a href="#">12</a></li>
                                            <li><a href="#">14</a></li>
                                        </ul>
                                    </div> */}
                            </div>
                        <h4>Jean Wide Leg Con Bolsillos Parche</h4>
                        <p>$159.900</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman4} alt=""/>
                                    {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">XS</a></li>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>
                                    </div> */}
                            </div>
                        <h4>Saco Texturizado Unicolor</h4>
                        <p>$149.900</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman5} alt=""/>
                                    {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">6</a></li>
                                            <li><a href="#">8</a></li>
                                            <li><a href="#">10</a></li>
                                            <li><a href="#">12</a></li>
                                            <li><a href="#">14</a></li>
                                        </ul>
                                    </div> */}
                            </div>                        
                        <h4>Pantalón Casual</h4>
                        <p>$139.900</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman6} alt=""/>
                                    {/* <div >
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="">S</a></li>
                                            <li><a href="">M</a></li>
                                            <li><a href="">L</a></li>
                                            <li><a href="">XL</a></li>
                                        </ul>
                                    </div> */}
                            </div>
                        <h4>Saco preteñido</h4>
                        <p>$149.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman7} alt=""/>
                                    {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">6</a></li>
                                            <li><a href="#">8</a></li>
                                            <li><a href="#">10</a></li>
                                            <li><a href="#">12</a></li>
                                            <li><a href="#">14</a></li>
                                        </ul>
                                    </div> */}
                            </div>
                        <h4>Pantalón Fluido Estampado</h4>
                        <p>$159.900</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman8} alt=""/>
                                    {/* <div >
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">XS</a></li>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>
                                    </div> */}
                            </div>
                        <h4>Sacocon botones en puño</h4>
                        <p>$239.900</p>
                    </div>

                   <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman9} alt=""/>
                                    {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>
                                    </div> */}
                            </div>
                        <h4>Blazer Abierto</h4>
                        <p>$239.900</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                                <img src={woman10} alt=""/>
                                    {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">XS</a></li>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>
                                    </div> */}
                            </div>
                        <h4>Polo Tejida Unicolor</h4>
                        <p>$149.900</p>
                    </div>
                </div>
            </div>

        </div>

    )

}