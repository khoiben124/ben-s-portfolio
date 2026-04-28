"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="group block bg-stone-900 border border-stone-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all hover:-translate-y-1"
          >
            <div className="aspect-video bg-stone-800 overflow-hidden relative">
              {project.heroImage ? (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 to-stone-800 text-center p-6">
                  <div className="text-orange-500 text-4xl mb-3">⚙</div>
                  <p className="text-stone-300 font-medium mb-1">In Progress</p>
                  <p className="text-stone-500 text-xs">Photos coming soon</p>
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="text-stone-500 text-xs font-mono mb-2">
                {project.period}
              </p>
              <h3 className="text-stone-100 text-lg font-medium mb-3 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-stone-400 bg-stone-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-xs text-stone-500 px-2 py-1">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
