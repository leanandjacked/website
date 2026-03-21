import LayoutShell from "../components/LayoutShell";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Refund Policy | Lean & Jacked",
  description: "7-day money-back guarantee. No questions asked.",
};

const prose: React.CSSProperties = {
  color: "var(--grey)",
  fontSize: "14px",
  lineHeight: 1.85,
  fontFamily: "Montserrat, sans-serif",
  marginBottom: "16px",
};
const heading: React.CSSProperties = {
  fontFamily: "Bebas Neue, cursive",
  fontSize: "1.4rem",
  color: "#fff",
  letterSpacing: "0.04em",
  margin: "32px 0 10px",
};

export default function ReturnsPage() {
  return (
    <LayoutShell title="Refund Policy">
      {/* Guarantee callout */}
      <div style={{ background: "var(--dark2)", border: "1px solid #2a2a2a", borderTop: "2px solid var(--orange)", borderRadius: "10px", padding: "24px 20px", marginBottom: "32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ marginBottom: "12px" }}>
          <ShieldCheck className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>
        <div style={{ fontFamily: "Bebas Neue, cursive", fontSize: "1.6rem", color: "#fff", letterSpacing: "0.04em", marginBottom: "8px" }}>
          7-Day Money Back Guarantee
        </div>
        <p style={{ ...prose, marginBottom: 0 }}>
          We stand behind the Lean &amp; Jacked Fat Loss Blueprint completely. If you purchase and feel it&apos;s not right for you  for any reason  within 7 days of purchase, email us for a full refund. No forms to fill. No questions asked.
        </p>
      </div>

      <h2 style={heading}>How to Request a Refund</h2>
      <p style={prose}>1. Email us within 7 days of your purchase date.</p>
      <p style={prose}>2. Include your name and the email address used for purchase.</p>
      <p style={prose}>3. We will process the refund within 5–7 business days to the original payment method via Razorpay.</p>

      <h2 style={heading}>Important Notes</h2>
      <p style={prose}>
        The product is a <strong style={{ color: "#fff" }}>digital download</strong>. As with all digital products, the file itself cannot be &quot;returned&quot;, but we will refund your payment in full without any dispute.
      </p>
      <p style={prose}>
        Refund requests received after 7 days of purchase will not be accepted as per our policy. We encourage all customers to review the product within the first week.
      </p>

      <h2 style={heading}>1:1 Coaching Refunds</h2>
      <p style={prose}>
        For 1:1 coaching packages (₹27,000 / ₹45,000), refund terms are discussed at the time of onboarding and are specific to each engagement. Please refer to your coaching agreement for details.
      </p>

      <h2 style={heading}>Contact</h2>
      <p style={prose}>
        Email us at the address provided in your purchase confirmation. We typically respond within 24 hours.
      </p>
    </LayoutShell>
  );
}
