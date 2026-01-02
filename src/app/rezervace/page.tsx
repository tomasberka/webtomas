import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
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
                <div className="bg-card border rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto min-h-[800px]">
                    {/* Google Calendar Embed */}
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lD8T7f4X4X4X4?gv=true" // Note: The user provided a short link (calendar.app.google). Iframes usually need the full embed URL or standard URL. 
                        // Actually, short links often have X-Frame-Options: SAMEORIGIN. 
                        // Safe bet: Link to it via button if embed fails, BUT let's try the standard embed first. 
                        // Wait, I cannot know the full long URL from the short one without visiting it. 
                        // Using the provided short link in src usually redirects. Let's try to use the provided link directly.
                        src="https://calendar.app.google/BrjKeR6R6q2aoMLW8?gv=true"
                        style={{ border: 0 }}
                        width="100%"
                        height="800"
                        title="Rezervace termínu"
                    ></iframe>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Nenačítá se kalendář?</p>
                    <Link href="https://calendar.app.google/BrjKeR6R6q2aoMLW8" target="_blank">
                        <Button variant="outline">Otevřít kalendář v novém okně</Button>
                    </Link>
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
