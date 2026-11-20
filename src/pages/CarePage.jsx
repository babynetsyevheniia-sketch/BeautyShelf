import { CareChecklist } from '../components/CareChecklist';
import styles from './CarePage.module.css';

export function CarePage() {
  const morningList = [
    { text: 'Очищення пінкою або гелем', completed: true },
    { text: 'Тонізація', completed: true },
    { text: 'Сироватка', completed: false },
    { text: 'Зволожувальний крем', completed: false },
    { text: 'Сонцезахисний крем', completed: false },
  ];

  const eveningList = [
    { text: 'Демакіяж', completed: true },
    { text: 'Очищення пінкою або гелем', completed: true },
    { text: 'Сироватка', completed: false },
    { text: 'Нічний крем', completed: false },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ЩОДЕННИЙ ДОГЛЯД ЗА ШКІРОЮ</h2>
      <p className={styles.subtitle}>Познач процедури, які ти вже виконала сьогодні</p>

      <div className={styles.grid}>
        <CareChecklist title="РАНКОВИЙ ДОГЛЯД" icon="☀️" items={morningList} />
        <CareChecklist title="ВЕЧІРНІЙ ДОГЛЯД" icon="🌙" items={eveningList} />
      </div>
    </div>
  );
}