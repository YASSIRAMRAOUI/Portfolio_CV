
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContactButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export function ContactButton({ href, icon, label, className }: ContactButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-2 text-sm text-portfolio-800 hover:text-portfolio-600 transition-colors",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="contact-icon">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
