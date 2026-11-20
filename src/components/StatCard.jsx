import styles from './StatCard.module.css';

export function StatCard({ value, label, type }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.icon} ${type === 'check' ? styles.greenIcon : styles.pinkIcon}`}>
        {type === 'check' ? '✓' : '💄'}
      </div>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}