# Portfolio React (Vite)

This project is a **personal portfolio website** built with **React + Tailwind CSS**, powered by **Vite**.

## 🚀 Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Run dev server

```bash
npm run dev
```

Open the URL shown in the terminal (by default it will be:
`http://localhost:5173/portfolio-react/`).

### 3) Build for production

```bash
npm run build
```

The production output will be generated into the `dist/` folder.

### 4) Preview production build locally

```bash
npm run preview
```

### 5) Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages (the `homepage` in
`package.json` is set to `https://crothos.github.io/portfolio-react`).

```bash
npm run deploy
```

---

## 🧩 Project structure

- `src/` – application source (components, assets, styles)
- `index.html` – Vite entry HTML
- `vite.config.js` – Vite configuration
- `dist/` – production build output (generated)

---

## 🛠 Notes

- This project was migrated from Create React App to Vite.
- `npm run dev` is now the local dev command (no `npm start`).
- `dist/` replaces CRA’s `build/`.
