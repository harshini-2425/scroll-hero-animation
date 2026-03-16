import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Itz Fizz transformed our digital presence completely. The scroll animations are silky smooth and the design is unforgettable.",
    name: "Sarah Chen",
    role: "CEO, NovaTech Labs",
  },
  {
    quote: "Working with the Itz Fizz team felt like having a world-class studio in-house. Delivered beyond every expectation.",
    name: "Marcus Okonkwo",
    role: "Founder, Meridian Co.",
  },
  {
    quote: "The scroll animation they built stopped our bounce rate cold. Conversions up 42% in just 6 weeks. Remarkable.",
    name: "Priya Sharma",
    role: "Head of Product, Flux",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-[#080808] flex flex-col items-center">
      <div className="text-center mb-16">
        <p
          className="text-indigo-500 tracking-[0.5em] text-xs uppercase mb-4"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          What Clients Say
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
          TESTIMONIALS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group p-8 flex flex-col gap-4 cursor-default"
            style={{
              background: "linear-gradient(135deg, rgba(20,27,45,0.6), rgba(10,10,20,0.9))",
              border: "1px solid rgba(99,102,241,0.1)",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(99,102,241,0.1)"}
          >
            <div className="text-indigo-500 tracking-widest text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
              ★★★★★
            </div>
            <div
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", color: "#1e293b", lineHeight: 0.6, fontStyle: "italic" }}
            >"</div>
            <p
              className="text-slate-500 text-xs leading-relaxed"
              style={{ fontFamily: "'DM Mono', monospace", fontStyle: "italic" }}
            >
              {t.quote}
            </p>
            <div className="border-t border-[#111] pt-4 flex flex-col gap-1">
              <span
                className="text-slate-300 tracking-widest text-xs uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {t.name}
              </span>
              <span className="text-slate-600 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
