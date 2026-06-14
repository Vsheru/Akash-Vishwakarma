/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { UserPlus, Activity, Award, TrendingUp, Sparkles, AlertCircle } from "lucide-react";

interface HowItWorksProps {
  onStartClick: () => void;
}

export default function HowItWorks({ onStartClick }: HowItWorksProps) {
  // Animating step container with staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const stipendItems = [
    { value: "₹25,000", label: "Month 1 Actual projection*" },
    { value: "₹50,000", label: "Month 2 Actual projection*" },
    { value: "₹75,000", label: "Month 3 Actual projection*" },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-[#f8f9fa] dark:bg-[#161b22] border-y border-slate-200/50 dark:border-slate-800/40 transition-colors duration-300">
      
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Title Block */}
        <div className="relative mb-16">
          <div className="absolute top-[-40px] left-[-10px] text-[80px] md:text-[100px] font-extrabold text-slate-200/50 dark:text-[#21262d]/50 pointer-events-none z-0 tracking-tighter select-none font-mono">
            02
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a0a0a] dark:text-[#f0f0f0] relative z-10 tracking-tight">
            How It Works
          </h2>
          <p className="text-[#64748b] dark:text-[#8b949e] font-sans mt-2 text-[15px] sm:text-[16px] max-w-xl">
            A transparent, structured path from evaluation of virtual parameters to funded simulated allocations.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          id="steps-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {/* Step 1 */}
          <motion.div 
            id="step-1"
            variants={itemVariants}
            className="bg-white dark:bg-[#1c2128] rounded-2xl p-6.5 border border-slate-200/60 dark:border-slate-800 shadow-xs hover:shadow-lg dark:hover:border-green-800/40 hover:-translate-y-1 transition-all group duration-350"
          >
            <div className="text-[13px] font-bold text-green-600 dark:text-green-500 font-mono mb-4">
              01 / STEP
            </div>
            
            <div className="w-12 h-12 bg-green-500/5 dark:bg-green-500/10 border border-green-500/10 rounded-xl flex items-center justify-center mb-5 text-green-600 group-hover:scale-110 transition-transform">
              <UserPlus size={22} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2.5">
              Sign Up & Program
            </h3>
            
            <p className="text-[14px] text-slate-500 dark:text-[#8b949e] leading-relaxed mb-5">
              Select your evaluation tier — ₹2L, ₹5L, or ₹10L. Complete the virtual account onboarding within minutes.
            </p>

            <button 
              id="step-1-btn"
              onClick={onStartClick}
              className="text-xs font-bold text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
            >
              Begin Assessment →
            </button>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            id="step-2"
            variants={itemVariants}
            className="bg-white dark:bg-[#1c2128] rounded-2xl p-6.5 border border-slate-200/60 dark:border-slate-800 shadow-xs hover:shadow-lg dark:hover:border-green-800/40 hover:-translate-y-1 transition-all group duration-350"
          >
            <div className="text-[13px] font-bold text-green-600 dark:text-green-500 font-mono mb-4">
              02 / ASSESSMENT
            </div>
            
            <div className="w-12 h-12 bg-green-500/5 dark:bg-green-500/10 border border-green-500/10 rounded-xl flex items-center justify-center mb-5 text-green-600 group-hover:scale-110 transition-transform">
              <Activity size={22} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Risk Evaluation
            </h3>

            {/* Simulated Live Gauge score */}
            <div className="my-4.5 flex flex-col items-center">
              <svg className="w-36 h-20" viewBox="0 0 160 100">
                <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <path 
                  d="M 20 85 A 60 60 0 0 1 140 85" 
                  fill="none" 
                  stroke="var(--border-color, #E2E8F0)" 
                  className="stroke-slate-200 dark:stroke-slate-800"
                  strokeWidth="8" 
                  strokeLinecap="round"
                />
                <motion.path 
                  d="M 20 85 A 60 60 0 0 1 140 85" 
                  fill="none" 
                  stroke="url(#gaugeGradient)" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  strokeDasharray="188.5"
                  initial={{ strokeDashoffset: 188.5 }}
                  whileInView={{ strokeDashoffset: 28 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <text x="80" y="70" textAnchor="middle" fontSize="20" fontWeight="700" className="fill-green-600 dark:fill-green-400 font-sans">
                  8.5
                </text>
                <text x="80" y="86" textAnchor="middle" fontSize="8.5" fontWeight="500" className="fill-slate-500 dark:fill-[#8b949e]">
                  / 10 Discipline Score
                </text>
              </svg>
            </div>

            <p className="text-[14px] text-slate-500 dark:text-[#8b949e] leading-relaxed">
              Trade within our parameters. AI monitors simulated metrics, risk limits, and consistency in real time.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            id="step-3"
            variants={itemVariants}
            className="bg-white dark:bg-[#1c2128] rounded-2xl p-6.5 border border-slate-200/60 dark:border-slate-800 shadow-xs hover:shadow-lg dark:hover:border-green-800/40 hover:-translate-y-1 transition-all group duration-350"
          >
            <div className="text-[13px] font-bold text-green-600 dark:text-green-500 font-mono mb-4">
              03 / SUCCESS
            </div>
            
            <div className="w-12 h-12 bg-green-500/5 dark:bg-green-500/10 border border-green-500/10 rounded-xl flex items-center justify-center mb-5 text-green-600 group-hover:scale-110 transition-transform">
              <Award size={22} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Account Allocation
            </h3>
            
            <p className="text-[14px] text-slate-500 dark:text-[#8b949e] leading-relaxed mb-4">
              Hit consistency goals cleanly and get designated to a pro account. There are no additional fees for credentials.
            </p>

            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500/15 over-emerald-400/5 to-green-500/5 dark:from-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10.5px] font-extrabold px-3 py-1 rounded-full tracking-wider mt-1">
              <Sparkles size={11} />
              PRO ACCOUNT ALLOCATED
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            id="step-4"
            variants={itemVariants}
            className="bg-white dark:bg-[#1c2128] rounded-2xl p-6.5 border border-slate-200/60 dark:border-slate-800 shadow-xs hover:shadow-lg dark:hover:border-green-800/40 hover:-translate-y-1 transition-all group duration-350"
          >
            <div className="text-[13px] font-bold text-green-600 dark:text-green-500 font-mono mb-4">
              04 / INCOME
            </div>
            
            <div className="w-12 h-12 bg-green-500/5 dark:bg-green-500/10 border border-green-500/10 rounded-xl flex items-center justify-center mb-5 text-green-600 group-hover:scale-110 transition-transform">
              <TrendingUp size={22} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Performance Share
            </h3>
            
            <p className="text-[14px] text-slate-500 dark:text-[#8b949e] leading-relaxed mb-3">
              Earn regular performance stipends. Values expand as consistency metrics and mock parameters grow.
            </p>

            {/* Loop list representation of stipend projections */}
            <div className="flex flex-col gap-1.5 mt-2">
              {stipendItems.map((st, sIdx) => (
                <motion.div 
                  id={`stipend-item-${sIdx}`}
                  key={sIdx}
                  className="flex items-center gap-1.5 text-xs font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + sIdx * 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-500 font-bold">+</span>
                  <span className="text-green-600 dark:text-green-400 font-mono font-bold text-[13px]">{st.value}</span>
                  <span className="text-slate-400 dark:text-slate-550 text-[10.5px] font-normal font-sans">{st.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </motion.div>

        {/* Informative Disclaimer Callout */}
        <div className="mt-8 flex items-start gap-2 bg-slate-100 dark:bg-slate-800/45 border border-slate-200/45 dark:border-slate-850 p-4 rounded-xl max-w-2xl">
          <AlertCircle size={15} className="text-slate-400 dark:text-slate-550 shrink-0 mt-0.5" />
          <p className="text-[11.5px] text-slate-400 dark:text-slate-500 leading-normal">
            *Projections based on simulated evaluation metrics & criteria. All activities on StockBattle are completely simulated and conducted with artificial configurations. No real capital execution or live financial trading is provided.
          </p>
        </div>

      </div>
    </section>
  );
}
