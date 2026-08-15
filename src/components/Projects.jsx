import SectionHeading from "./SectionHeading.jsx";
import { projects, publication } from "../data/resumeData.js";

function ProjectCard({ project }) {
  return (
    <article className="group border border-line bg-panel p-7 md:p-8 flex flex-col h-full hover:border-body/40 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-display font-semibold text-xl text-body leading-tight">{project.title}</h3>
        {project.featured && (
          <span className="eyebrow text-[10px] uppercase text-signal border border-signal/50 px-2 py-1 whitespace-nowrap">
            GenAI
          </span>
        )}
      </div>

      <p className="eyebrow text-xs text-muted mb-4">{project.duration}</p>

      <p className="text-[15px] text-body/80 leading-relaxed mb-5">{project.description}</p>

      <ul className="space-y-2.5 mb-6">
        {project.points.map((point, idx) => (
          <li key={idx} className="flex gap-2.5 text-sm text-body/75 leading-relaxed">
            <span className="text-signal mt-1" aria-hidden="true">
              ▸
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-line">
        {project.tech.map((t) => (
          <span key={t} className="eyebrow text-[11px] uppercase text-muted border border-line px-2 py-1">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32">
      <SectionHeading num="04" title="Projects" note="AI/GenAI work first" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Research publication — related, ML-focused work worth surfacing near projects */}
      <div className="mt-6 border border-line bg-panel p-7 md:p-8">
        <p className="eyebrow text-xs uppercase text-signal mb-3">Paper Publication</p>
        <h3 className="font-display font-semibold text-lg text-body mb-1">{publication.title}</h3>
        <p className="text-sm text-muted mb-1">{publication.venue}</p>
        <p className="text-sm text-muted mb-5">{publication.publisher}</p>
        <ul className="space-y-2.5">
          {publication.points.map((point, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm text-body/75 leading-relaxed">
              <span className="text-signal mt-1" aria-hidden="true">
                ▸
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
