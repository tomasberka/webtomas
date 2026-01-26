import { MetadataRoute } from 'next'
import servicesData from "@/content/services.json";
import servicesDataEn from "@/content/services-en.json";
import blogData from "@/content/blog.json";
import blogDataEn from "@/content/blog-en.json";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrlCz = 'https://jajsemtomas.cz'
    const baseUrlEn = 'https://en.jajsemtomas.cz'

    // Czech static routes with differentiated priorities and changefreq
    const routesCz = [
        // Priority 1.0 - Homepage
        { route: '', priority: 1.0, changefreq: 'weekly' as const },

        // Priority 0.95 - Promo pages (high urgency)
        { route: '/akce-3-reels', priority: 0.95, changefreq: 'daily' as const },

        // Priority 0.9 - Conversion pages
        { route: '/rezervace', priority: 0.9, changefreq: 'monthly' as const },
        { route: '/vstup-na-trh', priority: 0.9, changefreq: 'monthly' as const },

        // Priority 0.8 - Main content pages
        { route: '/o-mne', priority: 0.8, changefreq: 'monthly' as const },
        { route: '/pripadove-studie', priority: 0.8, changefreq: 'weekly' as const },

        // Priority 0.7 - Secondary pages
        { route: '/portfolio', priority: 0.7, changefreq: 'weekly' as const },
        { route: '/kontakt', priority: 0.7, changefreq: 'monthly' as const },
        { route: '/reels-quiz', priority: 0.7, changefreq: 'monthly' as const },
        { route: '/faq', priority: 0.7, changefreq: 'monthly' as const },

        // Priority 0.6 - Tertiary pages
        { route: '/blog', priority: 0.6, changefreq: 'weekly' as const },
        { route: '/partner-socialvids', priority: 0.6, changefreq: 'monthly' as const },
        { route: '/ugc-herec', priority: 0.6, changefreq: 'monthly' as const },
        { route: '/ochrana-udaju', priority: 0.3, changefreq: 'yearly' as const },
    ].map(({ route, priority, changefreq }) => ({
        url: `${baseUrlCz}${route}`,
        lastModified: new Date(),
        changeFrequency: changefreq,
        priority: priority,
    }))

    // English static routes
    const routesEn = [
        // Priority 1.0 - Homepage
        { route: '', priority: 1.0, changefreq: 'weekly' as const },

        // Priority 0.95 - Promo pages
        { route: '/promo-3-reels', priority: 0.95, changefreq: 'daily' as const },

        // Priority 0.9 - Conversion pages
        { route: '/booking', priority: 0.9, changefreq: 'monthly' as const },
        { route: '/gateway-strategy', priority: 0.9, changefreq: 'monthly' as const },

        // Priority 0.8 - Main content pages
        { route: '/about', priority: 0.8, changefreq: 'monthly' as const },
        { route: '/case-studies', priority: 0.8, changefreq: 'weekly' as const },

        // Priority 0.7 - Secondary pages
        { route: '/portfolio', priority: 0.7, changefreq: 'weekly' as const },
        { route: '/contact', priority: 0.7, changefreq: 'monthly' as const },
        { route: '/reels-quiz', priority: 0.7, changefreq: 'monthly' as const },
        { route: '/faq', priority: 0.7, changefreq: 'monthly' as const },

        // Priority 0.6 - Tertiary pages
        { route: '/blog', priority: 0.6, changefreq: 'weekly' as const },
        { route: '/partner-socialvids', priority: 0.6, changefreq: 'monthly' as const },
        { route: '/ugc-creator', priority: 0.6, changefreq: 'monthly' as const },
        { route: '/privacy-policy', priority: 0.3, changefreq: 'yearly' as const },
    ].map(({ route, priority, changefreq }) => ({
        url: `${baseUrlEn}${route}`,
        lastModified: new Date(),
        changeFrequency: changefreq,
        priority: priority,
    }))

    // Czech service routes
    const serviceRoutesCz = servicesData.map((service) => ({
        url: `${baseUrlCz}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // English service routes
    const serviceRoutesEn = servicesDataEn.map((service) => ({
        url: `${baseUrlEn}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Czech blog routes - use actual post dates
    const blogRoutesCz = blogData.map((post) => ({
        url: `${baseUrlCz}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // English blog routes - use actual post dates
    const blogRoutesEn = blogDataEn.map((post) => ({
        url: `${baseUrlEn}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [
        ...routesCz,
        ...routesEn,
        ...serviceRoutesCz,
        ...serviceRoutesEn,
        ...blogRoutesCz,
        ...blogRoutesEn
    ]
}
