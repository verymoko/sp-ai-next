import Link from 'next/link';
import styles from './am.module.css';

export default function AmPage() {
  return (
    <div className={styles.container}>
      
      <Link href="/i/am/designer" style={{ textDecoration: 'none' }}>
        <div className={styles.card}>
          <img src="/sp-ai-next/designer.jpg" alt="Дизайнер" className={styles.image} />
          <h2 style={{ marginTop: '15px' }}>Я — Дизайнер</h2>
        </div>
      </Link>

      <Link href="/i/am/engineer" className={styles.link}>
        Я — Инженер
      </Link>

    </div>
  );
}