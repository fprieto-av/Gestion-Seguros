# Gestión Seguros — Maqueta del nuevo sitio web (v2)

**Fecha:** Abril 2026
**Cliente:** Gestión Seguros · Compañía argentina especialista en Caución, Personas y Responsabilidad Civil
**Sitio de producción:** `/sitio/`

## Archivos de esta maqueta

Esta carpeta contiene las **8 páginas navegables** del nuevo sitio. La maqueta es **autocontenida**: todos los assets (CSS, JS, imágenes, videos) están en `./assets/`, por lo que podés zippear y enviar solo esta carpeta y el sitio se verá correctamente en cualquier PC, sin depender de `/sitio/`.

- `index.html` — Home con video hero, productos, simulador, testimonios, FAQ
- `caucion.html` — Caución: Contractuales · Aduaneras · Judiciales · Alquiler
- `personas.html` — Personas: Accidentes · Vida · Sepelio
- `responsabilidad-civil.html` — RC: Turismo · Evento · Educativo
- `nosotros.html` — Historia, misión, visión, valores
- `productores.html` — Programa PAS (con formulario de alta)
- `contacto.html` — Formulario + todos los canales de contacto
- `404.html` — Página no encontrada

**Cómo verla:** abrí `index.html` en cualquier navegador moderno (Chrome/Edge/Firefox). Todos los links entre páginas funcionan localmente.

## Propuesta en 1 minuto

### Mensaje central
*"Estamos cuando más nos necesitás"*
Compañía argentina · Especialistas en Caución, Personas y RC · Tecnología con alma humana

### Paleta (extraída del logo + banners oficiales)
- **Azul Gestión:** `#1B4FAE` (primario, del logo)
- **Azul oscuro:** `#123A87`
- **Celeste mascot:** `#2BB8E8` (secundario)
- **Naranja CTA:** `#FF9A1F` (del `+` de los banners)
- **Verde éxito:** `#00C07F`
- **Dark navy:** `#0E1730`
- **Soft bg:** `#F8FAFD`

### Tipografías
- **Archivo** (sans-serif 900 en titulares) — bold, insurtech
- **Space Grotesk** (body 400-700) — tech-friendly, legible

### Estructura del home (index.html)
1. **Topbar oscuro** con teléfonos, horario y email
2. **Nav sticky** con dropdown de productos + CTA naranja + hamburguesa móvil
3. **Hero con video institucional** real + overlay azul + card 3D "Mi panel · Gestión Online" + pills flotantes
4. **Trust bar oscura** con SSN, AACS, AAPAS, SCVS, Cámara Seguros
5. **Stats counter** animado (años, pólizas, PAS, satisfacción)
6. **Productos** con tabs (Todos / Caución / Personas / RC) — 10 productos reales
7. **Por qué elegirnos** con card azul con gradient + 4 features + rating 4.9/5
8. **Simulador funcional** con cálculo real según producto y duración
9. **Proceso en 4 pasos** numerados con colores distintivos
10. **Testimonios** (3 clientes con estrellas)
11. **Banner PAS** con imagen del banner oficial
12. **FAQ** con 6 preguntas + respuestas completas (no placeholders)
13. **CTA grande** con gradiente
14. **Footer 5 columnas** con datos de contacto, SSN legal, social, productos

### Productos cubiertos (completo)

**Caución** (`caucion.html`):
- Garantías Contractuales (licitaciones, cumplimiento, anticipo)
- Garantías Aduaneras (tránsito, depósito fiscal, importación temporaria)
- Garantías Judiciales (embargo, contracautela, arraigo)
- Garantía de Alquiler (Vivienda Ley 27.551, Comercial, Bienes Muebles)

**Personas** (`personas.html`):
- Accidentes Personales (individual + grupal/CCT + deportivo)
- Vida (individual + colectivo + CCT)
- Sepelio (familiar integral)

**Responsabilidad Civil** (`responsabilidad-civil.html`):
- RC Turismo (agencias, operadores, transporte turístico)
- RC Evento (sociales, corporativos, deportivos, artísticos)
- RC Establecimiento Educativo (jardines, colegios, universidades)

### Contactos configurados
- `info@gestionseguros.com.ar` — general
- `caucion@gestionseguros.com.ar` — caución
- `personas@gestionseguros.com.ar` — personas
- `rc@gestionseguros.com.ar` — resp. civil
- `productores@gestionseguros.com.ar` — alta PAS
- `siniestros@gestionseguros.com.ar` — denuncias
- Tel: `(+54) 5254-4009` · Gratuito: `0800-345-1340`
- WhatsApp flotante en todas las páginas
- Horario: L-V 9 a 18hs

### Diferenciales del diseño
- **Video institucional real** como fondo del hero (no mockup 3D genérico)
- **Dashboard card flotante** con pólizas activas en tiempo real
- **Tabs de productos** que filtran sin recargar
- **Simulador con cálculo real** (3.8% alquiler vivienda, 4.6% comercial, 1.2% AP, 0.8% vida)
- **Form con mailto-router**: detecta producto y envía al email específico
- **Counters animados** al hacer scroll
- **Reveal animations** con IntersectionObserver
- **Cookie banner** compliance
- **Schema.org InsuranceAgency** para rich snippets en Google
- **Responsive** mobile-first con menú hamburguesa + submenú desplegable

### SEO técnico
- `sitemap.xml` y `robots.txt` configurados (en `/sitio/`)
- Meta tags: description + keywords + OG + Twitter Cards en cada página
- URLs semánticas (caucion.html, personas.html, responsabilidad-civil.html)
- Structured data InsuranceAgency + OfferCatalog
- `preload="metadata"` en video hero para no bloquear LCP
- Fonts con `preconnect` a Google Fonts

### SEO — Keywords principales
seguros, caución, garantía alquiler, seguros personales, accidentes personales, seguro de vida, sepelio, responsabilidad civil, RC turismo, RC evento, RC educativo, Ley 27.551, Argentina

### Próximos pasos
1. Aprobar diseño y contenido
2. Conectar formulario a backend (Formspree, Netlify Forms o propio)
3. Conectar simulador con API de pricing de GestionAr
4. Integrar portal de cliente (Mi Panel) + portal PAS (GestionAr SSO)
5. Comprimir video hero (actualmente 23MB) a <8MB con ffmpeg
6. Subir fotos reales de testimonios
7. Configurar GA4 + píxel de Meta
8. Desplegar con HTTPS + CSP/HSTS en el hosting elegido

## Sobre los archivos anteriores

Los archivos de la maqueta anterior (`00-full.png`, `01-hero.png`, `99-mobile.png`, `Maqueta.pdf`) fueron **reemplazados por las páginas HTML navegables** de esta nueva versión. Si querés screenshots para presentaciones:

1. Abrí `index.html` en Chrome
2. DevTools (F12) → Device Toolbar → full-screen capture
3. Exportá a PDF con Ctrl+P → Guardar como PDF
