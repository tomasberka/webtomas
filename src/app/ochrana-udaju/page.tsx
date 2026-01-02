
import { Container } from "@/components/ui/container";

export const metadata = {
    title: "Ochrana osobních údajů | Já jsem Tomáš",
    description: "Informace o zpracování osobních údajů a používání souborů cookies.",
};

export default function PrivacyPolicyPage() {
    return (
        <Container className="py-12 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Zásady ochrany osobních údajů</h1>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Úvodní ustanovení</h2>
                    <p>
                        Tyto zásady vysvětlují, jak Tomáš Berka, se sídlem Praha 3 (dále jen "Správce"), zpracovává vaše osobní údaje při používání webových stránek jajsemtomas.cz.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Jaká data sbírám a proč</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Kontaktní formuláře:</strong> Pokud mě kontaktujete přes formulář, zpracovávám vaše jméno, e-mail a telefon, abych vám mohl odpovědět na vaši poptávku. Právním základem je jednání o uzavření smlouvy. Tato data uchovávám po dobu nezbytně nutnou pro vyřízení komunikace.
                        </li>
                        <li>
                            <strong>Google Analytics:</strong> Tento web používá službu Google Analytics 4 pro měření návštěvnosti. Tato data jsou anonymizovaná a slouží k vylepšování webu. K tomuto dochází pouze pokud udělíte souhlas v cookie liště (kategorie "Analytické").
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Soubory Cookies</h2>
                    <p>
                        Web používá soubory cookies. Podle novely zákona o elektronických komunikacích mohu ukládat jiné než nezbytné cookies (např. marketingové nebo analytické) pouze s vaším předchozím aktivním souhlasem.
                    </p>
                    <p className="mt-2 text-muted-foreground italic">
                        Svůj souhlas můžete kdykoliv změnit nebo odvolat smazáním historie prohlížeče nebo kliknutím na tlačítko "Nastavení cookies" (pokud je dostupné).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Vaše práva</h2>
                    <p>Podle GDPR máte právo:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Požadovat informaci, jaké vaše osobní údaje zpracovávám.</li>
                        <li>Vyžádat si přístup k těmto údajům a nechat je aktualizovat nebo opravit.</li>
                        <li>Požadovat výmaz těchto osobních údajů.</li>
                        <li>V případě pochybností o dodržování povinností souvisejících se zpracováním osobních údajů se obrátit na Správce nebo na Úřad pro ochranu osobních údajů.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Kontakt</h2>
                    <p>
                        V případě dotazů ke zpracování osobních údajů mě můžete kontaktovat prostřednictvím webového formuláře.
                    </p>
                </section>
            </div>
        </Container >
    );
}
