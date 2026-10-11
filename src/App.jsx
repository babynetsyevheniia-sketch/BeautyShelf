import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { MainPage } from './pages/MainPage.jsx';
import { CosmeticBagPage } from './pages/CosmeticBagPage.jsx';
import { CarePage } from './pages/CarePage.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('main');

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === 'main' && <MainPage />}
        {activePage === 'bag' && <CosmeticBagPage />}
        {activePage === 'care' && <CarePage />}
      </main>
    </div>
  );
}