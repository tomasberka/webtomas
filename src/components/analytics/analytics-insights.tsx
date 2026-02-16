"use client";

import { useEffect, useState } from 'react';
import { 
    getTopicRecommendations, 
    getSEORecommendations, 
    getContentRecommendations,
    type TopicRecommendation 
} from '@/lib/keyword-analysis';

interface AnalyticsInsightsProps {
    locale: 'cs' | 'en';
    currentPage?: string;
    topics?: string[];
}

/**
 * Analytics Insights Component
 * 
 * Displays keyword recommendations and deep analytics insights
 * for Czech and English content optimization
 */
export function AnalyticsInsights({ locale, currentPage, topics = [] }: AnalyticsInsightsProps) {
    const [recommendations, setRecommendations] = useState<TopicRecommendation[]>([]);
    const [seoRecommendations, setSeoRecommendations] = useState<string[]>([]);
    const [contentRecommendations, setContentRecommendations] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setRecommendations(getTopicRecommendations(locale));
        setSeoRecommendations(getSEORecommendations(locale));
        setContentRecommendations(getContentRecommendations(locale));
    }, [locale]);

    // Only show for admin/development mode
    useEffect(() => {
        // Check if we're in development or admin mode
        const isDev = process.env.NODE_ENV === 'development';
        const isAdmin = typeof window !== 'undefined' && window.location.search.includes('admin=true');
        setIsVisible(isDev || isAdmin);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-md bg-white dark:bg-gray-900 shadow-2xl rounded-lg border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-y-auto">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        📊 {locale === 'cs' ? 'Analytické Insights' : 'Analytics Insights'}
                    </h3>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        ✕
                    </button>
                </div>

                {/* Current Page Info */}
                {currentPage && (
                    <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm text-blue-900 dark:text-blue-100">
                            <strong>{locale === 'cs' ? 'Stránka:' : 'Page:'}</strong> {currentPage}
                        </p>
                        {topics.length > 0 && (
                            <p className="text-sm text-blue-900 dark:text-blue-100 mt-1">
                                <strong>{locale === 'cs' ? 'Témata:' : 'Topics:'}</strong> {topics.join(', ')}
                            </p>
                        )}
                    </div>
                )}

                {/* Topic Recommendations */}
                <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                        🎯 {locale === 'cs' ? 'Doporučení k tématu' : 'Topic Recommendations'}
                    </h4>
                    <div className="space-y-3">
                        {recommendations.map((rec, idx) => (
                            <details key={idx} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm">
                                <summary className="font-semibold cursor-pointer text-gray-900 dark:text-white">
                                    {rec.topic} 
                                    <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
                                        rec.conversionPotential === 'high' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                                        rec.conversionPotential === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                                    }`}>
                                        {rec.conversionPotential}
                                    </span>
                                </summary>
                                <div className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                                    <div>
                                        <strong>{locale === 'cs' ? 'Aktuální klíčová slova:' : 'Current Keywords:'}</strong>
                                        <p className="text-xs">{rec.currentKeywords.slice(0, 3).join(', ')}</p>
                                    </div>
                                    <div>
                                        <strong>{locale === 'cs' ? 'Příležitosti:' : 'Opportunities:'}</strong>
                                        <p className="text-xs">{rec.opportunityKeywords.slice(0, 3).join(', ')}</p>
                                    </div>
                                    <div>
                                        <strong>{locale === 'cs' ? 'Doporučené akce:' : 'Recommended Actions:'}</strong>
                                        <ul className="text-xs list-disc list-inside">
                                            {rec.recommendedActions.slice(0, 2).map((action, i) => (
                                                <li key={i}>{action}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* SEO Recommendations */}
                <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                        🔍 {locale === 'cs' ? 'SEO Doporučení' : 'SEO Recommendations'}
                    </h4>
                    <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-300">
                        {seoRecommendations.slice(0, 5).map((rec, idx) => (
                            <li key={idx}>{rec}</li>
                        ))}
                    </ul>
                </div>

                {/* Content Recommendations */}
                <div>
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                        📝 {locale === 'cs' ? 'Návrhy obsahu' : 'Content Recommendations'}
                    </h4>
                    <ul className="text-xs space-y-1 text-gray-700 dark:text-gray-300">
                        {contentRecommendations.slice(0, 4).map((rec, idx) => (
                            <li key={idx}>{rec}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        {locale === 'cs' 
                            ? '💡 Insights na základě keyword analýzy' 
                            : '💡 Insights based on keyword analysis'}
                    </p>
                </div>
            </div>
        </div>
    );
}

/**
 * Hook to track analytics insights visibility
 */
export function useAnalyticsInsights(locale: 'cs' | 'en') {
    useEffect(() => {
        // Track when insights panel is viewed
        if (typeof window !== 'undefined' && window.gtag) {
            const isAdmin = window.location.search.includes('admin=true');
            if (isAdmin) {
                window.gtag('event', 'insights_panel_view', {
                    event_category: 'analytics',
                    locale: locale,
                });
            }
        }
    }, [locale]);
}
