'use client'

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    if (process.env.NODE_ENV === 'development') {
        return src
    }
    const q = quality || 75
    return `/${process.env.nextImageExportOptimizer_exportFolderName}${src}?width=${width}&quality=${q}`
}
