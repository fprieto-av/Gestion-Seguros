# Gestión Seguros — Frontend

Sitio web institucional de Gestión Seguros. Construido con React 19 + Vite + React Router.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
cd frontend
npm install
```

## Correr en desarrollo

```bash
cd frontend
npm run dev
```

El sitio queda disponible en `http://localhost:5173`.

## Build para producción

```bash
cd frontend
npm run build
```

Los archivos compilados se generan en `frontend/dist/`.

## Preview del build

```bash
cd frontend
npm run preview
```

Levanta un servidor local con el build de producción en `http://localhost:4173`.

## Scripts adicionales

| Comando | Descripción |
|---|---|
| `npm run lint` | Corre ESLint sobre el proyecto |
| `npm run optimize:videos` | Optimiza los videos de la carpeta `assets/video` |
| `npm run generate:favicons` | Genera los favicons a partir del logo |

## Estructura

```
frontend/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes, videos, CSS
│   ├── components/  # Componentes reutilizables
│   ├── hooks/       # Custom hooks
│   └── pages/       # Páginas (una por ruta)
├── index.html
└── package.json
```
