import React, { useEffect, useState } from 'react';

export default function Clock() {
    const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Marca que está no cliente

    const update = () => {
      setTime(new Date().toLocaleTimeString());
    };

    update(); // Atualiza de imediato
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Nada é renderizado no SSR

  return <span className='text-gray-700 text-lg'>{time}</span>;
}