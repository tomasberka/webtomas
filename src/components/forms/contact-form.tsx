"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { trackBookingClick } from "@/lib/analytics";

export function ContactForm({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const preselectedPackage = searchParams.get("package");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const t = {
        name: locale === 'en' ? "Name" : "Jméno",
        namePlaceholder: locale === 'en' ? "John Doe" : "Jan Novák",
        email: locale === 'en' ? "Email" : "Email",
        phone: locale === 'en' ? "Phone (optional)" : "Telefon (volitelné)",
        phonePlaceholder: locale === 'en' ? "+44 7123 456789" : "+420 123 456 789",
        budget: locale === 'en' ? "Estimated Budget (optional)" : "Orientační rozpočet (volitelné)",
        budgetPlaceholder: locale === 'en' ? "e.g. £1,000" : "např. 20 000 Kč",
        service: locale === 'en' ? "Service" : "Služba",
        servicePlaceholder: locale === 'en' ? "Select a service..." : "Vyberte službu...",
        message: locale === 'en' ? "Message" : "Zpráva",
        messagePlaceholder: locale === 'en' ? "Describe your project..." : "Popište váš projekt...",
        submit: locale === 'en' ? "Send Inquiry" : "Odeslat nezávaznou poptávku",
        submitting: locale === 'en' ? "Sending..." : "Odesílám...",
        errorMessage: locale === 'en' ? "Something went wrong. Please try again." : "Něco se pokazilo. Zkuste to prosím znovu.",
        subject: locale === 'en' ? "New inquiry from English website!" : "Nová poptávka z webu!",
        thankYouPage: locale === 'en' ? "/thank-you" : "/dekuji",
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        // Track the form submission
        trackBookingClick("contact_form_submit", locale);

        try {
            const response = await fetch("https://formspree.io/f/mpqwdzyb", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                // Redirect to thank-you page
                router.push(t.thankYouPage);
            } else {
                setError(t.errorMessage);
                setIsSubmitting(false);
            }
        } catch {
            setError(t.errorMessage);
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input id="name" name="name" placeholder={t.namePlaceholder} required disabled={isSubmitting} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input id="email" type="email" name="email" placeholder="john@example.com" required disabled={isSubmitting} />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input id="phone" type="tel" name="phone" placeholder={t.phonePlaceholder} disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="budget">{t.budget}</Label>
                    <Input id="budget" name="budget" placeholder={t.budgetPlaceholder} disabled={isSubmitting} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="service">{t.service}</Label>
                <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue={preselectedPackage ? (locale === 'en' ? `Package: ${preselectedPackage}` : `Balíček: ${preselectedPackage}`) : ""}
                    disabled={isSubmitting}
                >
                    <option value="">{t.servicePlaceholder}</option>
                    {locale === 'en' ? (
                        <>
                            <option value="Gateway Strategy">Gateway Strategy (Market Entry)</option>
                            <option value="Reels Package">Reels Package</option>
                            <option value="Creative Production">Creative Production</option>
                            <option value="Event Video">Event Video</option>
                            <option value="Live Stream">Live Stream</option>
                            <option value="Post-production">Post-production</option>
                            <option value="Other / Collaboration">Other / Collaboration</option>
                        </>
                    ) : (
                        <>
                            <option value="Vstup na trh (Gateway Strategy)">Vstup na trh (Gateway Strategy)</option>
                            <option value="Reels Balíček">Reels Balíček</option>
                            <option value="Kreativní Produkce">Kreativní Produkce</option>
                            <option value="Event Video">Event Video</option>
                            <option value="Live Stream">Live Stream</option>
                            <option value="Postprodukce">Postprodukce</option>
                            <option value="Jiné / Spolupráce">Jiné / Spolupráce</option>
                        </>
                    )}
                </select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder={t.messagePlaceholder}
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                />
            </div>

            <input type="hidden" name="_subject" value={t.subject} />
            <input type="hidden" name="_language" value={locale} />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            {error && (
                <div className="p-3 text-sm text-red-500 bg-red-500/10 rounded-lg">
                    {error}
                </div>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t.submitting}
                    </>
                ) : (
                    t.submit
                )}
            </Button>
        </form>
    );
}

