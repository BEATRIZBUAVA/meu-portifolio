
import HeroSection from "../components/band/HeroSection";

import {  Underlay } from "../components/band/HeroSectionText";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";




export default function WhoAmI() {
    return (
        <div className="font-noticia"
        >
            <NavBar/>
            <Underlay/>
            
            <HeroSection/>
            
           
           
           <Footer/>
        </div>
    );
}