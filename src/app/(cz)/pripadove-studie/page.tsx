
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";

export const metadata = {
    title: "Případové Studie | Reálné Výsledky & ROI | Já jsem Tomáš",
    description: "Konkrétní čísla a výsledky. Podívejte se, jak naše video kampaně zvýšily prodeje pro WikyHračky, Easy Optic a další.",
};



const caseStudies = [
    {
        id: "patrik-horenovsky-combined",
        title: "FC Slavia HK & Reality: Sportovní a Investiční Video Produkce",
        client: "Patrik Hořeňovský",
        industry: "Sport / Reality / Development",
        youtubeIds: ["_wAWHaGEDeY", "sohH2yjYMuk"],
        challenge: "Potřeba komplexní video produkce pro rozdílné segmenty – od zviditelnění sportovního klubu až po podporu prodeje nemovitostí a oslovení investorů pro výstavbu Alzheimer center.",
        solution: "Dlouhodobá spolupráce zahrnující dynamická sportovní videa, rozhovory i precizní videoprohlídky nemovitostí. Důraz na flexibilitu, rychlost a detailní zachycení atmosféry každého projektu.",
        results: [
            "Zviditelnění fotbalového klubu a akademie",
            "Rychlejší prodej nabízených nemovitostí",
            "Úspěšné oslovení investorů pro Alzheimer centra",
            "Dlouhodobá flexibilní spolupráce"
        ],
        testimonial: {
            quote: "Pro spolupráci s Tomášem Berkou jsem se rozhodl na základě doporučení od mých přátel. Pomohl mi zejména ke zviditelnění a propagaci FC Slavia Hradec Králové a její sportovní akademie. V realitním byznysu zase k rychlejšímu prodeji nemovitostí a oslovení nových investorů. Oceňuji zodpovědný přístup, rychlost přípravy, smysl pro detail a flexibilitu. Dále musím vyzdvihnout slušné jednání a dochvilnost, což bohužel u jiných produkcí nebývá samozřejmostí.",
            author: "Patrik Hořeňovský",
            role: "Manažer & Investor"
        },
        tags: ["Sport", "Reality", "Investice", "Dlouhodobá spolupráce"]
    },
    {
        id: "wikyhracky",
        title: "WikyHracky.cz: Online Kampaň + TV Spot",
        client: "WikyHracky.cz",
        industry: "E-commerce",
        youtubeId: "R3qqN_rj-4I",
        challenge: "Potřeba profesionálního videa pro online kampaň a následně televizního spotu pro vánoční kampaň.",
        solution: "Komplexní video produkce od konceptu po finální realizaci. Nejprve online kampaň, poté televizní spot s plnou produkcí.",
        results: [
            "Online kampaň pro e-shop",
            "Televizní spot pro vánoční kampaň",
            "Rychlejší orientace zákazníka",
            "Zvýšení vánočních prodejů"
        ],
        testimonial: {
            quote: "Tomášovi jsme svěřili natočení videa pro on-line kampaň i televizní spot pro vánoční kampaň. Kluci jsou rychlí, spolehliví, pohotoví a mají drive. Děkuji za spolupráci!",
            author: "Ing. Renáta Beránková",
            role: "Marketing Manager, WikyHracky.cz"
        },
        tags: ["TV Spot", "Online Kampaň", "E-commerce"]
    },
    {
        id: "legonid",
        title: "Legonid: Video Dokumentace LEGO® SERIOUS PLAY®",
        client: "Legonid",
        industry: "Vzdělávání",
        youtubeId: "FuRIbfZ3DPU",
        challenge: "Potřeba profesionální dokumentace 2-denního certifikačního kurzu pro usnadnění prodeje budoucích termínů.",
        solution: "Natočení průběhu workshopu, zachycení metodiky a atmosféry, plus střih dynamického aftermovie.",
        results: [
            "Profesionální video dokumentace kurzu",
            "Zachycení klíčových emocí a metodiky",
            "Materiál pro budoucí marketing",
            "Zvýšení důvěryhodnosti certifikace"
        ],
        testimonial: {
            quote: "Feedback od klienta již brzy...",
            author: "Leonid Kushnir",
            role: "Founder, Legonid"
        },
        tags: ["Workshop", "Corporate", "Dokumentace"]
    },
    {
        id: "easy-optic",
        title: "Easy Optic: Reels Strategie & Content",
        client: "Easy Optic",
        industry: "Optika / Retail",
        youtubeIds: ["6glt6p9oi8I", "JBEWFNVqNSE", "eUsnjYMyqy4"],
        challenge: "Potřeba pravidelného a vizuálně atraktivního obsahu pro Instagram, který ukáže produkty v akci.",
        solution: "Balíček 3 Reels a 15 fotografií zaměřených na estetiku a produktový detail v reálném prostředí.",
        results: [
            "Zvýšení interakce na Instagramu",
            "Profesionální sjednocení vizuálního stylu",
            "Konzistentní týdenní publikace",
            "Vyšší viditelnost produktů"
        ],
        testimonial: {
            quote: "Feedback od klienta již brzy...",
            author: "Agáta",
            role: "Marketing Manager, Easy Optic"
        },
        tags: ["Reels", "Social Media", "Produktové video"]
    },
    {
        id: "icon-barber",
        title: "ICON Barber: Brutální Reels kampaň",
        client: "ICON Barber Shop",
        industry: "Služby / Lifestyle",
        youtubeIds: ["x2S2_0xHsjg", "TyVQ27BmnpQ", "3Hro_3rsPbo", "s10MsaHGk7s", "UdxMX-x5VP4", "FPWtRbUPZ6c", "ZXnP2KkSTwg"],
        challenge: "Oslovení mladší cílové skupiny a zvýšení počtu rezervací v barber shopu.",
        solution: "Sada 7 úderných Shorts s moderním střihem a hudbou, které ukazují řemeslo a atmosféru salonu.",
        results: [
            "Znatelný nárůst nových rezervací",
            "Virální dosah některých videí",
            "Jasná odlišitelnost od konkurence",
            "Budování komunity"
        ],
        testimonial: {
            quote: "Feedback od klienta již brzy...",
            author: "ICON Barber Shop",
            role: "Majitel"
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
                        Případové Studie
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Reálné projekty, reálné výsledky. Podívejte se, jak pomáháme firmám růst pomocí video obsahu.
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
                                                Video se připravuje
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
                                                    <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2">Výzva & Řešení</h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {study.challenge} {study.solution}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-3">Klíčové Výsledky</h3>
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
