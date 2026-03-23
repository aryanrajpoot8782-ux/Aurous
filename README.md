# Aurous Restro Lounge - Premium Restaurant Website

A modern, fully responsive restaurant website for Aurous Restro Lounge in Jamshedpur. Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## Features

✨ **Modern Design**
- Dark theme with gold accents for premium feel
- Glassmorphism effects and smooth animations
- Fully responsive layout (mobile-first)
- High-performance animations with Framer Motion

📱 **Responsive Pages/Sections**
1. **Hero Section** - Full-screen landing with CTA buttons
2. **About Section** - Restaurant story and highlights
3. **Menu Section** - Categorized menu (Starters, Main, Drinks)
4. **Gallery** - Image grid with hover zoom effects
5. **Live Events** - Upcoming events and entertainment
6. **Reviews** - Customer testimonials with ratings
7. **Booking Form** - WhatsApp integration for reservations
8. **Contact Section** - Location, phone, hours, Google Maps
9. **Sticky Navigation** - Smooth scrolling header
10. **Floating WhatsApp Button** - Direct chat access
11. **Footer** - Links, social media, copyright

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Vite** - Build tool (fast development)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project**
```bash
cd "c:\Aurous Restro Lounge"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation and logo
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Menu.tsx         # Menu items
│   ├── Gallery.tsx      # Image gallery
│   ├── Events.tsx       # Events section
│   ├── Reviews.tsx      # Customer reviews
│   ├── BookingForm.tsx  # Reservation form
│   ├── Contact.tsx      # Contact info & maps
│   ├── Footer.tsx       # Footer
│   └── FloatingWhatsApp.tsx  # WhatsApp button
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles

index.html              # HTML template
tailwind.config.js      # Tailwind configuration
vite.config.ts          # Vite configuration
package.json            # Dependencies and scripts
```

## Customization Guide

### Update Contact Information

Edit [src/components/Contact.tsx](src/components/Contact.tsx):
- Replace address in the Location section
- Update phone numbers (change `+919876543210`)
- Update email address
- Update opening hours

### Update WhatsApp Number

Edit [src/components/BookingForm.tsx](src/components/BookingForm.tsx):
- Line 28: Replace `919876543210` with your actual WhatsApp number

Edit [src/components/FloatingWhatsApp.tsx](src/components/FloatingWhatsApp.tsx):
- Line 8: Replace `919876543210` with your actual WhatsApp number

### Update Menu Items

Edit [src/components/Menu.tsx](src/components/Menu.tsx):
- Modify `menuData` object to add/remove/edit menu items
- Update prices and descriptions

### Update Images

Gallery images use placeholder URLs from Unsplash. To use your own images:
1. Upload images to [src/assets](src/assets)
2. Update image URLs in [src/components/Gallery.tsx](src/components/Gallery.tsx)

Example:
```typescript
src: 'https://yourimage.jpg' // Replace with your image URL
// OR
import foodImage from '../assets/food.jpg'
src: foodImage
```

### Update Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the color scheme:
```javascript
colors: {
  gold: "#YOUR_COLOR",
  "dark-bg": "#YOUR_COLOR",
  "dark-card": "#YOUR_COLOR",
  "dark-border": "#YOUR_COLOR",
}
```

### Update Social Media Links

Edit [src/components/Footer.tsx](src/components/Footer.tsx):
- Update Instagram, Facebook, Twitter links to your accounts

### Update Map Location

Edit [src/components/Contact.tsx](src/components/Contact.tsx):
- Replace the Google Maps embed URL with your restaurant's coordinates

## Performance Tips

- Images are optimized with Unsplash (free CDN)
- Lazy loading via Framer Motion `whileInView`
- CSS animations are GPU-accelerated
- Minimal JavaScript bundle size
- SEO-friendly HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

Then:
```bash
npm run build
```

### Deploy to Any Static Hosting

The `dist/` folder can be deployed to any static hosting service:
- AWS S3
- Google Cloud Storage
- Azure Static Web Apps
- Any FTP server

## Environment Variables

Create a `.env` file (optional for advanced features):

```env
VITE_WHATSAPP_NUMBER=919876543210
VITE_PHONE_NUMBER=+919876543210
VITE_EMAIL=info@aurouslounge.com
```

## Maintenance Checklist

- [ ] Update opening hours seasonally
- [ ] Refresh menu items regularly
- [ ] Add new event information
- [ ] Update gallery with latest photos
- [ ] Monitor booking requests via WhatsApp
- [ ] Update customer reviews/testimonials
- [ ] Check links and contact information

## Troubleshooting

### Port 3000 already in use?
```bash
# On Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

### Build errors?
```bash
rm -r node_modules
rm package-lock.json
npm install
npm run build
```

### Images not loading?
- Check image URLs are accessible
- Verify image file paths if using local images
- Use browser DevTools to debug network calls

## Support & Contribution

For issues, feature requests, or contributions, please reach out to the development team.

## License

© 2024 Aurous Restro Lounge. All rights reserved.

---

**Last Updated:** 2024
**Version:** 1.0.0
