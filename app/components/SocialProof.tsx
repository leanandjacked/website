import { Camera, Star } from "lucide-react";

const clients = [
  {
    name: "Meet",
    stat: "110kg - 74kg | 36 Kilos Lost | 8 Months",
    story:
      "Engineering student. Preparing for entrance exams. Studying 12 hours a day. No gym background. No time for complex diets. Trained 3 days a week, ate home food the entire time. Zero crash dieting. Zero cardio. 36 kilos gone.",
    photo: "meet.jpeg",
  },
  {
    name: "Kabir",
    stat: "114kg - 79kg | 35 Kilos Lost | 7 Months",
    story:
      "Struggled with obesity his entire life. Tried keto, intermittent fasting, 6-day training programs. Nothing worked. Came with prediabetes and high cholesterol. We did the opposite of what everyone recommended: 3-4 sessions a week, home-cooked food, no cardio. Reversed it all.",
    photo: "kabir.PNG",
  },
  {
    name: "Dr. Ajinkya",
    stat: "100kg - 75kg | Type 2 Diabetes Reversed | Age 30",
    story:
      "Diagnosed with Type 2 diabetes at 23. Got COVID three times. Busy surgeon: long hours, no time, no energy. One day he asked: what's the point of earning money if I die early? Today he's 75kg. Stronger than his 20s. Diabetes reversed.",
    photo: "drajinkya.jpeg",
  },
  {
    name: "Gaurav",
    stat: "92kg - 75kg | 12 Weeks | Zero Back Pain",
    story:
      "37 years old. Corporate job. MRI-confirmed disc herniation. Chronic back pain. No gym in years. We didn't train harder: we trained smarter. 3 sessions a week, 45 minutes, nutrition built around his real schedule. 12 weeks later, 17 kilos gone, zero back pain, walked back into the gym on his own.",
    photo: "gaurav.PNG",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
    ))}
  </div>
);

export default function SocialProof() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <p className="section-label mb-2 md:mb-3">Client Results</p>
        <h2 className="bebas section-title mb-2 md:mb-3 text-[2.5rem] md:text-[3.5rem] leading-none">
          Real People.{" "}
          <span style={{ color: "var(--orange)" }}>Real Results.</span>
        </h2>
        <p
          className="text-[12px] md:text-[13px] mb-8 md:mb-10 font-montserrat"
          style={{ color: "var(--grey)" }}
        >
          No fake testimonials. No AI stock images. These are actual clients.
        </p>

        {/* Marquee Social Proof */}
        <div className="w-full relative py-2 mb-10">
          <div className="marquee-container">
            <div className="marquee-content pr-[2rem]">
              {[
                "Down 5kg and back pain gone!",
                "Easiest meal plan to follow",
                "The workouts feel incredible",
                "Reversed my pre-diabetes in 4 months",
                "Not hungry at all on this diet",
                "Finally a system for Indian food",
              ].map((msg, i) => (
                <div key={i} className="flex items-center gap-2 text-[#888] font-bold text-[13px] tracking-wide whitespace-nowrap bg-[#111] px-4 py-2 rounded-full border border-[#222]">
                  <StarRating /> {msg}
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {[
                "Down 5kg and back pain gone!",
                "Easiest meal plan to follow",
                "The workouts feel incredible",
                "Reversed my pre-diabetes in 4 months",
                "Not hungry at all on this diet",
                "Finally a system for Indian food",
              ].map((msg, i) => (
                <div key={i} className="flex items-center gap-2 text-[#888] font-bold text-[13px] tracking-wide whitespace-nowrap bg-[#111] px-4 py-2 rounded-full border border-[#222]">
                  <StarRating /> {msg}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {clients.map((c, i) => (
            <div
              key={i}
              className="card-orange p-0 overflow-hidden"
            >
              {/* Transformation image */}
              <div className="w-full overflow-hidden border-b border-[#2a2a2a]"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={`/${c.photo}`}
                  alt={`${c.name} transformation`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "top center" }}
                />
              </div>

              <div className="p-5 md:p-6">
                <div
                  className="bebas text-[1.8rem] md:text-[2rem] leading-none mb-1 md:mb-2"
                  style={{ color: "var(--orange)", letterSpacing: "0.04em" }}
                >
                  {c.name}
                </div>
                <div
                  className="text-[10px] md:text-[11px] font-bold tracking-[1.5px] uppercase mb-3 md:mb-4 font-montserrat text-white"
                >
                  {c.stat}
                </div>
                <p
                  className="text-[13px] md:text-[14px] leading-relaxed m-0 font-montserrat"
                  style={{ color: "var(--grey)" }}
                >
                  {c.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
