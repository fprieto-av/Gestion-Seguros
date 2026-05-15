# Plan de Migración a React — Gestión Seguro

## Estado actual
- Sitio estático en `Sitio/` — 13 páginas HTML, 1 CSS (~1900 líneas), 1 JS (~616 líneas)
- Stack actual: HTML + CSS + Vanilla JS (sin frameworks)
- Node.js v22 instalado ✅

## Stack objetivo
- **Vite + React** (proyecto en `gestion-seguro-react/`)
- **React Router v6** para navegación entre páginas
- **CSS existente** reutilizado casi sin cambios

---

## Fases

### ✅ Fase 0 — Análisis
- Inventario completo del sitio realizado
- 13 páginas, componentes compartidos identificados, lógica JS mapeada

---

### ✅ Fase 1 — Setup del proyecto
**Comandos a correr en orden:**

```bash
# 1. Crear proyecto (dentro de C:\Users\USUARIO\Documents\Gestion Seguro)
npm create vite@latest gestion-seguro-react -- --template react

# 2. Entrar e instalar dependencias base
cd "C:\Users\USUARIO\Documents\Gestion Seguro\gestion-seguro-react"
npm install

# 3. Instalar React Router
npm install react-router-dom
```

**Después del setup, estructura de carpetas a crear:**
```
gestion-seguro-react/
  src/
    assets/          ← copiar contenido de Sitio/assets/
    components/      ← componentes reutilizables
    pages/           ← una carpeta por página
    App.jsx          ← rutas principales
    main.jsx         ← punto de entrada (ya existe)
    index.css        ← importar styles.css aquí
```

---

### ✅ Fase 2 — Componentes base (se repiten en todas las páginas)
| Componente | Descripción |
|---|---|
| `Loader` | Animación de carga inicial |
| `Topbar` | Barra superior con teléfono, email, horario |
| `Navbar` | Navegación con hamburguesa y submenú Coberturas |
| `Footer` | Pie de página completo (4 columnas + SSN) |
| `WhatsAppButton` | Botón flotante verde |
| `CookieBanner` | Banner de consentimiento de cookies |
| `Layout` | Wrapper que compone todo lo anterior |

---

### 🔲 Fase 3 — Páginas estáticas
| Página | Archivo origen |
|---|---|
| Home | `index.html` |
| Caución | `caucion.html` |
| Personas | `personas.html` |
| Responsabilidad Civil | `responsabilidad-civil.html` |
| Alquileres | `alquileres.html` |
| Nosotros | `nosotros.html` |
| Formularios | `formularios.html` |
| Instructivos | `instructivos.html` |
| Medios de Pago | `mediosdepago.html` |
| 404 | `404.html` |

---

### 🔲 Fase 4 — Páginas con lógica (formularios + simuladores)
| Página | Lógica a migrar |
|---|---|
| Contacto | Formulario con ruteo por producto seleccionado |
| Cotizador | Simulador de precios con cálculo dinámico |
| Productores | Formulario de registro PAS |

---

### 🔲 Fase 5 — Pulido final
- [ ] Scroll reveal animations (IntersectionObserver → hook de React)
- [ ] Contadores animados al hacer scroll
- [ ] SEO básico (React Helmet)
- [ ] Build de producción (`npm run build`)
- [ ] Verificar deploy

---

## Cómo continuar

**Próximo paso:** Fase 1 — correr los 3 comandos de setup y decirle a Claude qué ves en la terminal.

**Tip:** Al abrir Claude Code, podés decir directamente:
> "Continúo con la migración a React, ya tengo Node 22, voy a empezar con la Fase 1 del MIGRACION-REACT.md"

---

## Conceptos de React que vas a aprender en el camino
- **Componente:** función JS que devuelve HTML (JSX)
- **Props:** parámetros que le pasás a un componente
- **useState:** guardar datos que cambian (ej: menú abierto/cerrado)
- **useEffect:** ejecutar código cuando algo cambia (ej: al cargar la página)
- **React Router:** `<Link>` reemplaza `<a>`, `<Route>` define qué mostrar según la URL
