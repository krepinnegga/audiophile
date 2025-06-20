# Audiophile E-Commerce App

![UI Preview](./src/assets/preview.jpg)

A modern, theme-aware, fully responsive e-commerce web app for audio products, built with React, TypeScript, Vite, Tailwind CSS, NativeWind, Zustand, and a custom design system. This project demonstrates best practices in UI/UX, state management, and code organization for scalable React applications.

---

## 📁 File Structure

```
├── public/
│   └── ...                # Static assets
├── src/
│   ├── assets/            # Images, SVGs, and static media
│   ├── components/        # Reusable UI components (Navbar, Footer, CartModal, etc.)
│   ├── constants/         # Static data (e.g., data.json for products)
│   ├── pages/             # Top-level pages (Home, ProductDetails, Checkout, etc.)
│   ├── store/             # Zustand store for cart state
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app entry
│   ├── main.tsx           # Vite entry point
│   └── ...
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── ...
```

---

## 🛠️ Tools & Libraries Used

- **React** & **TypeScript** — UI framework and type safety
- **Vite** — Fast development server and build tool
- **Tailwind CSS** & **NativeWind** — Utility-first, theme-aware styling
- **Zustand** — Lightweight, persistent state management (cart)
- **react-hook-form** & **zod** — Form state and schema validation
- **React Router** — Client-side routing
- **Lucide React** — Icon library
- **Custom Design System** — Consistent, accessible UI components

---

## ⚙️ How Things Work

### Layout & Theming

- All pages are wrapped in a `Layout` component, which includes the `Navbar` and `Footer`.
- Uses only design system and theme consistency.
- Styling is handled exclusively via Tailwind CSS.

### Navigation

- The `Navbar` is responsive, with a slide-out menu for mobile and a cart icon that displays the current cart count.
- Navigation is handled by React Router.

### Product & Category Pages

- Product data is sourced from a static JSON file in `src/constants/data.json`.
- Category pages filter and display products by type, always showing new products first.
- The `ProductDetails` page provides a detailed view, with add-to-cart functionality and a responsive gallery.

### Cart & Checkout

- **Cart State:** Managed globally with Zustand and persisted to local storage for session continuity.
- **Cart Modal:** Accessible from the navbar, shows live cart contents, allows quantity updates, and supports removing all items.
- **Checkout:** Multi-section form with validation (using react-hook-form + zod), summary of cart, shipping, VAT (20%), and grand total. Order success modal shown after completion.

### Design System & Accessibility

- All UI elements use the custom design system for consistent look and feel.
- Icons use font-size for sizing, not width/height.
- All interactive elements are accessible and keyboard-friendly.

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Customization & Extending

- To add new products, update `src/constants/data.json` and add corresponding images to `src/assets/`.
- To extend the cart or checkout logic, update the Zustand store in `src/store/cartStore.ts`.
- For new UI components, follow the design system and use Tailwind/NativeWind for styling.

---

## 📝 License

MIT
