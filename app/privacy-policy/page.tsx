import LayoutShell from "../components/LayoutShell";

export const metadata = {
  title: "Privacy Policy | Lean & Jacked",
  description: "Privacy policy for the Lean & Jacked Fat Loss Blueprint.",
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

export default function PrivacyPage() {
  return (
    <LayoutShell title="Privacy Policy">
      <p style={prose}>Last updated: March 2025</p>

      <p style={prose}>
        Lean &amp; Jacked by Zaid (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what information we collect, how we use it, and your rights.
      </p>

      <h2 style={heading}>1. Information We Collect</h2>
      <p style={prose}>When you purchase from us, we collect your name, email address, and payment information  processed securely through Razorpay. We never store your card or UPI details directly.</p>
      <p style={prose}>We may also collect anonymised usage data via Google Analytics to understand how visitors interact with the site.</p>

      <h2 style={heading}>2. How We Use Your Information</h2>
      <p style={prose}>Your information is used solely to:</p>
      {["Process your order and deliver the digital product", "Send purchase confirmations and transactional emails", "Respond to support requests", "Improve the website and user experience (anonymised data only)"].map((item, i) => (
        <p key={i} style={{ ...prose, paddingLeft: "16px", borderLeft: "3px solid #2a2a2a" }}>• {item}</p>
      ))}

      <h2 style={heading}>3. Third-Party Services</h2>
      <p style={prose}>We use Razorpay for payment processing. Their privacy policy governs how they handle your payment data. We may use email delivery services (e.g. Gmail) to send purchase confirmations. We do not sell your data to any third party.</p>

      <h2 style={heading}>4. Cookies</h2>
      <p style={prose}>This site uses minimal cookies for analytics (Google Analytics). You may disable cookies in your browser settings without affecting your ability to purchase.</p>

      <h2 style={heading}>5. Data Retention</h2>
      <p style={prose}>We retain your purchase record for a minimum of 7 years as required by Indian GST law. You may request deletion of your personal data at any time by contacting us  we will comply to the extent permitted by law.</p>

      <h2 style={heading}>6. Contact</h2>
      <p style={prose}>For any privacy-related queries, email us at the address provided on the receipt after purchase.</p>
    </LayoutShell>
  );
}
