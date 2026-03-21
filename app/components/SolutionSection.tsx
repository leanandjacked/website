import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tags = ["No Expensive Coaching", "No Foreign Diets", "No Guesswork"];

export default function SolutionSection() {
  return (
    <section
      className="py-16 md:py-20 text-center"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <p className="section-label mb-2 md:mb-3">The Solution</p>

        <h2
          className="bebas mb-1 md:mb-2 text-[1.8rem] md:text-[2.5rem]"
          style={{ letterSpacing: "0.04em", color: "#fff" }}
        >
          Introducing
        </h2>

        <div
          className="bebas mb-6 md:mb-8 text-[3rem] md:text-[4.5rem] leading-[1.1] md:leading-none"
          style={{ color: "var(--orange)", letterSpacing: "0.04em" }}
        >
          The Lean &amp; Jacked
          <br />
          Fat Loss Blueprint
        </div>

        <p
          className="text-[14px] md:text-[15px] leading-relaxed mb-6 md:mb-8 mx-auto font-montserrat max-w-[500px]"
          style={{ color: "var(--grey)" }}
        >
          The exact system behind Meet&apos;s 36kg transformation and Kabir&apos;s
          diabetes reversal broken down into a simple, follow-it-today guide
          built specifically for Indian students and beginners.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 md:py-2 text-[10px] md:text-[11px] font-bold tracking-[1.5px] uppercase font-montserrat rounded-full border border-[#333]"
              style={{ background: "var(--dark2)", color: "var(--orange)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href="#buy" className="btn-orange w-full max-w-[400px] flex items-center justify-center gap-2 mx-auto">
          Get Instant Access for ₹999 <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
