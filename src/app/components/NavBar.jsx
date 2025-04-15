'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/whoami" },
    { name: "Sobre mim", href: "/aboutsection" },
    { name: "Projetos", href: "/projectsection" },
    { name: "Contato", href: "/emailsection" },
    
  ];
      
  
  return (
    <nav className="fixed w-full z-10 bg-[#759EB8] !font-noticia bg-opacity-100 "
    style={{ backgroundImage: `url('/assets/texture.png')`, backgroundSize: "fit", backgroundPosition: "center" }}>
    <div className="flex justify-start  px-4 pt-2 "
    
    >
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const baseStyle =
          "px-5 py-2 text-sm  md:text-base rounded-t-lg  w-50 transition-colors";
        const activeStyle = " !text-[#FCF6E4] z-10";
        const tabColor =
          tab.name === "Home"
            ? "bg-[#759EB8] !text-[#FCF6E4] hover:bg-green-700 "
            : tab.name === "Sobre mim"
            ? "bg-[#03441F] !text-[#FCF6E4] hover:bg-green-700 "
            : tab.name === "Projetos"
            ? "bg-[#0A285A] !text-[#FCF6E4] hover:bg-blue-700 "
            : tab.name === "Contato"
            ? "bg-[#051116] !text-[#FCF6E4] hover:bg-red-700 "
            : "bg-[#4F3824] !text-[#FCF6E4] hover:bg-neutral-700 ";

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`${baseStyle} ${tabColor} ${isActive ? activeStyle : ""}`}
            style={{ backgroundImage: `url('/assets/texture.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  </nav>
    );
  };
                                    
                                   