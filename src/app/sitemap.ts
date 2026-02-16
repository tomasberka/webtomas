import { MetadataRoute } from 'next'
import servicesData from "@/content/services.json";
import blogData from "@/content/blog.json";
import servicesEnData from "@/content/services-en.json";
import blogEnData from "@/content/blog-en.json";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jajsemtomas.cz'
    const enBaseUrl = 'https://en.jajsemtomas.cz'

    // Czech static routes with differentiated priorities and changefreq
    const staticRoutes = [
        // Priority 1.0 - Homepage
        { route: '', priority: 1.0, changefreq: 'weekly' as const },

        // Priority 0.95 - Promo pages (high urgency)
        { route: '/akce-3-reels', priority: 0.95, changefreq: 'daily' as const },

        // Priority 0.9 - Conversion pages
        { route: '/kontakt', priority: 0.9, changefreq: 'monthly' as const },
        { route: '/vstup-na-trh', priority: 0.9, changefreq: 'monthly' as const },

        // Priority 0.8 - Main content pages
        { route: '/o-mne', priority: 0.8, changefreq: 'monthly' as const },
        { route: '/pripadove-studie', priority: 0.8, changefreq: 'weekly' as const },

        // Priority 0.7 - Secondary pages
        { route: '/portfolio', priority: 0.7, changefreq: 'weekly' as const },
        { route: '/reels-quiz', priority: 0.7, changefreq: 'monthly' as const },
        { route: '/faq', priority: 0.7, changefreq: 'monthly' as const },

        // Priority 0.6 - Tertiary pages
        { route: '/blog', priority: 0.6, changefreq: 'weekly' as const },
        { route: '/partner-socialvids', priority: 0.6, changefreq: 'monthly' as const },
        { route: '/ugc-herec', priority: 0.6, changefreq: 'monthly' as const },
        { route: '/ochrana-udaju', priority: 0.3, changefreq: 'yearly' as const },
    ].map(({ route, priority, changefreq }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: changefreq,
        priority: priority,
    }))

    // Czech service routes
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Czech blog routes - use actual post dates
    const blogRoutes = blogData.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // English static routes
    const enStaticRoutes = [
        { route: '', priority: 1.0, changefreq: 'weekly' as const },
        { route: '/portfolio', priority: 0.7, changefreq: 'weekly' as const },
        { route: '/case-studies', priority: 0.8, changefreq: 'weekly' as const },
        { route: '/about', priority: 0.8, changefreq: 'monthly' as const },
        { route: '/contact', priority: 0.9, changefreq: 'monthly' as const },
        { route: '/blog', priority: 0.6, changefreq: 'weekly' as const },
        { route: '/faq', priority: 0.7, changefreq: 'monthly' as const },
        { route: '/gateway-strategy', priority: 0.9, changefreq: 'monthly' as const },
        { route: '/reels-packages', priority: 0.8, changefreq: 'monthly' as const },
        { route: '/privacy-policy', priority: 0.3, changefreq: 'yearly' as const },
    ].map(({ route, priority, changefreq }) => ({
        url: `${enBaseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: changefreq,
        priority: priority,
    }))

    // English service routes
    const enServiceRoutes = servicesEnData.map((service) => ({
        url: `${enBaseUrl}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // English blog routes
    const enBlogRoutes = blogEnData.map((post) => ({
        url: `${enBaseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...blogRoutes,
        ...enStaticRoutes,
        ...enServiceRoutes,
        ...enBlogRoutes,
    ]
}
