import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/*',
                    '/_next/*',
                    '/dekuji',
                    '/thank-you',
                ],
                crawlDelay: 1,
            }
        ],
        sitemap: [
            'https://jajsemtomas.cz/sitemap.xml',
            'https://en.jajsemtomas.cz/sitemap.xml'
        ],
    }
}
