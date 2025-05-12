import { Badge } from "@/components/ui/badge"

interface FeaturesSectionHeaderProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  highlightedText?: string;
}

const FeaturesSectionHeader = ({badge , title , subtitle , highlightedText}:FeaturesSectionHeaderProps) => {
  return (
    <div className="text-center space-y-4 mb-8 p-4 ">
      { badge && <div className="mb-2">
        <Badge variant="default" className="px-4 py-1 text-sm font-medium hover:bg-primary/90 transition duration-300">
          {badge}
        </Badge>
      </div>}
      
      <div className="space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold">
          <span className="text-primary">{highlightedText}</span> {title}
        </h3>
        
        {subtitle &&<p className="text-primary font-semibold max-w-2xl mx-auto">
          {subtitle}
        </p>}
      </div>
    </div>
  )
}

export default FeaturesSectionHeader