# Contributing to Demo Showcase

First off, thank you for considering contributing to Demo Showcase! It's people like you that make this project better.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct of being respectful and inclusive.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots** if relevant
- **Include browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List some examples** of how it would be used

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Follow the coding style** - we use ESLint and Prettier
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write clear commit messages**

## Development Process

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/demo.duyet.net.git
cd demo.duyet.net

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure

```
demo.duyet.net/
├── assets/          # Shared assets (favicon, CSS, images)
├── flappy-bird/     # Flappy Bird game project
├── js-barcode/      # Barcode generator project
├── md2html/         # Markdown to HTML converter
├── ping-url/        # URL ping utility
├── index.html       # Main landing page
├── manifest.json    # PWA manifest
└── sw.js           # Service worker
```

### Coding Standards

#### JavaScript

- Use **ES6+** syntax and features
- Prefer **const** and **let** over **var**
- Use **arrow functions** where appropriate
- Write **descriptive variable names**
- Add **comments** for complex logic
- Follow **functional programming** principles when possible

#### HTML

- Use **semantic HTML5** elements
- Include **ARIA labels** for accessibility
- Ensure **mobile responsiveness**
- Validate markup with W3C validator

#### CSS

- Use **CSS custom properties** for theming
- Follow **mobile-first** approach
- Ensure **dark mode** support
- Use **logical property names** when appropriate
- Keep selectors **specific but not overly complex**

### Testing

Before submitting a pull request:

```bash
# Run linter
npm run lint

# Check formatting
npm run format:check

# Run tests
npm test

# Build project
npm run build
```

### Code Quality Tools

This project uses:

- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **Lighthouse** - Performance auditing

Configuration files:
- `.eslintrc.js` - ESLint rules
- `.prettierrc.json` - Prettier config
- `.prettierignore` - Files to ignore

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Test updates
- **chore**: Build process or auxiliary tool changes

Examples:
```
feat(barcode): add support for QR codes

Add QR code generation capability to the barcode generator.
Includes error correction levels and custom sizing options.

Closes #123
```

```
fix(flappy-bird): correct collision detection

Previous implementation had edge case where bird could pass
through pipes. Fixed by adjusting hitbox calculations.
```

### Pull Request Process

1. **Update README.md** with details of changes if applicable
2. **Update CHANGELOG.md** following Keep a Changelog format
3. **Ensure all tests pass** and code meets quality standards
4. **Request review** from maintainers
5. **Address feedback** promptly and professionally

### Branch Naming

Use descriptive branch names:

- `feature/add-qr-codes`
- `fix/collision-detection`
- `docs/update-readme`
- `refactor/modernize-barcode`

## Project Guidelines

### Accessibility

- All interactive elements must be keyboard accessible
- Include ARIA labels where appropriate
- Ensure sufficient color contrast (WCAG AA minimum)
- Test with screen readers when possible

### Performance

- Keep bundle sizes minimal
- Optimize images and assets
- Implement lazy loading where appropriate
- Aim for Lighthouse score of 90+

### Security

- Never commit sensitive data
- Use HTTPS for all external resources
- Validate and sanitize user input
- Keep dependencies up to date

### Browser Support

We support:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Getting Help

- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Report bugs via GitHub Issues
- 📧 **Email**: Contact [@duyetdev](https://github.com/duyetdev) for sensitive matters

## Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Hall of Fame (if we create one!)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Demo Showcase! 🎉
