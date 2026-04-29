"use client";

import { useState, useEffect, useCallback } from "react";

interface SlideImage {
  src: string;
  caption: string;
}

export default function ProjectSlideshow({ images }: { images: SlideImage[] }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && zoomed) {
        setZoomed(false);
        return;
      }
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext, zoomed]);

  const current = images[index];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative inline-block max-w-full">
          <img
            src={current.src}
            alt={current.caption}
            onClick={() => setZoomed(true)}
            className="max-h-[500px] w-auto rounded-xl cursor-zoom-in shadow-2xl shadow-black/50"
          />
        </div>

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 hover:bg-orange-500 text-stone-100 hover:text-stone-950 border border-stone-800 hover:border-orange-500 transition-all"
            >
              ←
            </button>

            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "bg-orange-500 w-6"
                      : "bg-stone-600 hover:bg-stone-400 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next image"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 hover:bg-orange-500 text-stone-100 hover:text-stone-950 border border-stone-800 hover:border-orange-500 transition-all"
            >
              →
            </button>
          </div>
        )}

        <p className="text-stone-500 text-sm text-center mt-4">
          {current.caption}
          {images.length > 1 && (
            <span className="text-stone-600 ml-2">
              ({index + 1} / {images.length})
            </span>
          )}
        </p>
      </div>

      {zoomed && (
        <div
          onClick={() => setZoomed(false)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(false);
            }}
            aria-label="Close"
            className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-stone-900/80 hover:bg-orange-500 text-stone-100 hover:text-stone-950 text-2xl transition-all z-10"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-stone-900/80 hover:bg-orange-500 text-stone-100 hover:text-stone-950 text-xl transition-all z-10"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-stone-900/80 hover:bg-orange-500 text-stone-100 hover:text-stone-950 text-xl transition-all z-10"
              >
                →
              </button>
            </>
          )}

          <img
            src={current.src}
            alt={current.caption}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-lg cursor-default"
          />

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-300 text-sm bg-stone-900/80 px-4 py-2 rounded-full">
            {current.caption}
            {images.length > 1 && (
              <span className="text-stone-500 ml-2">
                ({index + 1} / {images.length})
              </span>
            )}
          </p>
        </div>
      )}
    </>
  );
}
