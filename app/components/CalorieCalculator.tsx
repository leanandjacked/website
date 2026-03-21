"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Flame, Scale, BicepsFlexed, Beef, Soup, Droplets, BarChart3, ArrowRight } from "lucide-react";

type Gender = "male" | "female";
type Activity = "sedentary" | "lightly" | "moderately" | "very";
type Goal = "fat_loss" | "recomp" | "bulk";

const activityLabels: Record<Activity, string> = {
  sedentary: "Sedentary  Little/no exercise",
  lightly: "Lightly Active  1-3 days/week",
  moderately: "Moderately Active  3-5 days/week",
  very: "Very Active  Hard training 6-7 days/week",
};
const activityMultipliers: Record<Activity, number> = {
  sedentary: 1.2, lightly: 1.375, moderately: 1.55, very: 1.725,
};
const goalLabels: Record<Goal, React.ReactNode> = {
  fat_loss: <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-orange-500 fill-orange-500" /> Fat Loss</span>,
  recomp: <span className="flex items-center gap-2"><Scale className="w-4 h-4 text-orange-500" /> Body Recomp</span>,
  bulk: <span className="flex items-center gap-2"><BicepsFlexed className="w-4 h-4 text-orange-500" /> Lean Bulk</span>,
};
const goalAdjustments: Record<Goal, number> = {
  fat_loss: -400, recomp: 0, bulk: 250,
};

function MacroBar({ label, icon: Icon, grams, cals, totalCals, color }: {
  label: string; icon: any; grams: number; cals: number; totalCals: number; color: string;
}) {
  const pct = Math.max(0, Math.min(100, (cals / totalCals) * 100));
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5 flex-wrap gap-2">
        <span className="text-[13px] font-bold text-white font-montserrat flex items-center gap-2">
          <Icon className="w-4 h-4" style={{ color }} /> {label}
        </span>
        <span className="text-[12px] text-gray-400 font-montserrat">
          <span className="text-white font-bold">{grams}g</span> · {cals} kcal · {Math.round(pct)}%
        </span>
      </div>
      <div className="h-2 bg-[#222] rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ background: color, width: `${pct}%` }} />
      </div>
    </div>
  );
}

const inputStyle = "w-full bg-[#1A1A1A] border border-[#333] text-white text-[15px] rounded-lg p-3.5 font-montserrat font-medium outline-none transition-colors focus:border-orange-500 appearance-none";
const labelStyle = "block text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-2 font-montserrat";

