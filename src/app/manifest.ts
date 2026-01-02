import { MetadataRoute } from 'next'

export const dynamic = 'force-static'


export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Já jsem Tomáš | Video Produkce',
        short_name: 'Já jsem Tomáš',
        description: 'Profesionální tvorba Reels, TikTok a video obsahu.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0F0F0F',
        theme_color: '#FFD700',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
