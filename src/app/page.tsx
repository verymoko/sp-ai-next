'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center gap-6">
      
      <button 
        onClick={() => router.push('/i/am')}
        className="bg-neutral-800 hover:bg-neutral-900 text-white px-8 py-3 rounded-lg text-lg font-medium shadow transition-colors"
      >
        Перейти в i/am
      </button>

      <Link 
        href="https://github.com/verymoko/sp-ai-next" 
        className="text-neutral-700 text-lg hover:text-neutral-900 hover:underline transition-colors"
      >
        Страница на гитхабе
      </Link>

    </main>
  );
}