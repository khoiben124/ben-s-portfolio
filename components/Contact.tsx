"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "benkhoi2006@gmail.com",
    href: "mailto:benkhoi2006@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/khoi-ben-nguyen",
    href: "https://www.linkedin.com/in/khoi-ben-nguyen/",
  },
  {
    label: "GitHub",
    value: "github.com/khoiben124",
    href: "https://github.com/khoiben124",
  },
  {
    label: "Phone",
    value: "(667) 310-9940",
    href: "tel:+16673109940",
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-2xl">
        I am always open to talking about engineering, research, internships, or anything you have built recently. The fastest way to reach me is email.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-stone-900 border border-stone-800 rounded-lg p-5 hover:border-orange-500/50 transition-all hover:-translate-y-0.5 block"
          >
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
              {link.label}
            </p>
            <p className="text-stone-100 font-medium">{link.value}</p>
          </a>
        ))}
      </div>

      <a
        href="/Khoi Minh Nguyen Engineering Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-stone-950 font-medium rounded-md transition-colors"
      >
        View Resume (PDF)
      </a>
    </motion.div>
  );
}
