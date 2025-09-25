# Open in v0 Button Integration

This guide explains how to implement and use the "Open in v0" button functionality for GROKcon components.

## 🎯 Overview

The "Open in v0" button allows users to:
- Open components directly in v0.dev for editing
- Generate variations of existing components
- Customize components with AI assistance
- Share components with the v0 community

## 🔧 Implementation

### 1. Button Component

```jsx
// components/ui/open-in-v0-button.jsx
import { Button } from "@/components/ui/button"
import { ExternalLink, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function OpenInV0Button({ 
  componentName, 
  componentCode, 
  className,
  variant = "outline",
  size = "sm",
  ...props 
}) {
  const handleOpenInV0 = () => {
    const v0Url = generateV0Url(componentName, componentCode)
    window.open(v0Url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleOpenInV0}
      className={cn("gap-2", className)}
      {...props}
    >
      <Sparkles className="h-4 w-4" />
      Open in v0
      <ExternalLink className="h-4 w-4" />
    </Button>
  )
}

function generateV0Url(componentName, componentCode) {
  const baseUrl = 'https://v0.dev/chat'
  const prompt = `Edit this ${componentName} component: ${componentCode}`
  const encodedPrompt = encodeURIComponent(prompt)
  
  return `${baseUrl}?prompt=${encodedPrompt}`
}
```

### 2. Component Wrapper with v0 Button

```jsx
// components/ui/component-showcase.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OpenInV0Button } from "@/components/ui/open-in-v0-button"
import { Badge } from "@/components/ui/badge"
import { Copy, Code } from "lucide-react"
import { useState } from "react"

export function ComponentShowcase({ 
  title, 
  description, 
  component: Component, 
  componentCode,
  componentName,
  tags = []
}) {
  const [showCode, setShowCode] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(componentCode)
    // Show toast notification
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="flex items-center gap-2">
              {title}
              {tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCode(!showCode)}
            >
              <Code className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
            </Button>
            
            <OpenInV0Button
              componentName={componentName}
              componentCode={componentCode}
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Component Preview */}
        <div className="p-6 border rounded-lg bg-background">
          <Component />
        </div>
        
        {/* Code Display */}
        {showCode && (
          <div className="relative">
            <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
              <code>{componentCode}</code>
            </pre>
            <OpenInV0Button
              componentName={componentName}
              componentCode={componentCode}
              className="absolute top-2 right-2"
              size="xs"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

### 3. Integration in Main App

```jsx
// App.jsx - Updated with v0 integration
import { ComponentShowcase } from '@/components/ui/component-showcase'
import { BadgeDemo } from '@/components/ui/badge-demo'

const badgeCode = `import { Badge } from "@/components/ui/badge"
import { BadgeCheckIcon } from "lucide-react"

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </div>
  )
}`

function App() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <ComponentShowcase
        title="Badge Components"
        description="Various badge styles and configurations for status indicators"
        component={BadgeDemo}
        componentCode={badgeCode}
        componentName="badge"
        tags={["ui", "status", "indicator"]}
      />
      
      {/* More component showcases... */}
    </div>
  )
}
```

## 🎨 Styling Options

### Button Variants

```jsx
// Different button styles
<OpenInV0Button variant="default" />      // Primary style
<OpenInV0Button variant="outline" />      // Outlined style  
<OpenInV0Button variant="ghost" />        // Minimal style
<OpenInV0Button variant="secondary" />    // Secondary style
```

### Custom Styling

```jsx
// Custom styled button
<OpenInV0Button
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
  componentName="custom-component"
  componentCode={code}
>
  <Sparkles className="h-4 w-4" />
  Enhance with AI
</OpenInV0Button>
```

## 🔗 URL Generation Strategies

### 1. Simple Prompt

```javascript
function generateSimpleV0Url(componentName, componentCode) {
  const prompt = `Improve this ${componentName} component`
  return `https://v0.dev/chat?prompt=${encodeURIComponent(prompt)}`
}
```

### 2. Detailed Context

```javascript
function generateDetailedV0Url(componentName, componentCode, context = {}) {
  const prompt = `
    Component: ${componentName}
    Context: ${context.description || 'Government contracting application'}
    Requirements: ${context.requirements || 'Improve accessibility and styling'}
    
    Current code:
    ${componentCode}
    
    Please enhance this component with better styling, accessibility, and functionality.
  `
  
  return `https://v0.dev/chat?prompt=${encodeURIComponent(prompt.trim())}`
}
```

### 3. Template-Based

```javascript
function generateTemplateV0Url(componentName, template = 'enhance') {
  const templates = {
    enhance: `Enhance this ${componentName} component with better styling and functionality`,
    variant: `Create a new variant of this ${componentName} component`,
    responsive: `Make this ${componentName} component more responsive and mobile-friendly`,
    accessible: `Improve the accessibility of this ${componentName} component`
  }
  
  const prompt = templates[template] || templates.enhance
  return `https://v0.dev/chat?prompt=${encodeURIComponent(prompt)}`
}
```

## 📊 Analytics Integration

### Track v0 Button Usage

```jsx
// lib/analytics.js
export function trackV0ButtonClick(componentName, action = 'open') {
  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'v0_button_click', {
      component_name: componentName,
      action: action,
      category: 'component_interaction'
    })
  }
  
  // Custom analytics
  console.log(`v0 Button: ${componentName} - ${action}`)
}

