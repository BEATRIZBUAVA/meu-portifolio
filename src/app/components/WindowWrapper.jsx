'use client';
import { useEffect, useState } from "react";
import DesktopWindow from "./DesktopWindow";
import MobileModal from "./MobileModal"; // Crie esse componente (veja mais abaixo)

export default function WindowWrapper(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        return (
            <MobileModal {...props} />
        );
    }

    return (
        <DesktopWindow {...props} />
    );
}
