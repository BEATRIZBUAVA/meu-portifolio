import Link from "next/link";
import NavBar from "../components/NavBar";
import React from "react";

export default function Home() {
    return (
        <div className="font-noticia">
            <NavBar />
            <main className="w-full min-h-screen bg-green-200">
                <div className="flex flex-col items-start p-10 pt-40"  >
                    <div className="flex flex-col items-center gap-20  cursor-pointer p-4 transition-all">
                        <Link href="/whoami" >
                            <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                                Ver projeto
                            </div>

                            <span className="sr-only">Ver projeto</span>
                            <div className="animate-float">
                                <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
                                <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
                            </div>
                        </Link>
                        <Link href="/projectsection" >
                            <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                                Ver projeto
                            </div>

                            {/* Um conteúdo clicável real (ex: um span invisível pra ocupar espaço) */}
                            <span className="sr-only">Ver projeto</span>
                            <div className="animate-float">
                                <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
                                <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
                            </div>
                        </Link>
                        <Link href="/emailsection" >
                            <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                                Ver projeto
                            </div>

                            {/* Um conteúdo clicável real (ex: um span invisível pra ocupar espaço) */}
                            <span className="sr-only">Ver projeto</span>
                            <div className="animate-float">
                                <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
                                <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
                            </div>
                        </Link>

                    </div>
                </div>
            </main>
        </div>
    );
}