import { MetadataRoute } from 'next'
import servicesData from "@/content/services.json";
import blogData from "@/content/blog.json";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    // For the main Czech site
    const baseUrl = 'https://jajsemtomas.cz'

    const staticRoutes = [
        '',
        '/reels-balicky',
        '/sluzby',
        '/portfolio',
        '/pripadove-studie',
        '/partner-socialvids',
        '/kontakt',
        '/blog',
        '/london',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const blogRoutes = blogData.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
