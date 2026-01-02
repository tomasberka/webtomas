import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Globe, Users, Award } from "lucide-react";

export const metadata = {
    title: "Partner SocialVids | Tomáš",
    description: "Spolupráce se SocialVids pro mezinárodní video produkci a velké eventy.",
};

export default function PartnerPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                            STRATEGICKÉ PARTNERSTVÍ
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">SocialVids & Tomáš</h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty">
                            Pro projekty, které vyžadují velký tým, mezinárodní dosah nebo specifickou techniku, spojuji síly s produkcí SocialVids.
                            Společně pokrýváme konference, festivaly a globální kampaně.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/kontakt">
                                <Button size="lg">Poptat velkou produkci</Button>
                            </Link>
                            <a href="https://socialvids.cz" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">Web SocialVids</Button>
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
                        <h3 className="text-xl font-bold mb-2">Mezinárodní Dosah</h3>
                        <p className="text-muted-foreground">Schopnost realizovat natáčení po celé Evropě i zámoří s jednotným standardem kvality.</p>
                    </div>
                    <div className="bg-card border rounded-xl p-6">
                        <Users className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Velké Týmy</h3>
                        <p className="text-muted-foreground">Sestavíme štáb přesně podle potřeb akce – od kameramanů po režiséry a zvukaře.</p>
                    </div>
                    <div className="bg-card border rounded-xl p-6">
                        <Award className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">Premiová Kvalita</h3>
                        <p className="text-muted-foreground">Garantujeme nejvyšší technickou a kreativní úroveň pro náročné klienty.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
