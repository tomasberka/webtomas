import { MetadataRoute } from 'next'

export const dynamic = 'force-static'


export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Tomáš Berka | Kameraman & Video Produkce Praha',
        short_name: 'Tomáš Berka',
        description: 'Profesionální kameraman a video produkce Praha. Event video, moderátor, DaVinci Resolve postprodukce.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0A0A0A',
        theme_color: '#FFBF00',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
