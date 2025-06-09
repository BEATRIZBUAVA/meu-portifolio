'use client';
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import CloudAnimation from "./CloudAnimation";
import Mountain from "./Mountain";
import WhoAmI from "../whoami/page";
import ProjectSection from "../projectsection/page";
import EmailSection from "../emailsection/page";
import FolderIcon from "../components/FolderIcon";
import DesktopWindow from "../components/DesktopWindow";


export default function Home() {
    // Estado para controlar quais janelas estão abertas
    const [openWindows, setOpenWindows] = useState({
        whoami: false,
        projects: false,
        email: false
    });

    // Estado para controlar z-index das janelas
    const [windowZIndex, setWindowZIndex] = useState({
        whoami: 1000,
        projects: 1000,
        email: 1000
    });

    // Contador para z-index crescente
    const [maxZIndex, setMaxZIndex] = useState(1000);

    // Função para abrir/fechar janela individual
    const toggleWindow = (windowType) => {
        setOpenWindows(prev => {
            const isOpening = !prev[windowType];

            // Se está abrindo a janela, dar z-index maior
            if (isOpening) {
                const newZIndex = maxZIndex + 1;
                setWindowZIndex(prevZ => ({
                    ...prevZ,
                    [windowType]: newZIndex
                }));
                setMaxZIndex(newZIndex);
            }

            return {
                ...prev,
                [windowType]: isOpening
            };
        });
    };


    const focusWindow = (windowType) => {
        const newZIndex = maxZIndex + 1;
        setWindowZIndex(prev => ({
            ...prev,
            [windowType]: newZIndex
        }));
        setMaxZIndex(newZIndex);
    };

    const closeWindow = (windowType) => {
        setOpenWindows(prev => ({
            ...prev,
            [windowType]: false
        }));
    };


    return (
        <div className="font-noticia">
            <NavBar />
            <main className="relative w-full h-screen bg-linear-to-b from-sky-300 to-sky-100 dark:bg-blue-900 z-0 overflow-hidden">

                <div className="">
                    <CloudAnimation />

                    <Mountain
                        fill="#81C784"
                        height={160}
                        width={850}
                        left="0"
                        bottom="0"
                        opacity={0.8}
                        zIndex={-10}
                    />
                </div>




                <div className="flex flex-col h-full w-screen items-start justify-center gap-20 cursor-pointer pt-10 pl-15 transition-all">
                    <FolderIcon
                        onClick={() => toggleWindow("whoami")}
                        className={`z-1 ${openWindows.whoami ? 'opacity-80 scale-95' : ''} transition-all`}
                    />
                    <FolderIcon
                        onClick={() => toggleWindow("projects")}
                        className={`z-1 ${openWindows.projects ? 'opacity-80 scale-95' : ''} transition-all`}
                    />
                    <FolderIcon
                        onClick={() => toggleWindow("email")}
                        className={`z-1 ${openWindows.email ? 'opacity-80 scale-95' : ''} transition-all`}
                    />
                </div>

                {/* Renderizar janela WhoAmI se estiver aberta */}
                {openWindows.whoami && (
                    <DesktopWindow
                        onClose={() => closeWindow("whoami")}
                        onFocus={() => focusWindow("whoami")}
                        offsetIndex={0}
                        title="Quem Sou Eu"
                        zIndex={windowZIndex.whoami}
                    >
                        <WhoAmI />
                    </DesktopWindow>
                )}

                {/* Renderizar janela Projects se estiver aberta */}
                {openWindows.projects && (
                    <DesktopWindow
                        onClose={() => closeWindow("projects")}
                        onFocus={() => focusWindow("projects")}
                        offsetIndex={1}
                        title="Meus Projetos"
                        zIndex={windowZIndex.projects}
                    >
                        <ProjectSection />
                    </DesktopWindow>
                )}

                {/* Renderizar janela Email se estiver aberta */}
                {openWindows.email && (
                    <DesktopWindow
                        onClose={() => closeWindow("email")}
                        onFocus={() => focusWindow("email")}
                        offsetIndex={2}
                        title="Contato"
                        zIndex={windowZIndex.email}
                    >
                        <EmailSection />
                    </DesktopWindow>
                )}
            </main>
        </div>
    );
}