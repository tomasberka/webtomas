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

export function ContactForm() {
    const searchParams = useSearchParams();
    const preselectedPackage = searchParams.get("package");

    return (
        <form action="https://formspree.io/f/mpqwdzyb" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Jméno</Label>
                    <Input id="name" name="name" placeholder="Jan Novák" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="jan@example.com" required />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (volitelné)</Label>
                    <Input id="phone" type="tel" name="phone" placeholder="+420 123 456 789" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="budget">Orientační rozpočet (volitelné)</Label>
                    <Input id="budget" name="budget" placeholder="např. 20 000 Kč" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="service">Služba</Label>
                <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue={preselectedPackage ? `Balíček: ${preselectedPackage}` : ""}
                >
                    <option value="">Vyberte službu...</option>
                    <option value="Reels Balíček">Reels Balíček</option>
                    <option value="Kreativní Produkce">Kreativní Produkce</option>
                    <option value="Event Video">Event Video</option>
                    <option value="Live Stream">Live Stream</option>
                    <option value="Postprodukce">Postprodukce</option>
                    <option value="Jiné / Spolupráce">Jiné / Spolupráce</option>
                </select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Zpráva</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Popište váš projekt..."
                    className="min-h-[120px]"
                    required
                />
            </div>

            <input type="hidden" name="_next" value="https://www.jajsemtomas.cz/dekuji" />
            <input type="hidden" name="_subject" value="Nová poptávka z webu!" />
            <input type="hidden" name="_language" value="cs" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <Button type="submit" size="lg" className="w-full">
                Odeslat nezávaznou poptávku
            </Button>
        </form>
    );
}
