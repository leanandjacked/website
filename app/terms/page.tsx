import LayoutShell from "../components/LayoutShell";

export const metadata = {
  title: "Terms & Conditions | Lean & Jacked",
  description: "Terms and conditions for the Lean & Jacked Fat Loss Blueprint.",
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

export default function TermsPage() {
  return (
    <LayoutShell title="Terms & Conditions">
      <p style={prose}>Last updated: March 2025</p>

      <p style={prose}>
        By purchasing from Lean &amp; Jacked by Zaid, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2 style={heading}>1. The Product</h2>
      <p style={prose}>
        The Lean &amp; Jacked Fat Loss Blueprint is a digital product (PDF/guide format). Upon completing payment, you will receive instant access via a download link. There is no physical delivery.
      </p>

      <h2 style={heading}>2. Permitted Use</h2>
      <p style={prose}>
        Your purchase grants you a non-exclusive, non-transferable, personal licence to use the content for your own individual fat loss journey. You may not resell, redistribute, copy, or share the product  in full or in part  without written permission.
      </p>

      <h2 style={heading}>3. Results Disclaimer</h2>
      <p style={prose}>
        Individual results vary based on effort, consistency, starting condition, and adherence to the programme. The client transformations shown on this website are real, but are not typical results and are not a guarantee of what you will achieve. This product is not a substitute for medical advice. Consult a physician before beginning any diet or exercise programme.
      </p>

      <h2 style={heading}>4. Refunds</h2>
      <p style={prose}>
        We offer a 7-day money-back guarantee. If you are unsatisfied within 7 days of purchase, email us for a full refund, no questions asked. See our <a href="/returns" style={{ color: "var(--orange)" }}>Refund Policy</a> for details.
      </p>

      <h2 style={heading}>5. Intellectual Property</h2>
      <p style={prose}>
        All content  including text, methodology, meal plans, training programmes, and the Bloodwork Basics Guide  is the intellectual property of Lean &amp; Jacked by Zaid. Unauthorised reproduction or distribution is prohibited and may result in legal action.
      </p>

      <h2 style={heading}>6. Governing Law</h2>
      <p style={prose}>
        These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.
      </p>

      <h2 style={heading}>7. Contact</h2>
      <p style={prose}>
        Questions about these terms? Email us at the address provided in your purchase confirmation.
      </p>
    </LayoutShell>
  );
}
