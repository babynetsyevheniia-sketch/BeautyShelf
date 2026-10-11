import styles from './LoginPage.module.css';

export function LoginPage({ onLogin }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>BeautyShelf</div>
        <div className={styles.subtitle}>Твій beauty-органайзер</div>
        <div className={styles.title}>ВХІД</div>

        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <input type="email" placeholder="Email" className={styles.input} required />
          <input type="password" placeholder="Пароль" className={styles.input} required />
          <button type="submit" className={styles.submitBtn}>Увійти</button>
        </form>

        <div className={styles.footerText}>
          Немає акаунта? <a href="#register" className={styles.link}>Зареєструватися</a>
        </div>
      </div>
    </div>
  );
}