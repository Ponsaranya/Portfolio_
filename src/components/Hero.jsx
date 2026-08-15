import { profile } from "../data/resumeData.js";

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink text-paper overflow-hidden">
      {/* Faint grid — quiet technical texture, not decoration for its own sake */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#8B93A7 1px, transparent 1px), linear-gradient(90deg, #8B93A7 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2 border border-line-dark px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-blink" aria-hidden="true" />
            <span className="eyebrow text-[12px] text-muted-dark uppercase">{profile.status}</span>
          </div>

          <p className="eyebrow text-signal text-sm mb-4">// {profile.name}</p>

          <h1 className="font-display font-semibold text-[13vw] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[76px] max-w-3xl">
            {profile.headline}
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-dark leading-relaxed">
            {profile.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-signal text-ink px-6 py-3 font-medium text-sm hover:bg-signal-soft transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line-dark px-6 py-3 font-medium text-sm text-paper hover:border-paper transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 eyebrow text-[13px] text-muted-dark">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">
              {profile.linkedinLabel}
            </a>
            <span className="hidden sm:inline text-line-dark">/</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">
              {profile.githubLabel}
            </a>
            <span className="hidden sm:inline text-line-dark">/</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
