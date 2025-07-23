import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

export default function DesktopWindow({
    onClose,
    children,
    offsetIndex = 0,
    title = "Janela",
    zIndex = 1000,
    onFocus
}) {
    const nodeRef = useRef(null);

    const [windowSize, setWindowSize] = useState({
        width: 800,
        height: 800,
        x: 100,
        y: 100
    });

    useEffect(() => {
        function updateSize() {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            console.log("Altura da janela:", vh);

            const width = Math.min(Math.max(vw * 0.7, 300), 1000); // largura entre 300 e 1000
            const height = Math.min(Math.max(vh * 0.8, 300), 1200); // altura entre 300 e 700

            const centerX = (vw - width) / 2;
            const centerY = (vh - height) / 2;

            const offset = offsetIndex * 40;

            setWindowSize({
                width,
                height,
                x: centerX + offset,
                y: centerY + offset
            });
        }

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, [offsetIndex]);

    const handleMouseDown = () => {
        if (onFocus) onFocus();
    };

    return (
        <Draggable handle=".handle" nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                onMouseDown={handleMouseDown}
                className={`
                    absolute rounded-lg shadow-lg select-none border
                    border-gray-800 bg-neutral-50 dark:bg-zinc-900 text-gray-900 dark:text-white
                `}
                style={{
                    top: windowSize.y,
                    left: windowSize.x,
                    width: windowSize.width,
                    height: windowSize.height,
                    zIndex: zIndex
                }}
            >
                <div
                    className="handle"
                    style={{
                        backgroundColor: "#333",
                        color: "white",
                        cursor: "grab",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        userSelect: "none",
                        padding: "8px 12px",
                        height: "40px",
                        boxSizing: "border-box"
                    }}
                >
                    <span>{title}</span>
                    <button
                        onClick={onClose}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "white",
                            fontSize: 18,
                            cursor: "pointer",
                            padding: "0 4px"
                        }}
                    >
                        ✕
                    </button>
                </div>
                <div
                    style={{
                        height: "calc(100% - 40px)",
                        overflow: "auto",
                        boxSizing: "border-box"
                    }}
                >
                    {children}
                </div>
            </div>
        </Draggable>
    );
}
