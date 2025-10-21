# Cordoba AI - Landing Page

A modern, responsive landing page for Cordoba AI built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design** - Beautiful gradient-based UI with dark theme
- **Responsive** - Fully responsive design that works on all devices
- **Performance** - Optimized for fast loading and Core Web Vitals
- **SEO Ready** - Built with Next.js for excellent SEO
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **TypeScript** - Type-safe development experience

## 📋 Project Structure

```
cordoba-ai/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Features.tsx        # Key features
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment on Vercel

### Option 1: Deploy with Git (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select the `cordoba-ai` repository
   - Click "Import"

3. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy your project.

## 🎨 Customization

### Update Company Information

Edit the following files to customize content:

- **Header/Navigation**: `components/Header.tsx`
- **Hero Section**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **Contact Info**: `components/CTA.tsx`
- **Footer**: `components/Footer.tsx`

### Change Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  'cordoba-dark': '#0f172a',
  'cordoba-blue': '#3b82f6',
  'cordoba-purple': '#8b5cf6',
}
```

### Update Metadata

Edit `app/layout.tsx` to update:
- Title
- Description
- OG tags
- Keywords

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (≥ 768px)
- Desktop (≥ 1024px)

## 🔒 Performance & SEO

- ✅ Optimized images
- ✅ Font optimization
- ✅ Code splitting
- ✅ Metadata tags
- ✅ Mobile-friendly
- ✅ Fast page loads

## 📞 Contact Information

Currently configured with placeholder contact info. Update in `components/CTA.tsx`:

- Email: hello@cordoba-ai.com
- Phone: +1 (234) 567-890
- Location: Global Remote Team

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For issues or questions, please contact the Cordoba AI team.
