'use client'
import { TypeAnimation } from "react-type-animation";

export function Underlay() {
    return (
      <section className="">
      <div className="responsive-wrapper absolute bg-[##F3EEEC] grid grid-cols-1 sm:grid-cols-12 "
        >
        <div className="col-span-7  text-center sm:text-left">
          <h1 className="text-[#BC6C25] mb-4 text-4xl  sm:text-5xl lg:text-6xl font-aclonica">
            <span className="text-transparent bg-clip-text bg-[#1E1E1E] ">
              Olá! Eu sou a{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Beatriz", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
        </div>
        
        </div>
      </section>
    )
  }
  
  
  