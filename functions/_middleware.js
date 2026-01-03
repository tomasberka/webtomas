export async function onRequest(context) {
    const url = new URL(context.request.url);

    // Check if the request is for the 'en' subdomain
    if (url.hostname.startsWith("en.")) {
        // Prepend '/en' to the pathname if it's not already there
        // This allows en.jajsemtomas.cz/ -> serves /en/ (the English homepage)
        if (!url.pathname.startsWith("/en")) {
            url.pathname = `/en${url.pathname}`;
            // Fetch the asset from the new path
            return context.env.ASSETS.fetch(url);
        }
    }

    // Determine visitor country for potential future auto-redirects (optional)
    // const country = context.request.cf.country;

    return context.next();
}
