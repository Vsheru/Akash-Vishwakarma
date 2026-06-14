/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calculator, Star, Landmark } from "lucide-react";

export default function GrowthCalculator() {
  const [startingSize, setStartingSize] = useState<number>(500000);
  const [consistency, setConsistency] = useState<number>(8);
  const [duration, setDuration] = useState<number>(12);

  const [estAccount, setEstAccount] = useState<number>(1057000);
  const [estStipend, setEstStipend] = useState<number>(448000);

  // Compute values dynamically
  useEffect(() => {
    const rate = consistency / 100;
    let currentAccount = startingSize;
    let totalStipendShare = 0;

    for (let i = 0; i < duration; i++) {
      const monthlyProfit = currentAccount * rate;
      const traderShare = monthlyProfit * 0.8; // 80% Performance share
      totalStipendShare += traderShare;
      currentAccount += monthlyProfit;
    }

    setEstAccount(Math.round(currentAccount));
    setEstStipend(Math.round(totalStipendShare));
  }, [startingSize, consistency, duration]);

  // Animated increment effect
  const useAnimatedCounter = (targetValue: number) => {
    const [count, setCount] = useState(targetValue);
    
    useEffect(() => {
      let start = count;
      const end = targetValue;
      if (start === end) return;

      const totalDuration = 400; // ms
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / totalDuration, 1);
        
        // Easing function
        const easeOutQuad = (t: number) => t * (2 - t);
        const nextValue = Math.round(start + (end - start) * easeOutQuad(progress));
        
        setCount(nextValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [targetValue]);

    return count;
  };

  const displayEstAccount = useAnimatedCounter(estAccount);
  const displayEstStipend = useAnimatedCounter(estStipend);

  const formatINR = (val: number) => {
    return "₹" + val.toLocaleString("en-IN");
  };

  return (
    <section id="scaling" className="py-24 px-6 bg-white dark:bg-[#0d1117] transition-colors duration-300">
      
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Title */}
        <div className="relative mb-16">
          <div className="absolute top-[-40px] left-[-10px] text-[80px] md:text-[100px] font-extrabold text-slate-200/50 dark:text-[#21262d]/50 pointer-events-none z-0 tracking-tighter select-none font-mono">
            05
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a0a0a] dark:text-[#f0f0f0] relative z-10 tracking-tight">
            Scale With Performance
          </h2>
          <p className="text-[#64748b] dark:text-[#8b949e] font-sans mt-2 text-[15px] sm:text-[16px] max-w-xl">
            Consistent traders unlock exponential simulated account growth through our program scaling structures.
          </p>
        </div>

        {/* Compound Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Chart Graphic Element (Left) */}
          <div className="bg-slate-50 dark:bg-[#1c2128] border border-slate-200/60 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Landmark size={18} className="text-green-600 dark:text-green-500" />
                <h3 className="text-[15.5px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-sans">
                  Account Growth Trajectory
                </h3>
              </div>

              {/* Responsive SVG Grid Map Chart */}
              <div className="w-full h-auto overflow-visible py-4 select-none">
                <svg viewBox="0 0 500 280" className="w-full">
                  <defs>
                    <linearGradient id="chartBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineColors" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#16a34a" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline Grids */}
                  <line x1="50" y1="20" x2="480" y2="20" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="0.5" strokeDasharray="4" />
                  <line x1="50" y1="75" x2="480" y2="75" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="0.5" strokeDasharray="4" />
                  <line x1="50" y1="130" x2="480" y2="130" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="0.5" strokeDasharray="4" />
                  <line x1="50" y1="185" x2="480" y2="185" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="0.5" strokeDasharray="4" />
                  <line x1="50" y1="235" x2="480" y2="235" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="0.8" />

                  {/* Vertical Guideline Grids */}
                  <line x1="50" y1="20" x2="50" y2="235" stroke="currentColor" className="text-slate-200 dark:text-slate-800" strokeWidth="0.8" />

                  {/* Coordinates texts */}
                  <text x="44" y="24" textAnchor="end" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">₹1.6Cr</text>
                  <text x="44" y="79" textAnchor="end" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">₹40L</text>
                  <text x="44" y="134" textAnchor="end" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">₹10L</text>
                  <text x="44" y="189" textAnchor="end" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">₹5L</text>
                  <text x="44" y="239" textAnchor="end" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">₹0</text>

                  {/* Bezier Path Gradient Fill */}
                  <path 
                    d="M 50 226 C 110 224 130 215 160 212 C 200 205 220 196 250 185 C 280 170 300 152 320 130 C 350 102 370 66 400 42 C 420 25 450 22 480 20 L 480 235 L 50 235 Z"
                    fill="url(#chartBgGrad)"
                  />

                  {/* Curve Outline Line */}
                  <motion.path 
                    d="M 50 226 C 110 224 130 215 160 212 C 200 205 220 196 250 185 C 280 170 300 152 320 130 C 350 102 370 66 400 42 C 420 25 450 22 480 20"
                    fill="none" 
                    stroke="url(#lineColors)" 
                    strokeWidth="3.2" 
                    strokeLinecap="round"
                    initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* Interactive Dot Nodes */}
                  <circle cx="50" cy="226" r="4.5" className="fill-green-600 stroke-white dark:stroke-[#1c2128]" strokeWidth="2" />
                  <circle cx="160" cy="212" r="4.5" className="fill-green-600 stroke-white dark:stroke-[#1c2128]" strokeWidth="2" />
                  <circle cx="250" cy="185" r="4.5" className="fill-green-500 stroke-white dark:stroke-[#1c2128]" strokeWidth="2" />
                  <circle cx="320" cy="130" r="4.5" className="fill-green-500 stroke-white dark:stroke-[#1c2128]" strokeWidth="2" />
                  <circle cx="400" cy="42" r="4.5" className="fill-emerald-400 stroke-white dark:stroke-[#1c2128]" strokeWidth="2" />
                  <circle cx="480" cy="20" r="5.5" className="fill-emerald-400 stroke-white dark:stroke-[#1c2128]" strokeWidth="2.5" />

                  {/* Horizontal Label Months */}
                  <text x="50" y="258" textAnchor="middle" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">0M</text>
                  <text x="160" y="258" textAnchor="middle" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">3M</text>
                  <text x="250" y="258" textAnchor="middle" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">6M</text>
                  <text x="320" y="258" textAnchor="middle" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">9M</text>
                  <text x="400" y="258" textAnchor="middle" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">12M</text>
                  <text x="480" y="258" textAnchor="middle" fontSize="10.5" fontWeight="600" className="fill-slate-400 dark:fill-slate-500 font-mono">15M</text>

                  {/* Peak Label Highlight */}
                  <text x="480" y="11" textAnchor="end" fontSize="10.5" fontWeight="800" className="fill-emerald-500 dark:fill-emerald-400 font-sans tracking-wide">✦ Elite stage</text>
                </svg>
              </div>
            </div>

            {/* Bottom Trajectory Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 border-t border-slate-250/40 dark:border-slate-800 pt-5">
              <span className="text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="text-green-600">●</span> 0M: ₹5L
              </span>
              <span className="text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="text-green-600">●</span> 3M: ₹10L
              </span>
              <span className="text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="text-green-500">●</span> 6M: ₹20L
              </span>
              <span className="text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="text-emerald-550 text-emerald-500">●</span> 9M: ₹40L
              </span>
              <span className="text-[11.5px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="text-emerald-500">●</span> 12M: ₹80L
              </span>
              <span className="text-[11.5px] font-bold text-emerald-500 flex items-center gap-1 animate-pulse">
                <Star size={11} fill="currentColor" /> 15M: ₹1.6Cr
              </span>
            </div>
          </div>

          {/* Calculator Grid Element (Right) */}
          <div className="bg-white dark:bg-[#1c2128] border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-9 shadow-md flex flex-col gap-6">
            
            <div className="flex items-center gap-2">
              <Calculator size={20} className="text-green-600 dark:text-green-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
                Estimate Your Simulated Performance Growth
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              
              {/* Droplist selection */}
              <div>
                <label htmlFor="calc-start-size" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2.5">
                  Starting Simulated Portfolio Size
                </label>
                <select 
                  id="calc-start-size"
                  value={startingSize}
                  onChange={(e) => setStartingSize(parseInt(e.target.value))}
                  className="w-full h-11 border-1.5 border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0d1117] text-[#0a0a0a] dark:text-[#f0f0f0] px-4 text-sm font-semibold focus:border-green-500 focus:outline-hidden cursor-pointer"
                >
                  <option value={200000}>₹2 Lakhs Simulated Capital</option>
                  <option value={500000}>₹5 Lakhs Simulated Capital</option>
                  <option value={1000000}>₹10 Lakhs Simulated Capital</option>
                </select>
              </div>

              {/* Consistency Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="calc-consistency" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e]">
                    Target Monthly Performance
                  </label>
                  <span className="text-sm font-bold text-green-600 dark:text-green-500 font-mono">
                    {consistency}% Profit / Month
                  </span>
                </div>
                <input 
                  id="calc-consistency"
                  type="range"
                  min="5"
                  max="15"
                  value={consistency}
                  onChange={(e) => setConsistency(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-600 dark:accent-green-500"
                />
              </div>

              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="calc-duration" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e]">
                    Simulation Duration (Months)
                  </label>
                  <span className="text-sm font-bold text-green-600 dark:text-green-500 font-mono">
                    {duration} Months Progress
                  </span>
                </div>
                <input 
                  id="calc-duration"
                  type="range"
                  min="3"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-600 dark:accent-green-500"
                />
              </div>

            </div>

            {/* Simulated Calculations Output Box */}
            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-2 flex flex-col gap-4">
              
              <div className="flex justify-between items-start gap-4 flex-wrap sm:flex-nowrap">
                <div>
                  <div className="text-xs text-slate-450 dark:text-slate-400 mb-1">
                    Closing Simulated Portfolio Value
                  </div>
                  <div className="text-2xl md:text-3xl font-serif font-black text-slate-900 dark:text-slate-100 tracking-tight">
                    {formatINR(displayEstAccount)}
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-xs text-slate-450 dark:text-slate-400 mb-1">
                    Cumulative Stipend Earned*
                  </div>
                  <div className="text-2xl md:text-3xl font-serif font-black bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                    {formatINR(displayEstStipend)}
                  </div>
                </div>
              </div>

              <span className="text-[10px] text-slate-400 self-center dark:text-slate-500 inline-block mt-3 text-center leading-normal">
                📈 Compounding mathematical projections assume constant target performance metrics with absolute drawdown guidelines intact. Performance shares calculated based on standard 80% allocation rates. All results are completely simulated.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
