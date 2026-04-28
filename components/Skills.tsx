"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "CAD & Design",
    items: ["SolidWorks", "Fusion 360", "OrcaSlicer"],
  },
  {
    category: "Programming",
    items: ["Python", "MATLAB", "Microsoft Office"],
  },
  {
    category: "Manufacturing",
    items: [
      "Milling",
      "Lathing",
      "FDM 3D Printing",
      "Resin Printing",
      "Laser Cutting",
      "Plasma Cutting",
      "Woodworking",
    ],
  },
  {
    category: "Lab Equipment",
    items: [
      "Instron 5980 Tensile Tester",
      "Closed-return Wind Tunnel",
      "Open Wind Tunnel",
      "Markforged Mark Two",
    ],
  },
  {
    category: "Electronics & Firmware",
    items: [
      "TMC2209 Stepper Drivers",
      "ADS1115 ADC",
      "Load Cells",
      "Soldering",
      "Wiring",
      "Klipper",
      "Fusion 360 CAM",
    ],
  },
];

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-stone-900 border border-stone-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors"
        >
          <h3 className="text-orange-500 text-sm uppercase tracking-wider mb-4">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="text-sm text-stone-300 bg-stone-800 px-3 py-1 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
