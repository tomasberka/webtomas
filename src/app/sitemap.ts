import { MetadataRoute } from 'next'
import servicesData from "@/content/services.json";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jajsemtomas.cz'

    const staticRoutes = [
        '',
        '/reels-balicky',
        '/sluzby',
        '/portfolio',
        '/partner-socialvids',
        '/kontakt',
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

    return [...staticRoutes, ...serviceRoutes]
}
