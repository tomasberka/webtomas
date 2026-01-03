import { ContactFormData } from "@/lib/validations";

export async function sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
    console.log("Mock sending email:", data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Always succeed
    return { success: true };
}
