import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Globe, Users, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner SocialVids | Tomas",
    description: "Collaboration with SocialVids for international video production and major events.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/partner-socialvids",
    },
};

export default function PartnerPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                            STRATEGIC PARTNERSHIP
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">SocialVids & Tomas</h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty">
                            For projects that require a large team, international reach, or specific equipment, I join forces with <strong>Martin</strong> and his production <strong>SocialVids</strong>.
                            Together we cover conferences, festivals, and global campaigns.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact">
                                <Button size="lg">Inquiry for large production</Button>
                            </Link>
                            <a href="https://socialvids.cz" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">SocialVids Web</Button>
                            </a>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-12 border flex items-center justify-center aspect-video relative overflow-hidden">
                        <Image
                            src="/images/socialvids-logo.png"
                            alt="SocialVids Logo"
                            width={400}
                            height={150}
                            className="w-full h-auto object-contain max-h-[150px]"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card border rounded-xl p-6">
                        <Globe className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">International Reach</h3>
                        <p className="text-muted-foreground">The ability to realize filming across Europe and overseas with a uniform standard of quality.</p>
                    </div>
                    <div className="bg-card border rounded-xl p-6">
                        <Users className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Large Teams</h3>
                        <p className="text-muted-foreground">We build a crew exactly according to the needs of the event – from cameramen to directors and sound engineers.</p>
                    </div>
                    <div className="bg-card border rounded-xl p-6">
                        <Award className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                        <p className="text-muted-foreground">We guarantee the highest technical and creative level for demanding clients.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
