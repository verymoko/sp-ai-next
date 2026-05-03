import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      gap:'20px',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5' // Светло-серый нейтральный фон
    }}>
      <Link 
        href="/i/am" 
        style={{
          backgroundColor: '#0079a6', // Ваш фирменный синий
          color: 'white',
          padding: '16px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '20px',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
      >
        Перейти в i/am
      </Link>
      <Link 
        href="https://github.com/verymoko/sp-ai-next" 
        style={{
          color: '#0079a6',
          textDecoration: 'none',
          fontSize: '20px',
        }}
      >
        Страница на гитхабе
      </Link>
    </main>
  );
}