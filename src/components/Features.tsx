/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { featuresList } from "../data";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <section id="features" className="py-24 px-6 bg-white dark:bg-[#0d1117] transition-colors duration-300">
      
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="relative mb-16">
          <div className="absolute top-[-40px] left-[-10px] text-[80px] md:text-[100px] font-extrabold text-slate-200/50 dark:text-[#21262d]/50 pointer-events-none z-0 tracking-tighter select-none font-mono">
            03
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a0a0a] dark:text-[#f0f0f0] relative z-10 tracking-tight">
            Built for Trust
          </h2>
          <p className="text-[#64748b] dark:text-[#8b949e] font-sans mt-2 text-[15px] sm:text-[16px] max-w-xl">
            Every feature is engineered for transparency, technical validation, and modern compliance standards.
          </p>
        </div>

        {/* Features Card Layout */}
        <motion.div 
          id="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresList.map((feat, fIdx) => (
            <motion.div 
              id={`feature-card-${fIdx}`}
              key={fIdx}
              variants={itemVariants}
              className="bg-white dark:bg-[#1c2128] border border-slate-200/60 dark:border-slate-800 rounded-2xl p-7 shadow-xs hover:shadow-lg dark:hover:border-green-800/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="text-3xl mb-4 select-none">
                {feat.icon}
              </div>

              <h3 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-slate-100 mb-2 font-sans tracking-tight">
                {feat.title}
              </h3>

              <p className="text-xs sm:text-[14px] text-slate-500 dark:text-[#8b949e] leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
