import { Container } from "@/components/ui/container";
import portfolioData from "@/content/portfolio-en.json";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Tomas",
    description: "Check out my work. Reels, event videos, commercial spots, and livestreams.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/portfolio",
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/portfolio",
        title: "Portfolio | Tomas",
        description: "Check out my work. Reels, event videos, commercial spots, and livestreams.",
    },
};

export default function PortfolioPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Selected Works</h1>
                    <p className="text-xl text-muted-foreground">
                        Browse the complete archive of my production.
                    </p>
                </div>

                <PortfolioGrid items={portfolioData} />
            </Container>
        </div>
    );
}
