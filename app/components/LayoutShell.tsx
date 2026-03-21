import Link from "next/link";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function LayoutShell({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div style={{ background: "var(--black)", minHeight: "100vh" }}>
      <Banner />

      {/* Logo bar */}
      <div
        style={{
          background: "var(--black)",
          borderBottom: "1px solid #222",
          padding: "16px 20px",
          textAlign: "center",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            className="bebas"
            style={{
              fontSize: "1.6rem",
              letterSpacing: "4px",
              color: "#fff",
            }}
          >
            Lean &amp; <span style={{ color: "var(--orange)" }}>Jacked</span>
          </div>
        </Link>
      </div>

      {/* Page header */}
      <div
        style={{
          background: "var(--dark2)",
          borderBottom: "1px solid #222",
          padding: "40px 20px",
        }}
      >
        <div className="content-wrap" style={{ padding: 0 }}>
          <Link
            href="/"
            style={{
              fontSize: "12px",
              color: "var(--grey)",
              textDecoration: "none",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "1px",
            }}
          >
            ← Back to home
          </Link>
          <h1
            className="bebas"
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              color: "#fff",
              letterSpacing: "0.04em",
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <main
        style={{
          padding: "48px 20px 80px",
        }}
      >
        <div className="content-wrap" style={{ padding: 0 }}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
