import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner SocialVids | Large Production | Tomas",
    description: "Partnership with SocialVids production agency for large-scale projects.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/partner-socialvids", // Clean URL preference
    },
};

export default function PartnerPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary mb-4">
                            🤝 Strategic Partnership
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">SocialVids & Tomas</h1>
                        <p className="text-xl text-muted-foreground">
                            For large projects requiring a full crew, heavy equipment, and studio facilities, I partner with SocialVids.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            This allows me to scale from a one-man-show to a full production team instantly, while you still deal with me as your creative lead.
                        </p>
                        <div className="pt-4">
                            <Link href="/en/contact">
                                <Button size="lg">Inquire Large Production</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/images/socialvids-logo.png"
                            alt="SocialVids"
                            width={400}
                            height={150}
                            className="object-contain"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
