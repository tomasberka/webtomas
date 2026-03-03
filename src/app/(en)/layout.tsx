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
    metadataBase: new URL("https://en.jajsemtomas.cz"),
    alternates: {
        canonical: "https://en.jajsemtomas.cz",
        languages: {
            'cs': 'https://jajsemtomas.cz',
            'en': 'https://en.jajsemtomas.cz',
        },
    },
    title: {
        default: "I am Tomas | Filmmaker & Video Production",
        template: "%s | I am Tomas",
    },
    description: "Professional video production in London & Prague. Reels, TikTok, corporate videos and event filming. Partner of SocialVids. Book a call today.",
    keywords: ["video production london", "reels agency uk", "corporate video london", "tiktok for business uk", "event video production", "filmmaker london", "content creator prague", "video marketing agency", "ugc creator uk", "socialvids partner"],
    authors: [{ name: "Tomas" }],
    creator: "Tomas",
    icons: {
        icon: "/icon.png",
        shortcut: "/favicon.ico",
        apple: "/icon.png",
    },
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://en.jajsemtomas.cz",
        title: "I am Tomas | Filmmaker & Video Production",
        description: "Professional filmmaker and content creator. Boost your sales with video.",
        siteName: "I am Tomas",
        images: [
            {
                url: "https://en.jajsemtomas.cz/images/og-image-en-new.png",
                width: 1200,
                height: 630,
                alt: "I am Tomas - Filmmaker & Content Creator London",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "I am Tomas | Filmmaker & Video Production",
        description: "Professional filmmaker and content creator. Book a shoot in 10 minutes.",
        images: ["https://en.jajsemtomas.cz/images/og-image-en-new.png"],
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
        <html lang="en" className="dark" suppressHydrationWarning>
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
            <body className={cn(montserrat.className, "bg-background text-foreground min-h-screen flex flex-col film-grain")}>
                <SmoothScrollProvider>
                {/* Custom Cursor */}
                <CustomCursor />

                {/* Cookie Banner - reusing CZ one for now or should be localized? 
            CookieBanner component might need localization too. 
            For now, let's keep it as is, it might be auto-translated or English by default? 
            Let's check CookieBanner later. */}
                <CookieBanner locale="en" />

                {/* Exit Intent Popup */}
                <ExitIntentPopup locale="en" />

                {/* Sticky Mobile CTA */}
                <StickyCTA locale="en" />

                {/* Floating CTA */}
                <FloatingCTA locale="en" />

                {/* Consent Mode and Tags - replicated from CZ */}
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

                <Navbar locale="en" />
                <main className="flex-1 pb-24 md:pb-0">
                    {children}
                </main>
                <Footer locale="en" />
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
