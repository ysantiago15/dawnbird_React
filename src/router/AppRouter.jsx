import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Menu from "../components/Menu";
import Men from "../page/Men";
import Woman from "../page/Woman";
import AboutUs from "../page/AboutUs";
import Accesories from "../page/Accesories";

export default function AppRouter() {

    return (

        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/men' element={<Men />} /> 
                    <Route path='/woman' element={<Woman />} /> 
                    <Route path='/aboutUs' element={<AboutUs />} /> 
                    <Route path='/accesories' element={<Accesories />} /> 
                </Routes>
            </BrowserRouter>
        </>

    )

}