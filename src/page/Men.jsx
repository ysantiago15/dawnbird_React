import SubMenuMen from "../components/SubMenuMen";
import men1 from '../assets/CamisaHombre1.jpg';
import men2 from '../assets/ChaquetaHombre1.jpg';
import men3 from '../assets/ChaquetaHombre2.jpg';
import men4 from '../assets/ChaquetaHombre3.jpg';
import men5 from '../assets/ChaquetaHombre4.jpg';
import men6 from '../assets/PantalonHombre1.jpg';
import men7 from '../assets/PantalonHOmbre2.jpg';
import men8 from '../assets/PantalonHombre3.jpg';
import men9 from '../assets/PantalonHombre4.jpg';
import men10 from '../assets/PoloHombre1.jpg';


export default function Men() {

    return (


        <div className="w-full">
            <SubMenuMen />
            <div>
                <div>
                    <a href="#">MEN</a>
                    <h1>MEN COLLECTIONS</h1>
                </div>

                <div className='flex gap-3 flex-wrap w-full'>
                    <div className='w-[24%]'>
                        <div className='w-full'>
                            
                                <img src={men1} alt="" className='w-full'/>
                                    {/* <div className='flex none'>
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

                        <h4> Camisa para Hombre</h4>
                        <p>$145.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div className='w-full'>
                            
                                <img src={men2} alt="" />
                                    {/* <div >
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                        </ul>
                                    </div> */}
                            
                        </div>
                        <h4>Chaqueta para Hombre</h4>
                        <p>$220.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div >
                            
                                <img src={men3} alt="" />
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
                        <h4>Chaqueta para Hombre</h4>
                        <p>$155.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div>
                            
                                <img src={men4} alt=""/>
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
                        <h4>Chaqueta para Hombre</h4>
                        <p>$175.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div>
                            
                                <img src={men5} alt=""/>
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
                        <h4>Chaqueta para Hombre</h4>
                        <p>$130.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div >
                            
                                <img src={men6} alt=""/>
                                    {/* <div >
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="">28</a></li>
                                            <li><a href="">30</a></li>
                                            <li><a href="">32</a></li>
                                            <li><a href="">34</a></li>
                                            <li><a href="">36</a></li>
                                            <li><a href="">38</a></li>
                                        </ul>
                                    </div> */}
                            
                        </div>
                        <h4>Pantolones para hombre</h4>
                        <p>$210.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div >
                          
                                <img src={men7} alt=""/>
                                    {/* <div>
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">28</a></li>
                                            <li><a href="#">30</a></li>
                                            <li><a href="#">32</a></li>
                                            <li><a href="#">34</a></li>
                                            <li><a href="#">36</a></li>
                                        </ul>
                                    </div> */}
                            
                        </div>
                        <h4>Pantolones para hombre</h4>
                        <p>$194.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div >
                            
                                <img src={men8} alt=""/>
                                    {/* <div >
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">30</a></li>
                                            <li><a href="#">32</a></li>
                                            <li><a href="#">34</a></li>
                                            <li><a href="#">36</a></li>
                                            <li><a href="#">38</a></li>
                                        </ul>
                                    </div> */}
                            
                        </div>
                        <h4>Pantalones para hombre</h4>
                        <p>$145.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div >
                            
                                <img src={men9} alt=""/>
                                    {/* <div >
                                        <p>Agregar al Carrito</p>
                                        <ul>
                                            <li><a href="#">28</a></li>
                                            <li><a href="#">30</a></li>
                                            <li><a href="#">32</a></li>
                                            <li><a href="#">34</a></li>
                                            <li><a href="#">36</a></li>
                                            <li><a href="#">38</a></li>
                                        </ul>
                                    </div> */}
                            
                        </div>
                        <h4>Pantalones para Hombre</h4>
                        <p>$180.000</p>
                    </div>

                    <div className='w-[24%]'>
                        <div >
                            
                                <img src={men10} alt=""/>
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
                        <h4>Polo para hombre</h4>
                        <p>$90.000</p>
                    </div>
                </div>

            </div>
        </div>



    )

}