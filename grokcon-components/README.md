# GROKcon Component Library

A comprehensive React component library for **GROKcon**, an AI Government Contracting Opportunities Hunter. This library provides reusable UI components and blocks specifically designed for government contracting applications.

## 🚀 Features

- **Modern React Components**: Built with React 18+ and modern JavaScript
- **Tailwind CSS Styling**: Fully styled with Tailwind CSS and CSS variables
- **Shadcn/UI Compatible**: Compatible with shadcn/ui component system
- **Registry Support**: Full support for component registries with v0 integration
- **TypeScript Ready**: Components are ready for TypeScript conversion
- **Responsive Design**: All components are mobile-first and responsive
- **Accessibility**: Built with accessibility best practices
- **Government Contracting Focus**: Specialized components for contracting workflows

## 📦 Components

### UI Components

- **Badge**: Status indicators with multiple variants
- **Avatar**: User profile images with fallbacks and grouping
- **Textarea**: Multi-line text input for forms
- **Button**: Versatile button component with variants
- **TextareaWithButton**: Composite component for message input

### Block Components

- **Dashboard-01**: Complete dashboard layout with metrics and charts
- **Sidebar-02**: Collapsible navigation sidebar with sections

## 🛠 Installation

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- React 18+

### Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd grokcon-components
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser to `http://localhost:5173`

## 📋 Registry Configuration

The component library supports multiple registry configurations for different environments:

### Local Development
```json
{
  "registries": {
    "@grokcon": "http://localhost:5000/api/registry/components/{name}"
  }
}
```

### Production
```json
{
  "registries": {
    "@grokcon-prod": {
      "url": "https://registry.grokcon.com/api/registry/components/{name}",
      "headers": {
        "Authorization": "Bearer ${GROKCON_API_TOKEN}",
        "X-API-Version": "1.0"
      }
    }
  }
}
```

### v0 Integration
```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}"
  }
}
```

## 🔧 Usage

### Installing Components via Registry

```bash
# Install from GROKcon registry
npx shadcn@latest add @grokcon/badge
npx shadcn@latest add @grokcon/dashboard-01

# Install from v0 registry
npx shadcn@latest add @v0/dashboard

# Install multiple components
npx shadcn@latest add @grokcon/badge @grokcon/avatar @grokcon/sidebar-02
```

### Direct Import

```jsx
import { Badge } from '@/components/ui/badge'
import { Dashboard01 } from '@/components/blocks/dashboard-01'
import { Sidebar02 } from '@/components/blocks/sidebar-02'

function App() {
  return (
    <div>
      <Badge variant="secondary">Active</Badge>
      <Dashboard01 />
      <Sidebar02 />
    </div>
  )
}
```

## 🏗 Project Structure

```
grokcon-components/
├── src/
│   ├── components/
│   │   ├── ui/           # Basic UI components
│   │   │   ├── badge.jsx
│   │   │   ├── avatar.jsx
│   │   │   ├── button.jsx
│   │   │   ├── textarea.jsx
│   │   │   └── ...
│   │   └── blocks/       # Complex layout components
│   │       ├── dashboard-01.jsx
│   │       ├── sidebar-02.jsx
│   │       └── ...
│   ├── lib/
│   │   ├── utils.js      # Utility functions
│   │   └── registry/     # Registry configurations
│   ├── hooks/            # Custom React hooks
│   ├── ai-prompts/       # AI-related configurations
│   └── App.jsx           # Demo application
├── components.json       # Shadcn/UI configuration with registries
├── package.json
└── README.md
```

## 🌐 API Endpoints

The component library includes a Flask backend API for registry functionality:

### Available Endpoints

- `GET /api/registry/components` - List all components
- `GET /api/registry/components/{name}` - Get component details
- `POST /api/registry/components/{name}/install` - Simulate installation
- `GET /api/registry/search` - Search components
- `GET /api/registry/categories` - Get component categories
- `GET /api/registry/tags` - Get component tags
- `GET /api/registry/health` - Health check

### Example API Usage

```javascript
// Fetch all components
const response = await fetch('/api/registry/components')
const { components } = await response.json()

// Get specific component
const badge = await fetch('/api/registry/components/badge')
const badgeData = await badge.json()

// Search components
const results = await fetch('/api/registry/search?q=dashboard&category=blocks')
const searchData = await results.json()
```

## 🎨 Customization

### Theme Configuration

The components use CSS variables for theming. Customize colors in `src/App.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  /* ... more variables */
}
```

### Component Variants

Most components support multiple variants:

```jsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

## 🚀 Deployment

### Frontend Deployment

```bash
# Build for production
pnpm run build

# Deploy to static hosting
pnpm run deploy
```

### Backend Deployment

```bash
cd grokcon-registry-api
source venv/bin/activate
python src/main.py
```

## 📖 Documentation

- [Component API Reference](./docs/components.md)
- [Registry Configuration Guide](./docs/registry.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Contact the GROKcon team
- Check the documentation

## 🏷 Tags

`react` `components` `ui` `government` `contracting` `grokcon` `shadcn` `tailwind` `registry` `v0`

