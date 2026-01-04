import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/ui/cookie-banner";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://en.jajsemtomas.cz"),
    title: {
        default: "I am Tomas | Filmmaker & Video Production",
        template: "%s | I am Tomas",
    },
    description: "Professional filmmaker and content creator. Event video, Livestream and Reels. Corporate video production for businesses and personal brands.",
    keywords: ["video production", "reels creation", "event video", "livestream services", "conference filming", "corporate video london", "camera operator praha", "filmmaker", "content creator"],
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
                url: "/images/tomas-portrait.jpg",
                width: 1200,
                height: 630,
                alt: "I am Tomas - Filmmaker & Content Creator",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "I am Tomas | Filmmaker & Video Production",
        description: "Professional filmmaker and content creator. Book a shoot in 10 minutes.",
        images: ["/images/tomas-portrait.jpg"],
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
            </body>
        </html>
    );
}
