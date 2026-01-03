import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UGC & Acting | Tomas",
    description: "UGC creator and actor services.",
};

export default function UGCPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">UGC & Acting</h1>
                    <p className="text-xl text-muted-foreground">
                        Need an actor or UGC creator for your brand?
                    </p>
                    <p className="mt-4">
                        Page coming soon in English. Please contact me for details.
                    </p>
                </div>
            </Container>
        </div>
    );
}
