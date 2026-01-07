import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import blogData from "@/content/blog-en.json";
import blogDataCz from "@/content/blog.json";
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
    const postIndex = blogData.findIndex((p) => p.slug === slug);
    const post = blogData[postIndex];
    if (!post) return {};

    // Find corresponding CZ post for hreflang
    const czPost = blogDataCz[postIndex];
    const czSlug = czPost?.slug;

    return {
        title: `${post.title} | Blog I am Tomas`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url: `https://en.jajsemtomas.cz/blog/${post.slug}`,
            images: [
                {
                    url: `https://en.jajsemtomas.cz${post.image}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            publishedTime: post.date,
            authors: ["Tomas"],
        },
        alternates: {
            canonical: `https://en.jajsemtomas.cz/blog/${post.slug}`,
            languages: {
                'en': `https://en.jajsemtomas.cz/blog/${post.slug}`,
                'cs': czSlug ? `https://jajsemtomas.cz/blog/${czSlug}` : "https://jajsemtomas.cz/blog",
            },
        },
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "image": [`https://en.jajsemtomas.cz${post.image}`],
                        "datePublished": post.date,
                        "dateModified": post.date,
                        "author": [{
                            "@type": "Person",
                            "name": "Tomas",
                            "url": "https://en.jajsemtomas.cz"
                        }],
                        "description": post.excerpt,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://en.jajsemtomas.cz/blog/${post.slug}`
                        }
                    })
                }}
            />
            <Container className="max-w-3xl">
                <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to blog
                </Link>

                <article>
                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(post.date).toLocaleDateString('en-GB')}
                            </span>
                            <span className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                Tomas
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="mt-6 flex justify-center gap-3">
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://en.jajsemtomas.cz/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-colors text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                Share on LinkedIn
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://en.jajsemtomas.cz/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                Tweet
                            </a>
                        </div>
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
                        <h3 className="text-2xl font-bold mb-4">Interested?</h3>
                        <p className="text-muted-foreground mb-8">
                            Don't miss more tips or book a video that works right away.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/booking">
                                <Button size="lg">I want a video that sells</Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" size="lg">View Services</Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </Container>
        </div>
    );
}
