import React, { useRef } from "react";
import Draggable from "react-draggable";

export default function DesktopWindow({ onClose, children }) {
    const nodeRef = useRef(null);

    return (
        <Draggable handle=".handle" nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                style={{
                    position: "absolute",
                    top: "100px",
                    left: "100px",
                    width: 1000,
                    height: 700,
                    backgroundColor: "white",
                    border: "1px solid #333",
                    borderRadius: 8,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    userSelect: "none",
                    zIndex: 1000,
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
                    }}
                >
                    <span>Janela</span>
                    <button
                        onClick={onClose}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "white",
                            fontSize: 18,
                            cursor: "pointer",
                        }}
                    >
                        ✕
                    </button>
                </div>
                <div style={{
                    height: "calc(100% - 40px)",
                    overflow: "auto",
                    boxSizing: "border-box"
                }}>{children}</div>
            </div>
        </Draggable>
    );
}
