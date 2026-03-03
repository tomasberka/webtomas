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
    default: "Kameraman Praha | Tomáš Berka – Video Produkce & Event Filming",
    template: "%s | Tomáš Berka – Kameraman Praha",
  },
  description: "Profesionální kameraman Praha. Event video, firemní natáčení, konference, DaVinci Resolve postprodukce. 10+ let zkušeností. Tomáš Berka.",
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
    title: "Kameraman Praha | Tomáš Berka – Video Produkce & Event Filming",
    description: "Profesionální kameraman Praha – Tomáš Berka. Event video, natáčení konferencí, DaVinci Resolve postprodukce. 10+ let zkušeností.",
    siteName: "Tomáš Berka – Kameraman Praha",
    images: [
      {
        url: "https://jajsemtomas.cz/images/tomas-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Tomáš Berka – Profesionální Kameraman Praha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kameraman Praha | Tomáš Berka – Video Produkce",
    description: "Profesionální kameraman Praha. Event video, konference, firemní natáčení. Domluvte si konzultaci.",
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
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Sticky Bottom Promo Banner */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-3 md:py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
          <a href="/akce-3-reels" className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center group px-4">
            <span className="text-base md:text-lg font-bold animate-pulse">🔥 AKCE:</span>
            <span className="text-sm md:text-base font-medium">
              <strong className="underline decoration-2">3 firmy</strong> → 3 Reels + 15 fotek za 15 000 Kč
            </span>
            <span className="inline-flex items-center gap-1 bg-white/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold group-hover:bg-white/30 transition-colors">
              Zjistit více →
            </span>
          </a>
        </div>
        {/* Spacer for fixed bottom banner */}
        <div className="h-16 md:h-14" />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
