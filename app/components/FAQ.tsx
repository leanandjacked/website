import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How is this different from free YouTube content?",
    a: "YouTube gives you individual videos with no structure. This gives you a complete, connected system your calories, your personalised meals, your workouts, your bloodwork, your monthly coaching calls all in one place, all designed to work together. You don't think. You execute.",
  },
  {
    q: "What makes this personalised?",
    a: "Most ₹999 products hand you a generic template. This includes a custom nutrition plan built around your specific food preferences, eating habits, and lifestyle delivered within 24 hours. Plus your diet is updated every 3 weeks and you receive a personal written progress review every 4 weeks.",
  },
  {
    q: "How do I actually send you my progress?",
    a: "After purchase, you'll receive a WhatsApp link to connect with Zaid directly. Every 4 weeks, he'll message you to collect your training log and progress data, and send your written review within 48 hours. No forms. No portals. Direct access.",
  },
  {
    q: "I'm a student with almost no time. Can I do this?",
    a: "This was built for you. Students have gone through this system while studying 10–14 hours a day. The training requires less than 3 hours per week. The nutrition is built around food your family already cooks.",
  },
  {
    q: "I'm vegetarian. Does this work for me?",
    a: "Yes. All meal plans include a complete vegetarian version built around dal, paneer, curd, eggs, and other high-protein Indian foods. No foreign ingredients. No meal prep.",
  },
  {
    q: "I don't have a gym. Can I still use this?",
    a: "Yes. The package includes a complete home bodyweight program that requires zero equipment alongside the gym program.",
  },
  {
    q: "What are the monthly 1:1 calls exactly?",
    a: "Every month, a 15-minute scheduled call with Zaid directly to review your progress, troubleshoot, and update your targets. A standalone coaching call in India runs ₹1,500–₹3,000. You get one every month, included.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "If you purchase the package and feel it isn't right for you, email within 7 days for a full refund. No questions asked. Zero risk.",
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
                  <Plus className="group-open:hidden w-5 h-5" />
                  <Minus className="hidden group-open:inline w-5 h-5" />
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
