import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonialsData from "@/content/testimonials.json";

export function Testimonials() {
    return (
        <section className="py-20 bg-muted/50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Co říkají klienti</h2>
                    <p className="text-xl text-muted-foreground">
                        Spokojenost klientů a dlouhodobá spolupráce jsou pro mě prioritou.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonialsData.map((testimonial) => (
                        <Card key={testimonial.id} className="border-none shadow-sm bg-card/80 backdrop-blur">
                            <CardHeader className="pb-2">
                                <Quote className="h-8 w-8 text-primary/40 mb-2" />
                                <p className="text-lg italic text-muted-foreground leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                            </CardHeader>
                            <CardContent className="pt-4 flex items-center gap-4">
                                <div>
                                    <CardTitle className="text-base font-bold">{testimonial.author}</CardTitle>
                                    <p className="text-sm text-primary">{testimonial.company}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
