import Link from "next/link";

const cards = [
  {
    name: "Lean & Jacked is Kabir.",
    story:
      "He tried keto. Intermittent fasting. Training 6 days a week. Nothing worked. 114kg his entire life. Called names he didn't deserve. Struggled with obesity since childhood.\n\nWe did the opposite of what everyone recommended. 3-4 sessions a week. 45 minutes. Home food he actually enjoyed. No cardio.\n\nSeven months later  35 kilos gone. Stronger, leaner, healthier.",
    quote: "\"Proof that the right guidance changes everything.\"",
  },
  {
    name: "Lean & Jacked is Dr. Ajinkya.",
    story:
      "Diagnosed with Type 2 diabetes at 23. Got COVID three times. 100kg. Working as a surgeon with no time and no energy.\n\nOne day he asked himself: what's the point of earning money if I die early and never enjoy it?\n\nToday he's 30. 75 kilos. Stronger than his 20s. Diabetes reversed.",
    quote: "Your money deserves a healthy owner.",
  },
  {
    name: "Lean & Jacked is Gaurav.",
    story:
      "37 years old. Corporate job. MRI-confirmed disc herniation. Chronic back pain. 92kg. No gym in years. Everyone told him he couldn't train properly with his back.\n\nWe didn't train harder. We trained smarter.\n\n12 weeks later  92kg to 75kg. Zero back pain. Walked back into the gym on his own.",
    quote: "\"Most men don't need more hustle. They need a system built for their reality.\"",
  },
  {
    name: "Lean & Jacked is Meet.",
    story:
      "110kg. Engineering student. Studying 12 hours a day. No gym background. No time for complex diets. Trained 3 days a week on home-cooked food.\n\n8 months. 36 kilos gone. Still studying. Zero crash dieting.",
    quote: null,
  },
];

export default function WhoIsSection() {
  return (
    <section
      style={{
        background: "var(--dark2)",
        padding: "64px 0",
      }}
    >
      <div className="content-wrap">
        <p className="section-label">The Community</p>
        <h2
          className="bebas section-title"
          style={{ marginBottom: "8px" }}
        >
          Who Is{" "}
          <span style={{ color: "var(--orange)" }}>Lean &amp; Jacked?</span>
        </h2>
        <p
          style={{
            color: "var(--grey)",
            fontSize: "14px",
            fontStyle: "italic",
            marginBottom: "32px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Lean &amp; Jacked isn&apos;t a body type. It&apos;s a decision.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="card-orange"
            >
              <div
                className="bebas"
                style={{
                  fontSize: "clamp(1.4rem, 3.5vw, 1.8rem)",
                  color: "var(--orange)",
                  letterSpacing: "0.04em",
                  marginBottom: "12px",
                }}
              >
                {card.name}
              </div>
              <p
                style={{
                  color: "#CCC",
                  fontSize: "13px",
                  lineHeight: 1.75,
                  whiteSpace: "pre-line",
                  margin: 0,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {card.story}
              </p>
              {card.quote && (
                <div
                  style={{
                    marginTop: "16px",
                    paddingLeft: "16px",
                    borderLeft: "3px solid #333",
                    color: "var(--grey)",
                    fontSize: "13px",
                    fontStyle: "italic",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {card.quote}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA box */}
        <div
          style={{
            background: "var(--orange)",
            borderRadius: "10px",
            padding: "32px 24px",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          <h3
            className="bebas"
            style={{
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              color: "var(--black)",
              letterSpacing: "0.04em",
              marginBottom: "12px",
            }}
          >
            Lean &amp; Jacked Is You.
          </h3>
          <p
            style={{
              color: "rgba(0,0,0,0.8)",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: 1.7,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Whether you want to lose 10 kilos, compete on stage, or just finally feel comfortable in your own skin  this system was built for you.
            <br /><br />
            <strong>The goal is to be Lean &amp; Jacked. Strong. Healthy. Confident. In control.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
