import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data/resumeData.js";

export default function Skills() {
  return (
    <section id="skills" className="bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="eyebrow text-signal text-sm mb-3">// 02 — skills</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight">Skills</h2>
          </div>
          <p className="hidden md:block eyebrow text-xs text-muted-dark max-w-[220px] text-right">
            Grouped by domain, not proficiency scores
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line-dark border border-line-dark">
          {skills.map((group) => (
            <div key={group.category} className="bg-ink p-6 md:p-7">
              <p className="eyebrow text-xs uppercase text-muted-dark mb-4">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="eyebrow text-[12px] border border-line-dark px-2.5 py-1.5 text-muted-dark hover:border-signal hover:text-paper transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
