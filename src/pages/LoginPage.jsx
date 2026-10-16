import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

export function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); 
    navigate('/'); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>BeautyShelf</div>
        <div className={styles.subtitle}>Твій beauty-органайзер</div>
        <div className={styles.title}>ВХІД</div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className={styles.input} required />
          <input type="password" placeholder="Пароль" className={styles.input} required />
          <button type="submit" className={styles.submitBtn}>Увійти</button>
        </form>

        <div className={styles.footerText}>
          Немає акаунта? <Link to="/register" className={styles.link}>Зареєструватися</Link>
        </div>
      </div>
    </div>
  );
}