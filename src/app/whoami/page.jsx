
import HeroSection from "../components/band/HeroSection";
import React from "react";
import { Underlay } from "../components/band/Underlay";





export default function WhoAmI() {
    return (
        <section>
            <div className="font-noticia overflow-hidden" >

                <Underlay />
                <HeroSection />

            </div>
            <div className="p-8 mt-10 text-[#1e1e1e]">
                <p className="text-lg mb-6">Olá! Eu sou a Bia e abaixo você conferir algumas informações sobre mim...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Minhas habilidades</h2>
                        <ol className="list-disc list-inside space-y-1">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Outros interesses</h2>
                        <ol className="list-disc list-inside space-y-1">
                            <li>Tocar bateria</li>
                            <li>Cantar</li>
                            <li>Ler</li>
                            <li>Pintar</li>
                        </ol>
                    </section>
                </div>
            </div>
        </section>
    );
}