'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Clock from './clock';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed w-full z-10 bg-[#BEE7E8] font-noticia bg-opacity-100 flex ">


      <div className="flex  ml-5 pt-2" ref={menuRef}>
        <Link href="/whoami" className="w-10 h-10 rounded-full border-3 border-black flex items-center justify-center text-lg font-bold ">
          b.
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 text-lg px-5 py-2 relative"
        >
          Menu
        </button>

        {isOpen && (
          <div className="absolute top-full left-4 mt-2 p-3 rounded-lg bg-white shadow-md border">
            <ul className="space-y-2">
              <li>
                <Link href="/aboutsection" onClick={() => setIsOpen(false)}>Sobre mim</Link>
              </li>
              <li>
                <Link href="/projectsection" onClick={() => setIsOpen(false)}>Projetos</Link>
              </li>
              <li>
                <Link href="/emailsection" onClick={() => setIsOpen(false)}>Contato</Link>
              </li>
            </ul>
          </div>
        )}
        <Clock time={time} />
      </div>
    </nav>
  );
}
