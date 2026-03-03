import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Balíčky | Tomáš Berka",
    description: "Reels produkce Praha. Natáčení, střih a strategie pro Instagram a TikTok.",
    robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}

