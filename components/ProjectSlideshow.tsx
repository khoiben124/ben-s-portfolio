"use client";

import { useState, useEffect, useCallback } from "react";

interface SlideImage {
  src: string;
  caption: string;
}

export default function ProjectSlideshow({ images }: { images: SlideImage[] }) {
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  const current = images[index];

  return (
    <div className="relative">
      <div className="aspect-video bg-stone-900 rounded-lg overflow-hidden border border-stone-800 relative group">
        <img
          src={current.src}
          alt={current.caption}
          className="w-full h-full object-contain bg-stone-950"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-stone-950/70 hover:bg-orange-500 text-stone-100 hover:text-stone-950 transition-all opacity-0 group-hover:opacity-100"
            >
              ←
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-stone-950/70 hover:bg-orange-500 text-stone-100 hover:text-stone-950 transition-all opacity-0 group-hover:opacity-100"
            >
              →
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index
                      ? "bg-orange-500 w-6"
                      : "bg-stone-500 hover:bg-stone-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <p className="text-stone-500 text-sm text-center mt-3">
        {current.caption}
        {images.length > 1 && (
          <span className="text-stone-600 ml-2">
            ({index + 1} / {images.length})
          </span>
        )}
      </p>
    </div>
  );
}
