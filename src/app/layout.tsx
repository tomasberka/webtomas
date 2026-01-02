import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";


const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jajsemtomas.cz"),
  title: {
    default: "Já jsem Tomáš | Video Produkce & Reels",
    template: "%s | Já jsem Tomáš",
  },
  description: "Profesionální tvorba Reels, TikTok a video obsahu. Kameraman a video produkce pro B2B i osobní značky. Domluvte si natáčení za 10 minut.",
  keywords: ["video produkce", "tvorba reels", "tiktok pro firmy", "kameraman praha", "reklamní videa", "obsah na sociální sítě", "videomarketing"],
  authors: [{ name: "Tomáš" }],
  creator: "Tomáš",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://jajsemtomas.cz",
    title: "Já jsem Tomáš | Video Produkce & Reels",
    description: "Profesionální tvorba Reels, TikTok a video obsahu. Zvyšte své prodeje videem.",
    siteName: "Já jsem Tomáš",
    images: [
      {
        url: "/images/tomas-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Já jsem Tomáš - Video Produkce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Já jsem Tomáš | Video Produkce & Reels",
    description: "Profesionální tvorba Reels, TikTok a video obsahu. Domluvte si natáčení za 10 minut.",
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
    <html lang="cs" className="dark" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background text-foreground min-h-screen flex flex-col")}>
        <Script
          strategy="beforeInteractive"
          src="https://cdn.consentmanager.net/delivery/autoblocking/09a5cd0912b95.js"
          data-cmp-ab="1"
          data-cmp-host="a.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-W75LP5M5EB"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-W75LP5M5EB');
            `,
          }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
