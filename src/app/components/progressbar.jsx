import { useEffect, useState } from 'react';

export default function TileProgressBar() {
  const total = 10; // número total de quadrados
  const delay = 300; // intervalo entre atualizações

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) return 0;
        const diff = Math.random() * 10;
        return Math.min(prev + diff, 100);
      });
    }, delay);

    return () => clearInterval(timer);
  }, [delay]);

  const filledTiles = Math.round((percent / 100) * total);

  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 transition-all duration-500 ease-out ${
            i < filledTiles ? 'bg-green-100 scale-110' : 'bg-gray-300 scale-100'
          }`}
        />
      ))}
    </div>
  );
}
