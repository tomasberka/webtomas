"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
    id: number;
    problem: string;
    scenario: string;
    options: {
        text: string;
        isCorrect: boolean;
        explanation: string;
    }[];
}

const questions: Question[] = [
    {
        id: 1,
        problem: "První 3 vteřiny jsou nuda",
        scenario: "Natáčíš Reel pro svůj e-shop. Jak začneš video?",
        options: [
            {
                text: "\"Ahoj, jmenuji se... a dnes vám ukážu...\"",
                isCorrect: false,
                explanation: "❌ Nikoho nezajímá tvoje jméno v prvních 3 vteřinách. Lidé scrollují rychlostí blesku - musíš je chytit OKAMŽITĚ."
            },
            {
                text: "Logo firmy na 5 vteřin",
                isCorrect: false,
                explanation: "❌ Dlouhé intro s logem = okamžitý scroll pryč. Logo může být malé v rohu, ale ne jako úvod."
            },
            {
                text: "\"Takhle jsme zvýšili prodeje o 300% za měsíc\"",
                isCorrect: true,
                explanation: "✅ PERFEKTNÍ! Bold statement, který zastaví scroll. Lidé chtějí vědět JAK. Začni uprostřed akce, ne na začátku."
            }
        ]
    },
    {
        id: 2,
        problem: "Špatné světlo",
        scenario: "Je večer a potřebuješ natočit Reel. Co uděláš?",
        options: [
            {
                text: "Natočím to u okna, i když je tma",
                isCorrect: false,
                explanation: "❌ Večer u okna = tma. Budeš vypadat jako stín. Denní světlo funguje jen přes den."
            },
            {
                text: "Použiju stropní světlo v pokoji",
                isCorrect: false,
                explanation: "❌ Stropní světlo vytváří tvrdé stíny v obličeji. Vypadáš nemocně. Potřebuješ světlo PŘED sebou, ne nad sebou."
            },
            {
                text: "Koupím si kruhové LED světlo (500 Kč) a postavím ho před sebe",
                isCorrect: true,
                explanation: "✅ SPRÁVNĚ! Kruhové LED světlo je nejlepší investice. Měkké, rovnoměrné světlo. Vypadáš profesionálně i večer."
            }
        ]
    },
    {
        id: 3,
        problem: "Žádné titulky",
        scenario: "Natočil jsi skvělé Reel s důležitou informací. Co uděláš před publikováním?",
        options: [
            {
                text: "Publikuji to bez titulků, zvuk je jasný",
                isCorrect: false,
                explanation: "❌ 40% lidí sleduje videa BEZ ZVUKU! Bez titulků ztrácíš polovinu publika. To je jako házet peníze do koše."
            },
            {
                text: "Přidám titulky jen k důležitým částem",
                isCorrect: false,
                explanation: "❌ Titulky musí být VŠUDE. Lidé scrollují s vypnutým zvukem v MHD, v práci, všude. Každé slovo = titulky."
            },
            {
                text: "Použiju CapCut pro automatické titulky + upravím je",
                isCorrect: true,
                explanation: "✅ PERFEKTNÍ! CapCut má automatické titulky zdarma. Vždy je zkontroluj (AI dělá chyby). Velké, čitelné písmo. Kontrastní barvy."
            }
        ]
    },
    {
        id: 4,
        problem: "Žádná výzva k akci (CTA)",
        scenario: "Tvoje Reel má skvělý dosah, ale nikdo nesleduje profil. Co chybí?",
        options: [
            {
                text: "Nic, pokud je obsah dobrý, lidé sami kliknou",
                isCorrect: false,
                explanation: "❌ Lidé jsou líní. Musíš jim říct, co mají udělat. Bez CTA = žádná akce. Jednoduchá psychologie."
            },
            {
                text: "Napíšu CTA do popisku (nikdo to nečte)",
                isCorrect: false,
                explanation: "❌ Popisek je bonus, ale většina lidí ho nečte. CTA musí být VE VIDEU - poslední 2 vteřiny."
            },
            {
                text: "Přidám jasné CTA na konci: \"Sleduj pro více tipů\"",
                isCorrect: true,
                explanation: "✅ SPRÁVNĚ! Jasné CTA na konci videa = vyšší engagement. \"Sleduj\", \"Ulož si\", \"Pošli kamarádovi\". Řekni lidem, co mají udělat."
            }
        ]
    },
    {
        id: 5,
        problem: "Nuda",
        scenario: "Tvoje Reels mají nízký retention (lidé odcházejí po 2 vteřinách). Co je problém?",
        options: [
            {
                text: "Mluvím pomalu a klidně, aby to bylo srozumitelné",
                isCorrect: false,
                explanation: "❌ Pomalé tempo = nuda = scroll pryč. Lidé mají attention span 3 vteřiny. Mluv rychleji, střihej každé 2-3 vteřiny."
            },
            {
                text: "Video je dlouhé (2 minuty), aby bylo kompletní",
                isCorrect: false,
                explanation: "❌ 2 minuty je VĚČNOST na Reels. Ideál je 15-30 vteřin. Kratší = vyšší retention = lepší dosah."
            },
            {
                text: "Přidám dynamickou hudbu, rychlejší střih, změny záběrů",
                isCorrect: true,
                explanation: "✅ PERFEKTNÍ! Dynamika je klíč. Hudba, rychlý střih (každé 2-3 sec), změny záběrů, energie. Bavit, vzdělávat, nebo inspirovat."
            }
        ]
    }
];

