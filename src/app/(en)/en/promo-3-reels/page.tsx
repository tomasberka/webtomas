import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Packages | Tomas Berka",
    robots: { index: false, follow: true },
};

export default function PromoReelsPage() {
    redirect("/reels-packages");
}
