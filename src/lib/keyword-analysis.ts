/**
 * Keyword Analysis and Recommendations System
 * 
 * Provides deep keyword insights and SEO recommendations
 * for Czech and English content optimization
 */

export interface KeywordData {
    keyword: string;
    language: 'cs' | 'en';
    searchIntent: 'informational' | 'transactional' | 'navigational' | 'commercial';
    difficulty: 'low' | 'medium' | 'high';
    difficultyScore: number; // 1-100
    priority: number; // 1-10
    searchVolumeEstimate: string; // e.g. "500-1K", "1K-10K"
    competitionLevel: 'low' | 'medium' | 'high';
    estimatedTraffic: string; // e.g. "50-100/month"
    relatedTopics: string[];
    recommendedContent: string[];
    longTailVariations: string[]; // More specific keyword variations
}

export interface TopicRecommendation {
    topic: string;
    currentKeywords: string[];
    opportunityKeywords: string[];
    contentGaps: string[];
    recommendedActions: string[];
    targetAudience: string;
    conversionPotential: 'low' | 'medium' | 'high';
}

/**
 * Czech Keywords Database - Video Production Focus
 * Enhanced with search volume, competition, and traffic estimates
 */
export const czechKeywords: KeywordData[] = [
    {
        keyword: "video produkce praha",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 55,
        priority: 10,
        searchVolumeEstimate: "1K-5K",
        competitionLevel: 'medium',
        estimatedTraffic: "150-300/month",
        relatedTopics: ['event-video', 'corporate', 'reels'],
        recommendedContent: ['case-studies', 'portfolio', 'pricing'],
        longTailVariations: [
            'video produkce praha cena',
            'profesionální video produkce praha',
            'video produkce praha recenze',
            'nejlepší video produkce praha'
        ]
    },
    {
        keyword: "tvorba reels",
        language: 'cs',
        searchIntent: 'commercial',
        difficulty: 'low',
        difficultyScore: 30,
        priority: 9,
        searchVolumeEstimate: "500-2K",
        competitionLevel: 'low',
        estimatedTraffic: "100-250/month",
        relatedTopics: ['reels', 'instagram', 'tiktok', 'social-media'],
        recommendedContent: ['blog', 'packages', 'portfolio'],
        longTailVariations: [
            'tvorba reels praha',
            'tvorba reels cena',
            'jak vytvořit reels',
            'tvorba reels pro firmy'
        ]
    },
    {
        keyword: "event video",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 45,
        priority: 10,
        searchVolumeEstimate: "1K-3K",
        competitionLevel: 'medium',
        estimatedTraffic: "120-280/month",
        relatedTopics: ['event', 'conference', 'b2b'],
        recommendedContent: ['services', 'case-studies', 'testimonials'],
        longTailVariations: [
            'event video praha',
            'konferenční video praha',
            'firemní event video',
            'event video cena'
        ]
    },
    {
        keyword: "ugc creator praha",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'low',
        difficultyScore: 25,
        priority: 8,
        searchVolumeEstimate: "200-1K",
        competitionLevel: 'low',
        estimatedTraffic: "50-150/month",
        relatedTopics: ['ugc', 'social-media', 'content-creation'],
        recommendedContent: ['services', 'portfolio', 'blog'],
        longTailVariations: [
            'ugc creator česko',
            'ugc content creator praha',
            'jak najít ugc creatora',
            'ugc creator cena'
        ]
    },
    {
        keyword: "kameraman praha",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'high',
        difficultyScore: 70,
        priority: 7,
        searchVolumeEstimate: "2K-5K",
        competitionLevel: 'high',
        estimatedTraffic: "80-200/month",
        relatedTopics: ['filmmaker', 'videographer', 'professional'],
        recommendedContent: ['about', 'portfolio', 'contact'],
        longTailVariations: [
            'kameraman praha cena',
            'svatební kameraman praha',
            'profesionální kameraman praha',
            'kameraman praha kontakt'
        ]
    },
    {
        keyword: "tiktok pro firmy",
        language: 'cs',
        searchIntent: 'commercial',
        difficulty: 'low',
        difficultyScore: 35,
        priority: 8,
        searchVolumeEstimate: "500-1.5K",
        competitionLevel: 'low',
        estimatedTraffic: "80-180/month",
        relatedTopics: ['tiktok', 'b2b', 'social-media'],
        recommendedContent: ['blog', 'services', 'case-studies'],
        longTailVariations: [
            'tiktok marketing pro firmy',
            'tiktok strategie pro firmy',
            'jak používat tiktok pro byznys',
            'tiktok agentura'
        ]
    },
    {
        keyword: "firemní video",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 50,
        priority: 9,
        searchVolumeEstimate: "1K-3K",
        competitionLevel: 'medium',
        estimatedTraffic: "100-240/month",
        relatedTopics: ['corporate', 'b2b', 'brand'],
        recommendedContent: ['services', 'portfolio', 'testimonials'],
        longTailVariations: [
            'firemní video praha',
            'firemní video cena',
            'firemní video produkce',
            'prezentační video pro firmu'
        ]
    },
    {
        keyword: "instagram reels agentura",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'low',
        difficultyScore: 28,
        priority: 9,
        searchVolumeEstimate: "300-1K",
        competitionLevel: 'low',
        estimatedTraffic: "70-180/month",
        relatedTopics: ['reels', 'agency', 'social-media'],
        recommendedContent: ['packages', 'case-studies', 'blog'],
        longTailVariations: [
            'instagram reels agentura praha',
            'agentura na instagram reels',
            'tvorba instagram reels',
            'reels marketing agentura'
        ]
    },
    {
        keyword: "konferenční video",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'low',
        difficultyScore: 35,
        priority: 9,
        searchVolumeEstimate: "500-1.5K",
        competitionLevel: 'low',
        estimatedTraffic: "90-200/month",
        relatedTopics: ['event', 'conference', 'b2b', 'corporate'],
        recommendedContent: ['services', 'case-studies', 'testimonials'],
        longTailVariations: [
            'konferenční video praha',
            'natáčení konferencí',
            'video z konference cena',
            'profesionální konferenční video'
        ]
    },
    {
        keyword: "ceo rozhovory",
        language: 'cs',
        searchIntent: 'commercial',
        difficulty: 'low',
        difficultyScore: 20,
        priority: 8,
        searchVolumeEstimate: "100-500",
        competitionLevel: 'low',
        estimatedTraffic: "30-80/month",
        relatedTopics: ['corporate', 'b2b', 'testimonial', 'interview'],
        recommendedContent: ['services', 'portfolio', 'case-studies'],
        longTailVariations: [
            'natáčení ceo rozhovorů',
            'firemní rozhovory video',
            'video rozhovory pro firmy',
            'profesionální ceo rozhovory'
        ]
    },
    {
        keyword: "event moderator",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'low',
        difficultyScore: 25,
        priority: 8,
        searchVolumeEstimate: "200-800",
        competitionLevel: 'low',
        estimatedTraffic: "40-120/month",
        relatedTopics: ['event', 'moderator', 'hosting', 'mc', 'presenter'],
        recommendedContent: ['services', 'portfolio', 'about'],
        longTailVariations: [
            'moderátor pro firemní akce',
            'event moderátor praha',
            'anglický moderátor',
            'bilingvní moderátor'
        ]
    },
    {
        keyword: "firemní herec",
        language: 'cs',
        searchIntent: 'transactional',
        difficulty: 'low',
        difficultyScore: 20,
        priority: 7,
        searchVolumeEstimate: "100-500",
        competitionLevel: 'low',
        estimatedTraffic: "20-80/month",
        relatedTopics: ['actor', 'corporate', 'spokesperson', 'talent'],
        recommendedContent: ['services', 'portfolio', 'about'],
        longTailVariations: [
            'herec pro firemní video',
            'spokesperson na pronájem',
            'brand ambassador',
            'firemní mluvčí'
        ]
    }
];

