# RS Unisex Salon - Premium Website

A world-class, premium, modern, fully responsive Unisex Salon website built with React.js, Vite, Tailwind CSS, Framer Motion, and Lucide React Icons.

## 🌟 Features

- **Premium Dark Theme** - Black & Gold color combination with glassmorphism UI
- **Smooth Animations** - Opening animation, hover effects, page transitions using Framer Motion
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Glassmorphism UI** - Modern glass-effect cards and components
- **Animated Counters** - Statistics with counting animation in About section
- **Interactive Gallery** - Placeholder for salon images (ready for uploads)
- **WhatsApp Integration** - Booking form sends data directly to WhatsApp
- **Auto-sliding Testimonials** - Customer reviews with automatic slider
- **FAQ Accordion** - Interactive frequently asked questions section
- **Google Maps Integration** - Embedded map for location
- **Floating WhatsApp Button** - Always accessible for quick contact
- **Back to Top Button** - Smooth scroll to top functionality
- **Scroll Progress Bar** - Visual indicator of page scroll progress
- **Custom Cursor** - Premium cursor animation (desktop only)
- **Sticky Glass Navbar** - Navigation with smooth scroll to sections

## 📋 Sections

1. **Opening Animation** - Luxury intro with logo animation
2. **Hero Section** - Premium landing with call-to-action buttons
3. **About Section** - Salon introduction with animated statistics
4. **Services Section** - All service categories with pricing
5. **Price List** - Detailed pricing from uploaded images
6. **Gallery** - Showcase of salon work (placeholders ready)
7. **Testimonials** - Customer reviews with auto-sliding
8. **FAQ** - Frequently asked questions with accordion
9. **Booking Form** - Appointment booking with WhatsApp integration
10. **Contact Section** - Contact info with Google Maps
11. **Footer** - Quick links, services, and social media

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Google Fonts** - Inter & Playfair Display

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
rs-unisex-salon/
├── src/
│   ├── components/
│   │   ├── OpeningAnimation.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── PriceList.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── CustomCursor.jsx
│   │   └── FloatingButtons.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
- Black: `#0F172A`
- Dark Gray: `#111827`
- Gold: `#FACC15`
- White: `#FFFFFF`

### Contact Information
Update contact details in the following components:
- `Hero.jsx` - Phone and WhatsApp numbers
- `Contact.jsx` - Phone numbers and address
- `Booking.jsx` - WhatsApp number for booking
- `Footer.jsx` - Contact information

### Gallery Images
Replace placeholder images in `Gallery.jsx` with your actual salon photos:
- Salon interior photos
- Hair styling photos
- Makeup photos
- Bridal makeup photos
- Staff photos

### Google Maps
Update the map location in `Contact.jsx` with your actual salon coordinates.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- Lazy loading of components
- Optimized animations with Framer Motion
- Efficient re-renders with React hooks
- Minimal bundle size with Vite
- CSS purging with Tailwind

## 🎯 Business Information

**Salon Name:** RS UNISEX SALON  
**Tagline:** Style • Beauty • Makeup • Confidence  
**Phone:** +91 9876240337, +91 7657870007  
**Address:** RS Unisex Salon, Near Dr. Colony, Bhadson Road, East Enclave  
**WhatsApp:** +91 9876240337

## 📄 License

This project is proprietary and confidential.

## 👨‍💻 Development

Built with premium design principles and Indian salon aesthetics in mind. The website features luxury UI elements, smooth animations, and a production-ready codebase.

---

**Note:** Please upload your salon images to replace the placeholders in the Gallery section. The website is designed to use only Indian salon aesthetics as per requirements.
