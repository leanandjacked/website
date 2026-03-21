import { notFound } from "next/navigation";
import { caseStudies, type CaseStudy } from "../data";
import LayoutShell from "../../components/LayoutShell";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((cs: CaseStudy) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c: CaseStudy) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.name}: ${cs.tagline} | Lean & Jacked`,
    description: cs.challenge.slice(0, 155),
  };
}

const prose: React.CSSProperties = {
  color: "#CCC",
  fontSize: "15px",
  lineHeight: 1.85,
  fontFamily: "Montserrat, sans-serif",
  margin: "0 0 16px",
};

const sectionHeading: React.CSSProperties = {
  fontFamily: "Bebas Neue, cursive",
  fontSize: "clamp(1.4rem, 3.5vw, 1.8rem)",
  letterSpacing: "0.04em",
  color: "#fff",
  margin: "36px 0 12px",
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c: CaseStudy) => c.slug === slug);
  if (!cs) notFound();
  const study = cs!;

  return (
    <LayoutShell title={study.name}>
      {/* Transformation badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--orange)",
          color: "#fff",
          padding: "6px 16px",
          borderRadius: "100px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontFamily: "Montserrat, sans-serif",
          marginBottom: "20px",
        }}
      >
        {study.transformation}
      </div>

      <h2
        style={{
          fontFamily: "Bebas Neue, cursive",
          fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
          color: "#fff",
          letterSpacing: "0.02em",
          lineHeight: 1.1,
          marginBottom: "8px",
        }}
      >
        {study.tagline}
      </h2>

      <div
        style={{
          fontSize: "12px",
          color: "var(--grey)",
          marginBottom: "28px",
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: "1px",
        }}
      >
        Age: {study.age} · Occupation: {study.occupation}
      </div>

      {/* Image */}
      <div
        className="w-full aspect-[4/3] md:aspect-video rounded-md overflow-hidden mb-8 border border-[#2a2a2a]"
      >
        <img 
          src={`/${study.photo}`} 
          alt={study.name} 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Metrics grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginBottom: "36px",
        }}
      >
        {study.metrics.map((m: { label: string; value: string }) => (
          <div
            key={m.label}
            style={{
              background: "#0D0D0D",
              border: "1px solid #222",
              borderRadius: "8px",
              padding: "16px 10px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                color: "var(--orange)",
                lineHeight: 1,
                marginBottom: "6px",
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontSize: "9px",
                color: "var(--grey)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Challenge */}
      <div
        style={{
          background: "#0f0f0f",
          border: "1px solid #2a2a2a",
          borderTop: "2px solid var(--red)",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--red)",
            marginBottom: "10px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          The Challenge
        </div>
        <p style={{ ...prose, margin: 0 }}>{study.challenge}</p>
      </div>

      {/* Story */}
      <h3 style={sectionHeading}>The Journey</h3>
      {study.story.map((para: string, i: number) => (
        <p key={i} style={prose}>{para}</p>
      ))}

      {/* Result */}
      <div
        style={{
          background: "#0f0f0f",
          border: "1px solid #2a2a2a",
          borderTop: "2px solid var(--orange)",
          borderRadius: "8px",
          padding: "20px",
          margin: "28px 0",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--orange)",
            marginBottom: "10px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          The Result
        </div>
        <p style={{ ...prose, margin: 0 }}>{study.result}</p>
      </div>

      {/* Quote */}
      <blockquote
        style={{
          borderLeft: "3px solid #333",
          paddingLeft: "20px",
          margin: "0 0 40px",
          color: "#fff",
          fontStyle: "italic",
          fontSize: "16px",
          lineHeight: 1.7,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
        }}
      >
        {study.quote}
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontSize: "12px",
            color: "var(--grey)",
            fontWeight: 400,
          }}
        >
          {study.name}
        </span>
      </blockquote>

      {/* CTA */}
      <div
        style={{
          background: "var(--dark2)",
          borderRadius: "10px",
          padding: "28px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "#fff",
            marginBottom: "12px",
            letterSpacing: "0.04em",
          }}
        >
          Want the same results?
        </div>
        <p
          style={{
            color: "var(--grey)",
            fontSize: "13px",
            lineHeight: 1.7,
            marginBottom: "20px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          The exact system that worked for {study.name} is inside the Lean &amp;
          Jacked Fat Loss Blueprint.
        </p>
        <Link href="/#buy" className="btn-orange inline-flex items-center justify-center gap-2">
          Get The Blueprint  ₹999 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Other case studies */}
      <div style={{ marginTop: "48px" }}>
        <div
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "1.4rem",
            color: "var(--grey)",
            letterSpacing: "0.04em",
            marginBottom: "16px",
          }}
        >
          More Case Studies
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {caseStudies
            .filter((c: CaseStudy) => c.slug !== study.slug)
            .map((c: CaseStudy) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card-orange"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "Bebas Neue, cursive",
                        fontSize: "1.2rem",
                        color: "var(--orange)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--grey)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {c.transformation}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-orange-500" />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </LayoutShell>
  );
}
