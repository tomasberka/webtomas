import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: {
    default: "Já jsem Tomáš | Video Produkce & Reels",
    template: "%s | Já jsem Tomáš",
  },
  description: "Profesionální tvorba Reels, TikTok a video obsahu. Kameraman a video produkce pro B2B i osobní značky. Domluvte si natáčení za 10 minut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="dark">
      <body className={cn(inter.className, "bg-background text-foreground min-h-screen flex flex-col")}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
