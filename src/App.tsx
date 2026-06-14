/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import PricingTable from "./components/PricingTable";
import GrowthCalculator from "./components/GrowthCalculator";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState<"home" | "waitlist">("home");

  const handleNavClick = (sectionId: string) => {
    setActivePage("home");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-slate-150 transition-colors duration-300">
      
      {/* Dynamic Navigation Rail */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Pages Router View switcher */}
      {activePage === "home" ? (
        <main className="animate-in fade-in duration-300" id="main-content">
          {/* Main Hero with visual highlights */}
          <Hero onStartClick={() => setActivePage("waitlist")} />
          
          {/* Interactive Steps Process & live gauge score */}
          <HowItWorks onStartClick={() => setActivePage("waitlist")} />
          
          {/* Features check List & Trust specifications */}
          <Features />
          
          {/* Toggles Pricing comparing tables */}
          <PricingTable onSelectTier={() => setActivePage("waitlist")} />
          
          {/* Compound Mathematical estimates calculators & Trajectories */}
          <GrowthCalculator />
        </main>
      ) : (
        <main className="animate-in fade-in duration-300" id="waitlist-content">
          {/* Dynamic Registration Form and Callouts list */}
          <WaitlistForm onBackToHome={() => setActivePage("home")} />
        </main>
      )}

      {/* Corporate compliant Foot note */}
      <Footer onNavClick={handleNavClick} onWaitlistClick={() => setActivePage("waitlist")} />

    </div>
  );
}
