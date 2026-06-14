/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { stepOneTiers, stepTwoTiers } from "../data";
import { ProgramType } from "../types";

interface PricingTableProps {
  onSelectTier: () => void;
}

export default function PricingTable({ onSelectTier }: PricingTableProps) {
  const [program, setProgram] = useState<ProgramType>("2-Step");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const activeTiers = program === "2-Step" ? stepTwoTiers : stepOneTiers;

  // Helpful informative definitions for tooltips
  const rowExplanation = {
    profitTarget: "The cumulative percentage simulated profit required to pass Phase 1 evaluation successfully.",
    p2ProfitTarget: "The simulated profit target for Phase 2, designed to verify consistency over a shorter duration.",
    maxLoss: "The absolute maximum percentage drawdown permitted from the initial starting simulated balance.",
    dailyLoss: "The maximum simulated loss allowed within a single business day based on the previous close.",
    window: "The maximum time you are given to complete the objectives. Our plans feature unlimited days so there is no rush.",
    news: "Trading high-impact macro news announcements is fully approved. We allow your strategic edge to play out.",
    share: "The profit share percentage you receive on regular performance payouts in the pro stage.",
    minDays: "The minimum number of active trading days required to demonstrate stable risk management habits.",
    withdrawal: "Dedicated billing cycle window during which performance-based stipends can be processed.",
  };

  const handleTooltipToggle = (key: string) => {
    setActiveTooltip(activeTooltip === key ? null : key);
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-[#f8f9fa] dark:bg-[#161b22] border-y border-slate-200/50 dark:border-slate-800/40 transition-colors duration-300">
      
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="relative mb-14">
          <div className="absolute top-[-40px] left-[-10px] text-[80px] md:text-[100px] font-extrabold text-slate-200/50 dark:text-[#21262d]/50 pointer-events-none z-0 tracking-tighter select-none font-mono">
            04
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a0a0a] dark:text-[#f0f0f0] relative z-10 tracking-tight">
            Assessment Plans
          </h2>
          <p className="text-[#64748b] dark:text-[#8b949e] font-sans mt-2 text-[15px] sm:text-[16px] max-w-xl">
            Simple, transparent simulated pricing. One-time evaluation registration fee. Unlimited simulated stipend potential.
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-[#1c2128] border border-slate-200 dark:border-slate-800 p-1.5 rounded-full flex gap-1 shadow-xs">
            <button
              id="toggle-btn-2"
              onClick={() => setProgram("2-Step")}
              className={`text-xs sm:text-[13.5px] font-bold px-6 py-2.5 rounded-full transition-all cursor-pointer ${
                program === "2-Step"
                  ? "bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-300/40"
                  : "text-slate-500 hover:text-slate-800 dark:text-[#8b949e] dark:hover:text-[#f0f0f0]"
              }`}
            >
              2-Step Assessment
            </button>
            <button
              id="toggle-btn-1"
              onClick={() => setProgram("1-Step")}
              className={`text-xs sm:text-[13.5px] font-bold px-6 py-2.5 rounded-full transition-all cursor-pointer ${
                program === "1-Step"
                  ? "bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-300/40"
                  : "text-slate-500 hover:text-slate-800 dark:text-[#8b949e] dark:hover:text-[#f0f0f0]"
              }`}
            >
              1-Step Assessment
            </button>
          </div>
        </div>

        {/* Table Wrapper to support Scroll on Mobile */}
        <div className="bg-white dark:bg-[#1c2128] rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-md p-4 sm:p-8 overflow-x-auto">
          
          <table className="w-full min-w-[780px] border-collapse text-center">
            <thead>
              <tr className="border-b border-transparent">
                
                {/* Account details first col */}
                <th className="text-left font-serif text-lg font-bold text-slate-800 dark:text-slate-200 py-6 pr-4 w-[28%]">
                  Program Metrics
                </th>

                {activeTiers.map((tier, tIdx) => {
                  const isGoldTier = tier.name === "₹10L";
                  return (
                    <th 
                      key={tIdx} 
                      className={`py-6 px-4 ${
                        isGoldTier 
                          ? "bg-green-500/5 dark:bg-green-950/20 border-t-2 border-x-2 border-green-500 dark:border-green-600 rounded-t-2xl" 
                          : ""
                      }`}
                    >
                      <div className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-3">
                        {tier.name} Size
                      </div>

                      <button
                        id={`btn-tier-${tier.name}`}
                        onClick={onSelectTier}
                        className="bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 text-white text-[12.5px] font-bold px-5 py-2 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all mb-4 self-center"
                      >
                        Get Started
                      </button>

                      <div className="text-base font-extrabold text-[#0a0a0a] dark:text-[#f0f0f0] font-mono">
                        {tier.price} <span className="text-[10px] text-slate-400 font-sans font-normal block">One-time registration fee</span>
                      </div>
                    </th>
                  );
                })}

              </tr>
            </thead>
            
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              
              {/* Profit Target Row */}
              <tr>
                <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                  <div className="flex items-center gap-1.5">
                    {program === "2-Step" ? "Phase 1 Profit Target" : "Profit Target"}
                    <button 
                      onClick={() => handleTooltipToggle("profitTarget")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "profitTarget" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.profitTarget}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => (
                  <td 
                    key={idx} 
                    className={`py-4.5 px-4 font-mono font-bold text-[14.5px] text-slate-900 dark:text-slate-100 ${
                      tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                    }`}
                  >
                    {tier.profitTarget}
                  </td>
                ))}
              </tr>

              {/* Phase 2 target row (if 2 step) */}
              {program === "2-Step" && (
                <tr>
                  <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      Phase 2 Profit Target
                      <button 
                        onClick={() => handleTooltipToggle("p2ProfitTarget")} 
                        className="text-slate-400 hover:text-slate-600 cursor-help"
                        aria-label="Toggle tooltip"
                      >
                        <HelpCircle size={14} />
                      </button>
                    </div>
                    {activeTooltip === "p2ProfitTarget" && (
                      <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                        {rowExplanation.p2ProfitTarget}
                      </div>
                    )}
                  </td>
                  {activeTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`py-4.5 px-4 font-mono font-bold text-[14.5px] text-slate-900 dark:text-slate-100 ${
                        tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                      }`}
                    >
                      {tier.p2ProfitTarget || "5%"}
                    </td>
                  ))}
                </tr>
              )}

              {/* Max Loss Limit Row */}
              <tr>
                <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Maximum Loss Limit
                    <button 
                      onClick={() => handleTooltipToggle("maxLoss")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "maxLoss" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.maxLoss}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => (
                  <td 
                    key={idx} 
                    className={`py-4.5 px-4 font-mono font-bold text-slate-900 dark:text-slate-100 ${
                      tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                    }`}
                  >
                    <div className="text-[14.5px]">{tier.maxLoss}</div>
                    <div className="text-[11px] text-slate-400 font-sans font-normal">({tier.maxLossAbsolute})</div>
                  </td>
                ))}
              </tr>

              {/* Daily Loss Limit Row */}
              <tr>
                <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Daily Loss Limit
                    <button 
                      onClick={() => handleTooltipToggle("dailyLoss")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "dailyLoss" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.dailyLoss}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => (
                  <td 
                    key={idx} 
                    className={`py-4.5 px-4 font-mono font-bold text-slate-900 dark:text-slate-100 ${
                      tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                    }`}
                  >
                    <div className="text-[14.5px]">{tier.dailyLoss}</div>
                    <div className="text-[11px] text-slate-400 font-sans font-normal">({tier.dailyLossAbsolute})</div>
                  </td>
                ))}
              </tr>

              {/* Trading Window Row */}
              <tr>
                <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Trading Window
                    <button 
                      onClick={() => handleTooltipToggle("window")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "window" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.window}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => (
                  <td 
                    key={idx} 
                    className={`py-4.5 px-4 text-xs sm:text-[14px] font-semibold text-slate-700 dark:text-slate-200 ${
                      tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                    }`}
                  >
                    {tier.tradingWindow}
                  </td>
                ))}
              </tr>

              {/* News Trading Allowed Row */}
              <tr>
                <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    News Trading
                    <button 
                      onClick={() => handleTooltipToggle("news")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "news" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.news}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => (
                  <td 
                    key={idx} 
                    className={`py-4.5 px-4 ${
                      tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                    }`}
                  >
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                  </td>
                ))}
              </tr>

              {/* Share Allocation Row */}
              <tr>
                <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Share Allocation
                    <button 
                      onClick={() => handleTooltipToggle("share")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "share" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.share}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => (
                  <td 
                    key={idx} 
                    className={`py-4.5 px-4 font-mono font-bold text-[14.5px] text-slate-900 dark:text-slate-100 ${
                      tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                    }`}
                  >
                    {tier.shareAllocation}
                  </td>
                ))}
              </tr>

              {/* Min Days Row */}
              <tr>
                <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Min Trading Days (Phase 1)
                    <button 
                      onClick={() => handleTooltipToggle("minDays")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "minDays" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.minDays}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => (
                  <td 
                    key={idx} 
                    className={`py-4.5 px-4 text-xs sm:text-[14px] font-semibold text-slate-700 dark:text-slate-200 ${
                      tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                    }`}
                  >
                    {tier.minTradingDays}
                  </td>
                ))}
              </tr>

              {/* Min Days Phase 2 Row (if 2 step) */}
              {program === "2-Step" && (
                <tr>
                  <td className="text-left py-4.5 font-medium text-slate-500 dark:text-[#8b949e] text-sm">
                    Min Trading Days (Phase 2)
                  </td>
                  {activeTiers.map((tier, idx) => (
                    <td 
                      key={idx} 
                      className={`py-4.5 px-4 text-xs sm:text-[14px] font-semibold text-slate-700 dark:text-slate-200 ${
                        tier.name === "₹10L" ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-green-500 dark:border-green-600" : ""
                      }`}
                    >
                      {tier.p2MinTradingDays || "3 Days"}
                    </td>
                  ))}
                </tr>
              )}

              {/* Withdrawal Row */}
              <tr>
                <td className="text-left py-5 font-medium text-slate-500 dark:text-[#8b949e] text-sm border-b-none">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    Withdrawal Window
                    <button 
                      onClick={() => handleTooltipToggle("withdrawal")} 
                      className="text-slate-400 hover:text-slate-600 cursor-help"
                      aria-label="Toggle tooltip"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  {activeTooltip === "withdrawal" && (
                    <div className="absolute bg-slate-800 text-white text-[11px] p-2 rounded-lg max-w-xs z-20 mt-1 shadow-sm font-sans font-normal leading-normal">
                      {rowExplanation.withdrawal}
                    </div>
                  )}
                </td>
                {activeTiers.map((tier, idx) => {
                  const isGold = tier.name === "₹10L";
                  return (
                    <td 
                      key={idx} 
                      className={`py-5 px-4 text-xs sm:text-[14px] font-semibold text-slate-700 dark:text-slate-200 ${
                        isGold ? "bg-green-500/5 dark:bg-green-950/20 border-x-2 border-b-2 border-green-500 dark:border-green-600 rounded-b-2xl" : ""
                      }`}
                    >
                      {tier.withdrawal}
                    </td>
                  );
                })}
              </tr>

            </tbody>
          </table>
          
        </div>

      </div>
    </section>
  );
}
