import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Suspense } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const metadata = {
    title: "Kontakt | Strategická Konzultace Video Marketingu",
    description: "Rezervujte si nezávaznou strategickou konzultaci. Probereme vaše cíle, rozpočet a jak vám video pomůže vydělat.",
};

export default function ContactPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Máte vizi? Dáme jí strategii.</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Nehledám jen "zakázky". Hledám partnery pro dlouhodobý růst. Napište mi, co řešíte za byznys výzvu.
                        </p>

                        <div className="space-y-8">

                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <a href="mailto:msg@jajsemtomas.cz" className="text-muted-foreground hover:text-primary transition-colors">msg@jajsemtomas.cz</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Telefon</h3>
                                    <a href="tel:+420735846329" className="text-muted-foreground hover:text-primary transition-colors">+420 735 846 329</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Linkedin className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                                    <a href="https://www.linkedin.com/in/berkatomas" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">linkedin.com/in/berkatomas</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Lokace</h3>
                                    <p className="text-muted-foreground">Praha (Ateliér) & Celá ČR</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-muted/30 rounded-xl border">
                            <h3 className="font-semibold mb-2">Co se stane po odeslání?</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center">✓ Odpovím vám osobně do 24 hodin.</li>
                                <li className="flex items-center">✓ První konzultace (15 min) je zdarma.</li>
                                <li className="flex items-center">✓ Žádný spam, jen konkrétní nabídka.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                        <Suspense fallback={<div>Načítám formulář...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </Container>
        </div>
    );
}
