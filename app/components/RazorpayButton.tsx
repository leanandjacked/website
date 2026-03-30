"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

export default function RazorpayButton() {
  return (
    <a
      href="https://rzp.io/rzp/leanandjacked"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full btn-orange flex justify-center items-center h-auto py-3.5 px-6 font-bold tracking-wide text-[16px] rounded-xl shadow-[0_10px_20px_rgba(255,107,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,107,0,0.3)] transition-all duration-300"
    >
      PAY ₹999 — GET INSTANT ACCESS
    </a>
  );
}
