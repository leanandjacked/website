import { ShieldCheck, ArrowRight, Lock, Zap, CheckCircle } from "lucide-react";
import RazorpayButton from "./RazorpayButton";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 text-center bg-[var(--dark2)]">
      <div className="content-wrap px-4 md:px-0">
        <p className="section-label mb-2 md:mb-3">GET STARTED TODAY</p>
        <h2 className="bebas section-title mb-4 md:mb-5 text-[2.5rem] md:text-[3.5rem] leading-none">
          Ready to{" "}
          <span style={{ color: "var(--orange)" }}>Finally Start?</span>
        </h2>
        <p className="text-[14px] md:text-[15px] leading-relaxed mb-6 md:mb-8 font-montserrat text-[var(--grey)] max-w-[600px] mx-auto">
          Everything you need to begin your transformation for less than a single meal at a restaurant.
        </p>

        {/* Guarantee */}
        <div className="bg-black border border-[#2a2a2a] rounded-xl p-6 md:p-8 mb-6 md:mb-8 text-center max-w-[600px] mx-auto flex flex-col items-center">
          <div className="mb-4">
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-orange-500" strokeWidth={1.5} />
          </div>
          <div className="bebas text-[1.4rem] md:text-[1.6rem] text-white tracking-wider mb-2 leading-none">
            7-Day Money Back Guarantee
          </div>
          <p className="text-[var(--grey)] text-[12px] md:text-[13px] leading-relaxed m-0 font-montserrat">
            Zero risk. If you&apos;re not satisfied within 7 days, email us for a
            full refund. No questions asked.
          </p>
        </div>

        <div className="w-full sm:w-auto mx-auto max-w-[300px]">
          <RazorpayButton />
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-[11px] md:text-[12px] text-[#555] mt-6 md:mt-8 font-montserrat items-center">
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Secure Payment</span>
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 fill-current" /> Instant Download</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Lifetime Access</span>
        </div>
      </div>
    </section>
  );
}
