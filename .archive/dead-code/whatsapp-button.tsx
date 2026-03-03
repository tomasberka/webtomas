import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
    className?: string;
    variant?: "default" | "outline" | "secondary";
    size?: "default" | "sm" | "lg" | "icon";
    text?: string;
    locale?: "cs" | "en";
}

export function WhatsAppButton({
    className,
    variant = "default",
    size = "lg",
    text,
    locale = "cs"
}: WhatsAppButtonProps) {
    const phoneNumber = "420735846329";
    const message = encodeURIComponent(
        locale === "en"
            ? "Hi Tomas, I'm interested in the Case Study Program (3 Reels + 15 photos)."
            : "Ahoj Tomáši, mám zájem o Case Study Program (3 Reels + 15 fotek)."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    const defaultText = locale === "en" ? "Chat on WhatsApp" : "Napsat na WhatsApp";

    return (
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
                variant={variant}
                size={size}
                className={cn(
                    "gap-2 font-bold transition-all hover:scale-105 active:scale-95",
                    variant === "default" && "bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-green-500/20",
                    className
                )}
            >
                <MessageCircle className="w-5 h-5 fill-current" />
                {text || defaultText}
            </Button>
        </Link>
    );
}

