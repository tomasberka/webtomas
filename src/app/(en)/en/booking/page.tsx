import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Booking | Redirect to Contact | I am Tomas",
    description: "Book a free consultation on our contact page.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function BookingPage() {
    redirect("/contact");
}
