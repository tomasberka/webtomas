import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import blogData from "@/content/blog.json";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Marketing Blog | I am Tomas",
    description: "Tips and tricks from the world of video production, Reels, and online marketing. How to film videos that sell.",
    alternates: {
        canonical: "https://en.jajsemtomas.cz/blog",
    },
};

export default function BlogPage() {
    return (
        <div className="py-20 md:py-32">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog & Know-How</h1>
                    <p className="text-xl text-muted-foreground">
                        Practical advice on how to use video to grow your business. No fluff.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all hover:border-primary/50">
                                <div className="aspect-video relative overflow-hidden bg-muted">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardHeader className="flex-grow">
                                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {new Date(post.date).toLocaleDateString('en-GB')}
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
                                        Read Article <ArrowRight className="w-4 h-4 ml-2" />
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
