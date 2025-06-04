
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
    const [windowContent, setWindowContent] = useState(null);

    const handleOpenWindow = (content) => {
        setWindowContent(content);
    };

    const handleCloseWindow = () => {
        setWindowContent(null);
    };

    return (
        <div className="font-noticia">
            <NavBar />
            <main className="relative w-full h-screen bg-gradient-to-b from-sky-300 to-sky-100 overflow-hidden">

                <div className="z-0">
                    <CloudAnimation />

                    <Mountain
                        fill="#81C784"
                        height={160}
                        width={850}
                        left="0"
                        bottom="0"
                        opacity={0.8}
                    />
                </div>

                <div className="flex flex-col h-full w-screen items-start justify-center gap-20 cursor-pointer pt-10 pl-15 transition-all z-10">
                    <FolderIcon onClick={() => handleOpenWindow("whoami")} />
                    <FolderIcon onClick={() => handleOpenWindow("projects")} />
                    <FolderIcon onClick={() => handleOpenWindow("email")} />
                </div>



                {windowContent && (
                    <DesktopWindow onClose={handleCloseWindow}>
                        {windowContent === "whoami" && <WhoAmI />}
                        {windowContent === "projects" && <ProjectSection />}
                        {windowContent === "email" && <EmailSection />}
                    </DesktopWindow>
                )}
            </main>
        </div>
    );
}
