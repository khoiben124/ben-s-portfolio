"use client";

import { useState } from "react";

interface GalleryImage {
  src: string;
  caption: string;
}

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <figure key={img.src} className="cursor-pointer group">
            <div className="aspect-video bg-stone-900 rounded-md overflow-hidden border border-stone-800 group-hover:border-orange-500/50 transition-colors">
              <img
                src={img.src}
                alt={img.caption}
                onClick={() => setZoomedSrc(img.src)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <figcaption className="text-stone-500 text-xs mt-2 text-center">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {zoomedSrc && (
        <div
          onClick={() => setZoomedSrc(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 cursor-pointer"
        >
          <button
            onClick={() => setZoomedSrc(null)}
            className="absolute top-6 right-6 text-stone-300 hover:text-white text-3xl"
          >
            ×
          </button>
          <img
            src={zoomedSrc}
            alt="Zoomed"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </>
  );
}