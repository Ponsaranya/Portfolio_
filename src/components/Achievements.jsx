import SectionHeading from "./SectionHeading.jsx";
import { certifications, hackathons, extracurricular } from "../data/resumeData.js";

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32">
      <SectionHeading num="06" title="Achievements" note="Certifications + hackathons" />

      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <p className="eyebrow text-xs uppercase text-signal mb-5">Certifications</p>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2.5 text-sm text-body/80 leading-relaxed">
                <span className="text-signal mt-1" aria-hidden="true">
                  ▸
                </span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs uppercase text-signal mb-5">Hackathons</p>
          <ul className="space-y-5">
            {hackathons.map((h) => (
              <li key={h.name}>
                <p className="text-sm font-medium text-body mb-1">{h.name}</p>
                <p className="text-sm text-muted leading-relaxed">{h.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-xs uppercase text-signal mb-5">Extracurricular</p>
          <p className="text-sm font-medium text-body mb-1">{extracurricular.title}</p>
          <p className="text-sm text-muted leading-relaxed">{extracurricular.detail}</p>
        </div>
      </div>
    </section>
  );
}