export default function CalorieCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<Gender>("male");
  const [activity, setActivity] = useState<Activity>("moderately");
  const [goal, setGoal] = useState<Goal>("fat_loss");

  const results = useMemo(() => {
    const w = parseFloat(weight), h = parseFloat(height), a = parseFloat(age);
    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) return null;
    const constant = gender === "male" ? 5 : -161;
    const bmr = Math.round(10 * w + 6.25 * h - 5 * a + constant);
    const tdee = Math.round(bmr * activityMultipliers[activity]);
    const target = Math.round(tdee + goalAdjustments[goal]);
    const proteinG = Math.round(w * 2), proteinCal = proteinG * 4;
    const fatG = Math.round(w * 0.9), fatCal = Math.round(fatG * 9);
    const remaining = target - proteinCal - fatCal;
    const carbsG = Math.max(0, Math.round(remaining / 4)), carbsCal = carbsG * 4;
    return { bmr, tdee, target, proteinG, proteinCal, fatG, fatCal, carbsG, carbsCal };
  }, [weight, height, age, gender, activity, goal]);

  const toggleBtnClass = (active: boolean) => {
    return `p-3 rounded-lg text-[13px] font-bold font-montserrat tracking-wide cursor-pointer transition-all border-2 ${active ? "border-orange-500 bg-orange-500 text-white shadow-[0_4px_16px_rgba(255,107,0,0.25)]" : "border-[#333] bg-[#1A1A1A] text-gray-400"}`;
  };

  return (
    <section className="py-16 md:py-20 bg-black border-y border-[#1a1a1a]">
      <div className="content-wrap px-4 md:px-0 max-w-[800px]">
        <p className="section-label mb-2 md:mb-3">Free Tool</p>
        <h2 className="bebas section-title mb-2 md:mb-3 text-[2.5rem] md:text-[3.5rem] leading-none">
          Your Personal{" "}
          <span style={{ color: "var(--orange)" }}>Calorie &amp; Macro</span>{" "}
          Calculator
        </h2>
        <p
          className="text-[13px] md:text-[14px] leading-relaxed mb-8 md:mb-10 font-montserrat max-w-[600px]"
          style={{ color: "var(--grey)" }}
        >
          Get your exact BMR, daily calorie target, and full macro breakdown in seconds.
          Based on the Mifflin-St Jeor formula the same method used inside the blueprint.
        </p>

        {/* Form card */}
        <div className="bg-[#0D0D0D] border border-[#222] rounded-xl p-5 md:p-7 mb-5 md:mb-6">
          {/* Weight + Height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-5 md:mb-6">
            <div>
              <label className={labelStyle}>Weight (kg)</label>
              <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 85" className={inputStyle} min="30" max="250" />
            </div>
            <div>
              <label className={labelStyle}>Height (cm)</label>
              <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 175" className={inputStyle} min="100" max="250" />
            </div>
          </div>

          {/* Age */}
          <div className="mb-5 md:mb-6">
            <label className={labelStyle}>Age (years)</label>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 24" className={inputStyle} min="10" max="100" />
          </div>

          {/* Gender */}
          <div className="mb-5 md:mb-6">
            <label className={labelStyle}>Gender</label>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {(["male", "female"] as Gender[]).map(g => (
                <button key={g} onClick={() => setGender(g)} className={toggleBtnClass(gender === g)}>
                  {g === "male" ? "♂ Male" : "♀ Female"}
                </button>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="mb-5 md:mb-6">
            <label className={labelStyle}>Activity Level</label>
            <select value={activity} onChange={e => setActivity(e.target.value as Activity)} className={`${inputStyle} cursor-pointer`}>
              {(Object.keys(activityLabels) as Activity[]).map(a => (
                <option key={a} value={a}>{activityLabels[a]}</option>
              ))}
            </select>
          </div>

          {/* Goal */}
          <div>
            <label className={labelStyle}>Your Goal</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {(Object.keys(goalLabels) as Goal[]).map(g => (
                <button key={g} onClick={() => setGoal(g)} className={toggleBtnClass(goal === g)} style={{ fontSize: "12px" }}>
                  {goalLabels[g]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {results ? (
          <div className="bg-[#0D0D0D] border border-[#222] rounded-xl p-5 md:p-7 mb-5 md:mb-6">
            <h3 className="bebas text-[1.8rem] text-white tracking-wider mb-5 md:mb-6 leading-none">
              Your Results
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { label: "BMR", val: results.bmr, note: "kcal at rest", highlight: false },
                { label: "TDEE", val: results.tdee, note: "kcal maintenance", highlight: false },
                { label: "Target", val: results.target, note: "kcal/day", highlight: true },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center rounded-lg p-3 md:p-5 ${s.highlight ? "bg-orange-500 col-span-2 lg:col-span-1" : "bg-[#111]"}`}
                >
                  <div className={`text-[10px] md:text-[11px] tracking-widest uppercase mb-1 md:mb-2 font-montserrat ${s.highlight ? "text-white/75" : "text-gray-500"}`}>{s.label}</div>
                  <div className="bebas text-[2rem] md:text-[2.5rem] text-white leading-none">{s.val}</div>
                  <div className={`text-[9px] md:text-[10px] mt-1 md:mt-1.5 font-montserrat ${s.highlight ? "text-white/60" : "text-[#555]"}`}>{s.note}</div>
                </div>
              ))}
            </div>

            <h4 className="bebas text-[1.3rem] md:text-[1.5rem] text-white tracking-wider mb-4 md:mb-5 leading-none">
              Daily Macro Breakdown
            </h4>
            <MacroBar label="Protein" icon={Beef} grams={results.proteinG} cals={results.proteinCal} totalCals={results.target} color="var(--orange)" />
            <MacroBar label="Carbohydrates" icon={Soup} grams={results.carbsG} cals={results.carbsCal} totalCals={results.target} color="#3B82F6" />
            <MacroBar label="Fat" icon={Droplets} grams={results.fatG} cals={results.fatCal} totalCals={results.target} color="#F59E0B" />

            <div className="text-center mt-6 md:mt-8">
              <Link href="#buy" className="btn-orange w-full text-[14px] md:text-[15px] py-3.5 md:py-4 px-5 flex items-center justify-center gap-2">
                Get Indian Meal Plans Built Around These Numbers <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#0D0D0D] border border-dashed border-[#2a2a2a] rounded-xl p-8 md:p-10 text-center mb-5 md:mb-6 flex flex-col items-center">
            <div className="mb-4">
              <BarChart3 className="w-12 h-12 text-[#333]" />
            </div>
            <p className="text-[#555] text-[12px] md:text-[13px] font-montserrat m-0">
              Fill in your details above to see your personalised results
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
