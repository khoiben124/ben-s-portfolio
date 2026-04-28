"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "GPA", value: "4.00 / 4.00" },
  { label: "Honors", value: "Dean's List, all terms" },
  { label: "Program", value: "BS Mechanical Engineering" },
  { label: "Minor", value: "Mechatronics" },
  { label: "Class of", value: "2028" },
  { label: "Status", value: "Rising Junior" },
];

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-stone-300 text-lg leading-relaxed mb-6">
          I see engineering as the process of turning uncertainty into something measurable, functional, and useful.
        </p>
        <p className="text-stone-400 leading-relaxed mb-6">
          Through Formula SAE design, undergraduate research, wind tunnel testing, 3D printing, and custom machine building, I have learned to approach problems not just as assignments, but as systems waiting to be understood, improved, and brought to life.
        </p>
        <p className="text-stone-400 leading-relaxed">
          When I am not in the lab or the workshop, I lead and host events for Villanova Club Badminton.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-4"
      >
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="bg-stone-900 border border-stone-800 rounded-lg p-4 hover:border-orange-500/50 transition-colors"
          >
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
              {fact.label}
            </p>
            <p className="text-stone-100 font-medium">{fact.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
