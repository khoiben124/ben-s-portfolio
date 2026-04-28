"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-orange-500 text-sm tracking-widest uppercase mb-3">
          {label}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-100">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}