export default function ReelsQuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (optionIndex: number) => {
        setSelectedAnswer(optionIndex);
        setShowExplanation(true);

        if (questions[currentQuestion].options[optionIndex].isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setQuizCompleted(false);
    };

    if (quizCompleted) {
        const percentage = (score / questions.length) * 100;
        return (
            <div className="min-h-screen py-20">
                <Container className="max-w-3xl">
                    <Card className="text-center p-12">
                        <CardHeader>
                            <div className="text-6xl mb-6">
                                {percentage >= 80 ? "🎉" : percentage >= 60 ? "👍" : "💪"}
                            </div>
                            <CardTitle className="text-4xl mb-4">
                                Tvoje skóre: {score}/{questions.length}
                            </CardTitle>
                            <CardDescription className="text-xl">
                                {percentage >= 80 && "Skvělé! Znáš základy Reels tvorby."}
                                {percentage >= 60 && percentage < 80 && "Dobrý základ! Ještě je co zlepšovat."}
                                {percentage < 60 && "Máš prostor pro zlepšení. Pojďme na to!"}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="bg-muted/50 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3">Co dál?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Znát chyby je první krok. Ale umět je opravit v praxi? To je jiná liga.
                                </p>
                                <div className="space-y-3">
                                    <p className="text-sm text-muted-foreground">✓ Nemáš čas natáčet a stříhat</p>
                                    <p className="text-sm text-muted-foreground">✓ Nevíš, co točit</p>
                                    <p className="text-sm text-muted-foreground">✓ Chceš profesionální výsledky</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/rezervace">
                                    <Button size="lg" className="w-full sm:w-auto">
                                        📅 Rezervovat 15min konzultaci
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Button variant="outline" size="lg" onClick={handleRestart} className="w-full sm:w-auto">
                                    <RotateCcw className="mr-2 h-4 w-4" />
                                    Zkusit znovu
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="min-h-screen py-20">
            <Container className="max-w-3xl">
                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                            Otázka {currentQuestion + 1} z {questions.length}
                        </span>
                        <span className="text-sm font-medium">
                            Skóre: {score}/{currentQuestion}
                        </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">{question.scenario}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => !showExplanation && handleAnswer(index)}
                                disabled={showExplanation}
                                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${showExplanation
                                        ? option.isCorrect
                                            ? "border-green-500 bg-green-500/10 shadow-lg shadow-green-500/20"
                                            : selectedAnswer === index
                                                ? "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20"
                                                : "border-muted bg-muted/30 opacity-50"
                                        : "border-muted-foreground/30 bg-card hover:border-primary hover:bg-primary/5 hover:shadow-md cursor-pointer"
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    {showExplanation && (
                                        <div className="flex-shrink-0 mt-1">
                                            {option.isCorrect ? (
                                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                                            ) : selectedAnswer === index ? (
                                                <XCircle className="h-6 w-6 text-red-500" />
                                            ) : null}
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <p className="font-semibold mb-2 text-base">{option.text}</p>
                                        {showExplanation && (
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {option.explanation}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}

                        {showExplanation && (
                            <Button onClick={handleNext} size="lg" className="w-full mt-6">
                                {currentQuestion < questions.length - 1 ? "Další otázka" : "Zobrazit výsledky"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
