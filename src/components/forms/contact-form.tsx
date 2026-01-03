"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function ContactForm({ locale = 'cs' }: { locale?: 'cs' | 'en' }) {
    const searchParams = useSearchParams();
    const preselectedPackage = searchParams.get("package");

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
        subject: locale === 'en' ? "New inquiry from English website!" : "Nová poptávka z webu!",
        next: locale === 'en' ? "https://en.jajsemtomas.cz/thank-you" : "https://www.jajsemtomas.cz/dekuji",
    };

    return (
        <form action="https://formspree.io/f/mpqwdzyb" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input id="name" name="name" placeholder={t.namePlaceholder} required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input id="email" type="email" name="email" placeholder="john@example.com" required />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input id="phone" type="tel" name="phone" placeholder={t.phonePlaceholder} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="budget">{t.budget}</Label>
                    <Input id="budget" name="budget" placeholder={t.budgetPlaceholder} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="service">{t.service}</Label>
                <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue={preselectedPackage ? (locale === 'en' ? `Package: ${preselectedPackage}` : `Balíček: ${preselectedPackage}`) : ""}
                >
                    <option value="">{t.servicePlaceholder}</option>
                    {locale === 'en' ? (
                        <>
                            <option value="Reels Package">Reels Package</option>
                            <option value="Creative Production">Creative Production</option>
                            <option value="Event Video">Event Video</option>
                            <option value="Live Stream">Live Stream</option>
                            <option value="Post-production">Post-production</option>
                            <option value="Other / Collaboration">Other / Collaboration</option>
                        </>
                    ) : (
                        <>
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
                />
            </div>

            <input type="hidden" name="_next" value={t.next} />
            <input type="hidden" name="_subject" value={t.subject} />
            <input type="hidden" name="_language" value={locale} />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <Button type="submit" size="lg" className="w-full">
                {t.submit}
            </Button>
        </form>
    );
}
