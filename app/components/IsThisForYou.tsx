import { Check, X } from "lucide-react";

const yesItems = [
  "You're a student or working professional who wants to finally lose fat the right way",
  "You train less than 3 hours a week or need a program that fits around exams, shifts, or a demanding job",
  "You eat Indian home food and need a diet that actually fits your real life",
  "You're tired of confusion and want one clear, complete system to follow from day one",
  "You want to understand what's happening inside your body not just follow random advice",
  "You are ready to commit and execute consistently for 90 days",
];

const noItems = [
  "You want a flexible plan with zero structure or accountability",
  "You're looking for shortcuts, fat loss pills, or magic hacks",
  "You're not willing to track what you eat for at least 4 weeks",
  "You want someone to personally coach you week by week scroll down for that offer",
];

export default function IsThisForYou() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--dark2)" }}
    >
      <div className="content-wrap px-4 md:px-0" style={{ maxWidth: "1000px" }}>
        <p className="section-label mb-2 md:mb-3">Is This For You?</p>
        <h2
          className="bebas section-title mb-8 md:mb-12 text-[2.5rem] md:text-[4.5rem] leading-none"
        >
          Be Honest
          <br />
          <span style={{ color: "var(--orange)" }}>With Yourself</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* YES */}
          <div
            className="p-6 md:p-8 rounded-lg border-t-4"
            style={{
              background: "var(--black)",
              borderColor: "#22C55E",
            }}
          >
            <div
              className="flex items-center gap-2 mb-6 font-montserrat text-[11px] md:text-[12px] tracking-widest uppercase font-bold"
              style={{ color: "#22C55E" }}
            >
              <Check className="w-4 h-4" /> THIS IS FOR YOU IF:
            </div>
            {yesItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 mb-4 md:mb-5"
              >
                <Check className="flex-shrink-0 w-4 h-4 mt-1" style={{ color: "#22C55E" }} />
                <span className="text-[14px] md:text-[15px] leading-relaxed font-montserrat" style={{ color: "#CCC" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* NO */}
          <div
            className="p-6 md:p-8 rounded-lg border-t-4"
            style={{
              background: "var(--black)",
              borderColor: "var(--red)",
            }}
          >
            <div
              className="flex items-center gap-2 mb-6 font-montserrat text-[11px] md:text-[12px] tracking-widest uppercase font-bold"
              style={{ color: "var(--red)" }}
            >
              <X className="w-4 h-4" /> THIS IS NOT FOR YOU IF:
            </div>
            {noItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 mb-4 md:mb-5"
              >
                <X className="flex-shrink-0 w-4 h-4 mt-1" style={{ color: "var(--red)" }} />
                <span className="text-[14px] md:text-[15px] leading-relaxed font-montserrat" style={{ color: "#CCC" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
