'use client'
import { TypeAnimation } from "react-type-animation";
import React from "react";

export function CardBonita() {
  return (
    <div className="grid grid-cols-1 w-full h- p-8 justify-center overflow-hidden">
      <div className="col-span-7 bg-white p-6 border-2 border-gray-300 
    rounded  [border-style:inset] 
    [box-shadow:inset_2px_2px_4px_rgba(0,0,0,0.1)] text-left w-full max-w-4xl">
        <h1 className="text-[#051116] mb-2  !font-noticia">
          <span className="text-transparent bg-clip-text bg-[#1E1E1E] block mb-3 text-xl sm:text-2xl lg:text-5xl">
            Olá! Seja bem-vindo!
          </span>

          <TypeAnimation
            sequence={[
              "Eu sou a Bia e abaixo você pode conferir algumas informações sobre mim... ",
              1000,
            ]}
            speed={10}
            repeat={0}
            className="block text-lg sm:text-xl lg:text-3xl leading-snug"
          />
        </h1>
      </div>
    </div>
  );
}
