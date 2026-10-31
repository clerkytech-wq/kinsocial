import React, { useState, useEffect } from 'react';

export function CrossfadeFrame({ 
  images, 
  interval = 2800, 
  initialDelay = 0, 
  alt = "Kin Social Community Hangout", 
  className = "" 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    const startDelay = setTimeout(() => {
      // First switch
      setCurrentIndex((prev) => (prev + 1) % images.length);

      // Subsequent recurring switches
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
    }, initialDelay + interval);

    return () => {
      clearTimeout(startDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, [images.length, interval, initialDelay]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out will-change-opacity ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${className}`}
        />
      ))}
    </div>
  );
}
