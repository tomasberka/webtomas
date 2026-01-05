import { MetadataRoute } from 'next'
import servicesData from "@/content/services-en.json";
import blogData from "@/content/blog-en.json";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://en.jajsemtomas.cz'

    const staticRoutes = [
        '',
        '/promo-3-reels',
        '/reels-packages',
        '/services',
        '/portfolio',
        '/case-studies',
        '/about',
        '/contact',
        '/booking',
        '/blog',
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
