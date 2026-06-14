/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activePage: "home" | "waitlist";
  setActivePage: (page: "home" | "waitlist") => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync theme to document element
  useEffect(() => {
    // Check saved preference or system default
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActivePage("home");
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 h-16 bg-white/85 dark:bg-[#0d1117]/85 backdrop-blur-md border-b border-black/5 dark:border-white/5 z-50 flex items-center px-6 transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a 
          id="nav-logo" 
          href="#" 
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 font-serif font-bold text-xl text-green-600 dark:text-green-500 tracking-tight"
        >
          <div className="w-8.5 h-8.5 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M3 16L10 4l7 12H3z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="2" fill="#fff"/>
            </svg>
          </div>
          StockBattle
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <button 
              id="nav-link-how" 
              onClick={() => handleNavClick("how-it-works")}
              className="text-[15px] font-medium text-[#64748b] dark:text-[#8b949e] hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
            >
              How it Works
            </button>
          </li>
          <li>
            <button 
              id="nav-link-pricing" 
              onClick={() => handleNavClick("pricing")}
              className="text-[15px] font-medium text-[#64748b] dark:text-[#8b949e] hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
            >
              Assessments
            </button>
          </li>
          <li>
            <button 
              id="nav-link-[#scaling]" 
              onClick={() => handleNavClick("scaling")}
              className="text-[15px] font-medium text-[#64748b] dark:text-[#8b949e] hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
            >
              Scaling Plan
            </button>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button 
            id="themeToggleBtn"
            onClick={toggleTheme}
            className="w-9.5 h-9.5 border border-slate-200 dark:border-[#21262d] rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-green-50 dark:hover:bg-green-950/20 hover:text-green-600 dark:hover:text-green-500 hover:border-green-100 dark:hover:border-green-950/30 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={17} />}
          </button>

          {/* Login Placeholder */}
          <button 
            id="nav-login-btn"
            onClick={() => setActivePage("waitlist")}
            className="hidden md:block text-[#0a0a0a] dark:text-[#f0f0f0] text-[15px] font-medium px-4 py-2 hover:text-green-600 dark:hover:text-green-400 transition-all cursor-pointer"
          >
            Login
          </button>

          {/* Primary Action Button */}
          <button 
            id="nav-join-btn"
            onClick={() => setActivePage("waitlist")}
            className="bg-green-600 dark:bg-green-700 text-white text-[14px] font-semibold px-5.5 py-2.5 rounded-full hover:bg-green-700 dark:hover:bg-green-600 active:scale-95 transition-all shadow-sm hover:shadow-green-200 dark:hover:shadow-green-900/30 flex items-center gap-1.5 cursor-pointer"
          >
            Get Started
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </button>

          {/* Hamburger Menu Mobile Toggle */}
          <button 
            id="mobileMenuToggleBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-800 dark:text-slate-200 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#1c2128] border-b border-slate-200 dark:border-[#21262d] p-5 shadow-lg flex flex-col gap-4 animate-in fade-in duration-200">
          <button 
            id="mob-link-how"
            onClick={() => handleNavClick("how-it-works")}
            className="w-full text-left py-2 border-b border-slate-100 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-200 hover:text-green-600"
          >
            How it Works
          </button>
          <button 
            id="mob-link-pricing"
            onClick={() => handleNavClick("pricing")}
            className="w-full text-left py-2 border-b border-slate-100 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-200 hover:text-green-600"
          >
            Assessments
          </button>
          <button 
            id="mob-link-[#scaling]"
            onClick={() => handleNavClick("scaling")}
            className="w-full text-left py-2 border-b border-slate-100 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-200 hover:text-green-600"
          >
            Scaling Plan
          </button>
          <button 
            id="mob-link-login"
            onClick={() => {
              setActivePage("waitlist");
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-slate-700 dark:text-slate-200 hover:text-green-600 font-medium"
          >
            Login / Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
}
