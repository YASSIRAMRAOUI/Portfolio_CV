
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children?: ReactNode;
}

export function TimelineItem({ title, subtitle, date, children }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-lg font-semibold text-portfolio-800">{title}</h3>
        <span className="text-sm text-portfolio-600 whitespace-nowrap">{date}</span>
      </div>
      <p className="text-portfolio-700 font-medium mb-2">{subtitle}</p>
      {children}
    </div>
  );
}
