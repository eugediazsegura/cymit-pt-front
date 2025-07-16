 Cymit eCommerce Frontend

Bienvenid@ al proyecto **Cymit eCommerce Frontend** 🛒✨  
SPA desarrollada en **React** + **TypeScript**, arquitectura modular y foco en experiencia de usuario, performance y escalabilidad.

---

## 🎯 Objetivo

Construir una SPA que muestre productos, permita buscar, filtrar por categorías, ver detalles de cada producto y agregar al carrito. Todo con un diseño **responsive**, mobile first y buena usabilidad.  
**Datos:** se consumen desde la API pública de [dummyjson.com/products](https://dummyjson.com/products).

---

## 🛠️ Stack y Librerías Principales

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS** (estilos rápidos, mobile first, variables personalizadas)
- **Zustand** (manejo de estados simple, global y sin boilerplate)
- **Jest** + **React Testing Library** (tests unitarios)
- **React Router** (enrutado dinámico: Home, Detalle producto, NotFound)
- **Docker** (opcional para entorno local)

---

## 🏗️ Estructura del Proyecto

Proyecto organizado siguiendo un **Atomic Design** no literal (sin carpetas atom/molecule, pero con lógica modular):

```bash
src/
├── api/                  # Servicios API (Axios)
├── hooks/                # Lógica de negocio con custom hooks (carrito, favoritos)
├── routes/               # Rutas del sitio
├── pages/                # Vistas principales (Home, Product)
├── store/                # Zustand stores (productos, modal, categorías)
├── styles/               # Tailwind + custom styles
├── types/                # Tipos TS
├── assets/               #Imagenes e íconos
├── App.tsx, main.tsx     # Entradas de la app
└── components/           # Componentes UI (Inputs, Botones, ProductCard, Modal, etc.)
	├── filters/      # Search, Reviews, Categories
	├── layout/       # Header, Footer, Sidebar
	├── modals/       # Modales de carrito, favoritos y filter(mobile)
	├── modals/        Componentes afines a producto
	├── provider/     # Modal que se proporciona de acuerdo al requerimiento.
	├── ui/           # Componentes atómicos. (buttons, labels, banner, íconos)
	└── user/         # Botones wishlist y user.		

```


---


## 🚀 Instalación y Ejecución

### Opción 1: Local (Node.js >= 22)

```bash
git clone https://github.com/tu-usuario/cymit-pt-front.git
cd cymit-pt-front
npm install
npm run dev
```

### Opción 2: Docker 

```bash
docker compose up -d
docker exec -it app bash
npm install
npm run dev
```

App disponible en http://localhost:8010

## 📚 Decisiones Técnicas y Justificación

- **Arquitectura modular**: Facilita el mantenimiento y escalabilidad.
- **Tailwind**: Agilidad para estilos, variables y responsive sin pelearme con el CSS.
- **Zustand**: Estado global simple y sin tanta configuración, ideal para proyectos SPA.
- **Tests**: Usé Jest y Testing Library para los componentes principales (ej: CartButton, ProductPage, ModalProvider, etc.).
- **Git** Flow + Conventional Commits: Flujo de ramas ordenado y mensajes de commit claros.
- **Paginado View More **: Usé “Ver más productos” en vez de scroll infinito porque es más SEO-friendly y más claro para el usuario móvil.
- **Diseño** UX/UI: Todo lo pensé primero en Figma, priorizando una navegación simple y visual.


[Ver prototipo en Figma](https://www.figma.com/design/hBLWmYp5DAVRLMqZIVSqmP/Frontend-Scent-Home-Ecommerce?node-id=0-1&t=2LLgYxtxfvvsGZs9-1)

[Ver documentacion explicativa en Notion](https://www.notion.so/eCommerce-SPA-231fed8b0b458016a4b6dd4ace4addc4)
