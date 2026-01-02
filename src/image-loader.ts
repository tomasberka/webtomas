'use client'

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    if (process.env.NODE_ENV === 'development') {
        return src
    }
    const q = quality || 75
    // Flatten the path: extract filename, remove extension
    const fileName = src.split('/').pop()
    const fileNameWithoutExtension = fileName?.split('.').slice(0, -1).join('.')

    // Default optimized format is WEBP. Naming convention: [name]-opt-[width].WEBP
    return `/${process.env.nextImageExportOptimizer_exportFolderName}/${fileNameWithoutExtension}-opt-${width}.WEBP`
}
