import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";
import { StickyCTA } from "@/components/ui/sticky-cta";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/providers/custom-cursor";
import { FloatingCTA } from "@/components/ui/floating-cta";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"], display: "swap", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jajsemtomas.cz"),
  alternates: {
    canonical: "https://jajsemtomas.cz",
    languages: {
      'cs': 'https://jajsemtomas.cz',
      'en': 'https://en.jajsemtomas.cz',
    },
  },
  title: {
    default: "Já jsem Tomáš | Kameraman Praha – Event Video & Video Produkce",
    template: "%s | Já jsem Tomáš – Kameraman Praha",
  },
  description: "Kameraman Praha pro eventy, konference a firemní natáčení. DaVinci Resolve postprodukce, 10+ let praxe. Tomáš Berka – jajsemtomas.cz",
  keywords: ["kameraman praha", "video produkce praha", "kameraman", "event video praha", "natáčení konferencí", "firemní video", "DaVinci Resolve", "video produkce", "filmmaker praha", "tvorba reels", "kameraman na event", "profesionální kameraman"],
  authors: [{ name: "Tomáš" }],
  creator: "Tomáš",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://jajsemtomas.cz",
    title: "Já jsem Tomáš | Kameraman Praha – Event Video & Video Produkce",
    description: "Kameraman Praha pro eventy, konference a firemní natáčení. DaVinci Resolve postprodukce, 10+ let praxe. Tomáš Berka – jajsemtomas.cz",
    siteName: "Já jsem Tomáš – Kameraman Praha",
    images: [
      {
        url: "https://jajsemtomas.cz/images/tomas-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Já jsem Tomáš – Kameraman Praha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Já jsem Tomáš | Kameraman Praha – Event Video & Video Produkce",
    description: "Kameraman Praha pro eventy, konference a firemní natáčení. DaVinci Resolve postprodukce, 10+ let praxe.",
    images: ["https://jajsemtomas.cz/images/tomas-portrait.jpg"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="dark" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="cs" href="https://jajsemtomas.cz" />
        <link rel="alternate" hrefLang="en" href="https://en.jajsemtomas.cz" />
        <link rel="alternate" hrefLang="x-default" href="https://en.jajsemtomas.cz" />
        
        {/* Preconnect for faster external resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className={cn(montserrat.className, "bg-background text-foreground min-h-screen flex flex-col film-grain")} suppressHydrationWarning>
        <SmoothScrollProvider>
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Cookie Banner */}
        <CookieBanner />

        {/* Exit Intent Popup */}
        <ExitIntentPopup />

        {/* Sticky Mobile CTA */}
        <StickyCTA locale="cs" />

        {/* Floating CTA */}
        <FloatingCTA locale="cs" />

        {/* Consent Mode - Default Denied */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W75LP5M5EB"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W75LP5M5EB');
          `}
        </Script>
        <Navbar />
        <main className="flex-1 pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
