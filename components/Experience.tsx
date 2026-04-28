"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Mechanical Engineering Internship",
    org: "Human Active Technology — Manufacturing",
    period: "May 2026 — Present",
    bullets: [
      "To be determined..."
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
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-500 via-stone-700 to-stone-800" />

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-stone-950 border-2 border-orange-500 z-10" />
            <div className="absolute left-[3px] top-[15px] w-2.5 h-2.5 rounded-full bg-orange-500 z-20" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
              <h3 className="text-stone-100 text-xl md:text-2xl font-medium leading-snug">
                {exp.role}
              </h3>
              <span className="text-stone-500 text-sm font-mono shrink-0">
                {exp.period}
              </span>
            </div>

            <p className="text-orange-500 text-base mb-4">{exp.org}</p>

            <ul className="space-y-2.5">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-stone-300 text-base leading-relaxed pl-5 relative"
                >
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-stone-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
