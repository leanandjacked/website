import { Zap } from "lucide-react";

export default function Banner() {
  return (
    <div
      className="flex items-center justify-center gap-2"
      style={{
        background: "var(--orange)",
        color: "#fff",
        textAlign: "center",
        padding: "10px 20px",
        fontSize: "12px",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      <Zap className="w-4 h-4 fill-white" /> Launch Price: ₹999  Limited Time Only
    </div>
  );
}
