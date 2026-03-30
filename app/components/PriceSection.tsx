import DynamicNudge from "./DynamicNudge";
import { ShieldCheck, Lock, Zap, Check, ChevronRight } from "lucide-react";
import RazorpayButton from "./RazorpayButton";

export default function PriceSection() {
  return (
    <section
      id="buy"
      className="py-16 md:py-20 text-center"
      style={{ background: "var(--orange)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <h2 className="bebas text-[1.8rem] md:text-[2.2rem] text-white tracking-wider mb-2 leading-none flex items-center justify-center gap-3">
          <Zap className="w-6 h-6 md:w-8 md:h-8 fill-white" /> PRE-LAUNCH PRICE | ₹999 UNTIL 30 APRIL 2026 ONLY
        </h2>

        {/* Live Scarcity Badge
        <div className="flex flex-col items-center gap-1.5 mb-6">
          <div className="bg-white text-orange-600 text-[10px] font-black uppercase tracking-[2px] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl animate-pulse">
            <Flame className="w-3 h-3 fill-current" /> Live Stock
          </div>
          <p className="text-white text-[12px] font-bold font-montserrat tracking-tight">
            Only 3 copies remaining at <span className="underline decoration-2 underline-offset-4">₹999</span> today.
          </p>
        </div> */}

        <div className="bebas text-[5.5rem] md:text-[8rem] leading-none text-white my-4 md:my-5 tracking-tight">
          ₹999
        </div>
        <p className="text-[12px] md:text-[13px] font-semibold text-white/80 mb-7 md:mb-8 font-montserrat">
          One payment · Instant access · Yours forever · Less than ₹11/day
        </p>

        {/* Checklist */}
        <div className="flex justify-center mb-8">
          <div className="text-left font-montserrat text-[13px] md:text-[14px] text-white flex flex-col gap-3">
            {[
              "Personalised nutrition plan built for your food & lifestyle",
              "3-Phase Nutrition System diet updated every 3 weeks",
              "Monthly 15-min 1:1 coaching call with Zaid",
              "Monthly written progress review training, nutrition & accountability",
              "12-Week HIT Training Program (Gym + Home versions)",
              "Calorie & Macro Calculator",
              "Bloodwork Basics Guide (Exclusive)",
              "Beginner Bodyweight Program",
              "The Science Behind Why It Works",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee box */}
        <div className="bg-black/20 border border-white/20 rounded-xl p-6 md:p-8 mb-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
          </div>
          <p className="text-white text-[13px] md:text-[14px] leading-relaxed m-0 font-montserrat font-bold tracking-wide">
            7-Day Money Back Guarantee No questions asked. Zero risk.
          </p>
        </div>

        <div className="w-full sm:w-auto mx-auto max-w-[340px] mb-2 flex justify-center">
          <a 
            href="https://rzp.io/rzp/leanandjacked"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black w-full flex justify-center items-center h-auto py-4 px-8 font-extrabold tracking-wide text-[1.1rem] rounded-xl shadow-2xl transition-all duration-300 gap-2"
          >
            PAY ₹999 — GET INSTANT ACCESS <ChevronRight className="w-5 h-5" />
          </a>
        </div>
        <br />
        <div className="mb-2">
          <DynamicNudge />
        </div>

        {/* Payment notes */}
        <div className="bg-black/25 border border-white/10 rounded-lg p-4 md:p-5 mt-4 flex items-center justify-center gap-2 text-[12px] md:text-[14px] font-bold text-white/90 font-montserrat">
          <Lock className="w-4 h-4" /> Secure Payment via Razorpay · UPI · Card · Net Banking · Wallets
        </div>
      </div>
    </section>
  );
}
