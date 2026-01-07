import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";

export const metadata: Metadata = {
    title: "Case Studies | Video Production Results London | I am Tomas",
    description: "📊 Real video campaign results. WikyToys, Easy Optic, FC Slavia. See how video increases sales. References from London & worldwide.",
    keywords: ["video case studies", "video marketing results uk", "video production references london", "roi video advertising"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/case-studies",
        languages: {
            "cs": "https://jajsemtomas.cz/pripadove-studie"
        }
    },
};

const caseStudies = [
    {
        id: "easy-optic",
        title: "Easy Optic: Reels Strategy & Content",
        client: "Easy Optic",
        industry: "Optics / Retail",
        youtubeIds: ["6glt6p9oi8I", "JBEWFNVqNSE", "eUsnjYMyqy4"],
        challenge: "Needed regular and visually attractive content for Instagram to show products in action.",
        solution: "Package of 3 Reels and 15 photographs focused on aesthetics and product detail in a real environment.",
        results: [
            "Increased interaction on Instagram",
            "Professional unification of visual style",
            "Consistent weekly publication",
            "Higher visibility of products"
        ],
        testimonial: {
            quote: "Working with Tomáš was very pleasant from the first moment. The biggest challenge was entrusting our vision to someone who not only understands it but also transforms it into digital form, preserves its authenticity, and uses creativity. Tomáš handled it perfectly from the first meeting. All communication was immediate, the filming and photography were excellent, and the final result came quickly. The videos and photos now serve to present Easy Optic on social media, help build the brand, and attract new customers. I greatly appreciate the personal and pleasant approach, responsibility, creativity, speed, and especially the quality photos and videos that speak for themselves. We look forward to more projects together in the future.",
            author: "Easy Optic",
            role: "Marketing Manager, Easy Optic"
        },
        tags: ["Reels", "Social Media", "Product Video"]
    },
    {
        id: "patrik-horenovsky-combined",
        title: "FC Slavia HK & Real Estate: Sports & Investment Video Production",
        client: "Patrik Hořeňovský",
        industry: "Sports / Real Estate / Development",
        youtubeIds: ["_wAWHaGEDeY", "sohH2yjYMuk"],
        challenge: "Need for comprehensive video production for diverse segments – from promoting a sports club to supporting property sales and attracting investors for Alzheimer's centers.",
        solution: "Long-term collaboration involving dynamic sports videos, interviews, and precise property video tours. Emphasis on flexibility, speed, and capturing the atmosphere of each project in detail.",
        results: [
            "Increased visibility for the football club and academy",
            "Faster sales of offered properties",
            "Successful investor outreach for Alzheimer's centers",
            "Long-term flexible collaboration"
        ],
        testimonial: {
            quote: "I decided to collaborate with Tomáš based on recommendations from my friends, who have been working with him for years. He helped me especially with the visibility and promotion of the football club FC Slavia Hradec Králové and its sports academy. In the real estate business, it led to faster sales of my offered properties and reaching new investors for the construction of new Alzheimer's centers. I appreciate the responsible approach, speed of preparation, attention to detail, and flexibility. As a client, I can always reach him by phone and often share my thoughts and opinions on the project. I must also highlight the polite conduct and punctuality, which may seem obvious, but unfortunately is often not the case with other productions.",
            author: "Patrik Hořeňovský",
            role: "Manager & Investor"
        },
        tags: ["Sports", "Real Estate", "Investment", "Long-term Collaboration"]
    },
    {
        id: "wikyhracky",
        title: "WikyHracky.cz: Online Campaign + TV Spot",
        client: "WikyHracky.cz",
        industry: "E-commerce",
        youtubeId: "R3qqN_rj-4I",
        challenge: "Needed a professional video for an online campaign and subsequently a TV spot for a Christmas campaign.",
        solution: "Comprehensive video production from concept to final realization. First an online campaign, then a TV spot with full production.",
        results: [
            "Online campaign for e-shop",
            "TV spot for Christmas campaign",
            "Faster customer orientation",
            "Increased Christmas sales"
        ],
        testimonial: {
            quote: "We entrusted Tomas with filming a video for an online campaign and a TV spot for a Christmas campaign. The team is fast, reliable, prompt, and they have drive. Thank you for the collaboration!",
            author: "Ing. Renáta Beránková",
            role: "Marketing Manager, WikyHracky.cz"
        },
        tags: ["TV Spot", "Online Campaign", "E-commerce"]
    },
    {
        id: "legonid",
        title: "Legonid: Video Documentation of LEGO® SERIOUS PLAY®",
        client: "Legonid",
        industry: "Education",
        youtubeId: "FuRIbfZ3DPU",
        challenge: "Needed professional documentation of a 2-day certification course to facilitate sales of future dates.",
        solution: "Filming the workshop process, capturing methodology and atmosphere, plus editing a dynamic aftermovie.",
        results: [
            "Professional video documentation of the course",
            "Capture of key emotions and methodology",
            "Material for future marketing",
            "Increased credibility of certification"
        ],
        testimonial: {
            quote: "Client feedback coming soon...",
            author: "Leonid Kushnir",
            role: "Founder, Legonid"
        },
        tags: ["Workshop", "Corporate", "Documentation"]
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Case Studies
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Real projects, real results. See how we help companies grow with video content.
                    </p>
                </div>

                {/* Case Studies */}
                <div className="space-y-24">
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.id} study={study} locale="en" />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center bg-muted/30 rounded-2xl p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Want similar results?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's talk about your project. In 15 minutes we'll find out how I can help you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="px-8">
                                Book a consultation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" size="lg" className="px-8">
                                View portfolio
                            </Button>
                        </Link>
                    </div>
                </div>

            </Container>
        </div>
    );
}
