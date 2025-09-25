# v0 Integration Guide

This guide explains how to integrate GROKcon components with v0.dev for enhanced AI-powered development.

## 🔗 What is v0 Integration?

v0.dev is an AI-powered tool that generates React components. By integrating with v0, you can:

- Generate components using AI prompts
- Access pre-built component templates
- Combine GROKcon components with v0 components
- Leverage AI for rapid prototyping

## ⚙️ Configuration

### 1. Registry Setup

Add v0 registry to your `components.json`:

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@grokcon": "http://localhost:5000/api/registry/components/{name}"
  }
}
```

### 2. Environment Variables

For production v0 integration, set up authentication:

```bash
# .env.local
V0_API_TOKEN=your_v0_token_here
```

### 3. Advanced Configuration

```json
{
  "registries": {
    "@v0": {
      "url": "https://v0.dev/chat/b/{name}",
      "headers": {
        "Authorization": "Bearer ${V0_API_TOKEN}",
        "X-Client": "grokcon-components"
      }
    }
  }
}
```

## 🚀 Usage Examples

### Installing v0 Components

```bash
# Install a dashboard from v0
npx shadcn@latest add @v0/dashboard

# Install multiple components
npx shadcn@latest add @v0/chart @v0/table @grokcon/sidebar-02
```

### Combining Components

```jsx
import { Dashboard01 } from '@/components/blocks/dashboard-01'
import { V0Chart } from '@/components/v0/chart'
import { Badge } from '@/components/ui/badge'

function CombinedDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h1>GROKcon Analytics</h1>
        <Badge variant="secondary">v0 Enhanced</Badge>
      </div>
      
      {/* GROKcon component */}
      <Dashboard01 />
      
      {/* v0 component */}
      <V0Chart data={analyticsData} />
    </div>
  )
}
```

## 🎯 AI Prompts for GROKcon

When using v0.dev, use these prompts for government contracting components:

### Dashboard Prompts
```
"Create a government contracting dashboard with opportunity metrics, bid tracking, and win rate analytics"

"Generate a federal procurement dashboard showing active RFPs, submission deadlines, and contract values"
```

### Form Prompts
```
"Build a government proposal submission form with file uploads, compliance checklist, and validation"

"Create a contractor registration form with CAGE code, NAICS codes, and capability statements"
```

### Table Prompts
```
"Design a sortable table for government contracting opportunities with filters for agency, value, and deadline"

"Generate a bid tracking table with status indicators, submission dates, and award notifications"
```

## 🔧 Custom v0 Components

### Creating v0-Compatible Components

```jsx
// components/v0/government-opportunity-card.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, Building } from "lucide-react"

export function GovernmentOpportunityCard({ opportunity }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{opportunity.title}</CardTitle>
          <Badge variant={opportunity.status === 'open' ? 'default' : 'secondary'}>
            {opportunity.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building className="h-4 w-4" />
          {opportunity.agency}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4" />
          {opportunity.value}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          Due: {opportunity.deadline}
        </div>
        
        <div className="flex gap-2">
          <Button size="sm">View Details</Button>
          <Button size="sm" variant="outline">Save</Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

### Registry Entry for v0 Component

```json
{
  "name": "government-opportunity-card",
  "type": "registry:ui",
  "description": "Card component for displaying government contracting opportunities",
  "registryDependencies": ["card", "badge", "button"],
  "dependencies": ["lucide-react"],
  "files": [
    {
      "path": "components/v0/government-opportunity-card.jsx",
      "content": "// Component implementation",
      "type": "registry:ui"
    }
  ],
  "meta": {
    "category": "v0",
    "subcategory": "government",
    "tags": ["government", "contracting", "opportunity", "card", "v0"]
  }
}
```

## 🎨 Styling Integration

### Consistent Theming

Ensure v0 components match GROKcon styling:

```css
/* src/App.css - Add v0 specific styles */
.v0-component {
  @apply border-border bg-background text-foreground;
}

.v0-government-theme {
  --v0-primary: var(--primary);
  --v0-secondary: var(--secondary);
  --v0-accent: var(--accent);
}
```

### Component Wrapper

```jsx
// lib/v0-wrapper.jsx
import { cn } from "@/lib/utils"

export function V0Wrapper({ children, className, ...props }) {
  return (
    <div 
      className={cn("v0-component v0-government-theme", className)} 
      {...props}
    >
      {children}
    </div>
  )
}
```

## 🔍 Debugging v0 Integration

### Common Issues

1. **Registry Not Found**
   ```bash
   Error: Registry @v0 not found
   ```
   Solution: Check `components.json` configuration

2. **Authentication Failed**
   ```bash
   Error: 401 Unauthorized
   ```
   Solution: Verify `V0_API_TOKEN` environment variable

3. **Component Conflicts**
   ```bash
   Error: Component already exists
   ```
   Solution: Use different namespaces or component names

### Debug Commands

```bash
# View registry configuration
npx shadcn@latest view @v0/dashboard

# List available registries
npx shadcn@latest registry list

# Test registry connection
curl -H "Authorization: Bearer $V0_API_TOKEN" https://v0.dev/chat/b/dashboard
```

## 📊 Analytics Integration

Track v0 component usage:

```jsx
// lib/analytics.js
export function trackV0ComponentUsage(componentName, action) {
  // Analytics implementation
  console.log(`v0 Component: ${componentName}, Action: ${action}`)
}

// Usage in components
import { trackV0ComponentUsage } from '@/lib/analytics'

export function V0Dashboard() {
  useEffect(() => {
    trackV0ComponentUsage('dashboard', 'mounted')
  }, [])
  
  return <div>Dashboard content</div>
}
```

## 🚀 Deployment with v0

### Build Configuration

```json
// package.json
{
  "scripts": {
    "build:v0": "npm run build && npm run optimize:v0",
    "optimize:v0": "node scripts/optimize-v0-components.js"
  }
}
```

### Optimization Script

```javascript
// scripts/optimize-v0-components.js
const fs = require('fs')
const path = require('path')

// Optimize v0 components for production
function optimizeV0Components() {
  const v0Dir = path.join(__dirname, '../src/components/v0')
  
  if (fs.existsSync(v0Dir)) {
    // Remove development-only code
    // Minify component files
    // Generate component manifest
    console.log('v0 components optimized for production')
  }
}

optimizeV0Components()
```

## 📚 Best Practices

1. **Namespace Management**: Use clear namespaces to avoid conflicts
2. **Component Documentation**: Document v0 components thoroughly
3. **Testing**: Test v0 components in isolation
4. **Performance**: Monitor bundle size with v0 components
5. **Updates**: Keep v0 components updated with latest versions

## 🔗 Resources

- [v0.dev Documentation](https://v0.dev/docs)
- [Shadcn/UI Registry Guide](https://ui.shadcn.com/docs/cli)
- [GROKcon Component API](./components.md)
- [Registry Configuration](./registry.md)

## 🆘 Support

For v0 integration issues:

1. Check the [v0.dev status page](https://status.v0.dev)
2. Review component logs
3. Test registry connectivity
4. Contact GROKcon support team

