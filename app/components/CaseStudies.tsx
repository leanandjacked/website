"use client";
import React, { useRef, useEffect, useState } from "react";
import { caseStudies, type CaseStudy } from "../case-studies/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!scrollRef.current || isHovered) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        // If scrolled to the end (with a small buffer), go back to start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll horizontally by roughly one card width
          const cardWidth = container.children[0]?.clientWidth || 300;
          container.scrollBy({ left: cardWidth + 16, behavior: "smooth" }); // 16px is the gap
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--dark2)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <p className="section-label mb-2 md:mb-3">CLIENT RESULTS</p>
        <h2 className="bebas section-title mb-2 md:mb-3 text-[2.5rem] md:text-[3.5rem] leading-none">
          Real People.{" "}
          <span style={{ color: "var(--orange)" }}>Real Results.</span>
        </h2>
        <p
          className="text-[13px] md:text-[14px] leading-relaxed mb-8 md:mb-10 font-montserrat"
          style={{ color: "var(--grey)" }}
        >
          No fake testimonials. No AI stock images. These are actual clients.
        </p>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {caseStudies.map((cs: CaseStudy) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="no-underline block w-[280px] md:w-[325px] snap-center shrink-0"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div
                className="card-orange p-4 md:p-5 cursor-pointer h-full flex flex-col overflow-hidden"
                style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
              >
                {/* Transformation photo */}
                <div className="w-full aspect-[3/4] mb-4 md:mb-5 rounded-md overflow-hidden border border-[#2a2a2a]">
                  <img
                    src={`/${cs.photo}`}
                    alt={cs.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-3">
                  <div
                    className="bebas text-[1.4rem] md:text-[1.8rem] leading-none"
                    style={{ color: "var(--orange)", letterSpacing: "0.04em" }}
                  >
                    {cs.name}
                  </div>
                  <div className="flex">
                    <div
                      className="text-[9px] md:text-[10px] font-bold tracking-[1px] uppercase py-1.5 px-3 rounded-full font-montserrat"
                      style={{ background: "var(--orange)", color: "#fff", lineHeight: 1.2 }}
                    >
                      {cs.transformation}
                    </div>
                  </div>
                </div>

                <p
                  className="text-[13px] md:text-[14px] font-semibold mb-2.5 md:mb-3 leading-relaxed font-montserrat"
                  style={{ color: "#fff" }}
                >
                  {cs.tagline}
                </p>

                <p
                  className="text-[12px] md:text-[13px] leading-relaxed mb-4 md:mb-5 font-montserrat flex-grow"
                  style={{ color: "var(--grey)" }}
                >
                  {cs.challenge.slice(0, 160)}…
                </p>

                <div
                  className="text-[11px] md:text-[12px] font-bold tracking-[1px] font-montserrat flex items-center gap-2 mt-auto"
                  style={{ color: "var(--orange)" }}
                >
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
