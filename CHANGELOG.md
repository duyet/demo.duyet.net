# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-16

### Added

#### Infrastructure
- Modern build system with Vite
- Package.json with comprehensive npm scripts
- ESLint configuration for code quality
- Prettier for consistent code formatting
- Vitest for unit testing
- GitHub Actions CI/CD pipeline
- Security audit workflow
- Comprehensive .gitignore file

#### Design & UX
- Stunning new landing page with modern design
- Unified CSS design system with custom properties
- Dark mode support via `prefers-color-scheme`
- Responsive mobile-first layout across all pages
- Smooth animations and transitions
- Accessibility improvements (ARIA labels, keyboard navigation)
- Modern typography with system font stack

#### Features
- Progressive Web App (PWA) capabilities
- Service Worker for offline support
- Web App Manifest for installability
- Modern SVG favicon
- Link prefetching on hover for better performance
- Performance monitoring and analytics

#### Security
- HTTPS-only external resources (migrated from HTTP)
- Content Security Policy headers (_headers file)
- Security headers configuration
- Updated dependencies (removed vulnerable jQuery 1.11.1)
- Input validation and sanitization

#### SEO & Discoverability
- Comprehensive meta tags (description, keywords, author)
- Open Graph tags for social media sharing
- Twitter Card tags
- Structured data (JSON-LD) with Schema.org markup
- XML sitemap (sitemap.xml)
- Robots.txt configuration
- Improved semantic HTML structure

#### Documentation
- Completely rewritten README.md with comprehensive docs
- CONTRIBUTING.md with contribution guidelines
- CHANGELOG.md (this file)
- Code comments and inline documentation
- Project structure documentation

### Changed

#### Barcode Generator
- **BREAKING**: Removed jQuery dependency
- Rewrote with vanilla ES6+ JavaScript
- Modernized UI with CSS custom properties
- Improved accessibility with ARIA labels
- Added back-to-home navigation
- Enhanced mobile responsiveness
- Better error handling and validation

#### Flappy Bird
- Modernized HTML structure
- New responsive layout
- Improved styling with design system
- Added accessibility features
- Better mobile support
- Enhanced instructions UI

#### Landing Page
- Complete redesign with modern aesthetic
- Card-based project layout
- Gradient text effects
- Hover animations and effects
- Better typography and spacing
- Improved navigation
- External projects section

### Fixed
- Security vulnerabilities from outdated dependencies
- Mixed content warnings (HTTP → HTTPS)
- Accessibility issues across all pages
- Mobile responsive layout issues
- Missing meta tags and SEO elements
- Inconsistent styling across projects

### Removed
- jQuery dependency from Barcode Generator (replaced with vanilla JS)
- Bootstrap dependency from Barcode Generator
- Outdated CSS libraries
- Unused assets and files
- Insecure HTTP CDN links

### Deprecated
- Legacy HTML/JS files (kept as .legacy.html/.legacy.js for reference)

## [1.0.0] - 2016-12-01

### Added
- Initial release
- Flappy Bird game clone
- Barcode Generator
- Markdown to HTML converter
- Ping URL utility
- Basic README documentation
- MIT License

---

## Version History

- **v2.0.0** - Major overhaul with modern architecture (January 2025)
- **v1.0.0** - Initial release (December 2016)

---

For detailed changes, see the [commit history](https://github.com/duyetdev/demo.duyet.net/commits/main).
