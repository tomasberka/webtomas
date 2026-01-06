import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { StickyCTA } from "@/components/ui/sticky-cta";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://en.jajsemtomas.cz"),
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
                url: "https://en.jajsemtomas.cz/images/og-image-en.png",
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
        images: ["https://en.jajsemtomas.cz/images/og-image-en.png"],
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
            <body className={cn(inter.className, "bg-background text-foreground min-h-screen flex flex-col")}>
                {/* Cookie Banner - reusing CZ one for now or should be localized? 
            CookieBanner component might need localization too. 
            For now, let's keep it as is, it might be auto-translated or English by default? 
            Let's check CookieBanner later. */}
                <CookieBanner locale="en" />

                {/* Sticky Mobile CTA */}
                <StickyCTA locale="en" />

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
                <main className="flex-1">
                    {children}
                </main>
                <Footer locale="en" />
                {/* Sticky Bottom Promo Banner */}
                <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-3 md:py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
                    <a href="/promo-3-reels" className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center group px-4">
                        <span className="text-base md:text-lg font-bold animate-pulse">🔥 PROMO:</span>
                        <span className="text-sm md:text-base font-medium">
                            <strong className="underline decoration-2">3 Companies</strong> → 3 Reels + 15 Photos for £1,000
                        </span>
                        <span className="inline-flex items-center gap-1 bg-white/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold group-hover:bg-white/30 transition-colors">
                            More Info →
                        </span>
                    </a>
                </div>
                {/* Spacer for fixed bottom banner */}
                <div className="h-16 md:h-14" />
            </body>
        </html>
    );
}