/**
 * English Keywords Database - Video Production Focus
 * Enhanced with search volume, competition, and traffic estimates
 */
export const englishKeywords: KeywordData[] = [
    {
        keyword: "video production london",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'high',
        difficultyScore: 75,
        priority: 9,
        searchVolumeEstimate: "5K-10K",
        competitionLevel: 'high',
        estimatedTraffic: "200-500/month",
        relatedTopics: ['event-video', 'corporate', 'professional'],
        recommendedContent: ['case-studies', 'portfolio', 'contact'],
        longTailVariations: [
            'video production london prices',
            'best video production london',
            'corporate video production london',
            'video production companies london'
        ]
    },
    {
        keyword: "reels agency uk",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 50,
        priority: 8,
        searchVolumeEstimate: "1K-3K",
        competitionLevel: 'medium',
        estimatedTraffic: "120-280/month",
        relatedTopics: ['reels', 'instagram', 'agency'],
        recommendedContent: ['packages', 'portfolio', 'blog'],
        longTailVariations: [
            'instagram reels agency uk',
            'reels production agency',
            'reels marketing agency',
            'professional reels agency'
        ]
    },
    {
        keyword: "ugc creator london",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 45,
        priority: 9,
        searchVolumeEstimate: "2K-5K",
        competitionLevel: 'medium',
        estimatedTraffic: "180-400/month",
        relatedTopics: ['ugc', 'content-creation', 'social-media'],
        recommendedContent: ['services', 'portfolio', 'testimonials'],
        longTailVariations: [
            'ugc creator london rates',
            'hire ugc creator london',
            'professional ugc creator',
            'ugc content creator uk'
        ]
    },
    {
        keyword: "event videographer",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'high',
        difficultyScore: 70,
        priority: 10,
        searchVolumeEstimate: "3K-8K",
        competitionLevel: 'high',
        estimatedTraffic: "150-400/month",
        relatedTopics: ['event', 'conference', 'corporate'],
        recommendedContent: ['services', 'case-studies', 'contact'],
        longTailVariations: [
            'event videographer london',
            'conference videographer',
            'corporate event videographer',
            'event videography services'
        ]
    },
    {
        keyword: "corporate video production",
        language: 'en',
        searchIntent: 'commercial',
        difficulty: 'high',
        difficultyScore: 80,
        priority: 8,
        searchVolumeEstimate: "10K-20K",
        competitionLevel: 'high',
        estimatedTraffic: "300-700/month",
        relatedTopics: ['corporate', 'b2b', 'brand'],
        recommendedContent: ['services', 'portfolio', 'testimonials'],
        longTailVariations: [
            'corporate video production london',
            'corporate video production company',
            'b2b video production',
            'corporate promotional videos'
        ]
    },
    {
        keyword: "tiktok content creator",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 55,
        priority: 7,
        searchVolumeEstimate: "2K-5K",
        competitionLevel: 'medium',
        estimatedTraffic: "100-250/month",
        relatedTopics: ['tiktok', 'content-creation', 'social-media'],
        recommendedContent: ['services', 'blog', 'portfolio'],
        longTailVariations: [
            'tiktok content creator for hire',
            'tiktok video creator',
            'professional tiktok creator',
            'tiktok content production'
        ]
    },
    {
        keyword: "filmmaker london",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'high',
        difficultyScore: 75,
        priority: 7,
        searchVolumeEstimate: "3K-7K",
        competitionLevel: 'high',
        estimatedTraffic: "120-300/month",
        relatedTopics: ['filmmaker', 'professional', 'videographer'],
        recommendedContent: ['about', 'portfolio', 'contact'],
        longTailVariations: [
            'freelance filmmaker london',
            'commercial filmmaker london',
            'professional filmmaker london',
            'filmmaker for hire london'
        ]
    },
    {
        keyword: "conference video production",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 55,
        priority: 9,
        searchVolumeEstimate: "1K-3K",
        competitionLevel: 'medium',
        estimatedTraffic: "100-250/month",
        relatedTopics: ['conference', 'event', 'b2b', 'corporate'],
        recommendedContent: ['services', 'case-studies', 'testimonials'],
        longTailVariations: [
            'conference video production london',
            'conference filming services',
            'professional conference video',
            'conference video package'
        ]
    },
    {
        keyword: "social media video production",
        language: 'en',
        searchIntent: 'commercial',
        difficulty: 'medium',
        difficultyScore: 60,
        priority: 8,
        searchVolumeEstimate: "2K-5K",
        competitionLevel: 'medium',
        estimatedTraffic: "150-350/month",
        relatedTopics: ['social-media', 'reels', 'tiktok', 'content-creation'],
        recommendedContent: ['services', 'packages', 'blog'],
        longTailVariations: [
            'social media video production london',
            'social media content creator',
            'video production for social media',
            'social media video agency'
        ]
    },
    {
        keyword: "event videographer london",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 55,
        priority: 9,
        searchVolumeEstimate: "1K-3K",
        competitionLevel: 'medium',
        estimatedTraffic: "100-280/month",
        relatedTopics: ['event', 'london', 'international', 'videographer'],
        recommendedContent: ['services', 'case-studies', 'portfolio'],
        longTailVariations: [
            'conference videographer london',
            'event video production london',
            'corporate event videographer london',
            'london videographer for hire'
        ]
    },
    {
        keyword: "event moderator london",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 45,
        priority: 8,
        searchVolumeEstimate: "1K-3K",
        competitionLevel: 'medium',
        estimatedTraffic: "100-280/month",
        relatedTopics: ['moderator', 'event', 'mc', 'host', 'presenter'],
        recommendedContent: ['services', 'portfolio', 'about'],
        longTailVariations: [
            'conference moderator london',
            'event host london',
            'bilingual event moderator',
            'corporate event mc london'
        ]
    },
    {
        keyword: "event host london",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'medium',
        difficultyScore: 40,
        priority: 8,
        searchVolumeEstimate: "800-2K",
        competitionLevel: 'medium',
        estimatedTraffic: "80-200/month",
        relatedTopics: ['moderator', 'event', 'london', 'host', 'presenter'],
        recommendedContent: ['services', 'portfolio', 'about'],
        longTailVariations: [
            'conference host london',
            'bilingual event host london',
            'bilingual mc london',
            'international event host'
        ]
    },
    {
        keyword: "corporate actor",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'low',
        difficultyScore: 30,
        priority: 7,
        searchVolumeEstimate: "500-1.5K",
        competitionLevel: 'low',
        estimatedTraffic: "60-150/month",
        relatedTopics: ['actor', 'corporate', 'spokesperson', 'talent'],
        recommendedContent: ['services', 'portfolio', 'about'],
        longTailVariations: [
            'corporate video actor',
            'spokesperson for hire',
            'brand ambassador actor',
            'corporate presenter'
        ]
    },
    {
        keyword: "bilingual event moderator",
        language: 'en',
        searchIntent: 'transactional',
        difficulty: 'low',
        difficultyScore: 25,
        priority: 9,
        searchVolumeEstimate: "300-1K",
        competitionLevel: 'low',
        estimatedTraffic: "50-150/month",
        relatedTopics: ['moderator', 'multilingual', 'international', 'event'],
        recommendedContent: ['services', 'portfolio', 'about'],
        longTailVariations: [
            'english czech moderator',
            'multilingual event host',
            'international conference moderator',
            'bilingual mc for events'
        ]
    }
];

