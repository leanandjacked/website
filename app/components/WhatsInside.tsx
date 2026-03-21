import Link from "next/link";

const items = [
  {
    num: "01",
    title: "CUSTOM NUTRITION PLAN - PERSONALISED TO YOU",
    desc: <>Not a template. Built around <strong style={{ color: "var(--orange)" }}>your food preferences, your eating habits, your height + weight</strong>. Dal, roti, rice, paneer, eggs  real Indian food. Veg and non-veg versions. Delivered to your WhatsApp within 24 hours of purchase.</>,
    value: "₹4,999",
  },
  {
    num: "02",
    title: "3-PHASE NUTRITION SYSTEM  UPDATED EVERY 3 WEEKS",
    desc: <>You receive <strong style={{ color: "var(--orange)" }}>3 updated diet plans across 60 days</strong>. Just like a 1:1 client, as you progress, calories and macros are recalibrated to ensure you don't hit a plateau or waste time.</>,
    value: "₹2,999",
  },
  {
    num: "03",
    title: "MONTHLY 1:1 CALL WITH ZAID  15 MINUTES, EVERY MONTH",
    desc: <>Do not ignore. Every month, a <strong style={{ color: "var(--orange)" }}>15-min consultation call</strong> with the coach  to review your progress, troubleshoot, and keep accountability. A single session costs ₹1,500-₹2,000 in India. You get one every month. Included.</>,
    value: "₹5,000",
  },
  {
    num: "04",
    title: "8-WEEK HIT TRAINING PROGRAM  GYM & HOME",
    desc: <>3 sessions per week. 45 minutes max. Compound lifts only. Gets harder as you get stronger. <strong style={{ color: "var(--orange)" }}>Both gym and home versions included</strong>. No gym? Home workout included.</>,
    value: null,
  },
  {
    num: "05",
    title: "CALORIE & MACRO CALCULATOR",
    desc: <>Find your exact daily calorie target in 2 minutes. No app needed. Built for your height, weight, activity levels, and goal. <strong style={{ color: "var(--orange)" }}>Step-by-step text on your macro setup and daily record.</strong></>,
    value: null,
  },
  {
    num: "06",
    title: "THE BLOODWORK BASICS GUIDE",
    desc: <>The 5 blood markers every overweight person should check before starting any fat loss program  and what each one means for your progress. <strong style={{ color: "var(--orange)" }}>No other ₹999 product includes this. Anywhere.</strong></>,
    value: "₹999",
  },
  {
    num: "07",
    title: "BEGINNER BODYWEIGHT PROGRAM",
    desc: <>No gym? No problem. Full home workout plan. <strong style={{ color: "var(--orange)" }}>Zero equipment needed</strong>. Same HIT principles, adapted for home execution.</>,
    value: null,
  },
  {
    num: "08",
    title: "THE SCIENCE BEHIND WHY IT WORKS",
    desc: <>You won't just follow the plan blindly  you'll <strong style={{ color: "var(--orange)" }}>understand the principles</strong> behind every macro combination, rep range, and protocol we look after. Building the knowledge you keep for life.</>,
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
          <span style={{ color: "var(--orange)" }}>The Blueprint</span>
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

        <div className="mt-12 md:mt-16 text-center">
          <Link href="#buy" className="btn-orange w-full max-w-[400px]">
            Get Access Now
          </Link>
        </div>
      </div>
    </section>
  );
}
