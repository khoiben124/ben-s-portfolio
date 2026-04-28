"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    role: "Driver Control System (Pedal Box)",
    org: "Formula SAE — Villanova University",
    period: "Jan 2026 — Present",
    bullets: [
      "Designing the VU18 car's pedal box in SolidWorks with focus on packaging and adjustability.",
      "Manufacturing pedal box parts, steering wheel components, and 3D-printed molds for composite layups using milling, lathing, and additive manufacturing.",
      "Designed a pedal-box return spring system; used MATLAB to calculate minimum force and deflection for 20 degree pedal travel; built a BOM from off-the-shelf components.",
    ],
  },
  {
    role: "Undergraduate Researcher — 3D Lab",
    org: "Villanova University, ME Sophomore Research Scholars",
    period: "Aug 2025 — Present",
    bullets: [
      "Designed and built a benchtop tensile-testing stage with 8 custom components, integrating a TMC2209 stepper driver, ADS1115 ADC, and load cell system.",
      "Wrote Python control software to automate testing and export real-time time, displacement, load (within 0.03 N), and step-count data to CSV.",
      "Developing a repeatable hydrogen-embrittlement testing workflow for steel to enable reliable material behavior and crack characterization.",
    ],
  },
  {
    role: "Engineering Lab Assistant",
    org: "Drosdick Innovation Lab — Villanova University",
    period: "Aug 2025 — Present",
    bullets: [
      "Support, manage, and guide students and faculty on 3D printing, soldering, woodworking, and makerspace tools.",
      "Maintain and modify 20 Bambu printers, 2 resin printers, 1 laser cutter, the woodworking shop, and various power tools.",
    ],
  },
  {
    role: "Mechanical Engineering Lead — AeroVision",
    org: "INNOVATE: L3Harris Summer Program — Villanova",
    period: "June 2025 — July 2025",
    bullets: [
      "Led a team of four to develop AeroVision, a low-cost CFD tool using Machine Learning and Computer Vision to visualize airflow over airfoils.",
      "3D modeled and built a motorized wind tunnel positioning system in SolidWorks; conducted 100+ flow visualization tests in Villanova's closed-return wind tunnel to generate ML training data.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {experiences.map((exp, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`bg-stone-900 border rounded-lg overflow-hidden transition-colors ${
              isOpen ? "border-orange-500/50" : "border-stone-800 hover:border-stone-700"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full p-5 flex items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-stone-100 text-base md:text-lg font-medium">
                  {exp.role}
                </h3>
                <p className="text-stone-500 text-sm font-mono mt-1">
                  {exp.period}
                </p>
              </div>
              <span
                className={`text-orange-500 text-xl transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1">
                    <p className="text-orange-500 text-sm mb-4">{exp.org}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-stone-400 text-sm leading-relaxed pl-4 relative"
                        >
                          <span className="absolute left-0 text-stone-600">—</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
