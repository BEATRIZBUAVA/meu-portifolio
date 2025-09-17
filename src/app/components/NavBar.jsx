'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Clock from './clock';
import ThemeToggle from './ThemeToggle';
import { useSound } from './SoundControl';
import SoundControl from './SoundControl';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [time, setTime] = useState(new Date());
  const { playSound } = useSound();

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
    <nav className="fixed bottom-0  w-full z-50 dark:bg-[#333] bg-amber-50 font-noticia bg-opacity-100 flex ">


      <div className="flex w-full ml-5 pt-2 justify-between" ref={menuRef}>

        <div className='flex'>
          <button
            onClick={() => { setIsOpen(!isOpen); playSound('click'); }}
            className="text-gray-900 text-lg px-5 py-2 relative"
          >
            Menu
          </button>

          {isOpen && (
            <div className="absolute bottom-full left-4 p-3 rounded-lg bg-white shadow-md border ">
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutsection" onClick={() => { setIsOpen(false); playSound('click'); }}  >Sobre mim</Link>
                </li>
                <li>
                  <Link href="/projectsection" onClick={() => { setIsOpen(false); playSound('click'); }}>Projetos</Link>
                </li>
                <li>
                  <Link href="/emailsection" onClick={() => { setIsOpen(false); playSound('click'); }}>Contato</Link>
                </li>
              </ul>
            </div>
          )}

          <ThemeToggle />
          <SoundControl />
        </div>
        <Clock time={time} />
      </div>
    </nav>
  );
}
