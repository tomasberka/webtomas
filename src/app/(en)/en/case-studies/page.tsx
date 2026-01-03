import { Container } from "@/components/ui/container";
import { Metadata } from "next";
import { Testimonials } from "@/components/sections/testimonials"; // Reusing testimonials component for now as it lists projects

export const metadata: Metadata = {
    title: "Case Studies | Tomas",
    description: "Results of my clients. Real numbers and real stories.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/case-studies",
    },
};

export default function CaseStudiesPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Case Studies</h1>
                    <p className="text-xl text-muted-foreground">
                        See how video helps my clients affect their business.
                    </p>
                </div>
                {/* Simplified content for EN version initially - reusing Testimonials grid which contains case study info */}
                <Testimonials />
            </Container>
        </div>
    );
}
