# Demo Showcase

> A curated collection of interactive demos and experiments by [@duyetdev](https://github.com/duyetdev)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdemo.duyet.net)](https://demo.duyet.net)

## 🚀 Featured Projects

### [Flappy Bird](https://demo.duyet.net/flappy-bird/)
Classic Flappy Bird game clone built with Phaser.js. Navigate through pipes, beat your high score, and enjoy smooth gameplay with physics-based mechanics.

**Technologies:** Phaser.js, JavaScript, HTML5 Canvas

**Tutorials:** [Part 1](https://blog.duyetdev.com/2014/02/huong-dan-viet-game-flappy-bird-bang.html) • [Part 2](https://blog.duyetdev.com/2014/03/huong-dan-viet-game-flappy-bird-bang.html) • [Part 3](https://blog.duyetdev.com/2014/04/huong-dan-viet-game-flappy-bird-bang.html)

### [Barcode Generator](https://demo.duyet.net/js-barcode/)
Generate multiple barcode formats including CODE128, EAN, UPC, CODE39, ITF14, ITF, and Pharmacode. Customize appearance, preview in real-time, and download instantly.

**Technologies:** JsBarcode, Vanilla JavaScript, HTML5 Canvas

**Source:** [github.com/duyetdev/JsBarcode](https://github.com/duyetdev/JsBarcode)

### [Markdown to HTML](https://demo.duyet.net/md2html/)
Live markdown editor with real-time HTML preview. Built with Vue.js, featuring syntax highlighting and clean, responsive interface.

**Technologies:** Vue.js, Marked.js, Highlight.js

**Credit:** Based on [md2html](https://github.com/egoist/md2html) by [@egoist](https://github.com/egoist)

### [Ping URL](https://demo.duyet.net/ping-url/)
Simple utility to check website availability and response times.

## 🌐 More Projects

- **[JSON Tools](https://json.duyet.net)** - Collection of JSON utilities
- **[XMail Client](https://xmail.duyet.net)** - Email client
- **[Rain Sound](https://rain.duyet.net)** - Ambient rain sounds ([Source](https://github.com/duyetdev/rain))
- **[Arkadia](https://arkadia.duyet.net)** - Infinitely zooming floral landscape
- **[Offline Tools](https://offline.duyetdev.com)** - Offline utilities
- **[API Services](https://api.duyet.net)** - Public API endpoints

## ✨ Features

### Modern Architecture
- 🎨 **Design System** - Unified CSS variables and consistent styling
- 🌓 **Dark Mode** - Automatic dark mode support via `prefers-color-scheme`
- 📱 **Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- ⚡ **Performance** - Optimized assets, lazy loading, and service worker caching

### Developer Experience
- 📦 **Modern Tooling** - ESLint, Prettier, Vite
- 🔒 **Security** - HTTPS everywhere, CSP headers, updated dependencies
- 🧪 **Testing** - Vitest setup for unit and integration tests
- 📊 **Analytics** - Privacy-friendly performance tracking
- 🔄 **PWA** - Progressive Web App with offline support

### Code Quality
- ✅ ES6+ modules and modern JavaScript
- ✅ No jQuery dependencies (migrated to vanilla JS)
- ✅ Consistent code formatting with Prettier
- ✅ Linting with ESLint
- ✅ Semantic HTML5 elements
- ✅ CSS custom properties for theming

## 🛠️ Development

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/duyetdev/demo.duyet.net.git
cd demo.duyet.net

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint JavaScript files
npm run format       # Format code with Prettier
npm test             # Run tests
npm run test:ui      # Run tests with UI
npm run lighthouse   # Run Lighthouse audit
```

## 📁 Project Structure

```
demo.duyet.net/
├── assets/              # Shared assets
│   ├── favicon.svg
│   └── main.css
├── flappy-bird/         # Flappy Bird game
│   ├── assets/
│   └── index.html
├── js-barcode/          # Barcode generator
│   ├── javascripts/
│   └── index.html
├── md2html/             # Markdown converter
│   └── index.html
├── ping-url/            # URL ping tool
│   └── index.html
├── index.html           # Landing page
├── manifest.json        # PWA manifest
├── sw.js                # Service worker
├── package.json         # Dependencies
├── eslint.config.js     # ESLint configuration
└── .prettierrc.json     # Prettier configuration
```

## 🎨 Design System

The project uses a unified design system with CSS custom properties:

```css
/* Colors */
--color-primary: #6366f1
--color-bg: #ffffff (light) / #0f172a (dark)
--color-text: #111827 (light) / #f1f5f9 (dark)

/* Spacing */
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem

/* Typography */
--font-sans: System font stack
```

## 🔒 Security

- ✅ All external resources loaded via HTTPS
- ✅ Content Security Policy headers
- ✅ No outdated dependencies with known vulnerabilities
- ✅ Service Worker for secure offline access
- ✅ Input validation and sanitization

## 🚀 Deployment

This site is deployed to GitHub Pages. Any push to the main branch automatically triggers a deployment.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
# (GitHub Actions handles this automatically)
```

## 📊 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Service Worker:** Enabled for offline access
- **Bundle Size:** Optimized with code splitting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

This project uses ESLint and Prettier for code quality and formatting:

```bash
# Auto-fix linting issues
npm run lint

# Format all files
npm run format
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Van-Duyet Le** ([@duyetdev](https://github.com/duyetdev))

- Website: [duyetdev.com](https://duyetdev.com)
- Blog: [blog.duyetdev.com](https://blog.duyetdev.com)
- Twitter: [@duyetdev](https://twitter.com/duyetdev)

## 🙏 Acknowledgments

- [Phaser.js](https://phaser.io) - Game framework
- [JsBarcode](https://github.com/lindell/JsBarcode) - Barcode generation
- [Vue.js](https://vuejs.org) - Progressive framework
- [Marked.js](https://marked.js.org) - Markdown parser
- [@egoist](https://github.com/egoist) - md2html inspiration

---

<div align="center">
  <p>Made with ❤️ by <a href="https://duyetdev.com">@duyetdev</a></p>
  <p>
    <a href="https://demo.duyet.net">Website</a> •
    <a href="https://github.com/duyetdev/demo.duyet.net/issues">Issues</a> •
    <a href="https://github.com/duyetdev/demo.duyet.net/pulls">Pull Requests</a>
  </p>
</div>
