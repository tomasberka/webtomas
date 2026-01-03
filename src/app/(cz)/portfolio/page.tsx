import { Container } from "@/components/ui/container";
import portfolioData from "@/content/portfolio.json";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata = {
    title: "Portfolio | Tomáš",
    description: "Ukázky mé práce. Reels, eventová videa, reklamní spoty a livestreamy.",
};

export default function PortfolioPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Vybrané Práce</h1>
                    <p className="text-xl text-muted-foreground">
                        Podívejte se na kompletní archiv mé tvroby.
                    </p>
                </div>

                <PortfolioGrid items={portfolioData} />
            </Container>
        </div>
    );
}
