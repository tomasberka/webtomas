"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface CinematicHeroProps {
  locale?: "cs" | "en";
}

export function CinematicHero({ locale = "cs" }: CinematicHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal for heading
      const heading = headingRef.current;
      if (!heading) return;

      const words = heading.querySelectorAll(".word-inner");
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Badge entrance
      tl.fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0
      );

      // Word-by-word stagger
      tl.fromTo(
        words,
        { y: "110%", rotateX: 90 },
        {
          y: "0%",
          rotateX: 0,
          duration: 0.8,
          stagger: 0.06,
        },
        0.3
      );

      // Subtext fade
      tl.fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.8
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.0
      );

      // Stats bar
      tl.fromTo(
        statsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        1.2
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into individually animated words
  function splitWords(text: string, className?: string) {
    return text.split(" ").map((word, i) => (
      <span key={i} className="word" style={{ marginRight: "0.3em" }}>
        <span className={`word-inner ${className || ""}`}>{word}</span>
      </span>
    ));
  }

  const isCS = locale === "cs";

  return (
    <header ref={heroRef}>
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
      >
        {/* Dark cinematic gradient */}
        <div className="absolute inset-0 hero-gradient -z-10" />
        <div className="absolute inset-0 vignette -z-10" />

        {/* Showreel background (dark tinted) */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-15"
            poster="/images/tomas-hero.jpg"
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-brand-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center gap-6">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="glass inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-primary mb-2 opacity-0"
          >
            🎬 {isCS ? "Praha | Londýn | Celá Evropa" : "Prague | London | All Europe"}
          </div>

          {/* Main Heading — word-by-word GSAP reveal */}
          <h1
            id="hero-heading"
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter max-w-5xl leading-[0.95]"
            style={{ perspective: "1000px" }}
          >
            {isCS ? (
              <>
                <span className="block mb-2">
                  {splitWords("Kameraman Praha.")}
                </span>
                <span className="block text-primary">
                  {splitWords("Event Video & Produkce.")}
                </span>
              </>
            ) : (
              <>
                <span className="block mb-2">
                  {splitWords("Cameraman Prague.")}
                </span>
                <span className="block text-primary">
                  {splitWords("Event Video & Production.")}
                </span>
              </>
            )}
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0"
          >
            {isCS ? (
              <>
                Jsem <strong className="text-foreground">Tomáš Berka</strong> — profesionální kameraman &amp; moderátor eventů.
                Natáčení konferencí, firemních akcí, Reels. DaVinci Resolve postprodukce.{" "}
                <strong className="text-foreground">Praha &amp; celá Evropa.</strong>
              </>
            ) : (
              <>
                I&apos;m <strong className="text-foreground">Tomáš Berka</strong> — professional cameraman &amp; event host.
                Conferences, corporate events, Reels. DaVinci Resolve post-production.{" "}
                <strong className="text-foreground">Prague &amp; all of Europe.</strong>
              </>
            )}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 opacity-0">
            <Link href={isCS ? "/sluzby/event-video-praha" : "/en/services/international-event-video"}>
              <button className="magnetic-btn w-full sm:w-auto text-base h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all floating-cta">
                {isCS ? "Natáčení eventu" : "Event Filming"}
              </button>
            </Link>
            <Link href={isCS ? "/sluzby/event-moderator" : "/en/services/event-moderator"}>
              <button className="magnetic-btn w-full sm:w-auto text-base h-14 px-10 border border-border/50 bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/5 font-bold rounded-xl transition-all">
                {isCS ? "Moderátor eventů" : "Event Moderator"}
              </button>
            </Link>
          </div>

          {/* Trust Stats — glass cards */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-3xl opacity-0">
            {(isCS
              ? [
                  { value: "150+", label: "Natočených eventů" },
                  { value: "5+", label: "Zemí Evropy" },
                  { value: "EN/CZ", label: "Bilingvální" },
                  { value: "48h", label: "Expresní dodání" },
                ]
              : [
                  { value: "150+", label: "Events Filmed" },
                  { value: "5+", label: "EU Countries" },
                  { value: "EN/CZ", label: "Bilingual" },
                  { value: "48h", label: "Express Delivery" },
                ]
            ).map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </header>
  );
}
