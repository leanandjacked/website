import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CountdownBar from "./components/CountdownBar";
import StickyMobileCTA from "./components/StickyMobileCTA";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ExitIntentModal from "./components/ExitIntentModal";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-next",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leanjacked.in"),
  title: "Lean & Jacked Fat Loss Blueprint | ₹999 Complete Guide by Zaid",
  description:
    "The exact fat loss system behind a 36kg transformation. Indian meal plans, 8-week HIT training, bloodwork guide & calorie calculator. One-time ₹999.",
  keywords: [
    "fat loss",
    "Indian diet",
    "weight loss",
    "fitness blueprint",
    "HIT training",
    "Zaid",
    "fat loss for students",
    "home food diet"
  ],
  openGraph: {
    title: "Lean & Jacked Fat Loss Blueprint | ₹999 Complete Guide by Zaid",
    description: "The exact fat loss system behind a 36kg transformation. Indian meal plans, 8-week HIT training.",
    url: "https://leanjacked.in",
    siteName: "Lean & Jacked",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lean & Jacked Fat Loss Blueprint",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean & Jacked Fat Loss Blueprint",
    description: "The exact fat loss system behind a 36kg transformation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden bg-black text-white relative">
        <ScrollProgressBar />
        <CountdownBar />
        {children}
        <StickyMobileCTA />
        <ExitIntentModal />

        {/* Analytics Scripts */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID_HERE'); /* Replace with actual ID */
            fbq('track', 'PageView');
          `}
        </Script>
        
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX'); /* Replace with actual ID */
          `}
        </Script>
      </body>
    </html>
  );
}
