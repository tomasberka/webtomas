import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reels Quiz: Test Your Knowledge | I am Tomas",
    description: "Interactive quiz about the 5 most common mistakes when creating Reels. Find out if you make the same mistakes as 90% of entrepreneurs.",
    keywords: ["reels quiz", "instagram test", "tiktok mistakes", "reels optimization", "video marketing test", "social media quiz"],
    alternates: {
        canonical: "https://en.jajsemtomas.cz/reels-quiz",
        languages: {
            "cs": "https://jajsemtomas.cz/reels-quiz"
        }
    },
    openGraph: {
        title: "Are You Making These Reels Mistakes? Find Out in 2 Minutes",
        description: "Interactive test about creating Reels for Instagram and TikTok. Test your knowledge!",
        url: "https://en.jajsemtomas.cz/reels-quiz",
        locale: "en_GB",
        images: [
            {
                url: "https://en.jajsemtomas.cz/images/quiz-thumbnail.png",
                width: 1200,
                height: 675,
                alt: "Reels Quiz - Test Your Knowledge",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Are You Making These Reels Mistakes?",
        description: "Interactive test. Test yourself in 2 minutes!",
        images: ["/images/quiz-thumbnail.png"],
    },
};
