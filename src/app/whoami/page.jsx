import { AboutSection } from "../components/AboutSection";
import HeroSection from "../components/band/HeroSection";
import ProjectSection from "../components/ProjectSection";
import {  Underlay } from "../components/band/HeroSectionText";
import NavBar from "../components/NavBar";



export default function WhoAmI() {
    return (
        <div>
            <NavBar/>
            <Underlay/>
            
            <HeroSection/>
            
           <AboutSection/>
           <ProjectSection/>
        </div>
    );
}