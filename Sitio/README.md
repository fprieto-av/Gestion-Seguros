# Gestión Seguros — Sitio web completo

Sitio web corporativo moderno, responsive y listo para producción.

## Estructura

```
/
├── index.html                      Home completo (video hero + todos los bloques)
├── caucion.html                    Caución: Contractuales, Aduaneras, Judiciales, Alquiler
├── personas.html                   Personas: Accidentes, Vida, Sepelio
├── responsabilidad-civil.html      RC: Turismo, Evento, Educativo
├── nosotros.html                   Historia, misión, visión, valores
├── productores.html                Programa PAS (formulario de alta)
├── contacto.html                   Formulario de consulta + canales
├── 404.html                        Página no encontrada
├── robots.txt                      Directivas SEO
├── sitemap.xml                     Mapa para buscadores
└── assets/
    ├── css/styles.css              Sistema de diseño completo
    ├── js/app.js                   Interactividad (tabs, FAQ, simulador, form)
    ├── img/                        Logo + banners + imágenes
    └── video/                      Videos institucionales
```

## Características técnicas

- **HTML5 semántico** con Schema.org (InsuranceAgency + OfferCatalog) para rich snippets
- **CSS moderno** con variables, `clamp()` tipográfico, `backdrop-filter`, grid/flex
- **JS vanilla** sin frameworks: tabs funcionales, FAQ accordion, simulador con cálculo real, scroll animations via IntersectionObserver, formulario con fallback mailto por producto
- **Responsive** mobile-first con breakpoints 1024px y 640px
- **Accesibilidad**: `aria-label`, `aria-expanded`, `prefers-reduced-motion`, foco visible, contraste AAA en textos
- **SEO**: meta tags completos (OG + Twitter), sitemap.xml, robots.txt, structured data
- **Performance**: video con `preload="metadata"`, fonts preconnect, SVG inline con `<symbol>` reutilizable, CSS/JS con cache busting-ready

## Paleta de marca (extraída del logo + banners)

- `#1B4FAE` Azul Gestión (primario)
- `#2BB8E8` Celeste del mascot (secundario)
- `#FF9A1F` Naranja CTA (acento)
- `#00C07F` Verde éxito
- `#0E1730` Dark navy

## Productos cubiertos (completo)

**Caución**: Contractuales · Aduaneras · Judiciales · Alquiler (Vivienda Ley 27.551, Comercial, Bienes Muebles)

**Personas**: Accidentes Personales (individual + grupal) · Vida (individual + colectivo + CCT) · Sepelio

**Responsabilidad Civil**: Turismo · Evento · Establecimiento Educativo

## Contactos configurados

- `info@gestionseguros.com.ar` — consultas generales
- `caucion@gestionseguros.com.ar` — caución
- `personas@gestionseguros.com.ar` — personas
- `rc@gestionseguros.com.ar` — responsabilidad civil
- `productores@gestionseguros.com.ar` — alta PAS
- `siniestros@gestionseguros.com.ar` — denuncias
- Tel: `(+54) 5254-4009` · `0800-345-1340`
- WhatsApp flotante: `+54 9 11 5254-4009`

## Próximos pasos para puesta en producción

1. Conectar el formulario a un backend real (Formspree, Netlify Forms, o endpoint propio) reemplazando el mailto-fallback en `assets/js/app.js`
2. Conectar el simulador a la API real de pricing de GestionAr
3. Integrar el login del panel de cliente (Mi Panel) y portal PAS (GestionAr)
4. Reemplazar los testimonios placeholder por casos reales con fotos
5. Agregar analytics (GA4) y píxel de Meta
6. Comprimir el video hero a WebM + MP4 optimizado (objetivo: < 8MB) con ffmpeg
7. Habilitar HTTPS y headers de seguridad (CSP, HSTS) en el hosting
8. Revisar números de stat-counter (años, pólizas, productores, satisfacción) con datos reales

## Cómo probarlo localmente

Abrir `index.html` en Chrome/Edge/Firefox. Para una experiencia completa (con autoplay del video) servir con un server simple:

```bash
npx serve .
# o
python -m http.server 8000
```

Luego visitar `http://localhost:8000`.
