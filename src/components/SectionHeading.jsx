export default function SectionHeading({ num, title, note }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
      <div>
        <p className="eyebrow text-signal text-sm mb-3 section-num">
          // {num} — {title.toLowerCase()}
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-body">
          {title}
        </h2>
      </div>
      {note && <p className="hidden md:block eyebrow text-xs text-muted max-w-[220px] text-right">{note}</p>}
    </div>
  );
}
