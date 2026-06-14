/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, TrendingUp, Sparkles, BookOpen } from "lucide-react";

interface HeroProps {
  onStartClick: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-300">
      
      {/* Visual Glowing Ambient Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full max-w-[900px] h-[600px] bg-gradient-to-tr from-green-500/5 to-emerald-500/10 dark:from-green-500/2 dark:to-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-start">
        
        {/* Badge */}
        <motion.div 
          id="hero-badge-container"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 text-green-700 dark:text-green-400 text-xs md:text-sm font-semibold italic px-4 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur-xs"
        >
          <Sparkles size={13} className="text-green-600 animate-pulse" />
          AI-Native Evaluation Platform
        </motion.div>

        {/* Big Heading with Playfair Serif */}
        <motion.h1 
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[38px] sm:text-[48px] md:text-[60px] font-bold tracking-tight leading-[1.1] max-w-3xl mb-6 text-[#0a0a0a] dark:text-[#f0f0f0]"
        >
          Prove Your Worth,<br />
          <span className="italic bg-gradient-to-r from-green-600 to-emerald-400 dark:from-green-500 dark:to-emerald-300 bg-clip-text text-transparent">
            Build Your Wealth.
          </span>
        </motion.h1>

        {/* Beautiful Asset Tags */}
        <motion.div 
          id="asset-tags-container"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2.5 mb-8"
        >
          <span className="bg-slate-55 bg-slate-50 dark:bg-[#161b22] text-slate-600 dark:text-[#8b949e] text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/80 hover:border-green-400 dark:hover:border-green-800 transition-all flex items-center gap-1">
            <TrendingUp size={12} className="text-green-600 dark:text-green-500" />
            Index F&O: NIFTY • BANKNIFTY • FINNIFTY
          </span>
          <span className="bg-slate-50 dark:bg-[#161b22] text-slate-600 dark:text-[#8b949e] text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/80 hover:border-green-400 dark:hover:border-green-800 transition-all flex items-center gap-1">
            <BookOpen size={12} className="text-green-600 dark:text-green-500" />
            Equities: NIFTY 500
          </span>
          <span className="bg-slate-50 dark:bg-[#161b22] text-slate-600 dark:text-[#8b949e] text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/80 hover:border-green-400 dark:hover:border-green-800 transition-all flex items-center gap-1">
            <ShieldCheck size={12} className="text-green-600 dark:text-green-500" />
            Commodities
          </span>
        </motion.div>

        {/* Landing Description */}
        <motion.p 
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-[#64748b] dark:text-[#8b949e] max-w-2xl mb-10 leading-relaxed font-sans"
        >
          Trade simulated capital, prove your edge, and earn real performance-based stipends. 
          Our AI-native platform evaluates discipline, risk control, and consistency — 
          not just raw returns.
        </motion.p>

        {/* CTA Actions */}
        <motion.div 
          id="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button 
            id="hero-cta-start"
            onClick={onStartClick}
            className="w-full sm:w-auto bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 text-white text-[15px] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-green-200 dark:hover:shadow-green-950/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Start Your Assessment
            <ArrowUpRight size={17} className="stroke-[2.5]" />
          </button>

          <a 
            id="hero-whatsapp-community"
            href="https://chat.whatsapp.com/mock" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-slate-250 dark:border-slate-800 hover:border-[#25d366] hover:text-[#25d366] text-slate-800 dark:text-slate-200 bg-white dark:bg-[#1c2128]/50 text-[15px] font-semibold px-8 py-4 rounded-xl active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {/* WhatsApp Logo Path */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25d366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join WhatsApp Community
          </a>
        </motion.div>
      </div>

    </section>
  );
}
