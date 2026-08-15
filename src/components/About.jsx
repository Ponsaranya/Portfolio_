import SectionHeading from "./SectionHeading.jsx";
import { summary, aboutHighlights } from "../data/resumeData.js";

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32">
      <SectionHeading num="01" title="About" note="Summary + focus areas" />

      <div className="grid md:grid-cols-5 gap-12 md:gap-16">
        <p className="md:col-span-3 text-lg md:text-xl leading-relaxed text-body/90">
          {summary}
        </p>

        <div className="md:col-span-2 flex flex-col divide-y divide-line border-t border-line md:border-t-0">
          {aboutHighlights.map((item) => (
            <div key={item.label} className="py-5 first:pt-0 md:first:pt-5">
              <p className="eyebrow text-xs uppercase text-signal mb-1.5">{item.label}</p>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
