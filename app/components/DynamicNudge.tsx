"use client";
import React, { useEffect, useState } from "react";

export default function DynamicNudge() {
  const [mounted, setMounted] = useState(false);
  const [buyers, setBuyers] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const randomCount = Math.floor(Math.random() * (120 - 50 + 1) + 50);
    setBuyers(randomCount);
    
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setBuyers(prev => prev ? prev + 1 : randomCount);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !buyers) return <div className="h-6"></div>;

  return (
    <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 border border-orange-500/20 px-3 py-1.5 rounded-full text-[11px] md:text-[12px] font-bold mt-4 font-montserrat tracking-wide animate-in fade-in duration-500">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
      </span>
      {buyers} people bought today
    </div>
  );
}
