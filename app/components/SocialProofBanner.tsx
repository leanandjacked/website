"use client";
import React from "react";
import { BicepsFlexed, CheckCircle2 } from "lucide-react";

const notifications = [
  { name: "Rohit (Mumbai)", action: "just purchased the blueprint" },
  { name: "Aman", action: "unlocked the diet plans" },
  { name: "Sneha", action: "started her transformation" },
  { name: "Karan (Delhi)", action: "bought the blueprint" },
  { name: "Dr. Rahul", action: "reversed his prediabetes" },
  { name: "Sameer", action: "lost 12kg in 8 weeks" },
  { name: "Aditi", action: "just started her journey" },
];

export default function SocialProofBanner() {
  return (
    <div className="w-full overflow-hidden bg-black/40 py-3 border-y border-white/5 select-none mt-2">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set of notifications */}
        <div className="flex items-center gap-8 px-4">
          {notifications.map((notif, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
              <p className="text-[11px] md:text-[12px] text-zinc-300 font-montserrat m-0">
                <span className="font-bold text-white uppercase tracking-tight">{notif.name}</span>{" "}
                <span className="text-zinc-500">{notif.action}</span>
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500/20 mx-4" />
            </div>
          ))}
        </div>
        {/* Duplicate set for infinite loop */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {notifications.map((notif, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
              <p className="text-[11px] md:text-[12px] text-zinc-300 font-montserrat m-0">
                <span className="font-bold text-white uppercase tracking-tight">{notif.name}</span>{" "}
                <span className="text-zinc-500">{notif.action}</span>
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500/20 mx-4" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
