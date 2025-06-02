'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TileProgressBar from './progressbar'
import Home from "./Home";
import Footer from "../components/Footer";;

export default function FirstPage() {
  const [showLoading, setShowLoading] = useState(true);

  <div className="flex flex-col items-center justify-center h-80 mt-50 ">




    <Link href="/whoami" className="relative group">
      <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
        Ver projeto
      </div>
      <span className="sr-only">Ver projeto</span>
      <div className="flex flex-col items-center gap-2 mb-5 cursor-pointer p-4 transition-all">
        <div className="animate-float">
          <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
          <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
        </div>
        <span className="text-sm text-white mt-2">getting files ready...</span>
      </div>
    </Link>
    <TileProgressBar />
  </div>



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return (
      <main className="relative w-full min-h-screen text-white">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/assets/main_background.png"
          alt="Fundo"
          fill
          priority
        />

        <div className="flex flex-col items-center justify-start pt-44 h-screen relative group">


          <div className="flex flex-col items-center gap-2 mb-5 cursor-pointer p-4 transition-all">
            <div className="animate-float">
              <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
              <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
            </div>
            <span className="text-sm text-white mt-2">getting files ready...</span>
          </div>

          <TileProgressBar />
        </div>
      </main>
    );
  }


  return (
    <div className="font-noticia">
      <Home />
      <Footer />
    </div>
  );
}