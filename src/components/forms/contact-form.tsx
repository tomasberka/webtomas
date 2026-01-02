"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendEmail } from "@/app/actions/send-email";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const searchParams = useSearchParams();
    const preselectedPackage = searchParams.get("package");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            service: preselectedPackage ? `Balíček: ${preselectedPackage}` : "",
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        setError(null);
        startTransition(async () => {
            const result = await sendEmail(data);
            if (result.success) {
                trackEvent("submit_contact", { service: data.service });
                router.push("/dekuji");
            } else {
                setError(result.error || "Něco se pokazilo. Zkuste to prosím znovu.");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                    {error}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Jméno</Label>
                    <Input id="name" placeholder="Jan Novák" {...register("name")} />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jan@example.com" {...register("email")} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (volitelné)</Label>
                    <Input id="phone" type="tel" placeholder="+420 123 456 789" {...register("phone")} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="budget">Orientační rozpočet (volitelné)</Label>
                    <Input id="budget" placeholder="např. 20 000 Kč" {...register("budget")} />
                </div>
            </div>


            <div className="space-y-2">
                <Label htmlFor="service">Služba</Label>
                <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register("service")}
                >
                    <option value="">Vyberte službu...</option>
                    <option value="Reels Balíček">Reels Balíček</option>
                    <option value="Kreativní Produkce">Kreativní Produkce</option>
                    <option value="Event Video">Event Video</option>
                    <option value="Live Stream">Live Stream</option>
                    <option value="Postprodukce">Postprodukce</option>
                    <option value="Jiné / Spolupráce">Jiné / Spolupráce</option>
                </select>
                {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Zpráva</Label>
                <Textarea
                    id="message"
                    placeholder="Popište váš projekt..."
                    className="min-h-[120px]"
                    {...register("message")}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isPending ? "Odesílám..." : "Odeslat nezávaznou poptávku"}
            </Button>
        </form>
    );
}
