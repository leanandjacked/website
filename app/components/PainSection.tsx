const pains = [
  "YouTube workouts that give you exercises but never a complete, connected system. No structure. No progression. No results.",
  "Diets that don't work with Indian home food. Your family isn't cooking chicken breast and broccoli.",
  "Starting the gym, stopping, restarting. Same weight. Same frustration. Every few months.",
  "Generic ₹999 products same template for everyone, which means optimised for no one.",
  "1:1 coaching costs ₹10,000–₹20,000 a month not realistic for most people.",
];

export default function PainSection() {
  return (
    <section
      className="py-12 md:py-16"
      style={{ background: "var(--dark2)" }}
    >
      <div className="content-wrap px-4 md:px-0" style={{ maxWidth: "800px" }}>
        <p className="section-label mb-2 md:mb-3">The Problem</p>
        <h2
          className="bebas section-title mb-6 md:mb-8 text-[2.5rem] md:text-[4.5rem] leading-none"
        >
          Let's Be Honest.
          <br />
          You've{" "}
          <span className="accent" style={{ color: "var(--orange)" }}>
            Already Tried.
          </span>
        </h2>

        <p
          className="text-[14px] md:text-[15px] leading-relaxed mb-8 md:mb-10 font-montserrat"
          style={{ color: "var(--grey)" }}
        >
          The problem is not your willpower. The problem is you've never had the right system built for your life.
        </p>

        <div className="flex flex-col gap-4">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex gap-4 md:gap-5 items-start p-5 md:p-6 rounded-xl border border-[#2a2a2a] transition-all hover:border-[#444]"
              style={{ background: "#0a0a0a" }}
            >
              <div
                className="w-6 h-6 min-w-[24px] rounded flex items-center justify-center text-[12px] font-black mt-0.5"
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  color: "var(--red)",
                }}
              >
                ✕
              </div>
              <p
                className="text-[14px] md:text-[15px] leading-relaxed m-0 font-montserrat"
                style={{ color: "#CCC" }}
              >
                <strong style={{ color: "#FFF" }}>{pain.split(" that ")[0].split(" costs ")[0].split(" with ")[0]}</strong>{pain.replace(pain.split(" that ")[0].split(" costs ")[0].split(" with ")[0], "")}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 md:mt-16 bg-black p-6 md:p-10 text-center rounded-lg border border-[#333]"
        >
          <div className="text-[11px] md:text-[12px] tracking-[1.5px] uppercase mb-3 md:mb-4 font-montserrat" style={{ color: "var(--grey)" }}>
            There is a third option.
          </div>
          <div className="bebas text-[1.8rem] md:text-[3rem] leading-[1.1]" style={{ color: "#FFF" }}>
            THE PERSONALISATION OF <span style={{ color: "var(--orange)" }}>1:1 COACHING.</span><br />
            THE ACCESSIBILITY OF A <span style={{ color: "var(--orange)" }}>₹999 PRODUCT.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
