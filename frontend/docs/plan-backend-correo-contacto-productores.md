# Plan de backend: envío de correo (Contacto y Productores)

Objetivo: reemplazar el flujo actual (`mailto:` en Contacto y `formsubmit.co` en Productores) por un **API propia en Node.js + Express** que valide los datos, enrute el correo según reglas de negocio y envíe el mensaje (sin persistencia en base de datos).

Referencia del código actual (mayo 2026): `src/pages/Contacto.jsx`, `src/pages/Productores.jsx`.

---

## 1. Estado actual (frontend)

| Página | Envío actual | Notas |
|--------|----------------|-------|
| **Contacto** | `window.location.href` → `mailto:` con `subject` y `body` codificados | Depende del cliente de correo del usuario; no hay confirmación real de entrega. |
| **Productores** | `POST` multipart a **formsubmit.co** → `comercial@gestionseguros.com.ar` | Incluye archivos; `_next` apunta a URL legacy `.html`. |

Tras migrar, el front debe hacer `fetch` (JSON o `multipart/form-data`) al mismo origen o a un subdominio/API, con manejo de loading, errores y mensaje de éxito.

---

## 2. Formulario Contacto — campos y tipos

Estado React: objeto `form` + validación en `validate()`.

| Campo | HTML / estado | Obligatorio | Tipo lógico | Validación actual (replicar en servidor) |
|-------|----------------|-------------|-------------|---------------------------------------------|
| `nombre` | `input type="text"` | Sí | string | No vacío tras `trim()`. |
| `email` | `input type="email"` | Sí | string | Formato email (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`). |
| `telefono` | `input type="tel"` | No | string | Si viene valor: `^[\d\s\-\+\(\)]{6,20}$`. |
| `producto` | `select` | Sí | enum | Uno de: `caucion`, `personas`, `rc`, `alquileres`, `pas`, `otro`. |
| `mensaje` | `textarea` | No | string | Texto libre; puede venir prearmado desde query params (simulación alquileres). |
| `terms` | `checkbox` | Sí (debe ser true) | boolean | Obligatorio aceptado. |

### Enrutamiento por producto (destinatario “lógico”)

En el front hoy existe el mapa `DESTINOS` (solo informativo para `mailto:`):

| Valor `producto` | Email sugerido |
|------------------|----------------|
| `caucion` | caucion@gestionseguros.com.ar |
| `personas` | personas@gestionseguros.com.ar |
| `rc` | rc@gestionseguros.com.ar |
| `pas` | comercial@gestionseguros.com.ar |
| `alquileres`, `otro` o no listado | info@gestionseguros.com.ar |

El backend debe **resolver el destinatario** con la misma tabla (o variables de entorno por clave), no confiar en un campo “to” enviado por el cliente.

**Payload sugerido (JSON):** `POST /api/contacto`

```json
{
  "nombre": "string",
  "email": "string",
  "telefono": "string | omitido",
  "producto": "caucion | personas | rc | alquileres | pas | otro",
  "mensaje": "string | omitido",
  "terms": true
}
```

Límites recomendados en servidor: `nombre` ≤ 200 caracteres, `mensaje` ≤ 8000, `email` ≤ 254.

---

## 3. Formulario Productores (PAS) — campos y tipos

Estado React: `form` para texto; archivos **no controlados** en React pero con `name` fijos en el DOM.

### Parte 1 — Datos del productor

| Campo | HTML / estado | Obligatorio | Tipo lógico | Validación actual |
|-------|----------------|-------------|-------------|-------------------|
| `nombre` | `input type="text"` | Sí | string | No vacío tras `trim()`. |
| `email` | `input type="email"` | Sí | string | Mismo regex de email que Contacto. |
| `telefono` | `input type="tel"` | No | string | Mismo regex teléfono que Contacto. |
| `matricula` | `input type="text"` | Sí | string | No vacío tras `trim()`. |
| `cuit` | `input type="text"` `inputMode="numeric"` | Sí | string (11 dígitos) | Exactamente `^\d{11}$` (sin guiones). |
| `categoriaIva` | `select` | Sí | enum | `Responsable Inscripto` \| `Monotributo` \| `Exento` \| `No alcanzado`. |
| `provincia` | `input type="text"` | No | string | Libre. |
| `mensaje` | `textarea` | No | string | Libre (`Experiencia / Observaciones`). |
| `terms` | `checkbox` | Sí | boolean | Debe ser true. |

### Parte 2 — Archivos obligatorios

Todos `input type="file"`, `accept=".pdf,.jpg,.jpeg,.png"`.

| `name` (formulario) | Uso |
|---------------------|-----|
| `ssnMatricula` | Constancia SSN |
| `rubricaDigital` | Rúbrica digital |
| `constanciaIva` | Constancia categoría IVA |
| `ingresosBrutos` | Inscripción Ingresos Brutos |
| `pagoMatricula` | Pago anual de matrícula |
| `constanciaCbu` | Constancia de CBU |
| `ddjjPep` | DDJJ PEP |

Validación servidor: cada campo debe tener **exactamente un archivo**; tipos MIME/extensiones permitidas (`pdf`, `jpeg`, `jpg`, `png`); tamaño máximo por archivo (ej. 5–10 MB) y tamaño total del request acotado.

**Transporte:** `POST /api/productores` con `Content-Type: multipart/form-data` (p. ej. **multer** en Express). Los mismos `name` que hoy facilitan el front y pruebas con Postman.

---

## 4. Arquitectura Express (mínimo viable)

1. **App HTTP** con `express.json()` solo para Contacto; para Productores usar `multer` (multipart) sin parsear body como JSON completo.
2. **Rutas**
   - `POST /api/contacto` — body JSON.
   - `POST /api/productores` — multipart + mismos nombres de campos/archivos.
3. **Validación** — Zod, Joi o express-validator: mismas reglas que el front (el servidor es la fuente de verdad).
4. **Envío de correo**
   - **Nodemailer** + SMTP del proveedor, o API (**Resend**, SendGrid, Mailgun, Postmark, SES**).
   - Variables de entorno: API key o credenciales SMTP, remitente verificado, lista de destinatarios por tipo de consulta.
5. **CORS** — Orígenes permitidos: dominio de producción del sitio React y el de preview/staging.
6. **Rate limiting** — Por IP en ambas rutas (p. ej. `express-rate-limit`).
7. **Tamaño de body** — Límites explícitos para JSON y multipart.
8. **Anti-spam (fase 2)** — Turnstile/reCAPTCHA v3: token desde el front, verificación en servidor antes de enviar.

Opcional: **Helmet** para cabeceras HTTP seguras si el API queda expuesto públicamente.

---

## 5. Contenido del correo (sugerido)

### Contacto

- **To:** según tabla `producto` → email interno.
- **Reply-To:** `email` del usuario (así respondéis desde el buzón corporativo con “Responder al cliente”).
- **Asunto:** `Consulta web · {producto} · {nombre}` (sanitizado).
- **Cuerpo:** texto plano o HTML con líneas: nombre, email, teléfono, producto, mensaje; sin interpretar HTML del usuario (escapar si armás HTML).

### Productores

- **To:** `comercial@gestionseguros.com.ar` (o variable de entorno).
- **Reply-To:** email del postulante.
- **Asunto:** `Nueva solicitud PAS · {nombre} · Mat. {matricula}`.
- **Cuerpo:** todos los campos texto; **adjuntos:** los 7 archivos con nombres originales o renombrados (`ssnMatricula-...pdf`) para evitar colisiones.

---

## 6. Cambios en el frontend (checklist)

- [ ] **Contacto:** `handleSubmit` → `preventDefault` + `fetch('/api/contacto', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({...}) })`.
- [ ] Estados: `loading`, `error` (mensaje genérico), `sent` real según `response.ok`.
- [ ] **Productores:** quitar `action`/`method` de formsubmit; construir `FormData` desde el form (incluye archivos y campos con `name`) o usar refs; `fetch('/api/productores', { method: 'POST', body: formData })` **sin** `Content-Type` manual (el browser setea el boundary).
- [ ] Eliminar/ocultar campos hidden de formsubmit (`_subject`, `_template`, `_captcha`, `_next`).
- [ ] Tras éxito: mensaje en pantalla y/o redirect a `?pas=enviado` en la ruta React (`/productores?pas=enviado`) en lugar de `.html`.
- [ ] Variable de entorno en build del front: `VITE_API_URL` / `REACT_APP_API_URL` apuntando al backend en prod.

---

## 7. Variables de entorno (backend, ejemplo)

```
PORT=4000
CORS_ORIGIN=https://www.gestionseguros.com.ar

SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
MAIL_FROM="Gestión Seguros <noreply@gestionseguros.com.ar>"

MAIL_TO_CAUCION=caucion@gestionseguros.com.ar
MAIL_TO_PERSONAS=personas@gestionseguros.com.ar
MAIL_TO_RC=rc@gestionseguros.com.ar
MAIL_TO_PAS=comercial@gestionseguros.com.ar
MAIL_TO_DEFAULT=info@gestionseguros.com.ar
MAIL_TO_PRODUCTORES=comercial@gestionseguros.com.ar
```

Ajustar nombres al proveedor si usás API en lugar de SMTP.

---

## 8. Fases de implementación

| Fase | Entregable |
|------|------------|
| **0** | Repo servidor Express aparte o carpeta `server/` en monorepo; scripts `dev` / `start`. |
| **1** | `POST /api/contacto` con validación + envío mail + CORS + rate limit. |
| **2** | `POST /api/productores` con multer, validación de 7 archivos + campos + mail con adjuntos. |
| **3** | Integración front Contacto + Productores + URL API por entorno. |
| **4** | Despliegue API (Railway, Render, Fly.io, VPS, etc.) con TLS; prueba end-to-end. |
| **5** | (Opcional) Captcha, logs estructurados, alerta si el proveedor de mail falla. |

---

## 9. Seguridad y cumplimiento (recordatorio)

- No persistís datos: igual tratás **datos personales** y documentación sensible; minimizar logs (no volcar adjuntos ni CUIT en logs en claro si no es necesario).
- Política de retención: el mail queda en el buzón corporativo; eso ya es responsabilidad del operador del correo.
- Considerar aviso en la política de privacidad de que el envío ocurre por correo electrónico.

---

## 10. Pruebas rápidas

- Contacto: cada valor de `producto` y verificación del buzón destino correcto.
- Contacto: `telefono` vacío, `telefono` inválido, `email` inválido → 400 con detalle de campo.
- Productores: envío completo con PDFs pequeños; intento sin un archivo → 400.
- Rate limit: muchos POST seguidos → 429.

---

*Documento generado para alinear implementación backend con los formularios actuales del proyecto React.*
