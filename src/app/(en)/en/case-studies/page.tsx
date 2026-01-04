import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Real Video Production Results | I am Tomas",
    description: "See the specific results of our video production. Case studies with measurable results for major clients.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/case-studies",
    },
};

const caseStudies = [
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
            quote: "I decided to collaborate with Tomáš based on recommendations from friends. He helped me especially with the visibility and promotion of FC Slavia Hradec Králové and its sports academy. In the real estate business, it led to faster property sales and reaching new investors. I appreciate the responsible approach, speed of preparation, attention to detail, and flexibility. I must also highlight the polite conduct and punctuality, which unfortunately is not always a given with other productions.",
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
    },
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
            quote: "Client feedback coming soon...",
            author: "Agata",
            role: "Marketing Manager, Easy Optic"
        },
        tags: ["Reels", "Social Media", "Product Video"]
    },
    {
        id: "icon-barber",
        title: "ICON Barber: Brutal Reels Campaign",
        client: "ICON Barber Shop",
        industry: "Services / Lifestyle",
        youtubeIds: ["x2S2_0xHsjg", "TyVQ27BmnpQ", "3Hro_3rsPbo", "s10MsaHGk7s", "UdxMX-x5VP4", "FPWtRbUPZ6c", "ZXnP2KkSTwg"],
        challenge: "Reaching a younger target group and increasing the number of bookings in the barber shop.",
        solution: "A set of 7 punchy Shorts with modern editing and music that show the craft and atmosphere of the salon.",
        results: [
            "Noticeable increase in new bookings",
            "Viral reach of some videos",
            "Clear differentiation from competition",
            "Community building"
        ],
        testimonial: {
            quote: "Client feedback coming soon...",
            author: "ICON Barber Shop",
            role: "Owner"
        },
        tags: ["Shorts", "Viral", "Barber"]
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
                        <div key={study.id} className="scroll-mt-24">
                            <Card className="overflow-hidden border-none shadow-2xl bg-card/50 backdrop-blur-sm">
                                <div className="grid lg:grid-cols-12 gap-0">
                                    {/* Left Column - Video/Visual */}
                                    <div className="lg:col-span-7 relative bg-neutral-900/50 min-h-[500px] flex items-center overflow-hidden">
                                        {(study as any).youtubeIds ? (
                                            <div className="w-full h-full flex items-center overflow-x-auto p-4 md:p-8 gap-4 snap-x snap-mandatory scrollbar-hide">
                                                {(study as any).youtubeIds.map((id: string) => (
                                                    <div key={id} className="flex-none w-[220px] md:w-[260px] aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-2xl snap-center ring-1 ring-white/10">
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                                                            title={study.title}
                                                            className="w-full h-full"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : study.youtubeId ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${study.youtubeId}?rel=0&modestbranding=1`}
                                                title={study.title}
                                                className="absolute inset-0 w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted/20">
                                                Video being prepared
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Column - Info */}
                                    <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                                        <div className="space-y-8">
                                            <div>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {study.tags.map((tag) => (
                                                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-wider font-bold rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h2 className="text-3xl font-bold mb-2 leading-tight">{study.title}</h2>
                                                <p className="text-primary font-medium tracking-wide">
                                                    {study.client} <span className="text-muted-foreground mx-2">•</span> {study.industry}
                                                </p>
                                            </div>

                                            <div className="grid gap-6">
                                                <div>
                                                    <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2">Challenge & Solution</h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {study.challenge} {study.solution}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-3">Key Results</h3>
                                                    <ul className="grid grid-cols-1 gap-2">
                                                        {study.results.map((result, index) => (
                                                            <li key={index} className="flex items-start gap-3 text-sm">
                                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                                <span className="text-muted-foreground font-medium">{result}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Testimonial Bottom */}
                                        <div className="mt-12 pt-8 border-t border-border/50">
                                            <div className="relative">
                                                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/10 -z-10" />
                                                <p className="italic text-foreground/90 mb-4 leading-relaxed">
                                                    "{study.testimonial.quote}"
                                                </p>
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                                        {study.testimonial.author[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm">{study.testimonial.author}</p>
                                                        <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
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
