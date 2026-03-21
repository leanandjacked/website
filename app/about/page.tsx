import LayoutShell from "../components/LayoutShell";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Zaid | Lean & Jacked",
  description: "Ex-engineering student. Certified personal trainer. Helped 100+ clients transform their bodies.",
};

export default function AboutPage() {
  return (
    <LayoutShell title="About Zaid">
      {/* ... paras ... */}
      <p style={{ color: "var(--grey)", fontSize: "14px", lineHeight: 1.85, fontFamily: "Montserrat, sans-serif", marginBottom: "20px" }}>
        I wasn&apos;t always the guy who knew what he was doing in the gym.
      </p>
      <p style={{ color: "var(--grey)", fontSize: "14px", lineHeight: 1.85, fontFamily: "Montserrat, sans-serif", marginBottom: "20px" }}>
        In college, I was bullied. Not just teased  truly bullied. That was the moment I decided: enough. I needed to change. Not for anyone else. For myself.
      </p>
      <p style={{ color: "var(--grey)", fontSize: "14px", lineHeight: 1.85, fontFamily: "Montserrat, sans-serif", marginBottom: "20px" }}>
        So I started going to the gym. And something happened that I didn&apos;t expect. The gym didn&apos;t just change my body. It changed everything. It gave me discipline when I had none. Confidence when I had none. It taught me to trust my own decisions and take control of my own life. It turned me from a boy into a man.
      </p>
      <p style={{ color: "var(--grey)", fontSize: "14px", lineHeight: 1.85, fontFamily: "Montserrat, sans-serif", marginBottom: "20px" }}>
        But I was quickly frustrated by how much garbage existed in the fitness industry. Six-day programs. Two hours of cardio. Dozens of supplements. Influencer routines that are impossible to follow for anyone with a real life.
      </p>
      <p style={{ color: "var(--grey)", fontSize: "14px", lineHeight: 1.85, fontFamily: "Montserrat, sans-serif", marginBottom: "20px" }}>
        So I did what engineers do. I researched. I tested. I analysed  obsessively, for years.
      </p>
      <p style={{ color: "var(--grey)", fontSize: "14px", lineHeight: 1.85, fontFamily: "Montserrat, sans-serif", marginBottom: "20px" }}>
        After completing my engineering degree, I earned my personal training certification and began coaching full-time. In person first  over 100 clients. Then online, where I&apos;ve now helped 50+ busy students, professionals, surgeons, and corporate executives get lean, build muscle, and fix serious health issues.
      </p>
      <p style={{ color: "var(--grey)", fontSize: "14px", lineHeight: 1.85, fontFamily: "Montserrat, sans-serif", marginBottom: "20px" }}>
        I&apos;ve competed on stage in the 40+ kg transformation category. Naturally. No shortcuts. The same protocol I used is what&apos;s inside the blueprint.
      </p>

      <div style={{ background: "var(--dark2)", border: "1px solid #2a2a2a", borderTop: "2px solid var(--orange)", borderRadius: "10px", padding: "20px", margin: "28px 0" }}>
        <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.3rem", color: "#fff", letterSpacing: "0.04em", marginBottom: "12px" }}>Credentials</div>
        {["Certified Personal Trainer", "Coached 100+ clients in person", "50+ online clients transformed", "Natural competitor  40+ kg transformation category", "Ex-engineering student"].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
            <Check className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
            <span style={{ color: "#CCC", fontSize: "14px", fontFamily: "Montserrat, sans-serif" }}>{item}</span>
          </div>
        ))}
      </div>

      <Link href="/#buy" className="btn-orange inline-flex items-center justify-center gap-2">
        Get The Blueprint  ₹999 <ArrowRight className="w-4 h-4" />
      </Link>
    </LayoutShell>
  );
}