/**
 * Topic Taxonomy - Main categories for content organization
 */
export const topicTaxonomy = {
    'reels': {
        name: 'Reels & Short-Form Video',
        keywords: ['reels', 'tiktok', 'shorts', 'instagram', 'viral'],
        priority: 10,
        conversionRate: 'high'
    },
    'event': {
        name: 'Event & Conference Video',
        keywords: ['event', 'conference', 'b2b', 'corporate-event', 'testimonial'],
        priority: 10,
        conversionRate: 'high'
    },
    'ugc': {
        name: 'UGC & Content Creation',
        keywords: ['ugc', 'user-generated', 'content-creator', 'authentic'],
        priority: 9,
        conversionRate: 'high'
    },
    'corporate': {
        name: 'Corporate & Brand Video',
        keywords: ['corporate', 'brand', 'company', 'business', 'professional'],
        priority: 8,
        conversionRate: 'medium'
    },
    'social-media': {
        name: 'Social Media Marketing',
        keywords: ['instagram', 'tiktok', 'facebook', 'linkedin', 'youtube'],
        priority: 9,
        conversionRate: 'high'
    },
    'livestream': {
        name: 'Live Streaming & Webinars',
        keywords: ['livestream', 'webinar', 'live', 'streaming', 'broadcast'],
        priority: 7,
        conversionRate: 'medium'
    },
    'creative': {
        name: 'Creative Production',
        keywords: ['creative', 'commercial', 'advertising', 'campaign'],
        priority: 8,
        conversionRate: 'medium'
    },
    'moderator': {
        name: 'Event Moderator & Host',
        keywords: ['moderator', 'host', 'mc', 'presenter', 'emcee', 'bilingual'],
        priority: 9,
        conversionRate: 'high'
    },
    'actor': {
        name: 'Corporate Actor & Spokesperson',
        keywords: ['actor', 'spokesperson', 'talent', 'presenter', 'brand-ambassador'],
        priority: 7,
        conversionRate: 'medium'
    }
} as const;