// Usage in component
import { trackV0ButtonClick } from '@/lib/analytics'

export function OpenInV0Button({ componentName, ...props }) {
  const handleClick = () => {
    trackV0ButtonClick(componentName, 'open')
    // ... rest of click handler
  }
  
  return <Button onClick={handleClick} {...props} />
}
```

## 🔧 Advanced Features

### 1. Component Metadata

```jsx
// Enhanced button with metadata
export function OpenInV0Button({ 
  componentName, 
  componentCode,
  metadata = {},
  ...props 
}) {
  const handleOpenInV0 = () => {
    const enhancedPrompt = `
      Component: ${componentName}
      Category: ${metadata.category || 'ui'}
      Tags: ${metadata.tags?.join(', ') || 'component'}
      Description: ${metadata.description || ''}
      
      Code:
      ${componentCode}
      
      Please enhance this component for a government contracting application.
    `
    
    const url = `https://v0.dev/chat?prompt=${encodeURIComponent(enhancedPrompt)}`
    window.open(url, '_blank')
  }
  
  return <Button onClick={handleOpenInV0} {...props} />
}
```

### 2. Batch Component Opening

```jsx
// Open multiple components in v0
export function OpenMultipleInV0Button({ components }) {
  const handleOpenMultiple = () => {
    const combinedPrompt = `
      Create a cohesive design system with these components:
      
      ${components.map(comp => `
        ${comp.name}:
        ${comp.code}
      `).join('\n\n')}
      
      Please ensure consistent styling and theming across all components.
    `
    
    const url = `https://v0.dev/chat?prompt=${encodeURIComponent(combinedPrompt)}`
    window.open(url, '_blank')
  }
  
  return (
    <Button onClick={handleOpenMultiple} variant="outline">
      <Sparkles className="h-4 w-4 mr-2" />
      Open All in v0
    </Button>
  )
}
```

### 3. Context-Aware Prompts

```jsx
// Context-aware v0 integration
export function ContextAwareV0Button({ 
  componentName, 
  componentCode, 
  context = 'government-contracting' 
}) {
  const contextPrompts = {
    'government-contracting': 'for a government contracting opportunities platform',
    'dashboard': 'for an analytics dashboard',
    'form': 'for a data entry form',
    'navigation': 'for application navigation'
  }
  
  const contextDescription = contextPrompts[context] || 'for a web application'
  
  const handleClick = () => {
    const prompt = `
      Enhance this ${componentName} component ${contextDescription}.
      
      Requirements:
      - Professional government-appropriate styling
      - High accessibility standards (WCAG 2.1 AA)
      - Responsive design
      - Clear visual hierarchy
      
      Current code:
      ${componentCode}
    `
    
    const url = `https://v0.dev/chat?prompt=${encodeURIComponent(prompt)}`
    window.open(url, '_blank')
  }
  
  return <Button onClick={handleClick}>Open in v0</Button>
}
```

## 🚀 Deployment Considerations

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_V0_ENABLED=true
NEXT_PUBLIC_V0_BASE_URL=https://v0.dev
```

### Feature Flags

```jsx
// lib/feature-flags.js
export const isV0Enabled = () => {
  return process.env.NEXT_PUBLIC_V0_ENABLED === 'true'
}

// Usage in component
import { isV0Enabled } from '@/lib/feature-flags'

export function ComponentShowcase({ ...props }) {
  return (
    <Card>
      {/* Component content */}
      {isV0Enabled() && (
        <OpenInV0Button {...props} />
      )}
    </Card>
  )
}
```

## 📚 Best Practices

1. **User Experience**: Make the button discoverable but not intrusive
2. **Performance**: Lazy load v0 integration code
3. **Analytics**: Track usage to understand user behavior
4. **Error Handling**: Handle cases where v0 is unavailable
5. **Accessibility**: Ensure button is keyboard accessible
6. **Mobile**: Consider mobile experience for v0 integration

## 🔍 Troubleshooting

### Common Issues

1. **Popup Blocked**: Handle popup blocker scenarios
2. **URL Length**: Manage long component code in URLs
3. **Special Characters**: Properly encode component code
4. **Network Issues**: Handle offline scenarios

### Solutions

```jsx
// Robust v0 button implementation
export function RobustOpenInV0Button({ componentName, componentCode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const handleClick = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Check if v0 is available
      const isV0Available = await checkV0Availability()
      if (!isV0Available) {
        throw new Error('v0.dev is currently unavailable')
      }
      
      // Generate URL with length check
      const url = generateV0Url(componentName, componentCode)
      if (url.length > 2048) {
        // Use alternative method for long URLs
        await uploadCodeAndRedirect(componentCode)
      } else {
        window.open(url, '_blank')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <Button 
      onClick={handleClick} 
      disabled={isLoading}
      variant={error ? "destructive" : "outline"}
    >
      {isLoading ? "Opening..." : error ? "Retry" : "Open in v0"}
    </Button>
  )
}
```

## 📖 Resources

- [v0.dev Documentation](https://v0.dev/docs)
- [URL Encoding Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [Popup Handling](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
- [Component Showcase Examples](./component-showcase.md)

