'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TileProgressBar from "./progressbar";
import Home from "./Home";

export default function FirstPage() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000); // 3 segundos
    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return (
      <main className="relative w-full min-h-screen  text-white overflow-hidden">
        {/* SVG como fundo */}
        <div className="absolute inset-0 z-[-1] flex items-center justify-center">
          <svg
            className="w-full max-w-[960px] h-auto"
            viewBox="0 0 480 360"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="linearGradient4213">
                <stop offset="0" style={{ stopColor: "#1a1a1a", stopOpacity: 1 }} />
                <stop offset="1" style={{ stopColor: "#4d4d4d", stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="linearGradient4197">
                <stop offset="0" style={{ stopColor: "#caa965", stopOpacity: 1 }} />
                <stop offset="1" style={{ stopColor: "#8f774b", stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="linearGradient4191">
                <stop offset="0" style={{ stopColor: "#000000", stopOpacity: 1 }} />
              </linearGradient>
              <filter id="filter4011" colorInterpolationFilters="sRGB">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
                <feSpecularLighting
                  in="blur"
                  specularExponent="25"
                  specularConstant="0.5"
                  surfaceScale="10"
                  lightingColor="#ffffff"
                  result="specular"
                >
                  <feDistantLight elevation="39" azimuth="238" />
                </feSpecularLighting>
                <feComposite
                  in="specular"
                  in2="SourceGraphic"
                  k2="1"
                  k3="1"
                  operator="arithmetic"
                  result="composite1"
                />
                <feComposite
                  in="composite1"
                  in2="SourceAlpha"
                  operator="in"
                  result="composite2"
                />
              </filter>
              <radialGradient
                xlinkHref="#linearGradient4197"
                id="radialGradient4203"
                cx="300.77"
                cy="1063.49"
                fx="300.77"
                fy="1063.49"
                r="127.46"
                gradientTransform="matrix(1,0,0,0.62124183,0,353.40267)"
                gradientUnits="userSpaceOnUse"
              />
              <linearGradient
                xlinkHref="#linearGradient4213"
                id="linearGradient4211"
                x1="123.06"
                y1="872.41"
                x2="431.27"
                y2="736.7"
                gradientUnits="userSpaceOnUse"
              />
            </defs>
            <g transform="translate(0,-692.3622)">
              <path
                d="M114.22 1052.36A127.46 108.88 0 0 1 241.68 943.49 127.46 108.88 0 0 1 369.15 1052.36"
                fill="url(#radialGradient4203)"
              />
              <rect
                width="480"
                height="293.57"
                x="0"
                y="692.36"
                rx="20.75"
                ry="20.32"
                style={{ fillRule: "evenodd", fill: "#caae74" }}
              />
              <rect
                width="432.59"
                height="248.31"
                x="21.11"
                y="715.64"
                rx="18.7"
                ry="17.19"
                transform="matrix(0.99999629,-0.00272267,0.00309109,0.99999522,0,0)"
                style={{
                  fillRule: "nonzero",
                  fill: "url(#linearGradient4211)",
                  strokeMiterlimit: 4,
                  strokeWidth: 5,
                  stroke: "#8f774b",
                }}
              />
            </g>
            <path id="path">
              <animate
                attributeName="d"
                from="m174,150 h0"
                to="m174,150 h400"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
            </path>

          </svg>
        </div>

        {/* Conteúdo por cima do SVG */}
        <div className="flex flex-col items-center justify-start pt-44 h-screen relative z-10">
          <div className="flex flex-col items-center gap-2 mb-5 cursor-pointer p-4 transition-all">
            <div className="animate-float">
              <div className="bg-[#FF8F56] w-[60px] h-[12px] rounded-tr-[10px]"></div>
              <div className="bg-[#FFCE63] w-[100px] h-[70px] shadow-[5px_5px_0_0_#283149] rounded-tr-[8px]"></div>
            </div>
            <span className="text-sm text-white mt-2">Carregando os arquivos...</span>
          </div>
          <TileProgressBar />
        </div>
      </main>
    );
  }

  return (
    <div className="font-noticia h-screen overflow-hidden">
      <Home />
    </div>
  );
}
