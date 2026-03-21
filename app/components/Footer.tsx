export default function Footer() {
  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid #1a1a1a",
        padding: "40px 20px 28px",
        textAlign: "center",
      }}
    >
      <div
        className="bebas"
        style={{
          fontSize: "1.6rem",
          letterSpacing: "4px",
          color: "#fff",
          marginBottom: "4px",
        }}
      >
        Lean &amp; <span style={{ color: "var(--orange)" }}>Jacked</span>
      </div>
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "4px",
          color: "#333",
          textTransform: "uppercase",
          marginBottom: "24px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        by Zaid
      </div>

      <p
        style={{
          fontSize: "12px",
          color: "#333",
          lineHeight: 1.7,
          marginBottom: "20px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        © {new Date().getFullYear()} Lean &amp; Jacked by Zaid. All rights reserved.
        <br />
        Results vary based on individual effort, commitment, and adherence to
        the program.
      </p>

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {[
          { label: "About", href: "/about" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms & Conditions", href: "/terms" },
          { label: "Refund Policy", href: "/returns" },
        ].map((link) => (
          <a key={link.href} href={link.href} className="footer-link">
            {link.label}
          </a>
        ))}
      </div>

      {/* Vuce attribution */}
      <p
        style={{
          fontSize: "11px",
          color: "#2a2a2a",
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: "0.5px",
        }}
      >
        Built with love at{" "}
        <a
          href="https://vuce.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2a2a2a", transition: "color 0.2s" }}
          className="vuce-link"
        >
          Vuce.in
        </a>
      </p>
    </footer>
  );
}
