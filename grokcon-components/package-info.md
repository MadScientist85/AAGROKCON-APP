# GROKcon Component Library Package

## 📦 Package Contents

This package contains a complete React component library for GROKcon, an AI Government Contracting Opportunities Hunter, with the following components and features:

### UI Components
- **Badge**: Status indicators with multiple variants (default, secondary, destructive, outline)
- **Avatar**: User profile images with fallbacks and grouping support
- **Textarea**: Multi-line text input components for forms
- **Button**: Versatile button component with multiple variants
- **TextareaWithButton**: Composite component combining textarea with action button

### Block Components
- **Dashboard-01**: Complete dashboard layout with metrics, charts, and data tables
- **Sidebar-02**: Collapsible navigation sidebar with expandable sections

### API Backend
- **Flask Registry API**: Complete REST API for component registry functionality
- **Component Metadata**: Structured JSON metadata for all components
- **Search & Discovery**: API endpoints for component search and categorization

### Registry Integration
- **v0 Integration**: Full support for v0.dev component generation and editing
- **Multiple Registries**: Support for local, production, and third-party registries
- **Authentication**: Secure API access with token-based authentication

## 🚀 Quick Start

### 1. Frontend Components

```bash
# Navigate to the components directory
cd grokcon-components

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

### 2. Backend API

```bash
# Navigate to the API directory
cd grokcon-registry-api

# Activate virtual environment
source venv/bin/activate

# Start the API server
python src/main.py
```

### 3. Component Installation via Registry

```bash
# Install components from GROKcon registry
npx shadcn@latest add @grokcon/badge
npx shadcn@latest add @grokcon/dashboard-01
npx shadcn@latest add @grokcon/sidebar-02

# Install from v0 registry
npx shadcn@latest add @v0/dashboard
```

## 📋 Component Registry

### Available Components

| Component | Type | Description | Dependencies |
|-----------|------|-------------|--------------|
| badge | registry:ui | Status indicators with variants | lucide-react, class-variance-authority |
| avatar | registry:ui | User avatars with fallbacks | @radix-ui/react-avatar |
| textarea | registry:ui | Multi-line text input | - |
| button | registry:ui | Versatile button component | @radix-ui/react-slot, class-variance-authority |
| textarea-with-button | registry:ui | Composite textarea + button | button, textarea |
| dashboard-01 | registry:block | Complete dashboard layout | card, badge, button, lucide-react, recharts |
| sidebar-02 | registry:block | Collapsible navigation sidebar | button, badge, lucide-react |

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/registry/components` | GET | List all components |
| `/api/registry/components/{name}` | GET | Get component details |
| `/api/registry/components/{name}/install` | POST | Simulate installation |
| `/api/registry/search` | GET | Search components |
| `/api/registry/categories` | GET | Get component categories |
| `/api/registry/tags` | GET | Get component tags |
| `/api/registry/health` | GET | Health check |

## 🔧 Configuration

### Registry Configuration (components.json)

```json
{
  "registries": {
    "@grokcon": "http://localhost:5000/api/registry/components/{name}",
    "@v0": "https://v0.dev/chat/b/{name}",
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

### Environment Variables

```bash
# .env.local
GROKCON_API_TOKEN=your_api_token_here
V0_API_TOKEN=your_v0_token_here
NEXT_PUBLIC_V0_ENABLED=true
```

## 🎨 Customization

### Theme Configuration

Components use CSS variables for theming. Customize in `src/App.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  /* ... more variables */
}
```

### Component Variants

```jsx
// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// Button variants
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
```

## 📖 Usage Examples

### Basic Component Usage

```jsx
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dashboard01 } from '@/components/blocks/dashboard-01'

function App() {
  return (
    <div>
      <Badge variant="secondary">Active</Badge>
      <Avatar>
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>GC</AvatarFallback>
      </Avatar>
      <Dashboard01 />
    </div>
  )
}
```

### API Integration

```javascript
// Fetch components from registry
const response = await fetch('/api/registry/components')
const { components } = await response.json()

// Search components
const searchResults = await fetch('/api/registry/search?q=dashboard&category=blocks')
const { results } = await searchResults.json()

// Get component details
const badgeComponent = await fetch('/api/registry/components/badge')
const badgeData = await badgeComponent.json()
```

## 🚀 Deployment

### Frontend Deployment

```bash
# Build the React application
cd grokcon-components
pnpm run build

# Deploy to static hosting (Vercel, Netlify, etc.)
# The build output will be in the 'dist' directory
```

### Backend Deployment

```bash
# Prepare the Flask API for deployment
cd grokcon-registry-api
source venv/bin/activate
pip freeze > requirements.txt

# Deploy to cloud platform (Heroku, Railway, etc.)
# Ensure the main.py file is configured to run on 0.0.0.0
```

### Full-Stack Deployment

For a complete deployment, you can:

1. Build the React frontend
2. Copy the build files to the Flask `static` directory
3. Deploy the Flask app with the frontend included

## 📚 Documentation

- [Component API Reference](./docs/components.md)
- [v0 Integration Guide](./docs/v0-integration.md)
- [Open in v0 Button](./docs/open-in-v0.md)
- [Registry Configuration](./docs/registry.md)

## 🔍 Testing

### Manual Testing Completed

✅ All UI components render correctly
✅ Badge variants display properly
✅ Avatar components with fallbacks work
✅ Textarea components are functional
✅ Dashboard layout displays metrics and charts
✅ Sidebar navigation is collapsible and interactive
✅ API endpoints respond correctly
✅ Registry configuration is valid

### Component Screenshots

The components have been tested in a live browser environment and display correctly with proper styling, responsive design, and interactive functionality.

## 🆘 Support

For support and questions:
- Review the documentation in the `docs/` directory
- Check the component examples in `src/App.jsx`
- Test the API endpoints using the provided Flask server
- Refer to the registry configuration examples

## 📄 License

This project is licensed under the MIT License.

## 🏷 Tags

`react` `components` `ui` `government` `contracting` `grokcon` `shadcn` `tailwind` `registry` `v0` `flask` `api`