/**
 * Generate topic recommendations based on keyword analysis
 */
export function getTopicRecommendations(locale: 'cs' | 'en'): TopicRecommendation[] {
    const keywords = locale === 'cs' ? czechKeywords : englishKeywords;
    
    const recommendations: TopicRecommendation[] = [
        {
            topic: 'Event Video',
            currentKeywords: keywords
                .filter(k => k.relatedTopics.includes('event') || k.relatedTopics.includes('conference'))
                .map(k => k.keyword),
            opportunityKeywords: locale === 'cs' 
                ? ['konferenční video', 'firemní akce video', 'video z eventu', 'ceo rozhovory']
                : ['conference video production', 'corporate event filming', 'testimonial videos', 'ceo interviews'],
            contentGaps: locale === 'cs'
                ? ['Případová studie z konference', 'Průvodce výběrem video produkce', 'Checklist pro event video']
                : ['Event video case studies', 'Conference video production guide', 'Event filming checklist'],
            recommendedActions: locale === 'cs'
                ? [
                    'Vytvořit landing page pro event video s cenami',
                    'Přidat 3+ případové studie z konferencí',
                    'Blog: "Jak vybrat správnou video produkci pro vaši konferenci"',
                    'Optimalizovat meta description s klíčovými slovy'
                  ]
                : [
                    'Create dedicated event video landing page',
                    'Add 3+ conference video case studies',
                    'Blog: "Ultimate Guide to Event Video Production"',
                    'Optimize meta descriptions with event keywords'
                  ],
            targetAudience: locale === 'cs' ? 'B2B event organizátoři, marketing manažeři' : 'B2B event organizers, marketing managers',
            conversionPotential: 'high'
        },
        {
            topic: 'Reels & UGC',
            currentKeywords: keywords
                .filter(k => k.relatedTopics.includes('reels') || k.relatedTopics.includes('ugc'))
                .map(k => k.keyword),
            opportunityKeywords: locale === 'cs'
                ? ['reels strategie', 'ugc marketing', 'autentický obsah', 'tvorba UGC']
                : ['reels strategy', 'ugc marketing', 'authentic content creation', 'ugc production'],
            contentGaps: locale === 'cs'
                ? ['Reels vs. UGC porovnání', 'ROI reels kampaní', 'UGC best practices']
                : ['Reels vs UGC comparison', 'Reels campaign ROI', 'UGC content best practices'],
            recommendedActions: locale === 'cs'
                ? [
                    'Zvýraznit UGC službu na homepage',
                    'Vytvořit Reels portfolio sekci',
                    'Blog: "Proč UGC obsah překonává tradiční reklamu"',
                    'Přidat kalkulačku ROI pro Reels'
                  ]
                : [
                    'Feature UGC service prominently on homepage',
                    'Create dedicated Reels portfolio section',
                    'Blog: "Why UGC Content Outperforms Traditional Ads"',
                    'Add Reels ROI calculator'
                  ],
            targetAudience: locale === 'cs' ? 'E-commerce, DTC značky, sociální média manažeři' : 'E-commerce, DTC brands, social media managers',
            conversionPotential: 'high'
        },
        {
            topic: 'Corporate & Brand Video',
            currentKeywords: keywords
                .filter(k => k.relatedTopics.includes('corporate') || k.relatedTopics.includes('brand'))
                .map(k => k.keyword),
            opportunityKeywords: locale === 'cs'
                ? ['image video', 'firemní prezentace', 'corporate storytelling', 'značkové video']
                : ['brand storytelling', 'corporate image video', 'company presentation video', 'brand video production'],
            contentGaps: locale === 'cs'
                ? ['Průvodce corporate video produkcí', 'Příklady úspěšných firemních videí']
                : ['Corporate video production guide', 'Successful brand video examples'],
            recommendedActions: locale === 'cs'
                ? [
                    'Přidat sekci "Pro korporace"',
                    'Case study: Fortune 500 spolupráce (pokud existuje)',
                    'Blog: "ROI firemního videa v roce 2025"'
                  ]
                : [
                    'Add "For Corporations" section',
                    'Case study: Fortune 500 collaboration (if exists)',
                    'Blog: "Corporate Video ROI in 2025"'
                  ],
            targetAudience: locale === 'cs' ? 'Velké firmy, marketing ředitelé' : 'Large enterprises, CMOs',
            conversionPotential: 'medium'
        }
    ];
    
    return recommendations;
}

