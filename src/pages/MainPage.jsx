import { StatCard } from '../components/StatCard';
import styles from './MainPage.module.css';

export function MainPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ВІТАЄМО У BEATYSHELF!</h1>
      <p className={styles.subtitle}>
        Це твій персональний простір для обліку косметики та щоденного догляду.
      </p>

      <div className={styles.cardsRow}>
        <StatCard value="3" label="засоби у косметичці" type="cosmetic" />
        <StatCard value="2/4" label="процедур виконано" type="check" />

        <div className={styles.tipCard}>
          <div className={styles.tipHeader}>
            <span className={styles.tipTitle}>Порада дня:</span>
            <span className={styles.tipIcon}>☀️</span>
          </div>
          <p className={styles.tipText}>
            "Не забувай наносити SPF за 15 хвилин до виходу на вулицю!"
          </p>
        </div>
      </div>
    </div>
  );
}