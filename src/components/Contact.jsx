import { profile } from "../data/resumeData.js";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="max-w-content mx-auto px-6 md:px-8 py-24 md:py-32">
        <p className="eyebrow text-signal text-sm mb-3">// 07 — contact</p>
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight max-w-2xl mb-6">
          Let's build something worth automating.
        </h2>
        <p className="text-muted-dark max-w-lg mb-12 leading-relaxed">
          Open to AI/ML Engineer, GenAI, and Software Engineer roles. Reach out directly — I usually reply within a day.
        </p>

        <div className="grid sm:grid-cols-3 gap-px bg-line-dark border border-line-dark max-w-3xl">
          <a
            href={`mailto:${profile.email}`}
            className="bg-ink p-6 hover:bg-ink-soft transition-colors group"
          >
            <p className="eyebrow text-xs uppercase text-muted-dark mb-2">Email</p>
            <p className="text-sm text-paper group-hover:text-signal transition-colors break-words">
              {profile.email}
            </p>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-ink p-6 hover:bg-ink-soft transition-colors group"
          >
            <p className="eyebrow text-xs uppercase text-muted-dark mb-2">LinkedIn</p>
            <p className="text-sm text-paper group-hover:text-signal transition-colors break-words">
              {profile.linkedinLabel}
            </p>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="bg-ink p-6 hover:bg-ink-soft transition-colors group"
          >
            <p className="eyebrow text-xs uppercase text-muted-dark mb-2">GitHub</p>
            <p className="text-sm text-paper group-hover:text-signal transition-colors break-words">
              {profile.githubLabel}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
