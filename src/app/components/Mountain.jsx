import React from "react";

function Mountain({

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
                <linearGradient id="mountainGradient-light" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(53.2% 0.157 131.589)" />
                    <stop offset="40%" stopColor="oklch(64.8% 0.2 131.684)" />
                    <stop offset="100%" stopColor="oklch(53.2% 0.157 131.589)" />
                </linearGradient>
                <linearGradient id="mountainGradient-dark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(27.4% 0.072 132.109)" />
                    <stop offset="20%" stopColor="oklch(40.5% 0.101 131.063)" />
                    <stop offset="100%" stopColor="oklch(27.4% 0.072 132.109)" />
                </linearGradient>
            </defs>
            <path
                d="M0,400 
                   Q200,100 800,600 
                   L800,900 
                   L0,900 
                    Z"
                fill="url(#mountainGradient-light)"
                className="block dark:hidden"

            />
            <path
                d="M0,400 
                   Q200,100 800,600 
                   L800,900 
                   L0,900 
                    Z"
                fill="url(#mountainGradient-dark)"
                className="hidden dark:block"
            />
        </svg>
    );
}

export default Mountain;
