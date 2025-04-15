'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

export default function FirstPage() {
  return (
  <main className="  text-white" >
    <Image className="-z-1"

      src="/assets/main-background.png"
      alt="Fundo"
      fill={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{objectFit: 'cover', objectPosition: 'center'}}

    />
    <div className="flex flex-col items-center justify-center h-screen">
    <TypeAnimation
      sequence={[
        'Olá mundo!', 1000,
        'Seja bem-vindo!', 1500,
        'Clique no botão para saber mais!', 2000
      ]}
      speed={50}
      repeat={0}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />

<Link href="/whoami" className="bg-white text-black p-2 rounded">
        Quem sou eu?
      </Link>
    </div>
  </main>)
}