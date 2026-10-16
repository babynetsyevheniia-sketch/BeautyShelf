import styles from './CosmeticCard.module.css';

export function CosmeticCard({ name, category, date }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <span className={styles.date}>{date}</span>
      <button className={styles.deleteBtn}>Видалити</button>
    </div>
  );
}