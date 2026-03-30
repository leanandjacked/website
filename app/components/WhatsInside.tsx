import Link from "next/link";

const items = [
  {
    num: "01",
    title: "CUSTOM NUTRITION PLAN PERSONALISED TO YOU",
    desc: <>Not a template. Built around <strong style={{ color: "var(--orange)" }}>your food preferences, your eating habits, your family kitchen</strong>. Dal, roti, rice, paneer, eggs real Indian food. Veg and non-veg versions. Delivered to your WhatsApp within 24 hours of purchase.</>,
    value: "EXCLUSIVE",
  },
  {
    num: "02",
    title: "3-PHASE NUTRITION SYSTEM UPDATED EVERY 3 WEEKS",
    desc: <>You receive <strong style={{ color: "var(--orange)" }}>3 updated diet plans across 90 days</strong>, adjusted in real time based on your progress. Calories and macros recalculated as your body changes. No yo-yo dieting. No plateaus from a static plan.</>,
    value: "UNIQUE",
  },
  {
    num: "03",
    title: "MONTHLY 1:1 CALL WITH ZAID 15 MINUTES, EVERY MONTH",
    desc: <>Direct access. Every month, a <strong style={{ color: "var(--orange)" }}>15-minute one-on-one call</strong> with the coach to review your progress, troubleshoot, and keep momentum. A single coaching call runs ₹1,500–₹3,000 in India. You get one every month.</>,
    value: "INCLUDED",
  },
  {
    num: "04",
    title: "MONTHLY PROGRESS REVIEW TRAINING, NUTRITION & ACCOUNTABILITY",
    desc: <>Every 4 weeks, Zaid personally reviews your training log, nutrition adherence, and progress data and sends you a <strong style={{ color: "var(--orange)" }}>written update with specific adjustments</strong> for the next phase. Not a bot. Not a support team. The coach himself, in writing, every month.</>,
    value: "UNIQUE",
  },
  {
    num: "05",
    title: "12-WEEK HIT TRAINING PROGRAM GYM & HOME",
    desc: <>3 sessions per week. 45 minutes max. Compound lifts only. Gets harder as you get stronger. <strong style={{ color: "var(--orange)" }}>Both gym and home versions included</strong>. No junk volume. No wasted time.</>,
    value: null,
  },
  {
    num: "06",
    title: "CALORIE & MACRO CALCULATOR",
    desc: <>Find your exact daily calorie target in 2 minutes. No app needed. <strong style={{ color: "var(--orange)" }}>Built for your height, weight, activity level, and goal.</strong></>,
    value: null,
  },
  {
    num: "07",
    title: "THE BLOODWORK BASICS GUIDE",
    desc: <>HbA1c, fasting insulin, Vitamin D, LDL, thyroid (TSH) the 5 markers that tell you more about your fat loss than any workout program. What each one means and what to do if yours are off. <strong style={{ color: "var(--orange)" }}>No other ₹999 product includes this. Anywhere.</strong></>,
    value: "EXCLUSIVE",
  },
  {
    num: "08",
    title: "BEGINNER BODYWEIGHT PROGRAM",
    desc: <>No gym? No problem. Full home workout plan. <strong style={{ color: "var(--orange)" }}>Zero equipment needed</strong>. Same HIT principles, adapted for home execution.</>,
    value: null,
  },
  {
    num: "09",
    title: "THE SCIENCE BEHIND WHY IT WORKS",
    desc: <>You won't just follow the plan blindly you'll <strong style={{ color: "var(--orange)" }}>understand the principles</strong> behind every decision. Knowledge you keep for life.</>,
    value: null,
  },
];

export default function WhatsInside() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0" style={{ maxWidth: "800px" }}>
        <p className="section-label mb-2 md:mb-3">What You Get</p>
        <h2
          className="bebas section-title mb-4 md:mb-5 text-[2.5rem] md:text-[4.5rem] leading-none"
        >
          Everything Inside
          <br />
          <span style={{ color: "var(--orange)" }}>The 90-Day Package</span>
        </h2>
        <p
          className="text-[14px] md:text-[15px] leading-relaxed mb-10 md:mb-14 font-montserrat"
          style={{ color: "var(--grey)" }}
        >
          One-time payment. Everything you need to start, execute, and finish your<br className="hidden md:block" />
          transformation  with personal support all the way through.
        </p>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-4 md:gap-6 items-start py-8 md:py-10 relative ${i !== items.length - 1 ? "border-b border-[#222]" : ""}`}
            >
              <div
                className="bebas text-[32px] md:text-[40px] leading-none text-[#333] mt-1 md:-mt-1"
              >
                {item.num}
              </div>

              <div className="flex-1 md:pr-24">
                <div
                  className="bebas text-[#FFF] text-[20px] md:text-[24px] tracking-wide leading-tight mb-2 md:mb-3"
                >
                  {item.title}
                </div>

                {/* On mobile, show the value badge directly below the title */}
                {item.value && (
                  <div
                    className="md:hidden inline-block border border-orange-500 px-2 py-1 mb-3 text-[10px] font-bold tracking-[1.5px] uppercase font-montserrat"
                    style={{ color: "var(--orange)" }}
                  >
                    VALUE: {item.value}
                  </div>
                )}

                <p
                  className="text-[14px] md:text-[15px] leading-relaxed m-0 font-montserrat"
                  style={{ color: "var(--grey)" }}
                >
                  {item.desc}
                </p>
              </div>

              {/* On desktop, show the value badge absolutely positioned */}
              {item.value && (
                <div
                  className="hidden md:block absolute top-10 right-0 border border-orange-500 px-2.5 py-1 text-[10px] font-bold tracking-[1.5px] uppercase font-montserrat"
                  style={{ color: "var(--orange)" }}
                >
                  VALUE: {item.value}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center bg-[#0a0a0a] border border-[#222] rounded-xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <p className="text-[12px] md:text-[13px] font-bold tracking-widest uppercase mb-4 text-orange-500 font-montserrat">
            THIS IS THE PART NO ONE ELSE DOES
          </p>
          <h3 className="bebas text-[2rem] md:text-[3rem] leading-tight text-white mb-6">
            Every 4 Weeks, I Personally Review Your Progress and Send You an Update.
          </h3>
          <p className="text-[14px] md:text-[15px] leading-relaxed mb-6 font-montserrat text-gray-400">
            Training log. Nutrition adherence. Progress data. Zaid reviews it all himself and sends you a written breakdown with exactly what to adjust for the next phase.
          </p>
          <p className="text-[14px] md:text-[15px] leading-relaxed mb-8 font-montserrat text-white font-medium">
            You're not buying a PDF and disappearing into the void. You have someone in your corner for the entire 90 days.
          </p>
          <Link href="#buy" className="btn-orange w-full max-w-[400px] mx-auto text-[16px]">
            Get Access Now
          </Link>
        </div>
      </div>
    </section>
  );
}
