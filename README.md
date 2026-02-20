# Voltify

An e-commerce frontend for electronics – browse products, filter by category and brand, add to cart, and checkout. Built with React 18, Vite, and Tailwind CSS.

---

## Features

- **Home** – Hero carousel, mid banner, and feature highlights
- **Products** – Full listing with search, category/brand filters, price range, and pagination (8 per page)
- **Single Product** – Product detail with add to cart
- **Category** – Products filtered by category (from home/listing)
- **Cart** – Cart items with quantity update/remove, delivery info, and bill summary; cart persisted in `localStorage`
- **Location** – Navbar shows city/state using browser geolocation and OpenStreetMap Nominatim
- **About** – Company mission and vision
- **Contact** – Contact info and contact form with toast feedback

---

## Tech Stack

| Category      | Used |
|-------------|------|
| Framework   | React 18 |
| Build       | Vite 6 |
| Styling     | Tailwind CSS 4 |
| Routing     | React Router v6 |
| HTTP        | Axios |
| State       | React Context (DataContext, CartContext) |
| UI/UX       | React Icons, Lucide React, Lottie, React Slick, React Toastify, React Scroll to Top |

---

## API

- **Products** – [Fake Store API](https://fakestoreapi.in/)  
  - All products: `GET .../api/products?limit=150`  
  - Single product: `GET .../api/products/:id`  
  - By category: `GET .../api/products/category?type=:category`
- **Location** – [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) (reverse geocoding)

---

## Project Structure

```
src/
├── components/     # Navbar, Footer, Carousel, Category, Features, FilterSection,
│                   # ProductCard, ProductListView, Pagination, Breadcrums, etc.
├── context/        # DataContext (products, categories, brands), CartContext (cart)
├── pages/          # Home, Products, SingleProduct, CategoryProduct, About, Contact, Cart
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+  
- npm or yarn  

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
```

Output is in `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Deployment (Vercel)

1. Push the repo to GitHub (or connect your Git provider in Vercel).
2. In Vercel, import the project and leave default settings (Vite is auto-detected).
3. Build command: `npm run build`  
4. Output directory: `dist`  
5. Deploy. For client-side routing, add a rewrite so all routes serve `index.html` (Vercel usually does this for SPAs).

---

## License

Private project. All rights reserved.
