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
    <div>
      <div className="aspect-video rounded-xl overflow-hidden relative group shadow-2xl shadow-black/50 ring-1 ring-stone-800">
        <img
          src={current.src}
          alt={current.caption}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-stone-950/70 backdrop-blur-sm hover:bg-orange-500 text-stone-100 hover:text-stone-950 transition-all opacity-0 group-hover:opacity-100"
            >
              ←
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-stone-950/70 backdrop-blur-sm hover:bg-orange-500 text-stone-100 hover:text-stone-950 transition-all opacity-0 group-hover:opacity-100"
            >
              →
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-stone-950/60 backdrop-blur-sm px-3 py-2 rounded-full">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "bg-orange-500 w-6"
                      : "bg-stone-400 hover:bg-stone-200 w-2"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <p className="text-stone-500 text-sm text-center mt-4">
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
