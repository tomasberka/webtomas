import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Tomas",
    description: "Get in touch and let's create a video strategy for your business together.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/contact",
    },
    openGraph: {
        url: "https://en.jajsemtomas.cz/contact",
        title: "Contact | Tomas",
        description: "Get in touch and let's create a video strategy for your business together.",
    },
};

export default function ContactPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's create together</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Interested in collaboration? Fill out the form or email me directly. I reply within 24 hours.
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
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </Container>
        </div>
    );
}
