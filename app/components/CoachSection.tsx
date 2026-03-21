import { Camera } from "lucide-react";

const coachStory = [
  "I wasn't always the guy who knew what he was doing in the gym.",
  "In college, I was bullied. That was the moment I decided  enough. I needed to change. Not for anyone else. For myself.",
  "So I started going to the gym. And something happened I didn't expect. The gym didn't just change my body. It changed everything. It gave me discipline when I had none. Confidence when I had none. It taught me to trust my own decisions and take control of my own life. It turned me from a boy into a man.",
  "But I was still lost when it came to actual training. Because the fitness industry is full of garbage. Six-day programs. Two hours of cardio. Dozens of supplements. Influencer routines that are impossible to follow for anyone with a real life.",
  "So I did what engineers do. I researched. I tested. I analysed. On myself, obsessively, for years.",
  "After completing my engineering degree, I got certified as a personal trainer. I coached in person and helped over 100 individuals transform their bodies. But my time and space were limited  and I knew my methods needed to reach more people.",
  "That's when I took everything online. In the last year alone, I've helped 50+ busy students and working professionals  including surgeons, engineers, and corporate executives  get lean, build muscle, and fix real health issues. Without spending hours at the gym. Without eating boring food. Without being misled by influencer nonsense.",
  "This blueprint is built on everything I've learned  so you don't have to figure it out the hard way like I did.",
];

export default function CoachSection() {
  return (
    <section
      style={{
        background: "var(--dark2)",
        padding: "64px 0",
      }}
    >
      <div className="content-wrap">
        <p className="section-label">Your Coach</p>
        <h2
          className="bebas section-title"
          style={{ marginBottom: "24px" }}
        >
          Meet <span style={{ color: "var(--orange)" }}>Zaid</span>
        </h2>

        {/* Coach image */}
        <div className="w-full max-w-sm mx-auto aspect-[3/4] rounded-lg overflow-hidden mb-7 border border-[#2a2a2a]">
          <img
            src="/ZAID.PNG"
            alt="Coach Zaid"
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {coachStory.map((para, i) => (
            <p
              key={i}
              style={{
                color: "#CCC",
                fontSize: "14px",
                lineHeight: 1.8,
                margin: 0,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {para}
            </p>
          ))}
        </div>

        <div
          className="bebas"
          style={{
            fontSize: "1.8rem",
            color: "var(--orange)",
            letterSpacing: "0.04em",
            marginTop: "24px",
          }}
        >
          Zaid
        </div>
      </div>
    </section>
  );
}
