const stats = [
  { val: "0", label: "Steroids" },
  { val: "3x", label: "Per Week" },
  { val: "45m", label: "Per Session" },
  { val: "8-9%", label: "Body Fat" },
];

export default function CompetitionProof() {
  return (
    <section
      style={{
        background: "var(--black)",
        padding: "64px 0",
        textAlign: "center",
      }}
    >
      <div className="content-wrap">
        <p className="section-label">The Proof</p>
        <h2
          className="bebas section-title"
          style={{ marginBottom: "20px" }}
        >
          This System Built a{" "}
          <span style={{ color: "var(--orange)" }}>Competition Physique</span>
        </h2>

        {/* Competition photo */}
        <div
          style={{
            width: "100%",
            maxWidth: "340px",
            margin: "0 auto 28px",
            aspectRatio: "3/4",
            borderRadius: "10px",
            overflow: "hidden",
            border: "2px solid #2a2a2a",
            boxShadow: "0 0 40px rgba(255, 107, 0, 0.15)",
          }}
        >
          <img
            src="/zain-at-competition.jpg"
            alt="Zaid on stage at competition"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--dark2)",
                borderRadius: "8px",
                padding: "20px 8px",
              }}
            >
              <div
                className="bebas"
                style={{
                  fontSize: "clamp(2rem, 6vw, 2.8rem)",
                  color: "var(--orange)",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--grey)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginTop: "6px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "var(--grey)",
            fontSize: "14px",
            lineHeight: 1.75,
            textAlign: "left",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          I used this exact program to step on stage and compete against enhanced bodybuilders. No steroids. No diuretics. No 6-day training weeks. Three sessions a week.
          <br /><br />
          If this protocol can build a competition-ready physique it can absolutely get you lean, healthy, and confident in your own body.
        </p>
      </div>
    </section>
  );
}
