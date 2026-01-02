import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
    email: z.string().email("Neplatný email"),
    phone: z.string().optional(),
    service: z.string().min(1, "Vyberte prosím službu"),
    budget: z.string().optional(),
    message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
