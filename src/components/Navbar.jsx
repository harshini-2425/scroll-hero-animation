import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }
    );

    const handler = () => {
      const next = window.scrollY > 60;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 flex justify-between items-center px-8 py-4"
      style={{
        background: scrolled ? "rgba(8,8,8,0.95)" : "rgba(8,8,8,0.6)",
        borderBottom: "1px solid #111",
        backdropFilter: "blur(16px)",
        transition: "background 0.4s",
      }}
    >
      {/* Logo */}
      <div
        className="font-black tracking-widest"
        style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "1.3rem" }}
      >
        ITZ <span style={{ color: "#6366f1" }}>FIZZ</span>
      </div>

      {/* Links */}
      <div className="hidden sm:flex gap-8">
        {["Work", "Services", "Studio", "Contact"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs tracking-[0.35em] uppercase no-underline transition-colors duration-200 text-slate-600 hover:text-indigo-500"
            style={{ fontFamily: "'DM Mono', monospace" }}
            onClick={(e) => {
              e.preventDefault();
              if (link === "Contact") {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button
        className="text-xs tracking-[0.3em] uppercase px-4 py-2 transition-all duration-200 border border-indigo-500/40 text-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white"
        style={{
          fontFamily: "'DM Mono', monospace",
          cursor: "pointer",
        }}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Get in touch
      </button>
    </nav>
  );
}
