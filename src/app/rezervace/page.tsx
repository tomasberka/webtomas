import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Rezervace Callu | Já jsem Tomáš",
    description: "Vyberte si termín pro krátký 15minutový hovor. Vyřešíme vaši video strategii, nacenění a termín natáčení hned teď.",
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

            <Container className="py-12 -mt-8 relative z-10">
                <div className="bg-card border rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto grid md:grid-cols-5 min-h-[600px]">
                    {/* Simulator of Calendly/Booking UI */}
                    <div className="md:col-span-2 bg-muted p-8 border-r">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-full bg-zinc-200 overflow-hidden">
                                <img src="/images/tomas-portrait.png" alt="Tomáš" className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Voláte si s</p>
                                <p className="font-bold">Já jsem Tomáš</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Discovery Call</h2>
                        <div className="flex items-center text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            15 min
                        </div>
                        <div className="flex items-center text-muted-foreground mb-6">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            Online (Google Meet / Telefon)
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Cílem tohoto hovoru je zjistit, jestli si můžeme navzájem pomoci. Probereme:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Váš cíl a rozpočet</li>
                            <li>• Typ videa, který potřebujete</li>
                            <li>• Možné termíny natáčení</li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 bg-background p-8 flex flex-col items-center justify-center text-center">
                        {/* 
                            PLACEHOLDER FOR EMBED CODE
                            User can replace this div with:
                            <iframe src="https://calendly.com/YOUR_LINK" width="100%" height="100%" frameBorder="0"></iframe>
                        */}
                        <div className="space-y-6 max-w-md">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Zde se načte kalendář</h3>
                            <p className="text-muted-foreground">
                                Až budete připraveni, vložte sem kód z Calendly, Cal.com nebo Google Calendar.
                            </p>
                            <div className="p-4 bg-muted rounded-lg text-sm text-left border font-mono text-muted-foreground break-all">
                                &lt;iframe src="https://calendly.com/..." /&gt;
                            </div>
                            <Button className="w-full pointer-events-none opacity-50">
                                Vybrat termín (Ukázka)
                            </Button>
                        </div>
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
