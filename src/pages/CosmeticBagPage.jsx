import { useState, useMemo } from 'react';
import { CosmeticCard } from '../components/CosmeticCard.jsx';
import { useFetch } from '../hooks/useFetch.js';
import styles from './CosmeticBagPage.module.css';

export function CosmeticBagPage() {
  const { data: cosmetics, loading, error, addItem, deleteItem } = useFetch(
    'http://localhost:5000/api/cosmetics'
  );

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDate, setNewDate] = useState('');

  const normalizedCosmetics = useMemo(() => {
    if (!Array.isArray(cosmetics)) return [];

    return cosmetics.map((item, idx) => ({
      id: item.id || `item-${idx}`,
      name: item.name || item.title || 'Засіб догляду',
      category: item.category || (idx % 2 === 0 ? 'Крем' : 'Сонцезахист'),
      date: item.date || `2${idx + 1}.12.2026`,
    }));
  }, [cosmetics]);

  const filteredAndSortedCosmetics = useMemo(() => {
    let result = [...normalizedCosmetics];

    if (selectedCategory !== 'all') {
      result = result.filter(
        (item) => item.category && item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'date') {
      result.sort((a, b) => a.date.localeCompare(b.date));
    }

    return result;
  }, [normalizedCosmetics, selectedCategory, sortBy]);

  const handleAddCosmetic = async (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const categoryMap = {
      cream: 'Крем',
      serum: 'Сироватка',
      tonic: 'Тонік',
      foam: 'Пінка',
      spf: 'Сонцезахист',
    };

    const newItem = {
      name: newName,
      category: categoryMap[newCategory] || 'Крем',
      date: newDate || '01.01.2027',
    };

    await addItem(newItem);

    setNewName('');
    setNewCategory('');
    setNewDate('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>МОЯ КОСМЕТИЧКА</h2>

      <div className={styles.filters}>
        <select 
          className={styles.select} 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Усі категорії</option>
          <option value="крем">Крем</option>
          <option value="сироватка">Сироватка</option>
          <option value="тонік">Тонік</option>
          <option value="пінка">Пінка для вмивання</option>
          <option value="сонцезахист">Сонцезахист (SPF)</option>
        </select>

        <select 
          className={styles.select} 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">За датою придатності</option>
          <option value="name">За назвою (А-Я)</option>
        </select>
      </div>

      {loading && <p className={styles.loadingText}>Завантаження косметички...</p>}
      {error && <p className={styles.errorText}>{error}</p>}

      {!loading && !error && (
        <div className={styles.list}>
          {filteredAndSortedCosmetics.length > 0 ? (
            filteredAndSortedCosmetics.map((item) => (
              <CosmeticCard 
                key={item.id} 
                {...item} 
                onDelete={() => deleteItem(item.id)} 
              />
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#666' }}>Засобів не знайдено</p>
          )}
        </div>
      )}

      <h3 className={styles.sectionTitle}>ДОДАТИ НОВИЙ ЗАСІБ</h3>
      <form className={styles.addForm} onSubmit={handleAddCosmetic}>
        <input 
          type="text" 
          placeholder="Назва засобу" 
          className={styles.inputName}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        
        <select 
          className={styles.select}
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          required
        >
          <option value="">Тип</option>
          <option value="cream">Крем</option>
          <option value="serum">Сироватка</option>
          <option value="tonic">Тонік</option>
          <option value="foam">Пінка</option>
          <option value="spf">Сонцезахист</option>
        </select>

        <input 
          type="text" 
          placeholder="Дата" 
          className={`${styles.select} ${styles.inputDate}`} 
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <button type="submit" className={styles.addBtn}>Додати</button>
      </form>
    </div>
  );
}