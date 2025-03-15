
import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
  duration = 700,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationStyle = () => {
    if (!isVisible) {
      const translateValue = "20px";
      return {
        opacity: 0,
        transform:
          direction === "up"
            ? `translateY(${translateValue})`
            : direction === "down"
            ? `translateY(-${translateValue})`
            : direction === "left"
            ? `translateX(${translateValue})`
            : direction === "right"
            ? `translateX(-${translateValue})`
            : "none",
        transition: "none",
      };
    }

    return {
      opacity: 1,
      transform: "translate(0, 0)",
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.23, 1, 0.32, 1)`,
      transitionDelay: `${delay}ms`,
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
};
