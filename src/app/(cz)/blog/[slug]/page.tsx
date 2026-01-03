import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import blogData from "@/content/blog.json";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogData.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: `${post.title} | Blog Já jsem Tomáš`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="py-20">
            <Container className="max-w-3xl">
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Zpět na blog
                </Link>

                <article>
                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(post.date).toLocaleDateString('cs-CZ')}
                            </span>
                            <span className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                Tomáš
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {post.excerpt}
                        </p>
                    </header>

                    <div className="aspect-video relative rounded-xl overflow-hidden mb-12 border bg-muted">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div
                        className="prose prose-lg dark:prose-invert mx-auto max-w-none
                        prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-strong:text-foreground prose-strong:font-bold
                        prose-ul:text-muted-foreground prose-li:marker:text-primary
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-8 border-t text-center">
                        <h3 className="text-2xl font-bold mb-4">Zaujalo vás to?</h3>
                        <p className="text-muted-foreground mb-8">
                            Nenechte si ujít další tipy nebo rovnou poptejte video, které bude fungovat.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/kontakt">
                                <Button size="lg">Chci video, co prodává</Button>
                            </Link>
                            <Link href="/sluzby">
                                <Button variant="outline" size="lg">Prohlédnout služby</Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </Container>
        </div>
    );
}
