import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import caseStudiesData from "@/content/case-studies.json";

export const metadata: Metadata = {
    title: "Případové Studie Praha | Video Produkce s Výsledky | Já jsem Tomáš",
    description: "📊 Konkrétní výsledky video kampaní. WikyHračky, Easy Optic, FC Slavia HK. Podívejte se, jak video zvyšuje prodeje. Reference z Prahy a ČR.",
    keywords: ["případové studie video", "video marketing výsledky", "reference video produkce praha", "roi video reklama"],
    alternates: {
        canonical: "https://jajsemtomas.cz/pripadove-studie",
        languages: {
            "en": "https://en.jajsemtomas.cz/case-studies"
        }
    },
};

// Generate VideoObject schema for YouTube videos
type CaseStudy = {
    id: string;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial: { quote: string; author: string; role: string };
    tags: string[];
    date: string;
    youtubeId?: string;
    youtubeIds?: string[];
};

function generateVideoSchemas(studies: CaseStudy[]) {
    const videos: object[] = [];
    
    for (const study of studies) {
        if (study.youtubeId) {
            videos.push({
                "@type": "VideoObject",
                "name": study.title,
                "description": study.challenge,
                "thumbnailUrl": `https://img.youtube.com/vi/${study.youtubeId}/maxresdefault.jpg`,
                "uploadDate": study.date,
                "contentUrl": `https://www.youtube.com/watch?v=${study.youtubeId}`,
                "embedUrl": `https://www.youtube.com/embed/${study.youtubeId}`
            });
        }
        
        if (study.youtubeIds) {
            for (let i = 0; i < study.youtubeIds.length; i++) {
                const id = study.youtubeIds[i];
                videos.push({
                    "@type": "VideoObject",
                    "name": `${study.title} - Video ${i + 1}`,
                    "description": study.challenge,
                    "thumbnailUrl": `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
                    "uploadDate": study.date,
                    "contentUrl": `https://www.youtube.com/watch?v=${id}`,
                    "embedUrl": `https://www.youtube.com/embed/${id}`
                });
            }
        }
    }
    
    return videos;
}

// Pre-compute video schemas at module level
const allVideos = generateVideoSchemas(caseStudiesData as CaseStudy[]);

export default function CaseStudiesPage() {
    return (
        <div className="py-20 md:py-32">
            {/* Breadcrumb Schema */}
            <BreadcrumbSchema items={[
                { name: "Domů", url: "https://jajsemtomas.cz" },
                { name: "Případové studie", url: "https://jajsemtomas.cz/pripadove-studie" }
            ]} />
            
            {/* VideoObject Schema */}
            {allVideos.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": allVideos
                        })
                    }}
                />
            )}
            
            <Container>
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Případové Studie
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Reálné projekty, reálné výsledky. Podívejte se, jak pomáháme firmám růst pomocí video obsahu.
                    </p>
                </div>

                {/* Case Studies */}
                <div className="space-y-24">
                    {caseStudiesData.map((study) => (
                        <CaseStudyCard key={study.id} study={study} locale="cs" />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center bg-muted/30 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Chcete podobné výsledky?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Pojďme si promluvit o vašem projektu. Během 15 minut zjistíme, jak vám můžu pomoct.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/rezervace">
                            <Button size="lg" className="px-8">
                                Rezervovat konzultaci
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" size="lg" className="px-8">
                                Prohlédnout portfolio
                            </Button>
                        </Link>
                    </div>
                </div>

            </Container>
        </div>
    );
}
