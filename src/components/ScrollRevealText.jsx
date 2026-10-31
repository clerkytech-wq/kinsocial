import React, { useEffect, useRef, useState } from 'react';

export function ScrollRevealText({
  children,
  as: Component = 'div',
  className = '',
  staggerDelay = 0.065,
  ...props
}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check immediately if already in viewport on mount
    const checkImmediate = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsRevealed(true);
      }
    };
    checkImmediate();

    // IntersectionObserver that adds and removes is-revealed as user scrolls up and down
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        } else {
          // Re-arm animation when scrolling out of viewport
          const rect = el.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            setIsRevealed(false);
          }
        }
      },
      {
        root: null,
        rootMargin: '50px 0px 50px 0px',
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Split string children into words with sentence-wrap and sentence-drop
  const renderContent = () => {
    if (typeof children === 'string') {
      const words = children.split(/\s+/);
      return words.map((word, idx) => (
        <span key={idx} className="sentence-wrap" aria-hidden="true">
          <span
            className="sentence-drop"
            style={{
              '--line-index': idx,
              transitionDelay: `${idx * staggerDelay}s`,
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ));
    }
    return children;
  };

  const rawText = typeof children === 'string' ? children : undefined;

  return (
    <Component
      ref={containerRef}
      className={`word-drop-reveal ${isRevealed ? 'is-revealed' : ''} ${className}`}
      aria-label={rawText}
      {...props}
    >
      {renderContent()}
    </Component>
  );
}
