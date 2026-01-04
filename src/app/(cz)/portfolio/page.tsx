import { Container } from "@/components/ui/container";
import portfolioData from "@/content/portfolio.json";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata = {
    title: "Portfolio | Výsledky, které prodávají | Tomáš",
    description: "Ukázky práce pro klienty jako OICT, WikyHračky nebo DEKRA. Video, které firmám vydělává peníze. Případové studie.",
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
