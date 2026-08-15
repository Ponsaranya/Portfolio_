import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/resumeData.js";

export default function Experience() {
  return (
    <section id="experience" className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32">
      <SectionHeading num="03" title="Experience" note="Chronological" />

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <div
            key={job.company}
            className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line last:border-b"
          >
            <div className="md:col-span-3">
              <p className="eyebrow text-sm text-signal mb-1">{job.duration}</p>
              <p className="eyebrow text-xs text-muted">{job.location}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-display font-semibold text-xl md:text-2xl text-body">{job.role}</h3>
              <p className="text-muted mb-5">{job.company}</p>

              <ul className="space-y-3 mb-6">
                {job.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-[15px] leading-relaxed text-body/85">
                    <span className="text-signal mt-1.5" aria-hidden="true">
                      ▸
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="eyebrow text-[11px] uppercase text-muted border border-line px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
