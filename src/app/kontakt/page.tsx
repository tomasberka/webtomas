import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: "Kontakt | Tomáš",
    description: "Ozvěte se mi a společně vymyslíme video strategii pro váš byznys.",
};

export default function ContactPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Pojďme tvořit společně</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Máte zájem o spolupráci? Vyplňte formulář nebo mi napište přímo. Odpovím do 24 hodin.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <a href="mailto:info@jajsemtomas.cz" className="text-muted-foreground hover:text-primary transition-colors">info@jajsemtomas.cz</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Telefon</h3>
                                    <a href="tel:+420123456789" className="text-muted-foreground hover:text-primary transition-colors">+420 123 456 789</a>
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
