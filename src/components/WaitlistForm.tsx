/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Check, AlertCircle, Mail, User, Phone, Sparkles, Loader2 } from "lucide-react";
import { WaitlistRecord } from "../types";

interface WaitlistFormProps {
  onBackToHome: () => void;
}

export default function WaitlistForm({ onBackToHome }: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Validation feedback states
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const isNameVal = name.trim().length > 0;
  const isEmailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPhoneVal = /^\d{10}$/.test(phone.trim().replace(/\D/g, "").slice(-10));

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input
    const cleaned = e.target.value.replace(/\D/g, "");
    setPhone(cleaned.slice(0, 10));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);
    setPhoneTouched(true);

    if (!isNameVal || !isEmailVal || !isPhoneVal) {
      return;
    }

    setIsLoading(true);

    // Save registration to local storage
    const newRecord: WaitlistRecord = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      timestamp: new Date().toISOString()
    };

    setTimeout(() => {
      // Fetch existing
      const existing = localStorage.getItem("waitlist_registrations");
      const list: WaitlistRecord[] = existing ? JSON.parse(existing) : [];
      list.push(newRecord);
      localStorage.setItem("waitlist_registrations", JSON.stringify(list));

      setIsLoading(false);
      setConfirmedEmail(email);
      setIsSuccess(true);
    }, 1800);
  };

  return (
    <section className="min-h-screen py-24 sm:py-32 px-6 flex items-center justify-center bg-white dark:bg-[#0d1117] transition-colors duration-300">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        
        {/* Left Side Content Column */}
        <div className="flex flex-col items-start font-sans">
          
          <div className="inline-flex items-center gap-1.5 bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 text-green-700 dark:text-green-400 text-[11.5px] font-bold tracking-wider px-3 py-1 rounded-full uppercase mb-6">
            <Sparkles size={11} className="animate-spin" />
            Registration Update
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0a0a0a] dark:text-[#f0f0f0] tracking-tight leading-tight mb-4">
            Registrations are<br />currently closed.
          </h2>

          <p className="text-slate-500 dark:text-[#8b949e] text-[15.5px] leading-relaxed mb-6">
            Due to an overwhelming response and unprecedented simulated application volume, 
            we've temporarily paused new registrations to maintain the benchmark evaluation metrics 
            our active traders deserve.
          </p>

          <div className="border-l-3 border-green-500 bg-green-500/5 dark:bg-green-500/2 px-5 py-4 rounded-r-xl mb-8">
            <p className="text-[13.5px] italic text-[#64748b] dark:text-[#8b949e] leading-relaxed">
              Next batch opens first week of June. We generally open new registrations 
              from <strong>Friday 10:00 AM to Monday 12:00 PM.</strong> 
              Join the waitlist to receive instant priority SMS and Email notifications.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500 shrink-0 mt-2" />
              <div>
                <h4 className="text-[14.5px] font-bold text-slate-900 dark:text-slate-100 mb-1">Exclusive Priority Slot allocation</h4>
                <p className="text-[13px] text-slate-500 dark:text-[#8b949e] leading-relaxed">
                  We strictly limit physical evaluation intake quantities to guarantee perfect real-time simulation speeds and platform reliability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500 shrink-0 mt-2" />
              <div>
                <h4 className="text-[14.5px] font-bold text-slate-900 dark:text-slate-100 mb-1">Precision Metrics Isolation</h4>
                <p className="text-[13px] text-slate-500 dark:text-[#8b949e] leading-relaxed">
                  Our system-intensive analytical tools operate best with restricted cohorts, facilitating highly accurate risk assessments.
                </p>
              </div>
            </div>
          </div>

          <button 
            id="back-home-btn"
            onClick={onBackToHome}
            className="mt-8 font-semibold text-[13.5px] text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 inline-flex items-center gap-2 cursor-pointer transition-all self-start"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>

        {/* Right Side Waitlist Form Card Column */}
        <div className="bg-white dark:bg-[#1c2128] border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-md">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              
              /* Form State view */
              <motion.div 
                id="waitlist-form-container"
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl font-bold text-slate-950 dark:text-slate-100 tracking-tight leading-none mb-1.5">
                  Join the Waitlist
                </h3>
                <p className="text-slate-400 dark:text-slate-500 text-[13.5px] mb-8 font-sans">
                  Be the first in line the moment evaluation slots reopen.
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 font-sans focus:outline-hidden">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="fullNameInp" className="block text-[11px] font-bold uppercase tracking-wider text-[#64748b] dark:text-[#8b949e] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input 
                        id="fullNameInp"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setNameTouched(true)}
                        className={`w-full h-11 border rounded-lg bg-slate-50/50 dark:bg-[#0d1117] pl-10 pr-10 text-sm focus:outline-hidden transition-all ${
                          nameTouched 
                            ? isNameVal 
                              ? "border-green-500/80 focus:border-green-500 focus:ring-1 focus:ring-green-100 dark:focus:ring-green-950/20" 
                              : "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-100 dark:focus:ring-red-950/20"
                            : "border-slate-200 dark:border-slate-800 focus:border-green-500"
                        }`}
                        required
                        autoComplete="name"
                      />
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-600" size={15} />
                      
                      {nameTouched && (
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                          {isNameVal ? (
                            <Check id="fname-check" size={14} className="text-green-500 font-bold stroke-[3.5]" />
                          ) : (
                            <AlertCircle size={14} className="text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                    {nameTouched && !isNameVal && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-semibold">
                        Full Name is required
                      </p>
                    )}
                  </div>

                  {/* Email ID field */}
                  <div>
                    <label htmlFor="emailInp" className="block text-[11px] font-bold uppercase tracking-wider text-[#64748b] dark:text-[#8b949e] mb-1.5">
                      Email ID *
                    </label>
                    <div className="relative">
                      <input 
                        id="emailInp"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setEmailTouched(true)}
                        className={`w-full h-11 border rounded-lg bg-slate-50/50 dark:bg-[#0d1117] pl-10 pr-10 text-sm focus:outline-hidden transition-all ${
                          emailTouched 
                            ? isEmailVal 
                              ? "border-green-500/80 focus:border-green-500 focus:ring-1 focus:ring-green-100 dark:focus:ring-green-950/20" 
                              : "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-100"
                            : "border-slate-200 dark:border-slate-800 focus:border-green-500"
                        }`}
                        required
                        autoComplete="email"
                      />
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-600" size={15} />

                      {emailTouched && (
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                          {isEmailVal ? (
                            <Check id="femail-check" size={14} className="text-green-500 font-bold stroke-[3.5]" />
                          ) : (
                            <AlertCircle size={14} className="text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                    {emailTouched && !isEmailVal && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-semibold">
                        Enter a valid email address
                      </p>
                    )}
                  </div>

                  {/* Phone ID field */}
                  <div>
                    <label htmlFor="phoneInp" className="block text-[11px] font-bold uppercase tracking-wider text-[#64748b] dark:text-[#8b949e] mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <input 
                        id="phoneInp"
                        type="tel"
                        placeholder="9876543210"
                        value={phone}
                        onChange={handlePhoneChange}
                        onBlur={() => setPhoneTouched(true)}
                        className={`w-full h-11 border rounded-lg bg-slate-50/50 dark:bg-[#0d1117] pl-10 pr-10 text-sm focus:outline-hidden transition-all ${
                          phoneTouched 
                            ? isPhoneVal 
                              ? "border-green-500/80 focus:border-green-500 focus:ring-1 focus:ring-green-100 dark:focus:ring-green-950/20" 
                              : "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-100"
                            : "border-slate-200 dark:border-slate-800 focus:border-green-500"
                        }`}
                        required
                        autoComplete="tel"
                      />
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-600" size={15} />

                      {phoneTouched && (
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                          {isPhoneVal ? (
                            <Check id="fphone-check" size={14} className="text-green-500 font-bold stroke-[3.5]" />
                          ) : (
                            <AlertCircle size={14} className="text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                    {phoneTouched && !isPhoneVal && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-semibold">
                        Enter a valid 10-digit mobile number
                      </p>
                    )}
                  </div>

                  {/* Submit Trigger */}
                  <button
                    id="submitWaitlistBtn"
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 disabled:opacity-75 disabled:cursor-not-allowed select-none text-white font-bold text-sm md:text-base rounded-xl mt-3 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-green-200 dark:shadow-green-900/10"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Please wait...
                      </>
                    ) : (
                      "Notify Me"
                    )}
                  </button>

                </form>

                {/* Account Actions Details */}
                <div className="flex flex-col items-center gap-3.5 mt-8 border-t border-slate-100 dark:border-slate-800/80 pt-6">
                  <a href="#" className="text-xs font-bold text-green-600 dark:text-green-500 hover:underline">
                    Already registered? Verify Registration
                  </a>
                  <button 
                    id="cancel-wait"
                    onClick={onBackToHome}
                    className="text-xs text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-[#f0f0f0]"
                  >
                    ← Back to Home
                  </button>
                </div>

              </motion.div>
            ) : (
              
              /* Success confirmation state view */
              <motion.div 
                id="waitlist-success-container"
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 bg-green-500/10 dark:bg-green-500/5 text-green-600 dark:text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  🎉
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2.5">
                  You are registered on the list!
                </h3>

                <p className="text-[14px] text-slate-500 dark:text-[#8b949e] leading-relaxed max-w-sm mx-auto mb-8 font-normal">
                  We will transmit a priority notification to <strong className="text-green-600 dark:text-green-400 font-semibold">{confirmedEmail}</strong> the precise slot instant the mock evaluations reopen. Stay prepared.
                </p>

                <button
                  id="success-back-home"
                  onClick={onBackToHome}
                  className="bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-600 text-white text-sm font-bold px-8 py-3 rounded-xl cursor-pointer shadow-md hover:shadow-green-100"
                >
                  Back to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
