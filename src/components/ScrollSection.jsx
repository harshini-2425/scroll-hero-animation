import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOTION_PRESETS = {
  desktop: { end: "+=240%", scrub: 1.15, carAt75: "80vw" },
  mobile: { end: "+=170%", scrub: 0.8, carAt75: "86vw" },
  reduced: { end: "+=100%", scrub: 0.25, carAt75: "78vw" },
};

function resolveMotionPreset({ isMobile, prefersReducedMotion }) {
  if (prefersReducedMotion) return MOTION_PRESETS.reduced;
  if (isMobile) return MOTION_PRESETS.mobile;
  return MOTION_PRESETS.desktop;
}

// SVG Sports Car — clean minimal vector illustration
function CarSVG({ frontWheelRef, rearWheelRef }) {
  return (
    <svg
      viewBox="0 0 520 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl"
      aria-hidden="true"
      focusable="false"
      style={{ filter: "drop-shadow(0 0 40px rgba(99,102,241,0.4))" }}
    >
      {/* Shadow */}
      <ellipse cx="260" cy="185" rx="210" ry="10" fill="rgba(99,102,241,0.15)" />

      {/* Body — low slung coupe shape */}
      <path
        d="M 60 145 
           L 80 145 
           Q 90 145 95 135
           L 115 95
           Q 130 72 165 65
           L 260 58
           Q 310 55 340 65
           L 385 90
           Q 410 105 420 120
           L 440 140
           L 460 145
           L 460 158
           L 60 158 Z"
        fill="url(#bodyGrad)"
        stroke="rgba(148,163,184,0.3)"
        strokeWidth="1"
      />

      {/* Roof & cabin */}
      <path
        d="M 130 95
           Q 145 68 175 58
           L 265 52
           Q 315 49 345 60
           L 375 82
           Q 385 90 388 98
           L 390 110
           L 125 110 Z"
        fill="url(#cabinGrad)"
        stroke="rgba(148,163,184,0.2)"
        strokeWidth="0.5"
      />

      {/* Windshield */}
      <path
        d="M 148 107 L 172 63 L 255 55 L 255 107 Z"
        fill="url(#glassGrad)"
        stroke="rgba(99,102,241,0.4)"
        strokeWidth="0.8"
      />

      {/* Rear window */}
      <path
        d="M 265 55 L 338 62 L 368 88 L 375 107 L 265 107 Z"
        fill="url(#glassGrad)"
        stroke="rgba(99,102,241,0.4)"
        strokeWidth="0.8"
      />

      {/* Window divider pillar */}
      <line x1="255" y1="52" x2="258" y2="107" stroke="rgba(148,163,184,0.5)" strokeWidth="2" />

      {/* Door line */}
      <path
        d="M 170 107 Q 200 140 220 155 L 310 155 Q 330 140 355 107"
        fill="none"
        stroke="rgba(148,163,184,0.25)"
        strokeWidth="1"
      />

      {/* Front bumper detail */}
      <path
        d="M 60 145 L 55 148 L 50 155 L 80 158"
        fill="url(#frontGrad)"
        stroke="rgba(148,163,184,0.3)"
        strokeWidth="0.8"
      />

      {/* Rear bumper */}
      <path
        d="M 460 145 L 467 148 L 472 155 L 440 158"
        fill="url(#frontGrad)"
        stroke="rgba(148,163,184,0.3)"
        strokeWidth="0.8"
      />

      {/* Headlight */}
      <ellipse cx="72" cy="132" rx="14" ry="8" fill="url(#lightGrad)" opacity="0.9" />
      <ellipse cx="72" cy="132" rx="8" ry="5" fill="rgba(255,255,255,0.9)" />

      {/* Headlight beam */}
      <path
        d="M 58 128 L 10 115 L 8 122 L 56 136 Z"
        fill="url(#beamGrad)"
        opacity="0.6"
      />

      {/* Taillight */}
      <ellipse cx="452" cy="132" rx="14" ry="8" fill="url(#tailGrad)" opacity="0.9" />
      <ellipse cx="452" cy="132" rx="8" ry="5" fill="rgba(239,68,68,0.8)" />

      {/* Taillight glow */}
      <ellipse cx="452" cy="132" rx="22" ry="14" fill="rgba(239,68,68,0.08)" />

      {/* Side mirror */}
      <path d="M 110 103 L 100 108 L 102 114 L 115 110 Z" fill="#334155" stroke="rgba(148,163,184,0.3)" strokeWidth="0.5" />

      {/* Front wheel well */}
      <ellipse cx="148" cy="158" rx="42" ry="12" fill="#0a0a0a" />
      {/* Front wheel */}
      <g ref={frontWheelRef} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx="148" cy="158" r="34" fill="url(#wheelGrad)" />
        <circle cx="148" cy="158" r="24" fill="#1e293b" />
        <circle cx="148" cy="158" r="14" fill="#334155" />
        <circle cx="148" cy="158" r="5" fill="#64748b" />
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <line
            key={i}
            x1={148 + Math.cos((deg * Math.PI) / 180) * 6}
            y1={158 + Math.sin((deg * Math.PI) / 180) * 6}
            x2={148 + Math.cos((deg * Math.PI) / 180) * 22}
            y2={158 + Math.sin((deg * Math.PI) / 180) * 22}
            stroke="#475569"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* Rear wheel well */}
      <ellipse cx="368" cy="158" rx="42" ry="12" fill="#0a0a0a" />
      {/* Rear wheel */}
      <g ref={rearWheelRef} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx="368" cy="158" r="34" fill="url(#wheelGrad)" />
        <circle cx="368" cy="158" r="24" fill="#1e293b" />
        <circle cx="368" cy="158" r="14" fill="#334155" />
        <circle cx="368" cy="158" r="5" fill="#64748b" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <line
            key={i}
            x1={368 + Math.cos((deg * Math.PI) / 180) * 6}
            y1={158 + Math.sin((deg * Math.PI) / 180) * 6}
            x2={368 + Math.cos((deg * Math.PI) / 180) * 22}
            y2={158 + Math.sin((deg * Math.PI) / 180) * 22}
            stroke="#475569"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* Exhaust pipes */}
      <rect x="455" y="150" width="18" height="4" rx="2" fill="#334155" />
      <rect x="455" y="155" width="18" height="4" rx="2" fill="#334155" />

      {/* Brand badge */}
      <rect x="248" y="100" width="20" height="8" rx="1" fill="url(#badgeGrad)" />
      <text x="258" y="107" textAnchor="middle" fill="white" fontSize="5" fontFamily="monospace" fontWeight="bold">ITZ</text>

      {/* Gradient Defs */}
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="cabinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
          <stop offset="100%" stopColor="rgba(148,163,184,0.08)" />
        </linearGradient>
        <linearGradient id="frontGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <radialGradient id="lightGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#6366f1" />
        </radialGradient>
        <radialGradient id="tailGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#dc2626" />
        </radialGradient>
        <linearGradient id="beamGrad" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(224,231,255,0.5)" />
          <stop offset="100%" stopColor="rgba(224,231,255,0)" />
        </linearGradient>
        <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
        <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const carRef = useRef(null);
  const carShellRef = useRef(null);
  const bgLayerRef = useRef(null);
  const fgLayerRef = useRef(null);
  const frontWheelRef = useRef(null);
  const rearWheelRef = useRef(null);
  const trackRef = useRef(null);
  const ambientRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const speedLinesRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const setProgressScale = progressRef.current
        ? gsap.quickSetter(progressRef.current, "scaleX")
        : null;

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          prefersReducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (media) => {
          const { isMobile, prefersReducedMotion } = media.conditions;
          const modeTuning = resolveMotionPreset({ isMobile, prefersReducedMotion });

          const profile = {
            end: modeTuning.end,
            scrub: modeTuning.scrub,
            carAt25: isMobile ? "9vw" : "11vw",
            carAt75: modeTuning.carAt75,
            carAt100: isMobile ? "126vw" : "120vw",
            wheelRotation: prefersReducedMotion ? 240 : isMobile ? 600 : 1080,
            bgTravel: prefersReducedMotion ? 0 : isMobile ? 3 : 7,
            fgTravel: prefersReducedMotion ? 0 : isMobile ? 6 : 14,
            speedLineTravel: isMobile ? "10%" : "22%",
            speedLineOpacity: prefersReducedMotion ? 0 : [0, 0.85, 0.75, 0],
            carScale: isMobile ? 0.92 : 1,
          };

          const timing = {
            q1: 0.25,
            q2: 0.5,
            q3: 0.75,
          };

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: profile.end,
              scrub: profile.scrub,
              pin: viewportRef.current,
              anticipatePin: 1,
              fastScrollEnd: true,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (setProgressScale) {
                  setProgressScale(self.progress);
                }
              },
            },
          });

          // Quartile mapping: 0-25% enter, 25-75% cruise, 75-100% exit.
          tl.fromTo(
            carRef.current,
            { x: "-30vw", y: 0, scale: profile.carScale, rotateY: 0 },
            { x: profile.carAt25, duration: timing.q1, ease: "power2.out" },
            0
          )
            .to(
              carRef.current,
              { x: profile.carAt75, duration: timing.q2, ease: "none" },
              timing.q1
            )
            .to(
              carRef.current,
              { x: profile.carAt100, duration: timing.q1, ease: "power2.in" },
              timing.q3
            );

          // Subtle vertical drift gives a less mechanical trajectory.
          if (!prefersReducedMotion) {
            tl.fromTo(
              carRef.current,
              { y: isMobile ? 4 : 2 },
              { y: isMobile ? -2 : -6, duration: 0.5, ease: "sine.inOut" },
              0
            ).to(carRef.current, { y: 1, duration: 0.5, ease: "sine.out" }, timing.q2);

            tl.fromTo(
              carShellRef.current,
              { rotation: isMobile ? 0.4 : 0.8 },
              { rotation: isMobile ? -0.3 : -0.7, duration: 0.5, ease: "sine.inOut" },
              0
            ).to(
              carShellRef.current,
              { rotation: isMobile ? 0.1 : 0.2, duration: 0.5, ease: "sine.out" },
              timing.q2
            );

            tl.fromTo(
              ambientRef.current,
              { opacity: 0.3, scaleX: 0.85 },
              { opacity: 0.7, scaleX: 1.05, ease: "sine.inOut" },
              0.15
            ).to(
              ambientRef.current,
              { opacity: 0.42, scaleX: 0.95, ease: "sine.out" },
              timing.q2
            );
          }

          tl.fromTo(
            [frontWheelRef.current, rearWheelRef.current],
            { rotation: 0, transformOrigin: "center center" },
            { rotation: profile.wheelRotation, ease: "none" },
            0
          );

          tl.fromTo(
            bgLayerRef.current,
            { xPercent: -profile.bgTravel, scale: prefersReducedMotion ? 1 : 1.04 },
            { xPercent: profile.bgTravel, scale: 1, ease: "none" },
            0
          );

          tl.fromTo(
            fgLayerRef.current,
            { xPercent: -profile.fgTravel },
            { xPercent: profile.fgTravel, ease: "none" },
            0
          );

          tl.fromTo(
            speedLinesRef.current,
            { x: "-30%", opacity: 0 },
            { x: profile.speedLineTravel, opacity: profile.speedLineOpacity, ease: "none" },
            0
          );

          tl.fromTo(
            textLeftRef.current,
            { opacity: 1, x: 0 },
            { opacity: 0, x: isMobile ? -30 : -60, ease: "power2.in" },
            0.08
          );

          tl.fromTo(
            textRightRef.current,
            { opacity: 0, x: isMobile ? 25 : 60 },
            { opacity: 1, x: 0, ease: "power2.out" },
            0.62
          );

          tl.fromTo(
            trackRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, ease: "none" },
            0
          );
        }
      );
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  // Speed line positions
  const speedLines = [
    { y: "42%", w: 180, opacity: 0.6 },
    { y: "46%", w: 260, opacity: 0.4 },
    { y: "50%", w: 140, opacity: 0.5 },
    { y: "54%", w: 200, opacity: 0.35 },
    { y: "58%", w: 100, opacity: 0.25 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen"
    >
      {/* Pinned viewport layer */}
      <div
        ref={viewportRef}
        className="w-full h-screen overflow-hidden flex flex-col justify-center"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #0d1117 0%, #0a0a0a 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.42) 100%)",
          }}
        />

        {/* Parallax background atmospherics */}
        <div
          ref={bgLayerRef}
          className="absolute inset-0 pointer-events-none motion-reduce:hidden"
          aria-hidden="true"
          style={{ willChange: "transform" }}
        >
          <div
            className="absolute -top-20 left-[10%] w-[420px] h-[420px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.02) 45%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
          <div
            className="absolute -bottom-28 right-[8%] w-[560px] h-[360px] rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.02) 48%, transparent 72%)",
              filter: "blur(16px)",
            }}
          />
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-[2px] bg-indigo-900 w-full z-30">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-indigo-600 to-violet-500"
            style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
          />
        </div>

        {/* Section label */}
        <p
          className="absolute top-8 left-1/2 -translate-x-1/2 tracking-[0.55em] text-[10px] uppercase text-slate-500 z-20"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          In Motion
        </p>

        {/* Left fade text */}
        <div
          ref={textLeftRef}
          className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
        >
          <p
            className="text-slate-600 tracking-[0.3em] text-xs uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Precision
          </p>
          <p
            className="font-black text-4xl md:text-6xl text-slate-700"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              lineHeight: 1,
              textShadow: "0 0 28px rgba(30,41,59,0.35)",
            }}
          >
            BUILT<br />FOR<br />SPEED
          </p>
        </div>

        {/* Right text */}
        <div
          ref={textRightRef}
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 text-right"
        >
          <p
            className="text-indigo-500 tracking-[0.3em] text-xs uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Excellence
          </p>
          <p
            className="font-black text-4xl md:text-6xl"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              lineHeight: 1,
              background: "linear-gradient(135deg, #f8fafc 0%, #a5b4fc 52%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(99,102,241,0.22))",
            }}
          >
            DRIVEN<br />BY<br />DESIGN
          </p>
        </div>

        {/* Road track */}
        <div className="absolute bottom-[25%] left-0 w-full px-0 z-10">
          <div
            ref={trackRef}
            className="w-full"
            style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
          >
            {/* Road surface */}
            <div className="relative h-[3px] bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900/50 to-transparent" />
            </div>
            {/* Dashed center line */}
            <div
              className="mt-1 h-[1px] opacity-20"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, #6366f1 0px, #6366f1 40px, transparent 40px, transparent 70px)",
              }}
            />
          </div>
        </div>

        {/* Foreground speed lines */}
        <div ref={fgLayerRef} className="absolute inset-0 pointer-events-none z-10" style={{ willChange: "transform" }}>
          {speedLines.map((line, i) => (
            <div
              key={i}
              ref={(el) => (speedLinesRef.current[i] = el)}
              className="absolute pointer-events-none motion-reduce:hidden"
              aria-hidden="true"
              style={{
                top: line.y,
                left: "5%",
                width: `${line.w}px`,
                height: "1px",
                background: `linear-gradient(90deg, transparent, rgba(99,102,241,${line.opacity}), transparent)`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        {/* Car container */}
        <div
          ref={carRef}
          className="absolute z-20 pointer-events-none"
          style={{
            bottom: "calc(25% - 10px)",
            left: "0%",
            width: "clamp(220px, 28vw, 360px)",
            transform: "translateX(-50%)",
            willChange: "transform",
          }}
        >
          <div ref={carShellRef} style={{ willChange: "transform" }}>
            {/* Motion blur overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              aria-hidden="true"
              style={{
                background: "linear-gradient(90deg, rgba(99,102,241,0.05) 0%, transparent 30%, transparent 70%, rgba(239,68,68,0.05) 100%)",
              }}
            />
            <CarSVG frontWheelRef={frontWheelRef} rearWheelRef={rearWheelRef} />
          </div>
        </div>

        {/* Bottom label */}
        <p
          className="absolute bottom-10 left-1/2 -translate-x-1/2 tracking-[0.4em] text-xs uppercase text-slate-700 z-20"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Itz Fizz Studio · Est. 2024
        </p>

        {/* Ambient light under car path */}
        <div
          ref={ambientRef}
          className="absolute z-10 pointer-events-none"
          aria-hidden="true"
          style={{
            bottom: "calc(25% - 30px)",
            left: "15%",
            right: "15%",
            height: "60px",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}
