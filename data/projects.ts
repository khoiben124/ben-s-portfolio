export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  tags: string[];
  period: string;
  role?: string;
  heroImage: string;
  gallery: { src: string; caption: string }[];
  highlights: string[];
}

// ============================================================
// HOW TO EDIT THIS FILE
// ============================================================
// Each project is a block { ... } in the array below.
// Projects appear on your site in the order listed here (top = first).
//
// To CHANGE A PROJECT'S MAIN CARD IMAGE:
//   Edit the `heroImage` field for that project.
//   Example: heroImage: "/projects/voron/2.jpg"
//
// To REORDER SLIDESHOW IMAGES (or add/remove):
//   Edit the `gallery` array. The first item shows first.
//   Each entry: { src: "/path/to/image.jpg", caption: "what it shows" }
//
// To REORDER PROJECTS on the home page:
//   Cut a project's { ... } block and paste it elsewhere in the array.
//
// To ADD A NEW PROJECT:
//   Copy any existing { ... } block, paste it where you want it,
//   change all fields, drop new images in public/projects/<slug>/
// ============================================================

export const projects: Project[] = [
  {
    slug: "plasma-cutter",
    title: "DIY CNC Plasma Cutter",
    shortDescription:
      "A low-cost CNC plasma cutter built from 3D-printed and off-the-shelf components to fabricate sheet metal parts for Formula SAE.",
    longDescription: [
      "Helped build and troubleshoot a low-cost CNC plasma cutter to fabricate custom tabs, brackets, and sheet metal parts for the Formula SAE team. The motivation was simple: outsourcing every sheet metal part is slow and expensive, and a plasma cutter pays for itself quickly when you have an active build season.",
      "The frame and motion system used 3D-printed components combined with off-the-shelf rails, an OpenBuilds controller, and standard plasma cutter hardware. I helped with wiring, the initial troubleshooting pass, and tuning Fusion 360 CAM toolpaths for clean, reliable cuts.",
    ],
    tags: ["Fusion 360 CAM", "OpenBuilds", "3D Printing", "Electronics", "Plasma Cutting"],
    period: "March 2026",
    role: "Build & Tuning Support",
    heroImage: "/projects/plasma-cutter/1.jpg",
    gallery: [
      { src: "/projects/plasma-cutter/1.jpg", caption: "Plasma cutter in operation" },
    ],
    highlights: [
      "3D-printed gantry components",
      "OpenBuilds controller integration",
      "Fusion 360 CAM toolpaths",
      "Used for FSAE bracket fabrication",
    ],
  },
  {
    slug: "fsae-pedal-box",
    title: "Formula SAE Pedal Box Design",
    shortDescription:
      "Designing the driver control system pedal box for Villanova's VU18 Formula SAE car, with a custom return spring system validated in MATLAB.",
    longDescription: [
      "I am part of Villanova's Formula SAE team, designing the pedal box for the VU18 car. The pedal box is the main driver-input system. Its packaging, adjustability, and feel directly affect lap times and driver confidence.",
      "I designed the pedal box assembly in SolidWorks with a focus on adjustability for drivers of different heights and on packaging within the tight constraints of the chassis foot box.",
      "For the return spring system, I used MATLAB to calculate the minimum spring force and deflection required to return the pedal cleanly through 20 degrees of travel. From those numbers, I built a Bill of Materials of off-the-shelf springs that met the constraints.",
      "I am also manufacturing pedal box parts, steering wheel components, and 3D-printed molds for composite layups using milling, lathing, and additive manufacturing.",
    ],
    tags: ["SolidWorks", "MATLAB", "Manufacturing", "Formula SAE"],
    period: "Jan 2026 — Present",
    role: "Driver Control System",
    heroImage: "/projects/fsae/1.jpg",
    gallery: [
      { src: "/projects/fsae/1.jpg", caption: "Pedal box design" },
      { src: "/projects/fsae/2.jpg", caption: "Manufacturing components" },
    ],
    highlights: [
      "MATLAB-validated return spring design",
      "Adjustable for multiple driver heights",
      "20 degree pedal travel range",
      "Manufactured using milling, lathing, and 3D printing",
    ],
  },
  {
    slug: "tensile-stage",
    title: "Benchtop Tensile Stage for Hydrogen Embrittlement Testing",
    shortDescription:
      "A custom small-scale tensile-testing rig with Python control software, designed to enable repeatable hydrogen-embrittlement studies on steel.",
    longDescription: [
      "As an Undergraduate Researcher in the 3D Lab at Villanova, I designed and built a benchtop tensile-testing stage from scratch. The goal was to give researchers a flexible, low-cost platform for small-scale mechanical tests.",
      "The system integrates a TMC2209 stepper driver for precise motion, an ADS1115 16-bit ADC for clean load-cell readings, and a load cell system that achieves better than 0.03 N resolution. Eight custom mechanical components were designed in SolidWorks and machined or 3D-printed in-house.",
      "I wrote the control software in Python. It handles motion control, data acquisition, and real-time CSV export of time, displacement, load, and step count. Researchers can configure speed, target force, and termination conditions before each run.",
      "The end goal is a repeatable hydrogen-embrittlement testing workflow for steel. With consistent automated tensile data, we can characterize how hydrogen exposure changes material behavior under load.",
    ],
    tags: ["Python", "SolidWorks", "TMC2209", "ADS1115", "Load Cell", "3D Printing"],
    period: "Aug 2025 — Present",
    role: "Undergraduate Researcher",
    heroImage: "/projects/tensile-stage/1.png",
    gallery: [
      { src: "/projects/tensile-stage/1.png", caption: "CAD model" },
      { src: "/projects/tensile-stage/2.jpg", caption: "Mid-assembly" },
      { src: "/projects/tensile-stage/3.jpg", caption: "Running a test" },
    ],
    highlights: [
      "0.03 N load resolution",
      "8 custom-designed mechanical components",
      "Real-time CSV data export",
      "Python-based test automation",
    ],
  },
  {
    slug: "aerovision",
    title: "AeroVision — ML/CV-Powered CFD Tool",
    shortDescription:
      "A low-cost computational fluid dynamics tool using machine learning and computer vision to visualize airflow over airfoils, built during the L3Harris INNOVATE summer program.",
    longDescription: [
      "I led a team of four engineers to develop AeroVision during Villanova's INNOVATE summer program, sponsored by L3Harris. The objective was to make airflow visualization accessible without expensive CFD licenses.",
      "On the hardware side, I 3D modeled and built a motorized wind tunnel positioning system in SolidWorks, allowing us to systematically vary airfoil angle of attack and capture imagery at consistent positions.",
      "We ran over 100 flow visualization tests in Villanova's closed-return wind tunnel using smoke-line techniques to generate a labeled dataset. The ML and CV pipeline learned to predict airflow patterns from airfoil geometry and angle, giving a near-instant approximate CFD result without simulation overhead.",
    ],
    tags: ["Machine Learning", "Computer Vision", "SolidWorks", "Wind Tunnel", "Python"],
    period: "June 2025 — July 2025",
    role: "Mechanical Engineering Lead",
    heroImage: "/projects/aerovision/1.png",
    gallery: [
      { src: "/projects/aerovision/1.png", caption: "AeroVision system" },
      { src: "/projects/aerovision/2.png", caption: "Wind tunnel testing" },
      { src: "/projects/aerovision/3.png", caption: "Flow visualization" },
      { src: "/projects/aerovision/4.png", caption: "Data analysis" },
    ],
    highlights: [
      "Led a team of 4 engineers",
      "100+ wind tunnel test runs",
      "Custom motorized positioning system",
      "Closed-return wind tunnel testing",
    ],
  },
  {
    slug: "voron",
    title: "Voron 2.4 and Voron 0.2 3D Printer Builds",
    shortDescription:
      "Built two custom Voron 3D printers from scratch, including motion systems, electronics, firmware tuning, and extrusion calibration.",
    longDescription: [
      "I independently built two Voron 3D printers from scratch — the larger Voron 2.4 (CoreXY, enclosed) and the compact Voron 0.2. Both involved sourcing every fastener, machining or printing custom parts, and assembling the motion systems by hand.",
      "Beyond mechanical assembly, I wired the electronics from scratch, flashed and configured Klipper firmware, and tuned every aspect of the print pipeline. Pressure advance, input shaping, extrusion multiplier, and slicer settings in OrcaSlicer all required iteration.",
      "Troubleshooting was the deepest part of the learning. Issues like inconsistent extrusion, bed adhesion failures, ringing artifacts, and thermal runaways each forced me to understand a different subsystem.",
    ],
    tags: ["Klipper", "OrcaSlicer", "CAD", "Electronics", "Firmware Tuning"],
    period: "2024 — 2025",
    role: "Independent Build",
    heroImage: "/projects/voron/1.jpg",
    gallery: [
      { src: "/projects/voron/1.jpg", caption: "Frame assembly" },
      { src: "/projects/voron/2.jpg", caption: "Wiring and electronics" },
      { src: "/projects/voron/3.png", caption: "First successful print" },
    ],
    highlights: [
      "Two complete Voron builds (2.4 and 0.2)",
      "Klipper firmware configuration",
      "Hand-wired electronics from scratch",
      "Full slicer and motion system tuning",
    ],
  },
];
