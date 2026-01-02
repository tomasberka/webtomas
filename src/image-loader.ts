'use client'

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    if (process.env.NODE_ENV === 'development') {
        return src
    }
    const q = quality || 75

    // Split the path to handle directories correctly.
    // Example: "/images/logo.png" -> path="/images", name="logo"
    // Example: "/1.png" -> path="", name="1"

    const parts = src.split('/')
    const filename = parts.pop()
    const path = parts.join('/')

    const nameWithoutExtension = filename?.split('.').slice(0, -1).join('.')

    // The optimizer outputs files relative to their source directory.
    // So /images/logo.png -> /images/nextImageExportOptimizer/logo-opt...
    // And /1.png -> /nextImageExportOptimizer/1-opt... (path is empty)

    return `${path}/${process.env.nextImageExportOptimizer_exportFolderName}/${nameWithoutExtension}-opt-${width}.WEBP`
}
