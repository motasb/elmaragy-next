
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LoadingPageProps {
  variant?: "default" | "minimal" | "fancy";
  text?: string;
  className?: string;
}

const LoadingSpinner = ({
  size = 24,
  className,
  variant = "spinner",
}: {
  size?: number;
  className?: string;
  variant?: "spinner" | "dots" | "pulse";
}) => {
  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-2 justify-center items-center", className)}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-3 w-3 rounded-full bg-primary animate-bounce",
              i === 0 && "animation-delay-0",
              i === 1 && "animation-delay-150",
              i === 2 && "animation-delay-300"
            )}
            style={{
              animationDelay: `${i * 150}ms`,
            }}
          ></div>
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("relative", className)}>
        <div className="h-16 w-16 rounded-full border-4 border-primary opacity-20"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-primary animate-spin"></div>
      </div>
    );
  }

  return (
    <Loader
      size={size}
      className={cn("animate-spin text-primary", className)}
    />
  );
};

const LoadingPage = ({
  variant = "fancy",
  text = "Loading...",
  className,
}: LoadingPageProps) => {
  if (variant === "minimal") {
    return (
      <div className={cn("flex h-screen w-full items-center justify-center", className)}>
        <LoadingSpinner size={36} />
      </div>
    );
  }

  if (variant === "default") {
    return (
      <div className={cn("flex h-screen w-full flex-col items-center justify-center gap-4", className)}>
        <LoadingSpinner size={48} />
        <p className="text-xl font-medium text-foreground/70">{text}</p>
      </div>
    );
  }

  // Fancy variant with more visual elements
  return (
    <div className={cn("relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 h-32 w-32 -translate-y-1/2 rounded-full bg-secondary/30 blur-2xl"></div>
      </div>

      {/* Main loading content */}
      <div className="z-10 flex flex-col items-center justify-center gap-8">
        <div className="relative">
          {/* Pulsing circles */}
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 blur-sm"></div>
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10 blur-md"></div>
          
          {/* Main loader */}
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 animate-spin rounded-full border-b-4 border-t-4 border-primary"></div>
            <div className="absolute inset-2 animate-spin rounded-full border-r-4 border-l-4 border-primary" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-4 animate-spin rounded-full border-b-4 border-t-4 border-primary" style={{ animationDuration: '7s' }}></div>
            <div className="absolute inset-6 animate-spin rounded-full border-r-4 border-l-4 border-primary" style={{ animationDuration: '5s' }}></div>
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-primary animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Academy name with shine effect */}
        <h1 className="animate-shine text-4xl font-bold tracking-tight">
          Vibrant Academy
        </h1>
        
        {/* Loading text with float animation */}
        <p className="animate-float text-xl font-medium text-foreground/70">{text}</p>
        
        {/* Decorative floating dots */}
        <div className="absolute bottom-24 left-1/4 h-4 w-4 rounded-full bg-primary/70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-secondary animate-float2"></div>
        <div className="absolute top-1/4 left-1/3 h-2 w-2 rounded-full bg-primary/50 animate-float"></div>
      </div>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-12 left-1/2 w-64 -translate-x-1/2">
        <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full bg-primary origin-left" style={{ width: '100%', animation: 'progress 2s ease-in-out infinite' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;