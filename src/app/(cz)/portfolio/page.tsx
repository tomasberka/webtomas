import { Container } from "@/components/ui/container";
import portfolioData from "@/content/portfolio.json";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Video Produkce Praha | OICT, WikyHračky, DEKRA",
    description: "🎬 Ukázky práce pro klienty jako OICT, WikyHračky, DEKRA. Video produkce Praha - Reels, TV spoty, firemní videa. Podívejte se na výsledky.",
    keywords: ["video portfolio praha", "ukázky práce kameraman", "video produkce reference", "firemní videa ukázky"],
    alternates: {
        canonical: "https://jajsemtomas.cz/portfolio",
        languages: {
            "en": "https://en.jajsemtomas.cz/portfolio"
        }
    },
};

export default function PortfolioPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Práce, která má dopad</h1>
                    <p className="text-xl text-muted-foreground">
                        Netočím videa do šuplíku. Každý projekt má jasný cíl: prodat, vysvětlit, zaujmout.
                    </p>
                </div>

                <PortfolioGrid items={portfolioData} />
            </Container>
        </div>
    );
}
