import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HEADLINE = "W E L C O M E   I T Z   F I Z Z";

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "120+", label: "Projects Delivered" },
  { value: "24/7", label: "Support" },
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const statsRef = useRef([]);
  const taglineRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // — Noise grain overlay pulse —
      gsap.to(".grain-overlay", {
        opacity: 0.07,
        duration: 0.08,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      // — Master timeline —
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Tagline fades in first
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        0
      );

      // Divider expands
      tl.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.2 },
        0.2
      );

      // Headline letters stagger up
      tl.fromTo(
        lettersRef.current,
        { opacity: 0, y: 60, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: {
            each: 0.04,
            from: "start",
          },
        },
        0.3
      );

      // Stats animate one-by-one
      tl.fromTo(
        statsRef.current,
        { opacity: 0, y: 40, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
        },
        1.0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #111827 0%, #0a0a0a 70%)" }}
    >
      {/* Grain overlay */}
      <div
        className="grain-overlay pointer-events-none absolute inset-0 opacity-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "screen",
        }}
      />

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-7xl mx-auto">
        {/* Tagline */}
        <p
          ref={taglineRef}
          className="opacity-0 tracking-[0.4em] text-xs uppercase text-indigo-400 font-light mb-8"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Premium Digital Studio
        </p>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="w-24 h-px bg-gradient-to-r from-indigo-500 to-transparent mb-10"
          style={{ transformOrigin: "left center" }}
        />

        {/* Headline */}
        <h1
          className="text-center font-black leading-none mb-16"
          style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            perspective: "800px",
          }}
        >
          {HEADLINE.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="inline-block opacity-0"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
                color: char === " " ? "transparent" : "#f8fafc",
                marginRight: char === " " ? "0.3em" : "0",
                textShadow: "0 0 60px rgba(99,102,241,0.3)",
                letterSpacing: "0.02em",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => (statsRef.current[i] = el)}
              className="opacity-0 flex flex-col items-center group"
            >
              <span
                className="font-black text-transparent bg-clip-text"
                style={{
                  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  backgroundImage: "linear-gradient(135deg, #f8fafc 0%, #6366f1 100%)",
                  transition: "filter 0.3s",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-slate-400 tracking-widest text-xs uppercase mt-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {stat.label}
              </span>
              <div className="h-px w-0 group-hover:w-full bg-indigo-500 transition-all duration-500 mt-2" />
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-24 flex flex-col items-center gap-2 animate-bounce">
          <span
            className="text-slate-600 tracking-[0.3em] text-xs uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
