import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Tomas",
    description: "Insights about video production.",
};

export default function BlogPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-6">Blog</h1>
                    <p className="text-xl text-muted-foreground">
                        Articles coming soon.
                    </p>
                </div>
            </Container>
        </div>
    );
}
