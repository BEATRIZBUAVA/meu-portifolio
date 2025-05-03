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
    <nav className="fixed w-full z-10 bg-[#FFFAED] !font-noticia bg-opacity-100 "
    >
      <div className="flex justify-end px-4 pt-2 "

      >
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const baseStyle =
            "px-5 py-2 text-sm  md:text-base rounded-t-lg  w-50 transition-colors";
          const activeStyle = " !text-[#FCF6E4] z-10";
          const tabColor =
            tab.name === "Home"
              ? "bg-[#7897A6] !text-[#FCF6E4] s border border-white border-b-0 hover:bg-[#436E84] "
              : tab.name === "Sobre mim"
                ? "bg-[#86AC6F] !text-[#FCF6E4] border border-white border-b-0 hover:bg-[#6D9158] "
                : tab.name === "Projetos"
                  ? "bg-[#BE7C4D] !text-[#FCF6E4] border border-white border-b-0 hover:bg-[#A7693C] "
                  : tab.name === "Contato"
                    ? "bg-[#134611] !text-[#FCF6E4] border border-white border-b-0 hover:bg-[#950000] "
                    : "bg-[#4F3824] !text-[#FCF6E4] hover:bg-neutral-700 ";

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`${baseStyle} ${tabColor} ${isActive ? activeStyle : ""}`}

            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

