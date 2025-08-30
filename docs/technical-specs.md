# Technical Specifications

## Technology Stack

### Frontend Framework
- **React** 18.2.0
- **React DOM** 18.2.0
- **React Scripts** 5.0.1 (Create React App)

### Routing
- **React Router DOM** 6.30.1
- Client-side routing with browser history
- Route-based code splitting available

### Styling
- **Tailwind CSS** 3.4.17
- **PostCSS** 8.5.6
- **Autoprefixer** 10.4.21
- Utility-first CSS framework
- Responsive design system

### Animations
- **Framer Motion** 12.19.1
- Gesture-based animations
- Layout animations
- SVG path animations

### Form Handling
- **Formspree** integration
- Endpoint: `https://formspree.io/f/xovwpakl`
- Contact form submissions
- Email notifications

### Development Tools
- **React Scripts** 5.0.1 (webpack, Babel, ESLint)
- **Web Vitals** 2.1.4 (performance monitoring)

### Deployment
- **GitHub Pages** 6.3.0
- Static site hosting
- Automated deployment pipeline

## File Structure

### Root Directory
```
C:\Repo\Alucentra Consulting\
├── public/
│   ├── index.html          # Main HTML template
│   └── logo.png           # Company logo
├── src/
│   ├── components/        # Reusable components
│   ├── App.js            # Main application component
│   ├── index.js          # React entry point
│   ├── App.css           # Global styles
│   ├── index.css         # Tailwind imports
│   ├── Home.js           # Home page component
│   ├── Services.js       # Services page component
│   ├── About.js          # About page component
│   └── Contact.js        # Contact page component
├── docs/                 # Documentation
├── .vscode/              # VS Code configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── .gitignore           # Git ignore rules
```

### Component Structure
```
src/components/
├── ui/
│   ├── Card.js           # Card component with glassmorphism
│   └── Button.js         # Primary button component
└── ContactForm.js        # Contact form component
```

## Build Configuration

### Package.json Scripts
```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Tailwind Configuration
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS Configuration
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Performance Specifications

### Bundle Size Analysis
- Main bundle: Optimized through Create React App
- Code splitting: Available via React.lazy() and Suspense
- Tree shaking: Enabled by default in production builds

### Image Optimization
- External images served via Unsplash CDN
- Automatic format optimization (WebP when supported)
- Responsive image serving

### Caching Strategy
- Static assets cached with filename hashing
- Service worker registration available (not currently implemented)
- Browser caching via HTTP headers

## Browser Support

### Supported Browsers
**Production:**
- Chrome (>0.2% usage)
- Firefox (>0.2% usage)
- Safari (>0.2% usage)
- Edge (>0.2% usage)
- Not dead browsers
- Not Opera Mini

**Development:**
- Latest Chrome
- Latest Firefox
- Latest Safari

### Polyfills
- Included via Create React App
- ES6+ features transpiled via Babel
- CSS Grid and Flexbox support

## Accessibility Standards

### Current Implementation
- Semantic HTML structure
- Keyboard navigation support
- Form labels and validation
- Color contrast compliance

### Future Enhancements
- WCAG 2.1 AA compliance
- Screen reader optimization
- Focus management
- ARIA attributes
- Alternative text for images

## Security Considerations

### Current Security Measures
- HTTPS enforcement via GitHub Pages
- Content Security Policy (default browser)
- XSS protection via React's built-in escaping
- Form validation on client and server (Formspree)

### Recommended Enhancements
- Additional CSP headers
- Input sanitization
- Rate limiting for form submissions
- Security headers implementation

## API Integration

### Formspree Contact Form
```javascript
// Configuration
endpoint: "https://formspree.io/f/xovwpakl"
method: "POST"
headers: {
  "Accept": "application/json"
}

// Response handling
if (response.ok) {
  // Success: Show confirmation message
} else {
  // Error: Display error message
}
```

### Future API Considerations
- CMS integration (Strapi, Sanity, Contentful)
- Analytics integration (Google Analytics 4)
- Newsletter service (Mailchimp, ConvertKit)
- Social media APIs

## Development Environment

### VS Code Configuration
```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true,
  "css.validate": false,
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  }
}
```

### Recommended Extensions
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Path Intellisense
- GitHub Copilot

### Development Tasks
```json
{
  "tasks": [
    {
      "type": "npm",
      "script": "start",
      "group": "build",
      "isBackground": true
    },
    {
      "type": "npm", 
      "script": "build",
      "group": "build"
    },
    {
      "type": "npm",
      "script": "test",
      "group": "test"
    }
  ]
}
```

## Deployment Specifications

### GitHub Pages Configuration
- **Repository**: alucentra.github.io
- **Branch**: gh-pages (deployment target)
- **Source**: build/ directory
- **Custom Domain**: Configurable in repository settings

### Build Process
1. `npm run predeploy` - Executes build process
2. `npm run build` - Creates optimized production build
3. `npm run deploy` - Deploys to gh-pages branch
4. GitHub Pages serves static files

### Environment Variables
Currently none required. Future considerations:
- API keys for external services
- Environment-specific configurations
- Feature flags

## Testing Framework

### Current Testing Setup
- Jest (included with Create React App)
- React Testing Library
- Test files: `*.test.js` or `*.spec.js`

### Recommended Testing Strategy
- Unit tests for components
- Integration tests for page flows
- End-to-end tests with Cypress or Playwright
- Visual regression testing

## Monitoring & Analytics

### Performance Monitoring
- Web Vitals library included
- Core Web Vitals tracking ready
- Performance API available

### Future Analytics Integration
- Google Analytics 4
- User behavior tracking
- Conversion funnel analysis
- A/B testing framework

## Version Control

### Git Workflow
- Main branch: `main`
- Feature branches: `feature/feature-name`
- Release branches: `release/version`
- Hotfix branches: `hotfix/issue-name`

### Commit Convention
- feat: New features
- fix: Bug fixes
- docs: Documentation updates
- style: Code style changes
- refactor: Code refactoring
- test: Test additions/updates
- chore: Maintenance tasks

## Backup & Recovery

### Code Backup
- GitHub repository (primary)
- Local development machines
- VS Code settings sync

### Content Backup
- Form submissions via Formspree
- Static content version controlled
- Documentation maintained in repository
