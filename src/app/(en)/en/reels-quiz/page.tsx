import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Quiz | Tomas",
    description: "Test your Reels strategy.",
};

export default function QuizPage() {
    return (
        <div className="py-20 md:py-32 text-center">
            <Container>
                <h1 className="text-4xl font-bold mb-6">Reels Quiz</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    The quiz is currently being localized. Please check back later or contact me directly.
                </p>
                <Link href="/en/contact">
                    <Button size="lg">Contact Me</Button>
                </Link>
            </Container>
        </div>
    );
}
