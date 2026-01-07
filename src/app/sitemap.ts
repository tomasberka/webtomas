import { MetadataRoute } from 'next'
import servicesData from "@/content/services.json";
import blogData from "@/content/blog.json";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    // For the main Czech site
    const baseUrl = 'https://jajsemtomas.cz'

    // Static routes with differentiated priorities and changefreq
    const routes = [
        // Priority 1.0 - Homepage
        { route: '', priority: 1.0, changefreq: 'weekly' as const },

        // Priority 0.95 - Promo pages (high urgency)
        { route: '/akce-3-reels', priority: 0.95, changefreq: 'daily' as const },

        // Priority 0.9 - Conversion pages
        { route: '/reels-balicky', priority: 0.9, changefreq: 'weekly' as const },
        { route: '/rezervace', priority: 0.9, changefreq: 'monthly' as const },

        // Priority 0.8 - Main content pages
        { route: '/o-mne', priority: 0.8, changefreq: 'monthly' as const },
        { route: '/pripadove-studie', priority: 0.8, changefreq: 'weekly' as const },

        // Priority 0.7 - Secondary pages
        { route: '/portfolio', priority: 0.7, changefreq: 'weekly' as const },
        { route: '/kontakt', priority: 0.7, changefreq: 'monthly' as const },
        { route: '/reels-quiz', priority: 0.7, changefreq: 'monthly' as const },

        // Priority 0.6 - Tertiary pages
        { route: '/blog', priority: 0.6, changefreq: 'weekly' as const },
        { route: '/partner-socialvids', priority: 0.6, changefreq: 'monthly' as const },
        { route: '/ugc-herec', priority: 0.6, changefreq: 'monthly' as const },
    ].map(({ route, priority, changefreq }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: changefreq,
        priority: priority,
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

    return [...routes, ...serviceRoutes, ...blogRoutes]
}
