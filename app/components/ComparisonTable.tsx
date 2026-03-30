import React from "react";
import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Personalised nutrition plan",
    free: <X className="w-4 h-4 text-red-500 mx-auto" />,
    generic: <X className="w-4 h-4 text-red-500 mx-auto" />,
    lj: "Custom to your food & lifestyle",
  },
  {
    feature: "Diet updated every 3 weeks",
    free: <X className="w-4 h-4 text-red-500 mx-auto" />,
    generic: <X className="w-4 h-4 text-red-500 mx-auto" />,
    lj: "Real-time macro adjustment",
  },
  {
    feature: "Monthly 1:1 call with coach",
    free: <X className="w-4 h-4 text-red-500 mx-auto" />,
    generic: <X className="w-4 h-4 text-red-500 mx-auto" />,
    lj: "15-min call every month",
  },
  {
    feature: "Personal monthly progress review",
    free: <X className="w-4 h-4 text-red-500 mx-auto" />,
    generic: <X className="w-4 h-4 text-red-500 mx-auto" />,
    lj: "Written review every 4 weeks",
  },
  {
    feature: "Bloodwork basics guide",
    free: <X className="w-4 h-4 text-red-500 mx-auto" />,
    generic: <X className="w-4 h-4 text-red-500 mx-auto" />,
    lj: "Exclusive no one else includes this",
  },
  {
    feature: "Built for students & busy professionals",
    free: <X className="w-4 h-4 text-red-500 mx-auto" />,
    generic: <X className="w-4 h-4 text-red-500 mx-auto" />,
    lj: "The only plan of its kind",
  },
  {
    feature: "Indian home food compatible",
    free: "Partial",
    generic: "Partial",
    lj: "Dal, roti, rice, paneer, eggs",
  },
  {
    feature: "Proven across 50+ real clients",
    free: <X className="w-4 h-4 text-red-500 mx-auto" />,
    generic: <X className="w-4 h-4 text-red-500 mx-auto" />,
    lj: "Students, surgeons, CEOs, engineers",
  },
];

export default function ComparisonTable() {
  return (
    <section
      className="py-12 md:py-16"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0" style={{ maxWidth: "800px" }}>
        <p className="section-label mb-2 md:mb-4">Why This Is Different</p>
        <h2 className="bebas section-title mb-4 text-[2.5rem] md:text-[3.5rem] leading-none">
          Not Another
          <br />
          <span style={{ color: "var(--orange)" }}>Generic PDF.</span>
        </h2>

        <p
          className="text-[14px] md:text-[15px] leading-relaxed mb-8 md:mb-12 font-montserrat max-w-[600px]"
          style={{ color: "var(--grey)" }}
        >
          Every other ₹999 product in India sells you the same template with different branding. Here's what makes this different.
        </p>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <table
            className="w-full text-left font-montserrat border-collapse min-w-[340px] md:min-w-[600px]"
          >
            <thead>
              <tr>
                <th
                  className="p-2 md:p-4 text-[9px] md:text-[10px] tracking-widest uppercase font-bold border-b border-[#333] w-[35%]"
                  style={{ color: "var(--grey)" }}
                >
                  Feature
                </th>
                <th
                  className="p-1 md:p-4 text-[9px] md:text-[10px] tracking-widest uppercase font-bold border-b border-[#333] text-center w-[15%]"
                  style={{ color: "var(--grey)" }}
                >
                  Free
                </th>
                <th
                  className="p-1 md:p-4 text-[9px] md:text-[10px] tracking-widest uppercase font-bold border-b border-[#333] text-center w-[15%]"
                  style={{ color: "var(--grey)" }}
                >
                  ₹999
                </th>
                <th
                  className="p-2 md:p-4 text-[10px] md:text-[11px] tracking-wider uppercase font-bold border-b-2 rounded-t-lg w-[35%]"
                  style={{
                    color: "var(--orange)",
                    borderBottomColor: "var(--orange)",
                    background: "rgba(255, 102, 0, 0.05)",
                  }}
                >
                  Lean&nbsp;&&nbsp;Jacked 90-Day Package
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: i === rows.length - 1 ? "none" : "1px solid #222",
                  }}
                >
                  <td
                    className="p-2 md:p-4 text-[11px] md:text-[13px] leading-snug"
                    style={{ color: "#CCC" }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="p-1 md:p-4 text-[11px] md:text-[12px] font-bold text-center"
                    style={{ color: row.free === "Partial" ? "var(--grey)" : "inherit" }}
                  >
                    {row.free}
                  </td>
                  <td
                    className="p-1 md:p-4 text-[11px] md:text-[12px] font-bold text-center"
                    style={{ color: row.generic === "Partial" ? "var(--grey)" : "inherit" }}
                  >
                    {row.generic}
                  </td>
                  <td
                    className="p-2 md:p-4 text-[11px] md:text-[12px] font-semibold"
                    style={{
                      color: "#FFF",
                      background: "rgba(255, 102, 0, 0.05)",
                      borderLeft: "1px solid rgba(255, 102, 0, 0.1)",
                      borderRight: "1px solid rgba(255, 102, 0, 0.1)",
                      borderBottom: i === rows.length - 1 ? "1px solid rgba(255, 102, 0, 0.1)" : "none",
                      borderBottomLeftRadius: i === rows.length - 1 ? "8px" : "0",
                      borderBottomRightRadius: i === rows.length - 1 ? "8px" : "0",
                    }}
                  >
                    <div className="flex items-start gap-1 md:gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{row.lj}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
