import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Free Consultation | Video Production London | I am Tomas",
    description: "📅 Book a free 15-minute consultation with a video producer in London. We'll discuss video strategy, pricing and dates. Online or in person.",
    keywords: ["video consultation free", "filmmaker booking london", "video production meeting"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/booking",
        languages: {
            "cs": "https://jajsemtomas.cz/rezervace"
        }
    },
};

export default function BookingPage() {
    return (
        <div className="pb-20">
            <section className="pt-12 pb-12 md:pt-20 md:pb-20 bg-muted/30 border-b">
                <Container className="text-center max-w-3xl">
                    <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-6">
                        ⏱ Speed is a priority
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        We'll solve it in <span className="text-primary">15 minutes.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 text-pretty">
                        No tedious back-and-forth emails. Choose a time, I'll call you, and we'll immediately agree on a shooting date and price.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
                        <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> No obligations</span>
                        <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Instant pricing</span>
                        <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Free strategy</span>
                    </div>
                </Container>
            </section>

            <Container className="py-12 -mt-8 relative z-10 text-center">
                <div className="bg-card border rounded-2xl shadow-xl p-12 max-w-2xl mx-auto flex flex-col items-center justify-center gap-8">
                    <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Calendar className="h-10 w-10 text-primary" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Open Calendar</h2>
                        <p className="text-muted-foreground mb-8">
                            Click the button below to select a time in Google Calendar.
                            <br />
                            It will open in a new, clear window.
                        </p>

                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Wf1BjdwQdJU84AymHizbMjQdNFMgFHGmSvvD112G3Yv_TuuI5mNYVoeChrHBIw4uZY-w7nt7_" target="_blank">
                            <Button size="lg" className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                                📅 Choose a time online
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>

            <section className="py-12 text-center">
                <Container>
                    <p className="text-muted-foreground mb-4">Don't want to call?</p>
                    <Link href="/contact" className="text-primary hover:underline font-medium">
                        Proceed to traditional contact form
                    </Link>
                </Container>
            </section>
        </div>
    );
}
