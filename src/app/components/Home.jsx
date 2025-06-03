import Link from "next/link";
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import Cloud from "../components/Cloud";
import WhoAmI from "../whoami/page";
import FolderIcon from "../components/FolderIcon";
import DesktopWindow from "../components/DesktopWindow"; // Notei que no seu import estava "DekstopWindow" (provável erro de digitação)

export default function Home() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const handleOpenWindow = () => {
        if (!isWindowOpen) {
            setIsWindowOpen(true);
        }
    };

    const handleCloseWindow = () => {
        setIsWindowOpen(false);
    };

    return (
        <div className="font-noticia">
            <NavBar />
            <main className="relative h-screen w-full overflow-hidden">
                {/* FUNDO */}
                <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                    {/* Céu */}
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-200"></div>

                    {/* Nuvens */}
                    <div className="absolute top-20 w-[200%] h-40 animate-cloudMove flex space-x-40 opacity-80">
                        <Cloud />
                        <Cloud />
                        <Cloud />
                        <Cloud />
                    </div>

                    {/* Montanha */}
                    <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-green-600 to-green-400 rounded-t-[100%]" />
                </div>

                <div className="flex flex-col h-full w-screen items-start justify-center gap-20 cursor-pointer pt-10 pl-15 transition-all">
                    <FolderIcon onClick={handleOpenWindow} />


                    <Link href="/projectsection">
                        <div>
                            <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
                            <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
                        </div>
                    </Link>

                    <Link href="/emailsection">
                        <div>
                            <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
                            <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
                        </div>
                    </Link>
                </div>

                {isWindowOpen && (
                    <DesktopWindow onClose={handleCloseWindow}>
                        <WhoAmI />
                    </DesktopWindow>
                )}
            </main>
        </div>
    );
}
