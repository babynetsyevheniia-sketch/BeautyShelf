import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Помилка: ${res.status}`);
        return res.json();
      })
      .then((result) => {
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Не вдалося завантажити дані');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  const addItem = async (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setData((prev) => [itemWithId, ...prev]);

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });
    } catch (err) {
      console.log('Помилка POST запиту:', err);
    }
  };

  const deleteItem = (targetId) => {
    setData((prev) => prev.filter((item) => String(item.id) !== String(targetId)));

    fetch(`${url}/${targetId}`, { method: 'DELETE' }).catch((err) =>
      console.log('Помилка DELETE запиту:', err)
    );
  };

  return { data, loading, error, addItem, deleteItem };
}