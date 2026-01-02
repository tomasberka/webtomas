import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Rezervace Konzultace Zdarma | Video Produkce Praha",
    description: "Rezervujte si bezplatnou 15min konzultaci s video producentem. Probereme vaši video strategii, ceny a termíny natáčení. Online nebo osobně v Praze.",
};

export default function BookingPage() {
    return (
        <div className="pb-20">
            <section className="pt-12 pb-12 md:pt-20 md:pb-20 bg-muted/30 border-b">
                <Container className="text-center max-w-3xl">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-6">
                        ⏱ Rychlost je priorita
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Vyřešíme to za <span className="text-primary">15 minut.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 text-pretty">
                        Žádné zdlouhavé e-maily tam a zpět. Vyberte si čas, já zavolám, a rovnou domluvíme termín natáčení i cenu.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
                        <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Žádné závazky</span>
                        <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Okamžité nacenění</span>
                        <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Strategie zdarma</span>
                    </div>
                </Container>
            </section>

            <Container className="py-12 -mt-8 relative z-10 text-center">
                <div className="bg-card border rounded-2xl shadow-xl p-12 max-w-2xl mx-auto flex flex-col items-center justify-center gap-8">
                    <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Calendar className="h-10 w-10 text-primary" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Otevřít kalendář</h2>
                        <p className="text-muted-foreground mb-8">
                            Klikněte na tlačítko níže pro výběr termínu v Google Kalendáři.
                            <br />
                            Otevře se v novém, přehledném okně.
                        </p>

                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                            <Button size="lg" className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                📅 Vybrat termín online
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>

            <section className="py-12 text-center">
                <Container>
                    <p className="text-muted-foreground mb-4">Nehodí se vám volat?</p>
                    <Link href="/kontakt" className="text-primary hover:underline font-medium">
                        Pokračovat na klasický kontaktní formulář
                    </Link>
                </Container>
            </section>
        </div>
    );
}
