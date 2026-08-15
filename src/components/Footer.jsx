import { profile } from "../data/resumeData.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-muted-dark border-t border-line-dark">
      <div className="max-w-content mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="eyebrow text-xs">
          © {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <a href="#top" className="eyebrow text-xs hover:text-signal transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
