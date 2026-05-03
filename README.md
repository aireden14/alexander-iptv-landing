# Alexander IPTV Landing

Одностраничный рекламный лендинг для настройки IPTV на Smart TV, Android TV и TV Box.
Сделан с фокусом на мобильную рекламу, быстрые заявки и WhatsApp-квиз.

Стек: **Vite + React + Tailwind CSS + Framer Motion**.

## Запуск

```bash
cd liquid-landing
npm install
npm run dev
```

Откроется на `http://localhost:5173`.

## Сборка

```bash
npm run build
npm run preview
```

## Структура

- `index.html` — точка входа
- `src/main.jsx` — bootstrap React
- `src/App.jsx` — все секции лендинга и WhatsApp-квиз
- `src/index.css` — Tailwind + глобальные стили liquid glass
- `tailwind.config.js` — тема, тени, радиусы, backdrop-blur
