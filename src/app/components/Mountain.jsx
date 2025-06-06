import React from "react";

function Mountain({
    fill = "#4CAF50",
    height = 600,
    width = 800,
    bottom = "0px",
    left = "0px",
    opacity = 1,
}) {
    return (
        <svg
            className="absolute w-full h-[40vh] "
            style={{ bottom, left, opacity, zIndex: -1 }}
            viewBox="0 0 800 900"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <defs>
                <linearGradient id="mountainGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#216105" />
                    <stop offset="20%" stopColor="#47a71c" />
                    <stop offset="100%" stopColor="#216105" />
                </linearGradient>
            </defs>
            <path
                d="M0,400 
                   Q200,100 800,600 
                   L800,900 
                   L0,900 
                    Z"
                fill="url(#mountainGradient)"
            />
        </svg>
    );
}

export default Mountain;
