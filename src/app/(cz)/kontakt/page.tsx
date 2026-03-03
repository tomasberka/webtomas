import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Suspense } from "react";
import { Mail, Phone, MapPin, Linkedin, Calendar, Check, MessageSquare, MessageCircle, Clock, Star } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_";
const WHATSAPP_URL = "https://wa.me/420732483004?text=Ahoj%20Tom%C3%A1%C5%A1i%2C%20m%C3%A1m%20z%C3%A1jem%20o%20konzultaci.";

export const metadata: Metadata = {
    title: "Kontakt & Rezervace | Video Produkce Praha | Já jsem Tomáš",
    description: "📞 Domluvte si konzultaci zdarma nebo napište dotaz. Video produkce v Praze, Brně a celé ČR. Odpovídám do 24 hodin. Kameraman, Reels, TikTok.",
    keywords: ["kameraman praha kontakt", "video producent česká republika", "filmmaker brno", "video produkce kontakt", "video konzultace zdarma"],
    alternates: {
        canonical: "https://jajsemtomas.cz/kontakt",
        languages: {
            "en": "https://en.jajsemtomas.cz/contact"
        }
    },
};

export default function ContactPage() {
    return (
        <div className="py-16 md:py-24">
            <BreadcrumbSchema items={[
                { name: "Domů", url: "https://jajsemtomas.cz" },
                { name: "Kontakt", url: "https://jajsemtomas.cz/kontakt" }
            ]} />
            
            <Container>
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Jsem na příjmu.
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        Vyberte si podle své nátury — call, WhatsApp nebo zpráva. Odpovídám do 24 h.
                    </p>
                    {/* Social proof bar */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary fill-primary" /> 50+ spokojených klientů</span>
                        <span className="hidden sm:block text-border">|</span>
                        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Odpověď do 24 h</span>
                        <span className="hidden sm:block text-border">|</span>
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" /> Volné termíny tento týden</span>
                    </div>
                </div>

                {/* WhatsApp fast-track strip */}
                <div className="mb-10 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Chcete odpověď rychle? 🚀</p>
                            <p className="text-xs text-muted-foreground">Napište mi na WhatsApp — odpovídám obvykle do hodiny.</p>
                        </div>
                    </div>
                    <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold whitespace-nowrap">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Napsat na WhatsApp
                        </Button>
                    </Link>
                </div>

                {/* Two Options */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Option A: Calendar */}
                    <div className="bg-card border-2 border-primary/50 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                            Doporučeno
                        </div>
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Calendar className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">📅 Pojďme se pobavit</h2>
                        <p className="text-muted-foreground mb-6">
                            15 minut, které změní váš obsah. Probereme strategii, možnosti a termíny. Žádné závazky.
                        </p>
                        <ul className="space-y-2 text-sm mb-8">
                            <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Online nebo osobně v Praze</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Okamžité nacenění</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Strategie na míru zdarma</li>
                        </ul>
                        <Link href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="w-full text-lg h-14 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cta-pulse">
                                📅 Vybrat termín v kalendáři
                            </Button>
                        </Link>
                    </div>

                    {/* Option B: Form */}
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6">
                            <MessageSquare className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">✉️ Rychlá zpráva</h2>
                        <p className="text-muted-foreground mb-6">
                            Spěcháte nebo preferujete psát? Odpovím do 24 hodin. Žádné formulářové peklo.
                        </p>
                        <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Načítám formulář...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-muted/30 rounded-2xl p-8 border">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-start">
                            <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Email</h3>
                                <a href="mailto:msg@jajsemtomas.cz" className="text-muted-foreground hover:text-primary transition-colors text-sm">msg@jajsemtomas.cz</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Telefon</h3>
                                <a href="tel:+420735846329" className="text-muted-foreground hover:text-primary transition-colors text-sm">+420 735 846 329</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Linkedin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/berkatomas" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">linkedin.com/in/berkatomas</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Lokace</h3>
                                <p className="text-muted-foreground text-sm">Praha (Ateliér) & Celá ČR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
