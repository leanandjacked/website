export default function FailedIndustry() {
  return (
    <section
      className="py-12 md:py-16 text-center"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0" style={{ maxWidth: "700px" }}>
        <p className="section-label mb-2 md:mb-3">Why this exists</p>
        <h2
          className="bebas section-title mb-6 md:mb-8 text-[2.5rem] md:text-[4rem] leading-none"
        >
          The Fitness Industry
          <br />
          <span style={{ color: "var(--orange)" }}>Failed You</span>
          <br />
          On Purpose.
        </h2>

        <p
          className="text-[14px] md:text-[15px] text-gray-400 leading-relaxed mb-6 md:mb-8 font-montserrat"
          style={{ color: "var(--grey)" }}
        >
          After receiving <strong>hundreds of DMs</strong> from students, working professionals, and men in their 30s and 40s  the message was always the same:
        </p>

        <blockquote
          className="p-4 md:p-6 mb-6 md:mb-8 text-left italic text-gray-200 text-[14px] md:text-[15px] rounded-r-lg font-montserrat leading-relaxed"
          style={{
            background: "var(--dark2)",
            borderLeft: "4px solid var(--orange)",
          }}
        >
          "Zaid, I want to change. But I can't afford ₹10,000-₹20,000 a month for coaching. I've tried everything. I don't even want to take my shirt off anymore."
        </blockquote>

        <div
          className="text-left flex flex-col gap-4 md:gap-5 mb-8 md:mb-10 text-[14px] md:text-[15px] leading-relaxed font-montserrat"
          style={{ color: "var(--grey)" }}
        >
          <p className="m-0">
            These weren't lazy people. They were <strong>hardworking people being failed by an industry</strong> that prices real coaching out of reach and replaces it with generic PDFs built for someone else's body, someone else's kitchen, someone else's life.
          </p>

          <p className="m-0">
            Young men losing confidence. Energy disappearing. <strong>Testosterone dropping. Libido gone. Depression creeping in</strong>  all tied to a body they felt they had no control over. Men in their 30s and 40s watching their health deteriorate while spending every waking hour providing for their families.
          </p>

          <p className="m-0">
            That is why this blueprint exists. Not to sell a product. <strong>To give every serious person access to a system that actually works</strong>  at a price that removes every excuse.
          </p>
        </div>

        {/* Price Highlight Box */}
        <div
          className="p-6 md:p-8 rounded-lg mx-auto max-w-[400px] border border-gray-800"
          style={{ background: "var(--dark2)" }}
        >
          <div
            className="bebas text-5xl md:text-[4.5rem] leading-none mb-1 md:mb-2"
            style={{ color: "var(--orange)" }}
          >
            ₹11
          </div>
          <div
            className="text-[11px] md:text-[12px] tracking-widest font-bold uppercase mb-2 md:mb-3 font-montserrat"
            style={{ color: "#CCC" }}
          >
            PER DAY*
          </div>
          <div
            className="text-[11px] md:text-[12px] font-montserrat"
            style={{ color: "var(--grey)" }}
          >
            Less than a single cup of chai every morning.
          </div>
        </div>
      </div>
    </section>
  );
}
