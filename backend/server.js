const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let cosmetics = [
  { id: 1, name: 'Skin 1004 Centella Soothing Cream', category: 'Крем', date: '15.10.2026' },
  { id: 2, name: 'Perlier Petali di Rosa', category: 'Крем', date: '22.12.2026' },
  { id: 3, name: 'Eucerin Sun Protection', category: 'Сонцезахист', date: '26.12.2026' }
];

app.get('/api/cosmetics', (req, res) => {
  res.json(cosmetics);
});

app.post('/api/cosmetics', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  cosmetics.unshift(newItem);
  res.status(201).json(newItem);
});

app.delete('/api/cosmetics/:id', (req, res) => {
  const { id } = req.params;
  cosmetics = cosmetics.filter(item => String(item.id) !== String(id));
  res.status(200).json({ message: 'Засіб видалено успішно' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({ success: true, token: 'fake-jwt-token-12345', user: { email, name: 'Користувач' } });
  } else {
    res.status(400).json({ success: false, message: 'Невірна пошта або пароль' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});