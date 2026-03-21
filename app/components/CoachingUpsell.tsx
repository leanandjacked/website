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
          Want Results{" "}
          <span style={{ color: "var(--orange)" }}>10x Faster?</span>
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
          If you want me to personally analyse your bloodwork, build your plan
          around your body, and coach you every single week  I work with a small
          number of 1:1 clients.
          <br /><br />
          This is not for everyone. Only for people who are ready to go all in.
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
          className="calendly-btn"
        >
          📞 Book Free 15-Min Fat Loss Diagnosis Call
        </a>

        <p
          style={{
            fontSize: "12px",
            color: "#555",
            marginTop: "12px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          I&apos;ll tell you exactly what&apos;s blocking your progress  whether you work
          with me or not.
        </p>
      </div>
    </section>
  );
}
