import styles from './Header.module.css';

export function Header({ activePage, setActivePage }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BeautyShelf</div>
      <nav className={styles.nav}>
        <button
          className={`${styles.navButton} ${activePage === 'main' ? styles.active : ''}`}
          onClick={() => setActivePage('main')}
        >
          Головна
        </button>
        <button
          className={`${styles.navButton} ${activePage === 'bag' ? styles.active : ''}`}
          onClick={() => setActivePage('bag')}
        >
          Косметичка
        </button>
        <button
          className={`${styles.navButton} ${activePage === 'care' ? styles.active : ''}`}
          onClick={() => setActivePage('care')}
        >
          Догляд
        </button>
      </nav>
    </header>
  );
}