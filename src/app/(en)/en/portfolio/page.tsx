import { Container } from "@/components/ui/container";
import portfolioData from "@/content/portfolio-en.json";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Work That Sells | Tomas",
    description: "Selected works for clients like OICT, WikyToys, DEKRA. Video production that drives tangible business results.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/portfolio",
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/portfolio",
        title: "Portfolio | Work That Sells | Tomas",
        description: "Selected works for clients. Video production that drives tangible business results.",
    },
};

export default function PortfolioPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Work With Impact</h1>
                    <p className="text-xl text-muted-foreground">
                        I don't make videos for the drawer. Every project has a clear goal: sell, explain, engage.
                    </p>
                </div>

                <PortfolioGrid items={portfolioData} />
            </Container>
        </div>
    );
}
