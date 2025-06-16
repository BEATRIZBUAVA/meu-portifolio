import React from "react";

function SVGCloud({ top, size, duration, opacity }) {
    return (
        <svg
            className="absolute left-[-100px] animate-cloud"
            style={{
                top,
                width: `${size}px`,
                height: `${(size * 40) / 64}px`,
                opacity,
                animationDuration: duration,
                zIndex: -1
            }}
            viewBox="0 0 64 40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20,40H52a12,12 0 0 0 0-24 14,14 0 0 0-26-4A10,10 0 0 0 4,26 10,10 0 0 0 14,40Z"
                fill="white"
            />
        </svg>
    );
}

export default SVGCloud;
