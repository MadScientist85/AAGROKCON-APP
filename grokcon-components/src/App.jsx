import './App.css'
import { BadgeDemo } from '@/components/ui/badge-demo'
import { AvatarDemo } from '@/components/ui/avatar-demo'
import { TextareaDemo } from '@/components/ui/textarea-demo'
import { TextareaWithButton } from '@/components/ui/textarea-with-button'
import { Dashboard01 } from '@/components/blocks/dashboard-01'
import { Sidebar02 } from '@/components/blocks/sidebar-02'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

function App() {
  const [currentView, setCurrentView] = useState('components')

  const ComponentShowcase = () => (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">GROKcon Component Library</h1>
        <p className="text-xl text-muted-foreground">
          AI Government Contracting Opportunities Hunter Components
        </p>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          v1.0.0
        </Badge>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Badge Components</CardTitle>
            <CardDescription>
              Various badge styles and configurations for status indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BadgeDemo />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar Components</CardTitle>
            <CardDescription>
              User avatars with fallbacks and grouping options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AvatarDemo />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Textarea Components</CardTitle>
            <CardDescription>
              Text input areas for forms and user input
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Basic Textarea</h4>
              <TextareaDemo />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Textarea with Button</h4>
              <TextareaWithButton />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const DashboardView = () => (
    <Dashboard01 />
  )

  const SidebarView = () => (
    <div className="flex h-screen">
      <Sidebar02 />
      <div className="flex-1 p-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Sidebar Demo</h2>
          <p className="text-muted-foreground">
            This is the main content area. The sidebar on the left shows collapsible sections
            for organizing navigation in the GROKcon application.
          </p>
          <Button onClick={() => setCurrentView('components')}>
            Back to Components
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {currentView === 'components' && (
        <>
          <ComponentShowcase />
          <div className="container mx-auto p-6">
            <Card>
              <CardHeader>
                <CardTitle>Block Components</CardTitle>
                <CardDescription>
                  Complex layout components and application blocks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Button onClick={() => setCurrentView('dashboard')}>
                    View Dashboard (dashboard-01)
                  </Button>
                  <Button onClick={() => setCurrentView('sidebar')} variant="outline">
                    View Sidebar (sidebar-02)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
      
      {currentView === 'dashboard' && (
        <div>
          <div className="p-4 border-b">
            <Button onClick={() => setCurrentView('components')} variant="outline">
              ← Back to Components
            </Button>
          </div>
          <DashboardView />
        </div>
      )}
      
      {currentView === 'sidebar' && <SidebarView />}
    </div>
  )
}

export default App
