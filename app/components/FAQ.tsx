const faqs = [
  {
    q: "How is this different from free YouTube content?",
    a: "YouTube gives you individual videos with no structure. This gives you a complete system: your calories, your meals, your workouts, your bloodwork  all in one place, all connected. You don't think. You execute.",
  },
  {
    q: "I'm vegetarian. Does this work for me?",
    a: "Yes. All meal plans include a full vegetarian version with dal, paneer, curd, eggs, and other high-protein Indian foods. No foreign ingredients. No meal prep.",
  },
  {
    q: "I don't have a gym. Can I still use this?",
    a: "Yes. The blueprint includes a complete home bodyweight program that requires zero equipment alongside the gym program. Pick whichever fits your situation.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "If you download the blueprint and feel it isn't right for you, email within 7 days for a full refund. No questions asked. Zero risk.",
  },
];

export default function FAQ() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <p className="section-label mb-2 md:mb-3">Common Questions</p>
        <h2 className="bebas section-title mb-8 md:mb-12 text-[2.5rem] md:text-[3.5rem] leading-none">
          FAQ
        </h2>

        <div className="border-t border-[#1E1E1E]">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border-b border-[#1E1E1E] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="w-full text-left flex justify-between items-start gap-4 py-5 md:py-6 bg-transparent border-none cursor-pointer list-none select-none"
              >
                <span
                  className="text-[14px] md:text-[15px] font-bold leading-relaxed font-montserrat transition-colors duration-200 text-white group-open:text-[var(--orange)]"
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 text-[30px] md:text-[32px] font-bold leading-[0.5] mt-2 group-open:-mt-[4px] transition-transform duration-200"
                  style={{ color: "var(--orange)" }}
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>

              <div
                className="overflow-hidden opacity-0 group-open:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <p
                  className="text-[13px] md:text-[14px] leading-relaxed pb-5 md:pb-6 m-0 font-montserrat"
                  style={{ color: "var(--grey)" }}
                >
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
