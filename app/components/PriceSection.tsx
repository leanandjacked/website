import DynamicNudge from "./DynamicNudge";
import { Flame, ShieldCheck, CreditCard, Lock, Zap, Check } from "lucide-react";

export default function PriceSection() {
  return (
    <section
      id="buy"
      className="py-16 md:py-20 text-center"
      style={{ background: "var(--orange)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <h2 className="bebas text-[2.2rem] md:text-[2.8rem] text-white tracking-wider mb-2 leading-none flex items-center justify-center gap-3">
          <Flame className="w-8 h-8 md:w-10 md:h-10 fill-white" /> Launch Price  Ending Soon
        </h2>
        <p className="text-[13px] md:text-[14px] font-semibold text-white/85 mb-4 font-montserrat">
          Everything you need to start your transformation today
        </p>

        {/* Live Scarcity Badge
        <div className="flex flex-col items-center gap-1.5 mb-6">
          <div className="bg-white text-orange-600 text-[10px] font-black uppercase tracking-[2px] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl animate-pulse">
            <Flame className="w-3 h-3 fill-current" /> Live Stock
          </div>
          <p className="text-white text-[12px] font-bold font-montserrat tracking-tight">
            Only 3 copies remaining at <span className="underline decoration-2 underline-offset-4">₹999</span> today.
          </p>
        </div> */}

        {/* Big price */}
        <div className="bebas text-[5.5rem] md:text-[8rem] leading-none text-white my-4 md:my-5 tracking-tight">
          ₹999
        </div>
        <p className="text-[12px] md:text-[13px] font-semibold text-white/80 mb-7 md:mb-8 font-montserrat">
          One payment. Instant access. Yours forever.
        </p>

        {/* Guarantee box */}
        <div className="bg-black/20 border border-white/20 rounded-xl p-6 md:p-8 mb-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
          </div>
          <div className="bebas text-[1.4rem] md:text-[1.6rem] text-white tracking-wider mb-2 leading-none">
            7-Day Money Back Guarantee
          </div>
          <p className="text-white/80 text-[12px] md:text-[13px] leading-relaxed m-0 font-montserrat">
            If you&apos;re not satisfied within 7 days of purchase, email us for a
            full refund. No questions asked. Zero risk.
          </p>
        </div>

        {/* Payment button  black on orange per CLAUDE.md */}
        <a
          href="#"
          id="rzp-button"
          className="btn-black text-[1rem] md:text-[1.1rem] mb-2 inline-flex w-full sm:w-auto px-6 py-4 items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" /> Pay ₹999  Get Instant Access
        </a>
        <br />
        <div className="mb-2">
          <DynamicNudge />
        </div>

        {/* Payment notes */}
        <div className="bg-black/25 border border-white/10 rounded-lg p-4 md:p-5 mt-4">
          <p className="text-[12px] md:text-[13px] text-white/75 mb-2 font-montserrat">
            <strong className="text-white">Secure Payment via Razorpay</strong>
            <br />
            UPI · Credit/Debit Card · Net Banking · Wallets
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-[10px] md:text-[11px] text-white/50 font-montserrat items-center">
            <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> SSL Secured</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 fill-current" /> Instant Download</span>
            <span className="flex items-center gap-1.5"><Check className="w-3 h-3" /> Razorpay Protected</span>
          </div>
        </div>
      </div>
    </section>
  );
}
