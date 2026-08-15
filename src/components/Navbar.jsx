import { useEffect, useState } from "react";
import { profile } from "../data/resumeData.js";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-body">
          Ponsaranya<span className="text-signal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 eyebrow text-[13px] text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-body transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center gap-2 border border-body/80 px-4 py-2 text-[13px] eyebrow hover:bg-body hover:text-paper transition-colors"
        >
          Hire me
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9"
        >
          <span
            className={`block h-[1.5px] w-6 bg-body transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span className={`block h-[1.5px] w-6 bg-body transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[1.5px] w-6 bg-body transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-line px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 eyebrow text-sm text-muted">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="hover:text-body">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} className="text-body font-medium">
                Hire me →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
