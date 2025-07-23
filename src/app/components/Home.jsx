'use client';
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import CloudAnimation from "./CloudAnimation";
import Mountain from "./Mountain";
import WhoAmI from "../whoami/page";
import ProjectSection from "../projectsection/page";
import EmailSection from "../emailsection/page";
import FolderIcon from "../components/FolderIcon";
import WindowWrapper from "../components/WindowWrapper";



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
            <main className="relative w-full h-screen bg-linear-to-b from-sky-600 to-sky-200 dark:bg-linear-to-b dark:from-sky-950 dark:to-sky-800 z-0 overflow-hidden">

                <div >
                    <CloudAnimation />

                    <Mountain
                        height={160}
                        width={850}
                        left="0"
                        bottom="0"
                        opacity={0.8}
                        zIndex={-10}

                    />
                </div>




                <div className="flex flex-col h-full w-screen items-start justify-center gap-20 cursor-pointer pt-10 pl-15 transition-all">
                    <div className="flex flex-col items-center" onClick={() => toggleWindow("whoami")}>
                        <FolderIcon

                            className={`z-1 ${openWindows.whoami ? 'opacity-80 scale-95' : ''} transition-all`}
                        />
                        <span className="text-sm text-foreground mt-2 dark:text-bakcground">Quem sou eu</span>
                    </div>
                    <div className="flex flex-col items-center" onClick={() => toggleWindow("projects")}>
                        <FolderIcon

                            className={`z-1 ${openWindows.projects ? 'opacity-80 scale-95' : ''} transition-all`}
                        />
                        <span className="text-sm text-foreground mt-2 dark:text-bakcground">Projetos</span>
                    </div>
                    <div className="flex flex-col items-center" onClick={() => toggleWindow("email")}>
                        <FolderIcon

                            className={`z-1 ${openWindows.email ? 'opacity-80 scale-95' : ''} transition-all`}
                        />
                        <span className="text-sm text-foreground mt-2 dark:text-bakcground">Contato</span>
                    </div>

                </div>


                {/* Renderizar janela WhoAmI se estiver aberta */}
                {openWindows.whoami && (
                    <WindowWrapper
                        onClose={() => closeWindow("whoami")}
                        onFocus={() => focusWindow("whoami")}
                        offsetIndex={0}
                        title="Quem Sou Eu"
                        zIndex={windowZIndex.whoami}
                    >
                        <WhoAmI />
                    </WindowWrapper>
                )}

                {/* Renderizar janela Projects se estiver aberta */}
                {openWindows.projects && (
                    <WindowWrapper
                        onClose={() => closeWindow("projects")}
                        onFocus={() => focusWindow("projects")}
                        offsetIndex={1}
                        title="Meus Projetos"
                        zIndex={windowZIndex.projects}
                    >
                        <ProjectSection />
                    </WindowWrapper>
                )}

                {/* Renderizar janela Email se estiver aberta */}
                {openWindows.email && (
                    <WindowWrapper
                        onClose={() => closeWindow("email")}
                        onFocus={() => focusWindow("email")}
                        offsetIndex={2}
                        title="Contato"
                        zIndex={windowZIndex.email}
                    >
                        <EmailSection />
                    </WindowWrapper>
                )}
            </main>
        </div>
    );
}