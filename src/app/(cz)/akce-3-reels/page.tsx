import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Balíčky | Tomáš Berka",
    robots: { index: false, follow: true },
};

export default function AkceReelsPage() {
    redirect("/reels-balicky");
}
