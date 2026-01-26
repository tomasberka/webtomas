import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import blogData from "@/content/blog.json";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog o Video Marketingu Praha | Tipy pro Reels & TikTok | Já jsem Tomáš",
    description: "📚 Tipy a triky ze světa video produkce, Reels a online marketingu. Jak točit videa, která prodávají. Praktické rady pro firmy.",
    keywords: ["video marketing blog", "reels tipy čeština", "jak točit tiktok", "video produkce návody"],
    alternates: {
        canonical: "https://jajsemtomas.cz/blog",
        languages: {
            "en": "https://en.jajsemtomas.cz/blog"
        }
    },
};

export default function BlogPage() {
    return (
        <div className="py-20 md:py-32">
            <BreadcrumbSchema items={[
                { name: "Domů", url: "https://jajsemtomas.cz" },
                { name: "Blog", url: "https://jajsemtomas.cz/blog" }
            ]} />
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog & Know-How</h1>
                    <p className="text-xl text-muted-foreground">
                        Praktické rady, jak využít video k růstu vašeho byznysu. Bez omáčky.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all hover:border-primary/50">
                                <div className="aspect-video relative overflow-hidden bg-muted">
                                    <img
                                        src={post.image}
                                        alt={post.title} // Ensure alt text is present
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardHeader className="flex-grow">
                                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {new Date(post.date).toLocaleDateString('cs-CZ')}
                                    </div>
                                    <CardTitle className="text-xl leading-snug group-hover:text-primary transition-colors">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-0 mt-auto">
                                    <span className="text-primary font-medium text-sm inline-flex items-center">
                                        Číst článek <ArrowRight className="w-4 h-4 ml-2" />
                                    </span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
