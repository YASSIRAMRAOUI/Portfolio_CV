
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <div className={cn(
      "bg-gradient-to-r from-portfolio-700 via-portfolio-500 to-portfolio-800 text-transparent bg-clip-text bg-size-200 animate-bg-position-x",
      className
    )}>
      {text}
    </div>
  );
}
