import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styles from './LoginPage.module.css';

export function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login({ email, password });

    if (success) {
      if (onLogin) onLogin();
     
      navigate('/');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>BeautyShelf</div>
        <div className={styles.subtitle}>Твій beauty-органайзер</div>
        <div className={styles.title}>ВХІД</div>

        {/* Відображення помилки авторизації, якщо вона є */}
        {error && (
          <div style={{ color: '#e11d48', marginBottom: '12px', fontSize: '14px', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            className={styles.input} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Пароль" 
            className={styles.input} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? 'Завантаження...' : 'Увійти'}
          </button>
        </form>

        <div className={styles.footerText}>
          Немає акаунта? <Link to="/register" className={styles.link}>Зареєструватися</Link>
        </div>
      </div>
    </div>
  );
}