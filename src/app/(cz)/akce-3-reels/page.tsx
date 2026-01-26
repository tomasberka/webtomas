import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { VideoPlayer } from "@/components/ui/video-player";
import { Check, Clock, Users, Video, Camera, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
    title: "Akce 3 Reels + 15 fotek | Já jsem Tomáš",
    description: "🔥 Speciální nabídka pro 3 firmy. Kompletní video produkce na klíč. Podívejte se na výsledky Easy Optic.",
    alternates: {
        canonical: "https://jajsemtomas.cz/akce-3-reels",
        languages: {
            "en": "https://en.jajsemtomas.cz/promo-3-reels"
        }
    }
};

export default function PromoPage() {
    return (
        <div className="pb-20">
            {/* Hero with dramatic gradient */}
            <section className="relative pt-8 pb-20 md:pt-14 md:pb-32 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-500/10 to-red-600/20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />

                <Container className="relative text-center max-w-5xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-500/40 bg-amber-500/10 backdrop-blur-sm px-5 py-2 text-sm font-bold text-amber-300 mb-8 animate-pulse shadow-lg shadow-amber-500/20">
                        <Sparkles className="h-4 w-4" />
                        <span>CASE STUDY PROGRAM – Pouze pro 4 vybrané obory</span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
                        <span className="block text-white">Získejte zákazníky</span>
                        <span className="block mt-2 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                            přes prémiová Reels
                        </span>
                    </h1>

                    {/* Price comparison - replaced with CTA */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="bg-green-500/20 text-green-400 font-bold px-4 py-2 rounded-full text-base">
                            📞 Cenu probereme na callu
                        </span>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                        Hledáme reference z těchto oborů: <strong className="text-foreground">Reality, Kliniky, Právo, Development</strong> a jakýkoliv <strong className="text-foreground">showroom nebo obchod s duší</strong>. Získáte
                        produkci za cenu, která se nebude opakovat.
                    </p>

                    {/* Availability boxes */}
                    <div className="flex justify-center gap-6 mb-12">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-card/80 backdrop-blur border-2 border-amber-500/50 rounded-2xl p-6 md:p-8 min-w-[140px]">
                                <div className="text-5xl md:text-6xl font-black text-amber-400">3</div>
                                <div className="text-sm font-medium text-muted-foreground mt-1">místa celkem</div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-card/80 backdrop-blur border-2 border-green-500/50 rounded-2xl p-6 md:p-8 min-w-[140px]">
                                <div className="text-5xl md:text-6xl font-black text-green-400">3</div>
                                <div className="text-sm font-medium text-muted-foreground mt-1">volná místa</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/rezervace">
                            <Button size="lg" className="text-xl h-16 px-12 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-white font-bold shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-1 hover:scale-105">
                                📅 Chci jedno z míst
                            </Button>
                        </Link>
                        <WhatsAppButton text="Napsat na WhatsApp" className="h-16 px-8 text-xl" />
                    </div>
                </Container>
            </section>

            {/* What's included - Visual grid */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Co v balíčku získáte?</h2>
                        <p className="text-xl text-muted-foreground">Kompletní obsah pro vaše sociální sítě</p>
                    </div>

                    {/* Main offer cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                        {/* Video card */}
                        <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                            <CardContent className="p-8 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                                        <Video className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-primary">3×</div>
                                        <div className="font-bold text-lg">Reels videa</div>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span>Profesionální natáčení</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span>Střih, hudba, titulky</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span>Formát 9:16 pro IG, TikTok, LinkedIn</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Photo card */}
                        <Card className="relative overflow-hidden border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/5 group hover:border-amber-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                            <CardContent className="p-8 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-16 w-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                                        <Camera className="h-8 w-8 text-amber-400" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-amber-400">15×</div>
                                        <div className="font-bold text-lg">Profesionálních fotek</div>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-amber-400 shrink-0" />
                                        <span>Portréty i produktové záběry</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-amber-400 shrink-0" />
                                        <span>Barevná korekce a retuš</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-amber-400 shrink-0" />
                                        <span>Pro web i sociální sítě</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Bonus features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Scénáře v ceně</div>
                        </div>
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Dodání do 7 dní</div>
                        </div>
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Optimalizovaný tým (2 lidé)</div>
                        </div>
                        <div className="bg-card/50 border rounded-xl p-4 text-center">
                            <Check className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Prémiová kvalita zaručena</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Strategic Value Section */}
            <section className="py-20 md:py-32 bg-black text-white overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50" />
                <Container className="relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Proč tyto Reels <br />
                                <span className="text-amber-400">reálně zaplatíte za týden?</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                                        <Sparkles className="h-6 w-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Reality & Development</h3>
                                        <p className="text-zinc-400 leading-relaxed">Video prodává emoci. Lidé nekupují metry čtvereční, ale životní styl. Jedno dobře udělané Reel může zkrátit dobu prodeje o týdny.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                                        <Sparkles className="h-6 w-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Kliniky & Služby</h3>
                                        <p className="text-zinc-400 leading-relaxed">Budujete důvěru. Když vás lidé vidí mluvit, přestanou se bát a objednají se. Reels jsou nejlevnější cesta, jak se dostat do telefonu tisíců lidí.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                                        <Sparkles className="h-6 w-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Showroomy & Obchody s duší</h3>
                                        <p className="text-zinc-400 leading-relaxed">Ukážeme "duši" vašeho místa. Atmosféru, detaily, unikátnost. Uděláme z vašeho obchodu cíl, kam lidé chtějí přijet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof Box */}
                        <div className="relative group text-left">
                            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                            <Card className="relative bg-zinc-900 border-zinc-800 p-8 md:p-10 text-white rounded-3xl">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-amber-400" aria-hidden="true">★</span>)}
                                </div>
                                <p className="text-xl italic leading-relaxed mb-8 text-zinc-300">
                                    "V realitním byznysu mi Tomáš pomohl k <strong>rychlejšímu prodeji nabízených nemovitostí</strong> a oslovení nových investorů. Oceňuji zodpovědný přístup a rychlost."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30 font-bold text-amber-400">PH</div>
                                    <div>
                                        <div className="font-bold text-lg text-white">Patrik Hořeňovský</div>
                                        <div className="text-sm text-zinc-500">Manažer & Realitní investor</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Easy Optic Showcase */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
                <Container>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
                            📸 Ukázkový projekt
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Easy Optic</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Přesně tohle dostanete – 3 profesionální Reels + 15 fotek. Kompletní balíček pro sociální sítě.
                        </p>
                    </div>

                    {/* Videos */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">3× Reels videa</h3>
                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                { id: "6glt6p9oi8I", title: "Easy Optic Reel 1" },
                                { id: "JBEWFNVqNSE", title: "Easy Optic Reel 2" },
                                { id: "eUsnjYMyqy4", title: "Easy Optic Reel 3" },
                            ].map((video) => (
                                <div key={video.id} className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 bg-card">
                                        <VideoPlayer
                                            videoId={video.id}
                                            className="aspect-[9/16] rounded-none"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photos */}
                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8">15× Profesionálních fotek</h3>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
                            {[
                                "easy-optic-8636.jpg",
                                "easy-optic-8639.jpg",
                                "easy-optic-8648.jpg",
                                "easy-optic-8650.jpg",
                                "easy-optic-8659.jpg",
                                "easy-optic-8667.jpg",
                                "easy-optic-8673.jpg",
                                "easy-optic-8678.jpg",
                                "easy-optic-8683.jpg",
                                "easy-optic-8695.jpg",
                                "easy-optic-8711.jpg",
                                "easy-optic-8727.jpg",
                                "easy-optic-8736.jpg",
                                "easy-optic-8739.jpg",
                                "easy-optic-8776.jpg",
                            ].map((photo, i) => (
                                <div key={i} className="relative group aspect-square overflow-hidden rounded-lg border border-primary/10 hover:border-primary/40 transition-colors">
                                    <Image
                                        src={`/images/easy-optic/${photo}`}
                                        alt={`Easy Optic foto ${i + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 33vw, 20vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-6">
                            Všechny fotky jsou upraveny a připraveny k okamžitému použití na webu i sociálních sítích.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Process - Clean cards */}
            <section className="py-20 md:py-28 border-y bg-muted/30">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Jak to funguje?</h2>
                        <p className="text-xl text-muted-foreground">4 jednoduché kroky k vašemu obsahu</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">1</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Rezervujete si call</h3>
                                <p className="text-sm text-muted-foreground">15 minut online – probereme váš byznys a vymyslíme témata</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg">2</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Připravím scénáře</h3>
                                <p className="text-sm text-muted-foreground">Na základě callu vytvořím 3 scénáře, které odsouhlasíte</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg">3</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Natočíme a nafotíme</h3>
                                <p className="text-sm text-muted-foreground">6 hodin u vás nebo v mém studiu – vy jen mluvíte, já se starám</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-card border-2 border-green-500/30 rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-xl bg-green-500 text-white flex items-center justify-center font-bold text-lg">✓</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Dodám hotový obsah</h3>
                                <p className="text-sm text-muted-foreground">Do 7 dnů máte 3 Reels + 15 fotek připravených k publikaci</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why this offer */}
            <section className="py-16 md:py-20">
                <Container className="max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Proč tato akce?</h2>
                    <div className="bg-card/50 border rounded-2xl p-8 md:p-10 text-left">
                        <p className="text-lg text-muted-foreground mb-6">
                            Chceme s kolegou Kimlou (SocialVids) rozšířit naše portfolio o nové case studies z konkrétních odvětví (Reality, Kliniky, Právo, Development).
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Získáte reference a ukázky práce, které můžeme veřejně prezentovat. Jde o plnohodnotnou produkci v našem standardním dvoučlenném složení. <strong className="text-foreground">Cenu probereme na callu.</strong>
                        </p>
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm">
                            <span>📋</span>
                            <span><strong>Podmínka:</strong> Souhlasíte s použitím obsahu v našem portfoliu</span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-amber-600/20 via-orange-500/10 to-red-600/20 border-t relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

                <Container className="relative text-center max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 font-bold px-4 py-2 rounded-full text-sm mb-8">
                        <span className="animate-pulse">⚡</span>
                        <span>Zbývají už jen 3 místa</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nečekejte, až bude pozdě
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Vytvořím vám měsíc obsahu, který buduje jméno a prodává.
                        <strong> Ideální pro: Reality, Kliniky, Právo, Development.</strong>
                    </p>

                    <Link href="/rezervace">
                        <Button size="lg" className="text-xl h-16 px-12 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:via-orange-400 hover:to-amber-400 text-white font-bold shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-1 hover:scale-105 animate-pulse">
                            📅 Rezervovat call zdarma
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </Link>

                    <p className="text-sm text-muted-foreground mt-6">
                        ✓ Žádné závazky &nbsp;•&nbsp; ✓ 15 minut online &nbsp;•&nbsp; ✓ Ihned víte, jestli se hodíme
                    </p>
                </Container>
            </section>
        </div>
    );
}
