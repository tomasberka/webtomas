import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Free Video Audit | Get Personalized Loom Feedback | Tomáš Berka",
  description:
    "Submit your social media profile and receive a personalized Loom video with actionable tips to improve your video content strategy. No strings attached.",
  keywords: [
    "free video audit",
    "social media video review",
    "content strategy feedback",
    "video marketing tips",
    "loom video feedback",
    "instagram reels audit",
    "tiktok video review",
  ],
  openGraph: {
    title: "Free Video Audit | Personalized Loom Feedback",
    description:
      "Get a personalized video audit with actionable tips to improve your social media content.",
    type: "website",
    locale: "en_US",
    url: "https://en.jajsemtomas.cz/free-video-audit",
    images: [
      {
        url: "https://jajsemtomas.cz/images/og-image-en.jpg",
        width: 1200,
        height: 630,
        alt: "Free Video Audit by Tomáš Berka",
      },
    ],
  },
};

export default function FreeVideoAuditPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 mb-6">
              🎥 Free • No Obligation • 48h Turnaround
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get a{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Personalized Video Audit
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Submit your Instagram, TikTok, or LinkedIn profile. I&apos;ll
              record a personalized Loom video with 3-5 actionable tips to
              improve your video content.{" "}
              <span className="text-white font-medium">100% free.</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section id="request-form" className="py-16 lg:py-24 bg-gray-950">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-2">
                Request Your Free Audit
              </h2>
              <p className="text-gray-400 mb-8">
                Fill in the form below and I&apos;ll send you a personalized
                Loom video within 48 hours.
              </p>

              <form
                action="https://formspree.io/f/mpqwdzyb"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="Free Video Audit Request (EN)" />
                <input type="hidden" name="service" value="Free Video Audit" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="socialProfile"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Social Media Profile URL *
                  </label>
                  <input
                    type="url"
                    id="socialProfile"
                    name="socialProfile"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="https://instagram.com/yourbrand or https://tiktok.com/@yourbrand"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Instagram, TikTok, LinkedIn, or YouTube profile URL
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    What are your main content goals?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    placeholder="E.g., More engagement, better brand awareness, drive sign-ups..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Primary Platform
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="youtube">YouTube</option>
                    <option value="multiple">Multiple Platforms</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/40"
                >
                  Request Free Video Audit →
                </button>

                <p className="text-center text-sm text-gray-500">
                  No credit card required. No sales pitch. Just actionable
                  feedback.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-black">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-gray-400">Simple 3-step process</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Submit Your Profile",
                description:
                  "Share your social media profile URL and tell me about your content goals.",
              },
              {
                step: "02",
                title: "I Record a Loom",
                description:
                  "I'll review your content and record a personalized 5-10 minute video with specific feedback.",
              },
              {
                step: "03",
                title: "Get Actionable Tips",
                description:
                  "Receive 3-5 concrete improvements you can implement immediately to level up your content.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <span className="text-4xl font-bold text-orange-500/30">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 lg:py-24 bg-gray-950">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What You&apos;ll Learn in Your Audit
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Hook Analysis",
                  description:
                    "Are your first 3 seconds compelling enough? I'll show you what's working and what's not.",
                },
                {
                  title: "Content Structure",
                  description:
                    "How to structure your videos for maximum watch time and engagement.",
                },
                {
                  title: "Visual Quality",
                  description:
                    "Quick wins for lighting, framing, and production value that don't require expensive gear.",
                },
                {
                  title: "Caption & CTA Strategy",
                  description:
                    "How to write captions that drive action and when to use CTAs effectively.",
                },
                {
                  title: "Content Mix",
                  description:
                    "Are you posting the right balance of educational, entertaining, and promotional content?",
                },
                {
                  title: "Algorithm Optimization",
                  description:
                    "Platform-specific tips to help your content get discovered by more people.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24 bg-black">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Am I Doing This for Free?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Simple: I believe in providing value first. Some of you will
              become clients. Most won&apos;t—and that&apos;s perfectly fine. Either way,
              you&apos;ll walk away with actionable insights to improve your content.
            </p>
            <p className="text-gray-400">
              I&apos;ve helped companies like DEKRA, OICT Prague, and Tatra Trucks
              create video content that drives real business results. This free
              audit gives you a taste of how I work.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/en/remote-video"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-white hover:border-orange-500 transition-colors"
              >
                Learn About My Services →
              </Link>
              <Link
                href="/en/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 text-white hover:border-orange-500 transition-colors"
              >
                View Portfolio →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-t from-gray-950 to-black">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Level Up Your Content?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Request your free video audit now. You&apos;ll receive personalized
              feedback within 48 hours.
            </p>
            <a
              href="#request-form"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:from-orange-600 hover:to-orange-700"
            >
              ↑ Get Your Free Audit
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
