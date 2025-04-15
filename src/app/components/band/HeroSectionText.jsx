'use client'
import { TypeAnimation } from "react-type-animation";

export function Underlay() {
    return (
      <section >
      <div className="responsive-wrapper absolute bg-[#759EB8] grid grid-cols-1 sm:grid-cols-12 "
       style={{ backgroundImage: `url('/assets/texture.png')`, backgroundSize: "fit", backgroundPosition: "center" }} >
        <div className="col-span-7  text-left sm:w-3/4 lg:w-2/3">
          <h1 className="text-[#051116] mb-4   sm:text-5xl lg:text-6xl !font-noticia">
            <span className="text-transparent bg-clip-text bg-[#1E1E1E] text-7xl">
              Olá! Seja bem-vindo.{" "}

            </span>
            <br />
            <TypeAnimation
            splitter={(str) => str.split(/(?= )/)} 
            style={{
              
              height: 'auto',
              width: '800px',
              display: 'block',
              fontSize: '2rem',
              lineHeight: '1.0',
              marginTop: '1rem',
              minHeight: '200px',}}
             
            sequence={[`Eu sou a Beatriz! Que bom que voce chegou aqui. Por favor, leia com cuidado todas as informações apresentadas aqui.`, 1000,]}
              
              
              speed={10}
              repeat={0}
            />
          </h1>
          
        </div>
        
        </div>
      </section>
    )
  }
  
  
  