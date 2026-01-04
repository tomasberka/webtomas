import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { BookingCompleteTracker } from "@/components/tracking/booking-complete-tracker";

export const metadata = {
    title: "Thank You | Tomas",
    robots: {
        index: false,
        follow: false,
    }
};

export default function ThankYouPage() {
    return (
        <div className="py-32 flex items-center justify-center min-h-[60vh]">
            <BookingCompleteTracker locale="en" />
            <Container className="text-center flex flex-col items-center">
                <div className="h-24 w-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">Thank you for your message!</h1>
                <p className="text-xl text-muted-foreground max-w-md mb-8">
                    Your inquiry has been successfully sent. I will get back to you soon at the provided email to finalize the details.
                </p>
                <Link href="/">
                    <Button size="lg" variant="outline">Back to Home</Button>
                </Link>
            </Container>
        </div>
    );
}
