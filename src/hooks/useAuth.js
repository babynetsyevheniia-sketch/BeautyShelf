import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('beautyShelfUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Невірно вказано логін або пароль');
      }

      const userData = { email: credentials.email, name: 'Користувач BeautyShelf' };
      setUser(userData);
      localStorage.setItem('beautyShelfUser', JSON.stringify(userData));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('beautyShelfUser');
  };

  return { user, loading, error, login, logout, isAuthenticated: !!user };
}