
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="h-10 w-10 border-t-4 border-b-4 border-portfolio-600 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-portfolio-800">YASSIR AMRAOUI</h2>
        <p className="text-portfolio-600">Portfolio</p>
      </div>
    </div>
  );
}
