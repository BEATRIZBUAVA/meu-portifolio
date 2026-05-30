"use client";
import HeroSection from "../components/whoami/band/HeroSection";
import React, { useState } from "react";
import { CardBonita } from "../components/whoami/CardBonita";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faWind,
    faDrum,
    faMicrophone,
    faBook,
    faPalette,
    faMusic,
} from "@fortawesome/free-solid-svg-icons";
import {
    faCss3Alt,
    faJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

const XPButton = ({ children, onClick, active = false }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 border-2 rounded text-sm font-medium transition-all ${active
            ? "border-gray-600 bg-gray-300 shadow-inner"
            : "border-gray-400 bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 shadow-md"
            }`}
        style={{
            borderStyle: active ? "inset" : "outset",
            boxShadow: active
                ? "inset 1px 1px 2px rgba(0,0,0,0.3)"
                : "1px 1px 2px rgba(0,0,0,0.3)",
        }}
    >
        {children}
    </button>
);

const SkillItem = ({ icon, title, description }) => (
    <div
        className="bg-white border border-gray-300 rounded p-3 mb-2 hover:bg-blue-50 transition-colors cursor-pointer"
        style={{
            borderStyle: "inset",
            boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.1)",
        }}
    >
        <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-blue-500 rounded-sm mr-3 flex items-center justify-center text-white text-sm">
                <FontAwesomeIcon icon={icon} />
            </div>
            <span className="font-semibold text-gray-800">{title}</span>
        </div>
        <p className="text-sm text-gray-600 ml-9">{description}</p>
    </div>
);

const InterestItem = ({ icon, title, description, color = "green" }) => {
    const colorClasses = {
        green: "bg-green-500",
        purple: "bg-purple-500",
        orange: "bg-orange-500",
        pink: "bg-pink-500",
    };

    return (
        <div
            className="bg-white border border-gray-300 rounded p-3 mb-2 hover:bg-yellow-50 transition-colors cursor-pointer"
            style={{
                borderStyle: "inset",
                boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.1)",
            }}
        >
            <div className="flex items-center mb-2">
                <div
                    className={`w-6 h-6 ${colorClasses[color]} rounded-sm mr-3 flex items-center justify-center text-white text-sm`}
                >
                    <FontAwesomeIcon icon={icon} />
                </div>
                <span className="font-semibold text-gray-800">{title}</span>
            </div>
            <p className="text-sm text-gray-600 ml-9">{description}</p>
        </div>
    );
};

export default function WhoAmI() {
    const [activeTab, setActiveTab] = useState("skills");

    const skills = [
        {
            icon: faCode,
            title: "HTML",
            description: "Linguagem de marcação para estruturar páginas web",
        },
        {
            icon: faCss3Alt,
            title: "CSS",
            description: "Estilização e layout responsivo para web",
        },
        {
            icon: faJs,
            title: "JavaScript",
            description: "Programação web dinâmica e interativa",
        },
        {
            icon: faReact,
            title: "React",
            description: "Framework JavaScript para interfaces modernas",
        },
        {
            icon: faWind,
            title: "TailwindCSS",
            description: "Framework CSS para desenvolvimento ágil",
        },
    ];

    const interests = [
        {
            icon: faDrum,
            title: "Tocar bateria",
            description: "Música e ritmo como expressão artística",
            color: "purple",
        },
        {
            icon: faMicrophone,
            title: "Cantar",
            description: "Expressão vocal e interpretação musical",
            color: "pink",
        },
        {
            icon: faBook,
            title: "Ler",
            description: "Literatura e conhecimento através dos livros",
            color: "green",
        },
        {
            icon: faPalette,
            title: "Pintar",
            description: "Arte visual e criatividade com cores",
            color: "orange",
        },
    ];

    return (
        <section>
            <div className="">
                <CardBonita />
                <HeroSection />
            </div>

            <div className="p-8 max-w-4xl mx-auto">
                {/* Tabs */}
                <div className="flex space-x-2 mb-4">
                    <XPButton
                        active={activeTab === "skills"}
                        onClick={() => setActiveTab("skills")}
                    >
                        Minhas Habilidades
                    </XPButton>
                    <XPButton
                        active={activeTab === "interests"}
                        onClick={() => setActiveTab("interests")}
                    >
                        Outros Interesses
                    </XPButton>
                </div>

                {/* Conteúdo das abas */}
                <div
                    className="bg-white border-2 border-gray-300 rounded p-4 min-h-96 [border-style:inset] [box-shadow:inset_2px_2px_4px_rgba(0,0,0,0.1)]"

                >
                    {activeTab === "skills" && (
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 bg-blue-500 rounded-sm mr-3 flex items-center justify-center text-white text-sm">
                                    <FontAwesomeIcon icon={faCode} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Tecnologias que domino
                                </h3>
                            </div>
                            <div className="space-y-2">
                                {skills.map((skill, index) => (
                                    <SkillItem
                                        key={index}
                                        icon={skill.icon}
                                        title={skill.title}
                                        description={skill.description}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "interests" && (
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 bg-green-500 rounded-sm mr-3 flex items-center justify-center text-white text-sm">
                                    <FontAwesomeIcon icon={faMusic} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">
                                    Minhas paixões e hobbies
                                </h3>
                            </div>
                            <div className="space-y-2">
                                {interests.map((interest, index) => (
                                    <InterestItem
                                        key={index}
                                        icon={interest.icon}
                                        title={interest.title}
                                        description={interest.description}
                                        color={interest.color}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
