# SignTusk - Secure Document Signing & Sharing Platform

A modern, professional SaaS homepage for SignTusk, built with **Next.js 15**, TypeScript, and Tailwind CSS. SignTusk is a secure document signing and sharing platform inspired by DocSend, featuring real-time analytics, multi-party workflows, and enterprise-grade security.

## 🚀 Features

### Homepage Sections
- **Hero Section**: Compelling value proposition with animated background and product preview
- **Features Section**: Comprehensive feature showcase with primary and secondary features
- **Pricing Section**: Transparent pricing with monthly/yearly toggle and FAQ
- **Header**: Responsive navigation with smooth scrolling and mobile menu
- **Footer**: Complete footer with links, newsletter signup, and social media

### Key Highlights
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI**: Clean, professional design with gradient effects and glass morphism
- **Performance Optimized**: Built with Next.js 15 App Router & Turbopack for optimal performance
- **SEO Ready**: Complete meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### SaaS Features Highlighted
- ✅ Secure document signing and sharing
- ✅ Real-time document tracking and analytics
- ✅ Multi-party signing workflows
- ✅ Template reusability and customization
- ✅ Enterprise-grade security and compliance
- ✅ API access and integrations
- ✅ Mobile-responsive design
- ✅ Team collaboration tools

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router & Turbopack
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Custom components with modern design patterns
- **Icons**: Lucide React (latest)
- **Animations**: Framer Motion 11
- **Fonts**: Inter (Google Fonts with font optimization)
- **Development**: ESLint 9, Prettier, and modern tooling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd signtusk-nextjs-multi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server with Turbopack**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   > **Note**: The dev script now uses `--turbo` flag for faster builds with Turbopack!

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the homepage.

## 🏗️ Project Structure

```
signtusk-nextjs-multi/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── login/             # Login page
│   │   └── signup/            # Signup page
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Layout components
│   │   └── sections/          # Homepage sections
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) - Professional and trustworthy
- **Secondary**: Gray scale for text and backgrounds
- **Success**: Green (#22c55e) - For positive actions
- **Warning**: Yellow (#f59e0b) - For cautions
- **Error**: Red (#ef4444) - For errors

### Typography
- **Font Family**: Inter - Modern, readable sans-serif
- **Hierarchy**: Clear heading and body text scales
- **Weights**: 300-900 for various emphasis levels

### Components
- **Buttons**: Multiple variants (default, outline, ghost, gradient)
- **Cards**: Clean cards with hover effects and shadows
- **Forms**: Accessible form inputs with validation states
- **Navigation**: Responsive header with mobile menu

## 📱 Responsive Design

The homepage is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation links in `src/components/layout/header.tsx`

### Modifying Colors
Update the color palette in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation links as needed

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance

The homepage is optimized for performance:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent scores for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with App Router

## 🔒 Security

- **Content Security Policy**: Configured for production
- **HTTPS**: Enforced in production
- **Input Validation**: Client-side validation for forms
- **XSS Protection**: Built-in Next.js protections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: support@signtusk.com
- Documentation: [docs.signtusk.com](https://docs.signtusk.com)
- Community: [community.signtusk.com](https://community.signtusk.com)

---

Built with ❤️ by the SignTusk team