/**
 * Get keyword recommendations for specific content type
 */
export function getKeywordRecommendationsForContent(
    contentType: 'service' | 'blog' | 'portfolio' | 'case-study',
    topics: string[],
    locale: 'cs' | 'en'
): string[] {
    const keywords = locale === 'cs' ? czechKeywords : englishKeywords;
    
    return keywords
        .filter(k => {
            // Match keywords that relate to the topics
            return topics.some(topic => k.relatedTopics.includes(topic));
        })
        .filter(k => {
            // Filter by content type
            return k.recommendedContent.includes(contentType === 'service' ? 'services' : contentType);
        })
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 5)
        .map(k => k.keyword);
}

/**
 * Calculate topic performance score
 */
export function calculateTopicScore(
    topic: string,
    views: number,
    engagements: number,
    conversions: number
): number {
    const topicData = topicTaxonomy[topic as keyof typeof topicTaxonomy];
    if (!topicData) return 0;
    
    const priorityWeight = topicData.priority / 10;
    const engagementRate = views > 0 ? engagements / views : 0;
    const conversionRate = views > 0 ? conversions / views : 0;
    
    // Weighted score: priority (30%), engagement (40%), conversion (30%)
    return (priorityWeight * 0.3) + (engagementRate * 0.4) + (conversionRate * 0.3);
}

