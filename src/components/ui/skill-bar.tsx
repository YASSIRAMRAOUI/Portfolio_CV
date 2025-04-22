
interface SkillBarProps {
  label: string;
  percentage: number;
}

export function SkillBar({ label, percentage }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-portfolio-800">{label}</span>
        <span className="text-xs text-portfolio-600">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
