export async function onRequest(context) {
    const url = new URL(context.request.url);

    // Check if the request is for the 'en' subdomain
    if (url.hostname.startsWith("en.")) {
        // Define paths that should NOT be rewritten (static assets, api, etc.)
        const isStaticAsset =
            url.pathname.startsWith("/_next") ||
            url.pathname.startsWith("/images") ||
            url.pathname.startsWith("/videos") ||
            url.pathname.startsWith("/audio") ||
            url.pathname === "/favicon.ico";

        // Handle robots.txt and sitemap.xml specifically for 'en' subdomain
        if (url.pathname === "/robots.txt") {
            url.pathname = "/robots-en.txt";
            return context.env.ASSETS.fetch(url);
        }
        if (url.pathname === "/sitemap.xml") {
            url.pathname = "/sitemap-en.xml";
            return context.env.ASSETS.fetch(url);
        }

        // Only rewrite if it's NOT a static asset and NOT already prefixed with /en
        if (!isStaticAsset && !url.pathname.startsWith("/en")) {
            url.pathname = `/en${url.pathname}`;
            // Fetch the asset from the new path
            return context.env.ASSETS.fetch(url);
        }
    }

    // Determine visitor country for potential future auto-redirects (optional)
    // const country = context.request.cf.country;

    return context.next();
}
