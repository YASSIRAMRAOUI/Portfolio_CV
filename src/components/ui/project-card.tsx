
interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({ title, date, description, technologies }: ProjectCardProps) {
  return (
    <div className="project-card p-5 hover-lift">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-portfolio-800">{title}</h3>
        <span className="text-xs text-portfolio-600 whitespace-nowrap">{date}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="text-xs bg-portfolio-100 text-portfolio-700 px-2 py-1 rounded hover:bg-portfolio-200 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
