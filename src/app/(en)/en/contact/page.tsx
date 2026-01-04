import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Strategic Video Consultation London & Prague",
    description: "Book a strategic consultation. We'll discuss your revenue goals and how video can scale your brand in London or globally.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/contact",
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/contact",
        title: "Contact | Strategic Video Consultation London & Prague",
        description: "Book a strategic consultation. We'll discuss your revenue goals.",
    },
};

export default function ContactPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Got a Vision? Let's Strategize.</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            I don't just "take orders". I partner with brands for growth. Tell me about your business challenge.
                        </p>

                        <div className="space-y-8">

                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <a href="tel:+420735846329" className="text-muted-foreground hover:text-primary transition-colors">+420 735 846 329</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-muted-foreground">Prague (Studio) & London / Global</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-muted/30 rounded-xl border">
                            <h3 className="font-semibold mb-2">What happens next?</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center">✓ I will reply personally within 24 hours.</li>
                                <li className="flex items-center">✓ The first consultation (15 min) is free.</li>
                                <li className="flex items-center">✓ No spam, just a concrete offer.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                        <Suspense fallback={<div>Loading form...</div>}>
                            <ContactForm locale="en" />
                        </Suspense>
                    </div>
                </div>
            </Container>
        </div>
    );
}
