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
        problem: "First 3 seconds are boring",
        scenario: "You are filming a Reel for your e-shop. How do you start the video?",
        options: [
            {
                text: "\"Hi, my name is... and today I will show you...\"",
                isCorrect: false,
                explanation: "❌ No one cares about your name in the first 3 seconds. People scroll at lightning speed - you must catch them IMMEDIATELY."
            },
            {
                text: "Company logo for 5 seconds",
                isCorrect: false,
                explanation: "❌ Long intro with logo = immediate scroll away. Logo can be small in the corner, but not as an intro."
            },
            {
                text: "\"This is how we increased sales by 300% in a month\"",
                isCorrect: true,
                explanation: "✅ PERFECT! Bold statement that stops the scroll. People want to know HOW. Start in the middle of the action, not at the beginning."
            }
        ]
    },
    {
        id: 2,
        problem: "Bad lighting",
        scenario: "It's evening and you need to film a Reel. What do you do?",
        options: [
            {
                text: "I film it by the window, even though it's dark",
                isCorrect: false,
                explanation: "❌ Evening by the window = darkness. You will look like a shadow. Daylight only works during the day."
            },
            {
                text: "I use the ceiling light in the room",
                isCorrect: false,
                explanation: "❌ Ceiling light creates hard shadows on the face. You look sick. You need light IN FRONT of you, not above you."
            },
            {
                text: "I buy a ring LED light (approx. 20€) and put it in front of me",
                isCorrect: true,
                explanation: "✅ CORRECT! Ring LED light is the best investment. Soft, even light. You look professional even in the evening."
            }
        ]
    },
    {
        id: 3,
        problem: "No captions",
        scenario: "You filmed a great Reel with important info. What do you do before publishing?",
        options: [
            {
                text: "I publish it without captions, the sound is clear",
                isCorrect: false,
                explanation: "❌ 40% of people watch videos WITHOUT SOUND! Without captions, you lose half the audience. That's like throwing money in the trash."
            },
            {
                text: "I add captions only to important parts",
                isCorrect: false,
                explanation: "❌ Captions must be EVERYWHERE. People scroll with sound off on public transport, at work, everywhere. Every word = captions."
            },
            {
                text: "I use CapCut for auto-captions + edit them",
                isCorrect: true,
                explanation: "✅ PERFECT! CapCut has free auto-captions. Always check them (AI makes mistakes). Big, readable font. Contrasting colors."
            }
        ]
    },
    {
        id: 4,
        problem: "No Call to Action (CTA)",
        scenario: "Your Reel has great reach, but no one follows your profile. What is missing?",
        options: [
            {
                text: "Nothing, if the content is good, people will click themselves",
                isCorrect: false,
                explanation: "❌ People are lazy. You must tell them what to do. No CTA = no action. Simple psychology."
            },
            {
                text: "I write CTA in the caption (no one reads it)",
                isCorrect: false,
                explanation: "❌ Caption is a bonus, but most people don't read it. CTA must be IN THE VIDEO - last 2 seconds."
            },
            {
                text: "I add a clear CTA at the end: \"Follow for more tips\"",
                isCorrect: true,
                explanation: "✅ CORRECT! Clear CTA at the end of video = higher engagement. \"Follow\", \"Save\", \"Send to a friend\". Tell people what to do."
            }
        ]
    },
    {
        id: 5,
        problem: "Boredom",
        scenario: "Your Reels have low retention (people leave after 2 seconds). What is the problem?",
        options: [
            {
                text: "I speak slowly and calmly so it's understandable",
                isCorrect: false,
                explanation: "❌ Slow tempo = boredom = scroll away. People have a 3-second attention span. Speak faster, cut every 2-3 seconds."
            },
            {
                text: "Video is long (2 minutes) to be complete",
                isCorrect: false,
                explanation: "❌ 2 minutes is ETERNITY on Reels. Ideal is 15-30 seconds. Shorter = higher retention = better reach."
            },
            {
                text: "I add dynamic music, faster editing, shot changes",
                isCorrect: true,
                explanation: "✅ PERFECT! Dynamics are key. Music, fast editing (every 2-3 sec), shot changes, energy. Entertain, educate, or inspire."
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
                                Your score: {score}/{questions.length}
                            </CardTitle>
                            <CardDescription className="text-xl">
                                {percentage >= 80 && "Great! You know the basics of Reels creation."}
                                {percentage >= 60 && percentage < 80 && "Good foundation! Still room for improvement."}
                                {percentage < 60 && "Room for improvement. Let's get to it!"}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="bg-muted/50 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3">What next?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Knowing mistakes is the first step. But fixing them in practice? That's a different league.
                                </p>
                                <div className="space-y-3">
                                    <p className="text-sm text-muted-foreground">✓ No time to film and edit</p>
                                    <p className="text-sm text-muted-foreground">✓ Don't know what to film</p>
                                    <p className="text-sm text-muted-foreground">✓ Want professional results</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" className="w-full sm:w-auto">
                                        📅 Book a 15min consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Button variant="outline" size="lg" onClick={handleRestart} className="w-full sm:w-auto">
                                    <RotateCcw className="mr-2 h-4 w-4" />
                                    Try again
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
                            Question {currentQuestion + 1} of {questions.length}
                        </span>
                        <span className="text-sm font-medium">
                            Score: {score}/{currentQuestion}
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
                                {currentQuestion < questions.length - 1 ? "Next question" : "Show results"}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
