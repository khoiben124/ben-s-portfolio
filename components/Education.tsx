"use client";

import { motion } from "framer-motion";

const coursework = [
  "Thermodynamics",
  "Dynamic Systems",
  "Mechanics of Materials",
  "Electric Circuits",
  "Calculus III",
  "Differential Equations",
  "Computer Programming for Mech Eng",
  "Statistical Methods",
];

const involvement = [
  "Badminton Club President",
  "Formula SAE — Driver Control System",
  "Special Olympics Local Program Host",
  "Villanova ASME",
];

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-stone-900 border border-stone-800 rounded-lg p-8"
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-1">
        <h3 className="text-stone-100 text-xl font-medium">
          Villanova University — College of Engineering
        </h3>
        <span className="text-stone-500 text-sm font-mono">
          Aug 2024 — May 2028
        </span>
      </div>
      <p className="text-orange-500 mb-6">
        BS Mechanical Engineering, Mechatronics Minor, GPA 4.00 / 4.00
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-stone-300 text-sm uppercase tracking-wider mb-3">
            Relevant Coursework
          </h4>
          <ul className="space-y-1.5">
            {coursework.map((c) => (
              <li key={c} className="text-stone-400 text-sm">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-stone-300 text-sm uppercase tracking-wider mb-3">
            Involvement & Awards
          </h4>
          <ul className="space-y-1.5 mb-4">
            {involvement.map((c) => (
              <li key={c} className="text-stone-400 text-sm">
                {c}
              </li>
            ))}
          </ul>
          <p className="text-stone-500 text-xs italic">
            Dean's List (all terms), Undergraduate Research Scholars
          </p>
        </div>
      </div>
    </motion.div>
  );
}
