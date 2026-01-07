import { Container } from "@/components/ui/container";

export const metadata = {
    title: "Privacy Policy | I am Tomas",
    description: "Information about personal data processing and the use of cookies.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/privacy-policy",
        languages: {
            "cs": "https://jajsemtomas.cz/ochrana-udaju"
        }
    }
};

export default function PrivacyPolicyPage() {
    return (
        <Container className="py-12 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Introductory Provisions</h2>
                    <p>
                        This policy explains how Tomáš Berka (hereinafter "the Controller") processes your personal data when using the jajsemtomas.cz website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. What Data I Collect and Why</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Contact Forms:</strong> If you contact me via the form, I process your name, email, and phone number to respond to your inquiry. The legal basis is negotiations for entering into a contract. I keep this data for as long as necessary to handle the communication.
                        </li>
                        <li>
                            <strong>Google Analytics:</strong> This website uses Google Analytics 4 to measure traffic. This data is anonymized and used to improve the website. This only occurs if you grant consent in the cookie banner (&quot;Analytical&quot; category). For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Google&apos;s Privacy Policy</a>.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
                    <p>
                        The website uses cookies. According to the Electronic Communications Act, I can only store cookies other than strictly necessary ones (e.g., marketing or analytical) with your prior active consent.
                    </p>
                    <p className="mt-2 text-muted-foreground italic">
                        You can change or withdraw your consent at any time by clearing your browser history or clicking on the "Cookie Settings" button (if available).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
                    <p>Under GDPR, you have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Request information about what personal data I process about you.</li>
                        <li>Request access to this data and have it updated or corrected.</li>
                        <li>Request the deletion of this personal data.</li>
                        <li>In case of doubt about compliance with obligations related to personal data processing, contact the Controller or the Office for Personal Data Protection.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
                    <p>
                        For questions regarding the processing of personal data, you can contact me via the web form.
                    </p>
                </section>
            </div>
        </Container >
    );
}
