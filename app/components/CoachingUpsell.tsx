import { Phone } from "lucide-react";

export default function CoachingUpsell() {
  return (
    <section
      style={{
        background: "var(--black)",
        borderTop: "1px solid #1a1a1a",
        padding: "64px 0",
        textAlign: "center",
      }}
    >
      <div className="content-wrap">
        <p className="section-label">For Serious Clients Only</p>
        <h2
          className="bebas section-title"
          style={{ marginBottom: "16px" }}
        >
          Want Zaid Working With You{" "}
          <span style={{ color: "var(--orange)" }}>Every Single Week?</span>
        </h2>
        <p
          style={{
            color: "var(--grey)",
            fontSize: "14px",
            lineHeight: 1.75,
            marginBottom: "24px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          If you want Zaid to personally analyse your bloodwork, build your plan around your body, and coach you with weekly accountability he works with a small number of 1:1 clients.
        </p>

        <div
          className="bebas"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "var(--orange)",
            letterSpacing: "0.04em",
            marginBottom: "8px",
          }}
        >
          ₹27,000 / 3 Months &nbsp;|&nbsp; ₹45,000 / 6 Months
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "var(--grey)",
            marginBottom: "12px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Early client pricing available for the first 10 clients only. Price increases after.
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "var(--orange)",
            marginBottom: "24px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
          }}
        >
          Save ₹9,000 on the 6-month package
        </p>

        <a
          href="https://calendly.com/YOURLINKHERE"
          className="calendly-btn flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" /> Book Free 15-Min Fat Loss Diagnosis Call
        </a>

        <p
          style={{
            fontSize: "12px",
            color: "#555",
            marginTop: "12px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          I'll tell you exactly what's blocking your progress whether you work with me or not.
        </p>
      </div>
    </section>
  );
}
