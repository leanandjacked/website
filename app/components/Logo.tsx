export default function Logo() {
  return (
    <div
      className="border-b border-white/[0.05]"
      style={{
        background: "var(--black)",
        padding: "16px 0 14px",
      }}
    >
      <div className="content-wrap">
        {/* Wordmark */}
        <div
          className="bebas flex items-baseline gap-1"
          style={{
            fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
            lineHeight: 1,
            letterSpacing: "2px",
            color: "#fff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontWeight: 400, opacity: 0.9 }}>LEAN</span>
          <span
            style={{
              color: "var(--orange)",
              fontStyle: "italic",
              fontSize: "0.8em",
              margin: "0 2px",
              textShadow: "0 0 15px rgba(255, 107, 0, 0.3)",
            }}
          >
            &amp;
          </span>
          <span style={{ fontWeight: 900, letterSpacing: "3px" }}>JACKED</span>
        </div>

        {/* Accent line - gradient fade */}
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, var(--orange) 0%, transparent 100%)",
            margin: "6px 0 6px",
            width: "80px",
            borderRadius: "1px",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "9px",
            letterSpacing: "4px",
            color: "#666",
            textTransform: "uppercase",
            fontFamily: "var(--font-montserrat-next), sans-serif",
            fontWeight: 700,
          }}
        >
          Everyone Can Be <span style={{ color: "#999" }}>Lean &amp; Jacked</span>
        </div>
      </div>
    </div>
  );
}
