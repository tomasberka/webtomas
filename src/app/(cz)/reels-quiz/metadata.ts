import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Quiz: Testuj Své Znalosti | Já jsem Tomáš",
    description: "Interaktivní quiz o 5 nejčastějších chybách při tvorbě Reels. Zjisti, jestli děláš stejné chyby jako 90% podnikatelů.",
    keywords: ["reels quiz", "instagram test", "tiktok chyby", "reels optimalizace", "video marketing test", "sociální sítě quiz"],
    alternates: {
        canonical: "https://jajsemtomas.cz/reels-quiz",
        languages: {
            "en": "https://en.jajsemtomas.cz/reels-quiz"
        }
    },
    openGraph: {
        title: "Děláš tyto chyby v Reels? Zjisti to za 2 minuty",
        description: "Interaktivní test o tvorbě Reels pro Instagram a TikTok. Otestuj své znalosti!",
        url: "https://jajsemtomas.cz/reels-quiz",
        images: [
            {
                url: "https://jajsemtomas.cz/images/quiz-thumbnail.png",
                width: 1200,
                height: 675,
                alt: "Reels Quiz - Testuj své znalosti",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Děláš tyto chyby v Reels?",
        description: "Interaktivní test. Otestuj se za 2 minuty!",
        images: ["/images/quiz-thumbnail.png"],
    },
};
