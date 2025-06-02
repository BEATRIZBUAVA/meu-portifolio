<div className="relative group flex flex-col items-center justify-center w-60 h-60 pt-15">
          {/* Link por cima da pasta */}
          <Link
            href="/whoami"

            className="absolute w-60 h-40 z-30"
          >
            {/* Tooltip visível só no desktop */}
            <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
              Ver projeto
            </div>

            {/* Um conteúdo clicável real (ex: um span invisível pra ocupar espaço) */}
            <span className="sr-only">Ver projeto</span>
          </Link>

          {/* Pasta visual */}
          <div className="file relative w-60 h-40  origin-bottom z-10 transition-transform duration-300 ease-in-out group-hover:scale-105">
            {/* Aqui você coloca as divs da pasta como já tinha feito */}

            <div
              className="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
            ></div>
            <div
              className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"
            ></div>
            <div
              className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"
            ></div>
            <div
              className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"
            ></div>
            <div
              className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]"
            ></div>
          </div>
        
         <div className="flex flex-col items-center justify-start h-screen pt-45">
        <TypeAnimation
          sequence={[
            'Olá mundo!', 1000,
            'Seja bem-vindo!', 1500,
            'Clique no botão para saber mais!', 2000
          ]}
          speed={50}
          repeat={0}
          style={{ fontSize: '2em', display: 'inline-block' }}
        />
      </div>
        </div>
