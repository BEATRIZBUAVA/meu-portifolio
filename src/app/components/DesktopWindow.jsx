import React, { useRef } from "react";
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

    // Calcular posição imediatamente, sem useState
    const windowWidth = 1000;
    const windowHeight = 600;

    const centerX = (window.innerWidth - windowWidth) / 2;
    const centerY = (window.innerHeight - windowHeight) / 2;

    // Adicionar offset baseado no índice para evitar sobreposição
    const offset = offsetIndex * 40;

    const position = {
        x: centerX + offset,
        y: centerY + offset
    };

    // Função para focar janela quando clicada
    const handleMouseDown = () => {
        if (onFocus) {
            onFocus();
        }
    };

    return (
        <Draggable handle=".handle" nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                onMouseDown={handleMouseDown}
                style={{
                    position: "absolute",
                    top: position.y,
                    left: position.x,
                    width: 1000,
                    height: 600,
                    backgroundColor: "white",
                    border: "1px solid #333",
                    borderRadius: 8,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    userSelect: "none",
                    zIndex: zIndex,
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
                        boxSizing: "border-box",
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
                            padding: "0 4px",
                        }}
                    >
                        ✕
                    </button>
                </div>
                <div style={{
                    height: "calc(100% - 40px)",
                    overflow: "auto",
                    boxSizing: "border-box"
                }}>
                    {children}
                </div>
            </div>
        </Draggable>
    );
}