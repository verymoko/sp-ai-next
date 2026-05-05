'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Умный помощник для путей к статике.
 * Автоматически добавляет префикс репозитория только при деплое на GitHub Pages.
 */
const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const repoName = '/sp-ai-next';
  return isProd ? `${repoName}${path}` : path;
};

export default function AmPage() {
  const [hoveredLink, setHoveredLink] = useState<'engineer' | 'manager' | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans">
      
      {/* ЛЕВАЯ ПОЛОВИНА: Дизайнер (Теплый серый) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto flex justify-center items-center p-6 md:p-10 bg-stone-100 border-b md:border-b-0 md:border-r border-stone-300">
        <Link href="/i/am/designer" className="block group max-w-full">
          <div className="text-center flex flex-col items-center">
            <img 
              src={getAssetPath('/designer.jpg')} 
              alt="Дизайнер" 
              className="w-[640px] h-auto max-h-[30vh] md:max-h-full max-w-full rounded-2xl transition-transform duration-300 group-hover:scale-105 mix-blend-multiply object-contain" 
            />
            <h2 className="mt-4 md:mt-8 text-xl text-stone-800">Я — дизайнер</h2>
          </div>
        </Link>
      </div>

      {/* ПРАВАЯ ПОЛОВИНА: Инженер и Менеджер (Холодный серый) */}
      <div 
        className="w-full md:w-1/2 h-[50vh] md:h-auto flex flex-col justify-center items-center p-6 md:p-10 relative bg-slate-100"
        onMouseMove={handleMouseMove}
      >
        {/* Контейнер со ссылками */}
        <div className="flex flex-col gap-6 md:gap-10 z-10 flex-grow justify-center">
          <Link 
            href="/i/am/engineer" 
            className="text-xl text-slate-800 hover:text-blue-600 transition-colors text-center"
            onMouseEnter={() => setHoveredLink('engineer')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Я — инженер
          </Link>

          <Link 
            href="/i/am/manager" 
            className="text-xl text-slate-800 hover:text-blue-600 transition-colors text-center"
            onMouseEnter={() => setHoveredLink('manager')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Я — менеджер
          </Link>
        </div>

        {/* ПОДПИСЬ АВТОРА */}
        <div className="relative md:absolute bottom-0 md:bottom-10 pb-4 md:pb-0 z-10 text-center">
          <a 
            href="https://www.instagram.com/kaerusensei/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-900 transition-colors"
          >
            Картинки от Yu Nagaba
          </a>
        </div>

        {/* КАРТИНКА ПОД КУРСОРЫМ */}
        {hoveredLink && (
          <img 
            src={getAssetPath(`/${hoveredLink}.jpg`)}
            alt={hoveredLink}
            className="fixed pointer-events-none z-0 transition-opacity duration-200 w-48 md:w-64 mix-blend-multiply"
            style={{
              left: mousePos.x,
              top: hoveredLink === 'engineer' ? mousePos.y - 250 : mousePos.y + 10,
              transform: 'translateX(-50%)' 
            }}
          />
        )}
      </div>

    </div>
  );
}