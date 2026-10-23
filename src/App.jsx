import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { CosmeticBagPage } from './pages/CosmeticBagPage.jsx';
import { CarePage } from './pages/CarePage.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/bag" element={<CosmeticBagPage />} />
          <Route path="/care" element={<CarePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}