
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface LoaderProps {
  size?: number;
  className?: string;
  variant?: "spinner" | "dots" | "pulse";
}

export const LoadingSpinner = ({
  size = 24,
  className,
  variant = "spinner",
}: LoaderProps) => {
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