import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Suspense } from "react";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Calendar, Check, MessageSquare } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "Contact & Booking | Video Production London & Prague | I am Tomas",
    description: "📞 Book a free consultation or send an enquiry. Video production in London, Prague & worldwide. Reply within 24 hours. Reels, TikTok, corporate videos.",
    keywords: ["video producer london contact", "filmmaker uk contact", "video production london enquiry", "corporate video london", "free video consultation"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/contact",
        languages: {
            "cs": "https://jajsemtomas.cz/kontakt"
        }
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/contact",
        title: "Contact & Booking | Video Production London & Prague | I am Tomas",
        description: "📞 Book a free video consultation. Video production in London & Prague.",
    },
};

export default function ContactPage() {
    return (
        <div className="py-16 md:py-24">
            <BreadcrumbSchema items={[
                { name: "Home", url: "https://en.jajsemtomas.cz" },
                { name: "Contact", url: "https://en.jajsemtomas.cz/contact" }
            ]} />
            
            <Container>
                {/* Hero */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Let's Talk.
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Choose what works best for you. Whether you prefer a quick call or writing first, I'm here.
                    </p>
                </div>

                {/* Two Options */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Option A: Calendar */}
                    <div className="bg-card border-2 border-primary/50 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                            Recommended
                        </div>
                        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Calendar className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">🅰️ Free Consultation</h2>
                        <p className="text-muted-foreground mb-6">
                            15 minutes that could change your content. We'll discuss strategy, options and timelines. No obligations.
                        </p>
                        <ul className="space-y-2 text-sm mb-8">
                            <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Online or in-person (London/Prague)</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Instant pricing</li>
                            <li className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Free tailored strategy</li>
                        </ul>
                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                            <Button size="lg" className="w-full text-lg h-14 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                📅 Pick a Time in Calendar
                            </Button>
                        </Link>
                    </div>

                    {/* Option B: Form */}
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6">
                            <MessageSquare className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3">🅱️ Quick Enquiry</h2>
                        <p className="text-muted-foreground mb-6">
                            Prefer to write first? I'll reply within 24 hours. For complex projects or collaborations.
                        </p>
                        <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Loading form...</div>}>
                            <ContactForm locale="en" />
                        </Suspense>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="bg-muted/30 rounded-2xl p-8 border">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="flex items-start">
                            <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1 text-sm">Email</h3>
                                <a href="mailto:msg@jajsemtomas.cz" className="text-muted-foreground hover:text-primary transition-colors text-xs">msg@jajsemtomas.cz</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1 text-sm">Phone</h3>
                                <a href="tel:+420735846329" className="text-muted-foreground hover:text-primary transition-colors text-xs">+420 735 846 329</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1 text-sm">WhatsApp</h3>
                                <a href="https://api.whatsapp.com/message/WWFB72BIE4NED1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors text-xs">Chat directly</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Linkedin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1 text-sm">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/berkatomas" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs">berkatomas</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1 text-sm">Location</h3>
                                <p className="text-muted-foreground text-xs">Prague / London / Global</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
