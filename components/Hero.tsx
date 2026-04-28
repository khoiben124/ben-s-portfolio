"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl" />
            <img
              src="/headshot.jpg"
              alt="Khoi Nguyen"
              className="relative w-52 h-60 rounded-full object-cover border-2 border-stone-800"
            />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-orange-500 text-sm tracking-widest uppercase mb-6"
        >
          Hello, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl mb-6 leading-tight"
        >
          Khoi <span className="text-stone-400 italic">(Ben)</span> Nguyen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-stone-400 mb-10 max-w-xl mx-auto"
        >
          Building things that <span className="text-stone-100">measure</span>, <span className="text-stone-100">move</span>, and <span className="text-orange-500">matter</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm text-stone-400 mb-10"
        >
          Mechanical Engineering student at Villanova University, Class of 2028
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-stone-950 font-medium rounded-md transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-stone-700 hover:border-stone-100 text-stone-100 font-medium rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>


    </section>
  );
}
