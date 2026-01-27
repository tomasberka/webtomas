import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rezervace | Přesměrování na Kontakt | Já jsem Tomáš",
    description: "Rezervujte si konzultaci zdarma na naší kontaktní stránce.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function BookingPage() {
    redirect("/kontakt");
}
