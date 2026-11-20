import styles from './CareChecklist.module.css';

export function CareChecklist({ title, icon, items }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.list}>
        {items.map((item, idx) => (
          <label key={idx} className={styles.item}>
            <input
              type="checkbox"
              defaultChecked={item.completed}
              className={styles.checkbox}
            />
            <span>{item.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}