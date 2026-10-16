import { CosmeticCard } from '../components/CosmeticCard.jsx';
import styles from './CosmeticBagPage.module.css';

export function CosmeticBagPage() {
  const cosmetics = [
    { name: 'Skin 1004 Centella Soothing Cream', category: 'Крем', date: '15.10.2026' },
    { name: 'Perlier Petali di Rosa', category: 'Крем', date: '22.12.2026' },
    { name: 'Eucerin Sun Protection', category: 'Сонцезахист', date: '26.12.2026' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>МОЯ КОСМЕТИЧКА</h2>

      {/* Фільтри */}
      <div className={styles.filters}>
        <select className={styles.select}>
          <option value="all">Усі категорії</option>
          <option value="cream">Крем</option>
          <option value="serum">Сироватка</option>
          <option value="tonic">Тонік</option>
          <option value="foam">Пінка для вмивання</option>
          <option value="spf">Сонцезахист (SPF)</option>
        </select>

        <select className={styles.select}>
          <option value="date">За датою придатності</option>
          <option value="name">За назвою (А-Я)</option>
        </select>
      </div>

      {/* Список карток */}
      <div className={styles.list}>
        {cosmetics.map((item, idx) => (
          <CosmeticCard key={idx} {...item} />
        ))}
      </div>

      {/* Форма додавання */}
      <h3 className={styles.sectionTitle}>ДОДАТИ НОВИЙ ЗАСІБ</h3>
      <form className={styles.addForm} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Назва засобу" className={styles.inputName} />
        
        <select className={styles.select}>
          <option value="">Тип</option>
          <option value="cream">Крем</option>
          <option value="serum">Сироватка</option>
          <option value="tonic">Тонік</option>
          <option value="foam">Пінка</option>
          <option value="spf">Сонцезахист</option>
        </select>

        <input type="text" placeholder="Дата" className={styles.select} style={{ width: '100px' }} />
        <button type="submit" className={styles.addBtn}>Додати</button>
      </form>
    </div>
  );
}