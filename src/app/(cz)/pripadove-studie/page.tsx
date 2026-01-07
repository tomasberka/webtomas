
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";

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



const caseStudies = [
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
            quote: "Spolupráce s Tomášem byla od prvního momentu velice příjemná. Největší výzvou bylo svěřit naši vizi někomu, kdo ji nejen pochopí, ale také přetvoří do digitální podoby, zachová její autenticitu a zároveň využije kreativitu. Tomáš to od první schůzky dokonale zvládl. Veškerá komunikace probíhala okamžitě, natáčení i focení bylo skvělé a finální výsledek na sebe nenechal dlouho čekat. Videa a fotografie nyní slouží k prezentaci Easy Optic na sociálních sítích, pomáhají budovat značku a přivádět nové zákazníky. Na spolupráci si velmi vážím osobního a příjemného přístupu, zodpovědnosti, kreativity, rychlosti a hlavně kvalitních fotografií a videí, které mluví samy za sebe. Do budoucna se těšíme na další společné projekty.",
            author: "Easy Optic",
            role: "Marketing Manager, Easy Optic"
        },
        tags: ["Reels", "Social Media", "Produktové video"]
    },
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
            quote: "Pro spolupráci s Tomášem Berkou jsem se rozhodl na základě doporučení od mých přátel, kteří s Tomášem spolupracují již řadu let. Pomohl mi zejména ke zviditelnění a propagaci fotbalového klubu FC Slavia Hradec Králové a její sportovní akademie. V realitním byznysu zase k rychlejšímu prodeji mnou nabízených nemovitostí, nebo oslovení nových investorů do segmentu výstavby nových Alzheimer center. Oceňuji zodpovědný přístup, rychlost přípravy, smysl pro detail a flexibilitu. Je pro mě jako pro klienta na telefonu a mohu se s ním často podělit o své pocity a názory na danou zakázku. Dále musím ocenit slušné jednání a dochvilnost, což se zdá být samozřejmost, ale často u jiných produkcí bohužel není.",
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
