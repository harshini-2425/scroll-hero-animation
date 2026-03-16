import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "◈", title: "Brand Identity", desc: "Crafting visual languages that command attention and build lasting recognition." },
  { icon: "◉", title: "Digital Experiences", desc: "Immersive interfaces that convert visitors into loyal advocates." },
  { icon: "◎", title: "Motion Design", desc: "Animations that breathe life into your product and delight users." },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: headRef.current, start: "top 80%", once: true },
        }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.93 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8, delay: i * 0.15,
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
      });

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center py-32 px-6"
      style={{ background: "radial-gradient(ellipse at 50% 100%, #111827 0%, #0a0a0a 60%)" }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-900 to-transparent" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-20 opacity-0">
          <p
            className="tracking-[0.5em] text-xs uppercase text-indigo-400 mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            What We Do
          </p>
          <h2
            className="font-black"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              background: "linear-gradient(135deg, #f8fafc 0%, #64748b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            OUR CRAFT
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative opacity-0 p-8 rounded-sm cursor-pointer border border-indigo-500/15 hover:border-indigo-500/50 transition-colors duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%)",
                transition: "background 0.3s",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(30,41,59,0.3) 0%, rgba(15,23,42,0.45) 100%)",
                  transition: "opacity 0.3s",
                }}
              />

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(225deg, rgba(99,102,241,0.3) 0%, transparent 60%)",
                  transition: "opacity 0.3s",
                }}
              />

              <div
                className="relative z-10 text-3xl text-indigo-400 mb-6"
                style={{ fontFamily: "monospace" }}
              >
                {service.icon}
              </div>

              <h3
                className="relative z-10 font-black text-slate-100 mb-4 text-xl tracking-wide"
                style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: "0.1em" }}
              >
                {service.title}
              </h3>

              <p
                className="relative z-10 text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {service.desc}
              </p>

              <div
                className="relative z-10 mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-violet-500"
                style={{ transition: "width 0.5s ease" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col items-center gap-8 opacity-0">
          <p
            className="text-slate-500 tracking-[0.3em] text-xs uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Ready to create something remarkable?
          </p>

          <button
            className="relative group px-12 py-5 rounded-sm font-bold tracking-widest text-sm uppercase overflow-hidden"
            style={{
              fontFamily: "'DM Mono', monospace",
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              color: "white",
              border: "1px solid rgba(99,102,241,0.5)",
            }}
          >
            <span className="relative z-10">Start a Project</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, #4f46e5, #3730a3)",
                transition: "opacity 0.3s",
              }}
            />
          </button>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-slate-900 w-full flex justify-between items-center">
            <span
              className="text-slate-700 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              © 2024 Itz Fizz Studio
            </span>
            <span
              className="text-slate-700 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
