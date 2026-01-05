import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AKCE: 3 Reels + 15 fotek za 15 000 Kč | Hledáme 3 firmy | Já jsem Tomáš",
    description: "Limitovaná akce pro 3 firmy. Získejte 3 profesionální Reels videa + 15 fotek za zvýhodněnou cenu 15 000 Kč. Strategie, natáčení a střih v ceně.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
