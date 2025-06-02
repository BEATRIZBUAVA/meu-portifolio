import React, { useEffect, useState } from 'react';

export default function TileProgressBar() {
  const total = 10; // número total de quadrados
  const duration = 3000; // 3 segundos em milissegundos
  const interval = 50; // atualiza a cada 50ms para suavidade
  
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newPercent = Math.min((elapsed / duration) * 100, 100);
      
      setPercent(newPercent);
      
      if (newPercent >= 100) {
        clearInterval(timer);
        // Reinicia após completar
        setTimeout(() => {
          setPercent(0);
        }, 1000);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [duration, interval]);

  const filledTiles = Math.round((percent / 100) * total);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 transition-all duration-300 ease-out ${
              i < filledTiles ? 'bg-green-500 scale-110' : 'bg-gray-300 scale-100'
            }`}
          />
        ))}
      </div>
      <div className="text-sm text-white">
        {Math.round(percent)}%
      </div>
    </div>
  );
}