/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Mail, MapPin, Sparkles } from "lucide-react";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export default function Footer({ onNavClick, onWaitlistClick }: FooterProps) {
  const socialChannels = [
    {
      name: "WhatsApp Group",
      url: "https://chat.whatsapp.com/mock",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      )
    },
    {
      name: "Telegram Channel",
      url: "https://t.me/mock",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      )
    },
    {
      name: "Instagram Tracker",
      url: "https://instagram.com/mock",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: "YouTube Lessons",
      url: "https://youtube.com/mock",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full text-slate-400 font-sans">
      
      {/* Foot banner footer-cta */}
      <div id="footer-banner" className="bg-green-600 dark:bg-green-700 py-16 px-6 text-center text-white flex flex-col items-center">
        <h3 className="font-serif text-3xl sm:text-[40px] font-bold tracking-tight mb-5 leading-tight">
          Start Your Virtual Trading Journey Today
        </h3>
        <p className="text-white/80 max-w-lg text-[14.5px] leading-relaxed mb-8">
          Gain credentials by completing our quantitative virtual challenges. Prove your consistency, manage maximum drawdowns, and build your pro status.
        </p>
        <button
          onClick={onWaitlistClick}
          className="bg-white text-green-700 hover:bg-slate-50 border border-transparent font-bold text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          Get Started
          <Sparkles size={16} className="text-emerald-550 animate-pulse" />
        </button>
      </div>

      {/* Main Body */}
      <div id="footer-body" className="bg-[#0a0a0a] dark:bg-[#010409] py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-10">
          
          {/* Col 1 */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8.5 h-8.5 bg-green-500 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M3 16L10 4l7 12H3z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/>
                  <circle cx="10" cy="10" r="2" fill="#fff"/>
                </svg>
              </div>
              <span className="font-serif font-black text-xl text-white tracking-tight">
                StockBattle
              </span>
            </div>
            <p className="text-[13.5px] text-[#6b7280] leading-relaxed max-w-xs">
              India's first AI-native simulated prop evaluation configuration platform. Structured parameters, zero risk, merit-based rewards.
            </p>
            
            {/* Social channels loops */}
            <div className="flex gap-2.5 mt-2">
              {socialChannels.map((soc, idx) => (
                <a 
                  key={idx} 
                  id={`footer-social-${idx}`}
                  href={soc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-8.5 h-8.5 rounded-lg bg-[#1c2128] hover:bg-green-600 hover:text-white transition-all duration-200 text-slate-400 flex items-center justify-center border border-slate-800"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-start">
            <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 mb-5">
              Trading Program
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              <li>
                <button 
                  onClick={() => onNavClick("how-it-works")} 
                  className="text-sm text-[#6b7280] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Evaluation Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick("pricing")} 
                  className="text-sm text-[#6b7280] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Comparison Matrices
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick("scaling")} 
                  className="text-sm text-[#6b7280] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Scaling Levels
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-start">
            <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 mb-5">
              Interactive Resources
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              <li>
                <a href="#" className="text-sm text-[#6b7280] hover:text-white transition-colors">
                  Risk Assessment Sandbox
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6b7280] hover:text-white transition-colors">
                  Discipline Performance Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6b7280] hover:text-white transition-colors">
                  FAQ & Knowledge Base
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-start gap-4 text-[#6b7280]">
            <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500">
              Corporate Desk
            </h4>
            <div className="text-xs flex items-center gap-2">
              <MapPin size={13} className="shrink-0 text-slate-500" />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
            <div className="text-xs flex items-center gap-2">
              <Mail size={13} className="shrink-0 text-slate-500" />
              <span>support@stockbattle.in</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between gap-6 text-[11px] text-[#4b5563] leading-normal font-sans">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-slate-500">
              CIN: U62099UP2025PTC237116 | © 2025 StockBattle. All rights reserved.
            </p>
            <p className="max-w-3xl leading-relaxed">
              <strong>Regulatory Disclaimer:</strong> StockBattle provides completely simulated evaluation balances, parameters, and indicators for quantitative trading analysis. We do not provide financial investment advisory services, hold public deposits, nor execute live orders on any public security exchanges. All trading, profits, losses, and risk allocations are entirely simulated behind isolated sandbox interfaces. Rewards are internal performance bonuses calculated according to programmatic consistency guidelines.
            </p>
          </div>
        </div>

      </div>

    </footer>
  );
}
