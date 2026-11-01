import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        BeautyShelf
      </NavLink>
      
      <nav className={styles.nav}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          end
        >
          Головна
        </NavLink>
        
        <NavLink 
          to="/bag" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Косметичка
        </NavLink>
        
        <NavLink 
          to="/care" 
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        >
          Догляд
        </NavLink>
      </nav>
    </header>
  );
}