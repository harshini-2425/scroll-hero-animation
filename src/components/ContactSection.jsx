import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stack = ["React", "Next.js", "GSAP", "Tailwind CSS", "Three.js", "Framer Motion", "TypeScript", "Vercel"];

export default function ContactSection() {
  const ref = useRef(null);
  const pillsRef = useRef([]);
  const ctaRef = useRef(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      pillsRef.current.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1, scale: 1, duration: 0.5, delay: i * 0.07,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ctaRef.current, start: "top 85%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* Tech Stack */}
      <section
        className="py-16 px-6 flex flex-col items-center"
        style={{ background: "#0a0a0a", borderTop: "1px solid #111" }}
      >
        <p
          className="text-slate-700 tracking-[0.5em] text-xs uppercase mb-8"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Our Stack
        </p>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
          {stack.map((tech, i) => (
            <div
              key={i}
              ref={(el) => (pillsRef.current[i] = el)}
              className="group flex items-center gap-2 px-5 py-2 cursor-default"
              style={{
                border: "1px solid #1e293b",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                e.currentTarget.querySelector(".pill-text").style.color = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e293b";
                e.currentTarget.querySelector(".pill-text").style.color = "#475569";
              }}
            >
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
              <span
                className="pill-text text-slate-500 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        ref={ctaRef}
        className="py-32 px-6 flex flex-col items-center"
        style={{ background: "radial-gradient(ellipse at 50% 100%, #0d0d1f 0%, #080808 60%)", borderTop: "1px solid #0f0f1a" }}
      >
        <div className="flex flex-col items-center gap-6 max-w-xl w-full">
          <p
            className="text-indigo-500 tracking-[0.5em] text-xs uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Start a conversation
          </p>

          <h2
            className="font-black text-center"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              lineHeight: 1,
              background: "linear-gradient(135deg, #f1f5f9, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LET'S BUILD<br />SOMETHING<br />REMARKABLE
          </h2>

          <p
            className="text-slate-600 text-xs leading-relaxed text-center max-w-xs"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Drop your email and we'll reach out within 24 hours to discuss your vision.
          </p>

          {!sent ? (
            <div className="flex w-full" style={{ border: "1px solid #1e293b" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && email && setSent(true)}
                className="flex-1 bg-[#0c0c0c] outline-none px-4 py-3 text-slate-400"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", border: "none" }}
              />
              <button
                onClick={() => email && setSent(true)}
                className="px-5 py-3 text-white text-xs tracking-widest uppercase"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  fontFamily: "'DM Mono', monospace",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send →
              </button>
            </div>
          ) : (
            <div
              className="w-full py-3 text-center text-indigo-400 text-xs tracking-widest uppercase"
              style={{ border: "1px solid rgba(99,102,241,0.3)", fontFamily: "'DM Mono', monospace" }}
            >
              ✓ We'll be in touch soon
            </div>
          )}

          <div className="flex gap-6 flex-wrap justify-center">
            {["Twitter", "Dribbble", "LinkedIn", "GitHub"].map((s) => (
              <span
                key={s}
                className="text-xs tracking-widest uppercase cursor-pointer"
                style={{ color: "#1e293b", fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.target.style.color = "#6366f1"}
                onMouseLeave={(e) => e.target.style.color = "#1e293b"}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-8 py-5 flex justify-between items-center flex-wrap gap-3"
        style={{ borderTop: "1px solid #0f0f0f", background: "#050505" }}
      >
        <span
          className="font-black text-[#1a1a2e]"
          style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "1rem", letterSpacing: "0.15em" }}
        >
          ITZ <span style={{ color: "#6366f1" }}>FIZZ</span>
        </span>
        <span className="text-xs tracking-widest uppercase text-[#111827]" style={{ fontFamily: "'DM Mono', monospace" }}>
          © 2024 Itz Fizz Studio
        </span>
        <span className="text-xs tracking-widest uppercase text-[#111827]" style={{ fontFamily: "'DM Mono', monospace" }}>
          All Rights Reserved
        </span>
      </footer>
    </div>
  );
}
