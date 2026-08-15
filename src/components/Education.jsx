import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/resumeData.js";

export default function Education() {
  return (
    <section id="education" className="bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow text-signal text-sm mb-3">// 05 — education</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight">Education</h2>
          </div>
        </div>

        <div className="flex flex-col">
          {education.map((edu) => (
            <div key={edu.institution} className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-line-dark last:border-b">
              <div className="md:col-span-3">
                <p className="eyebrow text-sm text-signal mb-1">{edu.duration}</p>
                <p className="eyebrow text-xs text-muted-dark">{edu.location}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display font-semibold text-lg md:text-xl">{edu.institution}</h3>
                <p className="text-muted-dark mb-2">{edu.degree}</p>
                <p className="eyebrow text-sm text-signal mb-4">{edu.detail}</p>
                {edu.coursework.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="eyebrow text-[11px] uppercase text-muted-dark border border-line-dark px-2 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
