"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btnRef.current, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
      });

      // Update CSS custom property for radial gradient
      btnRef.current.style.setProperty(
        "--mouse-x",
        `${((e.clientX - rect.left) / rect.width) * 100}%`
      );
      btnRef.current.style.setProperty(
        "--mouse-y",
        `${((e.clientY - rect.top) / rect.height) * 100}%`
      );
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const content = (
    <div
      ref={btnRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return content;
}
