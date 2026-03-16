import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your brand, goals, and competitive landscape to uncover opportunities." },
  { num: "02", title: "Strategy", desc: "Define the creative direction, tech architecture, and success metrics." },
  { num: "03", title: "Design", desc: "Craft pixel-perfect interfaces that resonate and convert." },
  { num: "04", title: "Launch", desc: "Deploy, optimise, and iterate for maximum impact and growth." },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 px-6 flex flex-col items-center"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0b0b14 100%)" }}
    >
      <div className="text-center mb-16">
        <p
          className="text-indigo-500 tracking-[0.5em] text-xs uppercase mb-4"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          How We Work
        </p>
        <h2
          className="font-black"
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            background: "linear-gradient(135deg, #f1f5f9, #334155)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          OUR PROCESS
        </h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl"
        style={{ border: "1px solid #111", gap: "1px", background: "#111" }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (stepsRef.current[i] = el)}
            className="group bg-[#090909] hover:bg-[#0e0e18] p-8 flex flex-col gap-4 transition-colors duration-200"
          >
            <div
              className="font-black text-[#1a1a2e] group-hover:text-indigo-600 transition-colors duration-300"
              style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "2.5rem", lineHeight: 1 }}
            >
              {step.num}
            </div>
            <div
              className="text-slate-300 tracking-widest text-xs uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {step.title}
            </div>
            <p
              className="text-slate-600 text-xs leading-relaxed"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
