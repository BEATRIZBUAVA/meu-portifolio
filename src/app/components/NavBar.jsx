import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="fixed mx-auto  top-0 left-0 right-0 z-10 bg-[#87CE83] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
          <Link
            href={"/"}
            className="text-2l md:text-3xl text-white font-normal"
          >
            @beatrizbuava
          </Link>
          <div
            className="menu hidden md:block md:w-auto"
            id="navbar"
          >
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              <li key="sobremim">
                <Link
                  href="/sobremim"
                  className="hover:text-slate-200"
                >
                  Sobre mim
                </Link>
              </li>
              <li key="projects">
                <Link
                  href="#habilidades"
                  className="hover:text-slate-200"
                >
                    Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="hover:text-red-600"
                >
                 Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="hover:text-slate-200"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
                                    
                                   