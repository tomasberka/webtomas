"use client";

import { useEffect, useRef, useCallback } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const playIconRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const animate = useCallback(() => {
    // Ring follows with slight delay (lerp)
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

    if (dotRef.current) {
      dotRef.current.style.left = `${mousePos.current.x}px`;
      dotRef.current.style.top = `${mousePos.current.y}px`;
    }
    if (ringRef.current) {
      ringRef.current.style.left = `${ringPos.current.x}px`;
      ringRef.current.style.top = `${ringPos.current.y}px`;
    }
    if (playIconRef.current) {
      playIconRef.current.style.left = `${mousePos.current.x}px`;
      playIconRef.current.style.top = `${mousePos.current.y}px`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    document.documentElement.classList.add("cursor-custom");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const onMouseEnterInteractive = () => {
      dotRef.current?.classList.add("cursor-hover");
      ringRef.current?.classList.add("cursor-hover");
    };

    const onMouseLeaveInteractive = () => {
      dotRef.current?.classList.remove("cursor-hover");
      ringRef.current?.classList.remove("cursor-hover");
    };

    const onMouseEnterVideo = () => {
      dotRef.current?.classList.add("cursor-video");
      ringRef.current?.classList.add("cursor-video");
      playIconRef.current?.classList.add("visible");
    };

    const onMouseLeaveVideo = () => {
      dotRef.current?.classList.remove("cursor-video");
      ringRef.current?.classList.remove("cursor-video");
      playIconRef.current?.classList.remove("visible");
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(animate);

    // Attach hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .magnetic-btn");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    // Attach video cursor to video elements
    const videoElements = document.querySelectorAll("video, .video-card, [data-cursor='play']");
    videoElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterVideo);
      el.addEventListener("mouseleave", onMouseLeaveVideo);
    });

    return () => {
      document.documentElement.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      videoElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterVideo);
        el.removeEventListener("mouseleave", onMouseLeaveVideo);
      });
    };
  }, [animate]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
      <div ref={playIconRef} className="cursor-play-icon hidden md:block">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    </>
  );
}
