# ZMART — E-Commerce Website

Bold black & yellow React frontend for ZMART.

## Project Structure

```
zmart/
├── public/index.html
├── src/
│   ├── App.js               ← Root with cart state
│   ├── index.js
│   ├── index.css
│   └── components/
│       ├── Navbar.js/css    ← Logo, nav links, cart button with badge
│       ├── Hero.js/css      ← Landing banner
│       ├── Categories.js/css← Filter buttons (All / Phones / Headphones / Groceries)
│       ├── Products.js/css  ← Product grid with Add to Cart
│       ├── productsData.js  ← Product data (9 items)
│       ├── CartDrawer.js/css← Slide-in cart panel
│       └── Footer.js/css   ← Links, email, phone, address
└── package.json
```

## Features
- 🛒 Live cart counter in navbar badge
- 🎯 Category filter (Phones, Headphones, Groceries)
- 🖤 Add to Cart shows item quantity inline on button
- 📦 Cart drawer with item list and total
- 📧 Footer with email, customer care number, page links

## Run

```bash
npm install
npm start
```

Opens at http://localhost:3000
# Z-mart-website
