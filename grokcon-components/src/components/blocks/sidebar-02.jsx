import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronDown, 
  ChevronRight, 
  Home, 
  Search, 
  FileText, 
  BarChart3, 
  Settings, 
  Users,
  DollarSign,
  Bell,
  Calendar
} from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar02() {
  const [expandedSections, setExpandedSections] = useState({
    opportunities: true,
    proposals: false,
    analytics: false,
    settings: false
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const SectionHeader = ({ section, title, icon: Icon, count }) => (
    <Button
      variant="ghost"
      className="w-full justify-between p-2 h-auto"
      onClick={() => toggleSection(section)}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        {count && <Badge variant="secondary" className="text-xs">{count}</Badge>}
        {expandedSections[section] ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </div>
    </Button>
  )

  const MenuItem = ({ icon: Icon, title, badge, active = false }) => (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 p-2 h-auto text-sm",
        active && "bg-accent text-accent-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="flex-1 text-left">{title}</span>
      {badge && <Badge variant="outline" className="text-xs">{badge}</Badge>}
    </Button>
  )

  return (
    <div className="w-64 border-r bg-background p-4 space-y-2">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">GROKcon</h2>
        <p className="text-xs text-muted-foreground">AI Contract Hunter</p>
      </div>

      <div className="space-y-1">
        <MenuItem icon={Home} title="Dashboard" active />
        <MenuItem icon={Bell} title="Notifications" badge="3" />
        <MenuItem icon={Calendar} title="Calendar" />
      </div>

      <div className="space-y-1">
        <SectionHeader 
          section="opportunities" 
          title="Opportunities" 
          icon={Search} 
          count="1,234" 
        />
        {expandedSections.opportunities && (
          <div className="ml-4 space-y-1">
            <MenuItem icon={Search} title="Search & Filter" />
            <MenuItem icon={FileText} title="Active Opportunities" badge="89" />
            <MenuItem icon={Calendar} title="Upcoming Deadlines" badge="12" />
            <MenuItem icon={Users} title="Saved Searches" />
          </div>
        )}
      </div>

      <div className="space-y-1">
        <SectionHeader 
          section="proposals" 
          title="Proposals" 
          icon={FileText} 
          count="23" 
        />
        {expandedSections.proposals && (
          <div className="ml-4 space-y-1">
            <MenuItem icon={FileText} title="Draft Proposals" badge="5" />
            <MenuItem icon={FileText} title="Submitted" badge="18" />
            <MenuItem icon={BarChart3} title="Win/Loss Analysis" />
            <MenuItem icon={Calendar} title="Proposal Calendar" />
          </div>
        )}
      </div>

      <div className="space-y-1">
        <SectionHeader 
          section="analytics" 
          title="Analytics" 
          icon={BarChart3} 
        />
        {expandedSections.analytics && (
          <div className="ml-4 space-y-1">
            <MenuItem icon={BarChart3} title="Performance Metrics" />
            <MenuItem icon={DollarSign} title="Revenue Tracking" />
            <MenuItem icon={Users} title="Competitor Analysis" />
            <MenuItem icon={BarChart3} title="Market Trends" />
          </div>
        )}
      </div>

      <div className="space-y-1">
        <SectionHeader 
          section="settings" 
          title="Settings" 
          icon={Settings} 
        />
        {expandedSections.settings && (
          <div className="ml-4 space-y-1">
            <MenuItem icon={Users} title="Team Management" />
            <MenuItem icon={Bell} title="Notifications" />
            <MenuItem icon={Settings} title="Preferences" />
            <MenuItem icon={Settings} title="API Configuration" />
          </div>
        )}
      </div>
    </div>
  )
}