/**
 * Get SEO recommendations based on current content and keywords
 */
export function getSEORecommendations(locale: 'cs' | 'en'): string[] {
    const recommendations = locale === 'cs' ? [
        '✅ Přidat JSON-LD strukturovaná data pro VideoObject (YouTube videa)',
        '✅ Implementovat FAQ schema markup pro lepší featured snippets',
        '✅ Optimalizovat meta description s CTA a klíčovými slovy',
        '✅ Přidat alt texty k obrázkům s klíčovými slovy',
        '✅ Vytvořit téma clustery: Event Video → Případové studie → Blog',
        '✅ Přidat interní odkazy mezi souvisejícím obsahem',
        '✅ Optimalizovat rychlost načítání (cíl: <2s)',
        '✅ Přidat breadcrumb navigaci s schema markup',
        '✅ Vytvořit landing pages pro high-priority klíčová slova',
        '✅ Implementovat OpenGraph obrázky pro sociální sdílení'
    ] : [
        '✅ Add JSON-LD structured data for VideoObject (YouTube videos)',
        '✅ Implement FAQ schema markup for featured snippets',
        '✅ Optimize meta descriptions with CTAs and keywords',
        '✅ Add alt texts to images with target keywords',
        '✅ Create topic clusters: Event Video → Case Studies → Blog',
        '✅ Add internal links between related content',
        '✅ Optimize page load speed (target: <2s)',
        '✅ Add breadcrumb navigation with schema markup',
        '✅ Create landing pages for high-priority keywords',
        '✅ Implement OpenGraph images for social sharing'
    ];
    
    return recommendations;
}

/**
 * Get content recommendations based on keyword gaps
 */
export function getContentRecommendations(locale: 'cs' | 'en'): string[] {
    return locale === 'cs' ? [
        '📝 Blog: "Event Video v roce 2025: Trendy a Ceny"',
        '📝 Blog: "UGC vs. Tradiční Reklama: Data a Výsledky"',
        '📝 Případová studie: "Jak jsme zvýšili engagement o 300% s Reels"',
        '📝 Landing page: "Tvorba Event Videí Praha - Ceny a Balíčky"',
        '📝 Video: "Behind the Scenes: Jak vzniká profesionální Reels"',
        '📝 Checklist: "10 věcí, které potřebujete před natáčením eventu"',
        '📝 Kalkulačka: "Spočítejte si ROI vaší Reels kampaně"',
        '📝 Comparison guide: "Reels vs. TikTok vs. YouTube Shorts"'
    ] : [
        '📝 Blog: "Event Video Production in 2025: Trends and Pricing"',
        '📝 Blog: "UGC vs. Traditional Advertising: Data and Results"',
        '📝 Case Study: "How We Increased Engagement by 300% with Reels"',
        '📝 Landing Page: "Event Video Production London - Pricing"',
        '📝 Video: "Behind the Scenes: How Professional Reels Are Made"',
        '📝 Checklist: "10 Things You Need Before Event Filming"',
        '📝 Calculator: "Calculate Your Reels Campaign ROI"',
        '📝 Comparison Guide: "Reels vs. TikTok vs. YouTube Shorts"'
    ];
}
