export default function Marquee() {
  const items = [
    "Brand Identity", "Motion Design", "Digital Strategy",
    "UI/UX Design", "Web Development", "Creative Direction", "Scroll Animation",
  ];
  // Double for seamless loop
  const all = [...items, ...items];

  return (
    <div className="border-t border-b border-[#111] bg-[#0c0c0c] py-4 overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {all.map((item, i) => (
          <span
            key={i}
            className="text-[#1a1a2e] tracking-widest uppercase"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "1.5rem" }}
          >
            {item}
            <span className="text-indigo-600 ml-10">◈</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
