import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Případové Studie | Reálné Výsledky Video Produkce | Já jsem Tomáš",
    description: "Podívejte se na konkrétní výsledky naší video produkce. Case studies s měřitelnými výsledky pro velké klienty.",
};

const caseStudies = [
    {
        id: "wikyhracky",
        title: "WikyHracky.cz: Online Kampaň + TV Spot",
        client: "WikyHracky.cz",
        industry: "E-commerce",
        challenge: "Potřeba profesionálního videa pro online kampaň a následně televizního spotu pro vánoční kampaň.",
        solution: "Komplexní video produkce od konceptu po finální realizaci. Nejprve online kampaň, poté televizní spot s plnou produkcí.",
        results: [
            "Online kampaň pro e-shop",
            "Televizní spot pro vánoční kampaň",
            "Rychlé dodání",
            "Profesionální realizace"
        ],
        testimonial: {
            quote: "Kluci jsou rychlí, spolehliví, pohotoví a mají drive. Děkuji za spolupráci!",
            author: "Ing. Renáta Beránková",
            role: "Marketing Specialist, WikyHracky.cz"
        },
        tags: ["TV Spot", "Online Kampaň", "E-commerce"]
    },
    {
        id: "oict",
        title: "OICT: Projektová Spolupráce",
        client: "OICT",
        industry: "Městská správa",
        challenge: "Potřeba flexibilního partnera pro video projekty městské správy s rychlým jednáním.",
        solution: "Dlouhodobá spolupráce s důrazem na flexibilitu, samostatnost a rychlé dodání projektů.",
        results: [
            "Flexibilní spolupráce",
            "Rychlé jednání",
            "Samostatné řešení projektů",
            "Dotažení do zdárného konce"
        ],
        testimonial: {
            quote: "Na spolupráci oceňuji především flexibilitu a schopnost samostatně a rychle jednat, zrovna tak jako dotáhnout věci do zdárného konce.",
            author: "Peter Svoboda",
            role: "Projektový manažer, OICT"
        },
        tags: ["Městská správa", "Dlouhodobá spolupráce"]
    },
    {
        id: "roklen24",
        title: "Roklen24: Video Produkce + Fotografie",
        client: "Roklen24",
        industry: "Finanční portál",
        challenge: "Pravidelná potřeba kvalitního video obsahu a fotografií pro finanční portál.",
        solution: "Dlouhodobá spolupráce od roku 2018 s důrazem na profesionální přístup, kvalitu a flexibilitu.",
        results: [
            "Dlouhodobá spolupráce od 2018",
            "Video produkce pro portál",
            "Profesionální fotografie",
            "Konzistentní kvalita"
        ],
        testimonial: {
            quote: "Velmi oceňuji profesionální přístup k práci a především její kvalitu a také flexibilitu.",
            author: "Jaroslav Průcha",
            role: "Šéfredaktor, Roklen24"
        },
        tags: ["Video Produkce", "Fotografie", "Finanční sektor"]
    },
    {
        id: "dekra",
        title: "DEKRA: Vzdělávací Videa",
        client: "DEKRA",
        industry: "Vzdělávání a školení",
        challenge: "Tvorba vzdělávacích videí pro divizi vzdělávání a školení s důrazem na kvalitu a kreativitu.",
        solution: "Profesionální produkce vzdělávacích videí s kreativním přístupem a důrazem na spolehlivost.",
        results: [
            "Vzdělávací videa",
            "Spolehlivost a serióznost",
            "Kreativní přístup",
            "Dlouhodobá spolupráce"
        ],
        testimonial: {
            quote: "Spolehlivost – serióznost – kreativita – kvalita. Spolupráci mohu s klidným svědomím doporučit a sama se těším na další společné projekty.",
            author: "Ing. Dana Berková, MBA",
            role: "Vedoucí divize vzdělávání a školení, DEKRA"
        },
        tags: ["Vzdělávání", "Korporát", "E-learning"]
    },
    {
        id: "legonid",
        title: "Legonid: Video Produkce pro LEGO Serious Play",
        client: "Legonid",
        industry: "LEGO Serious Play",
        challenge: "Potřeba profesionální video dokumentace certifikačního kurzu LEGO Serious Play.",
        solution: "Natočení kompletní video dokumentace s důrazem na zachycení workshopové atmosféry a profesionální prezentaci.",
        results: [
            "Natočení certifikačního kurzu",
            "Profesionální video dokumentace",
            "Zachycení workshopové atmosféry"
        ],
        testimonial: {
            quote: "Čeká na feedback od klienta",
            author: "Leonid Kushnir",
            role: "Founder & LEGO Serious Play Facilitator, Legonid"
        },
        tags: ["Workshop", "Vzdělávání", "Dokumentace"]
    },
    {
        id: "slavia-hk",
        title: "FC Slavia Hradec Králové: Sportovní Video",
        client: "FC Slavia Hradec Králové",
        industry: "Sport",
        challenge: "Natáčení sportovních eventů s důrazem na zachycení akce a atmosféry.",
        solution: "Profesionální sportovní videografie s dynamickými záběry a zachycením klíčových momentů.",
        results: [
            "Natáčení sportovních eventů",
            "Zachycení akce a atmosféry",
            "Dynamické záběry"
        ],
        testimonial: {
            quote: "Čeká na feedback od klienta",
            author: "FC Slavia Hradec Králové",
            role: "Fotbalový klub"
        },
        tags: ["Sport", "Event", "Dynamické video"]
    },
    {
        id: "easy-optic",
        title: "Easy Optic: Reels Balíček + Fotografie",
        client: "Easy Optic",
        industry: "Optika",
        challenge: "Potřeba konzistentního obsahu pro sociální sítě s profesionálními Reels a fotografiemi.",
        solution: "Kompletní balíček 3 Instagram Reels a 15 profesionálních fotografií s konzistentním vizuálním stylem.",
        results: [
            "3 Instagram Reels",
            "15 profesionálních fotek",
            "Konzistentní vizuální styl"
        ],
        testimonial: {
            quote: "Čeká na feedback od klienta",
            author: "Agáta",
            role: "Marketing Manager, Easy Optic"
        },
        tags: ["Reels", "Fotografie", "Social Media"]
    },
    {
        id: "patrik-horenovský",
        title: "Patrik Hořeňovský: Video Prezentace Nemovitosti",
        client: "Dům Samopše",
        industry: "Nemovitosti",
        challenge: "Profesionální video prezentace domu pro podporu prodeje.",
        solution: "Kompletní video tour s prezentací interiéru i exteriéru, optimalizované pro online prezentaci.",
        results: [
            "Profesionální video tour",
            "Prezentace interiéru i exteriéru",
            "Podpora prodeje nemovitosti"
        ],
        testimonial: {
            quote: "Čeká na feedback od klienta",
            author: "Patrik Hořeňovský",
            role: "Majitel"
        },
        tags: ["Nemovitosti", "Video Tour", "Prezentace"]
    },
    {
        id: "icon-barber",
        title: "ICON Barber Shop & Tattoo: Vertikální Video Obsah",
        client: "ICON Barber Shop & Tattoo",
        industry: "Barber Shop",
        challenge: "Tvorba moderního video obsahu pro Instagram a TikTok s důrazem na barber shop estetiku.",
        solution: "Produkce 7 profesionálních Shorts s moderním vizuálním stylem pro sociální sítě.",
        results: [
            "7 profesionálních Shorts",
            "Obsah pro Instagram & TikTok",
            "Moderní barber shop estetika"
        ],
        testimonial: {
            quote: "Čeká na feedback od klienta",
            author: "ICON Barber Shop & Tattoo",
            role: "Barber Shop"
        },
        tags: ["Shorts", "Social Media", "Barber"]
    },
    {
        id: "space-cbd",
        title: "SPACE CBD: Vertikální Video Produkce",
        client: "SPACE CBD",
        industry: "CBD produkty",
        challenge: "Kreativní video obsah pro prezentaci CBD produktů na sociálních sítích.",
        solution: "Produkce 4 Instagram Reels s kreativním conceptem a profesionální produktovou prezentací.",
        results: [
            "4 Instagram Reels",
            "Produktová prezentace",
            "Kreativní concept"
        ],
        testimonial: {
            quote: "Čeká na feedback od klienta",
            author: "SPACE CBD",
            role: "CBD produkty"
        },
        tags: ["Reels", "Produktová prezentace", "CBD"]
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
                <div className="space-y-16">
                    {caseStudies.map((study) => (
                        <Card key={study.id} className="overflow-hidden border-2">
                            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                                {/* Left Column - Info */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="inline-flex items-center gap-2 mb-4">
                                            {study.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                                        <p className="text-muted-foreground">
                                            <span className="font-medium text-foreground">{study.client}</span> • {study.industry}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Výzva</h3>
                                        <p className="text-muted-foreground">{study.challenge}</p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Řešení</h3>
                                        <p className="text-muted-foreground">{study.solution}</p>
                                    </div>
                                </div>

                                {/* Right Column - Results */}
                                <div className="space-y-6">
                                    <div className="bg-muted/50 rounded-xl p-6">
                                        <h3 className="font-bold text-lg mb-4">Výsledky</h3>
                                        <ul className="space-y-3">
                                            {study.results.map((result, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Testimonial */}
                                    <Card className="bg-primary/5 border-primary/20">
                                        <CardHeader>
                                            <CardTitle className="text-base">Co říká klient</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <p className="italic text-muted-foreground">
                                                "{study.testimonial.quote}"
                                            </p>
                                            <div>
                                                <p className="font-bold text-sm">{study.testimonial.author}</p>
                                                <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </Card>
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
