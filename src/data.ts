/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AssessmentTier } from "./types";

export const stepTwoTiers: AssessmentTier[] = [
  {
    name: "₹2L",
    price: "₹2,999",
    profitTarget: "10%",
    p2ProfitTarget: "5%",
    maxLoss: "10%",
    maxLossAbsolute: "₹20,000",
    dailyLoss: "3%",
    dailyLossAbsolute: "₹6,000",
    tradingWindow: "Unlimited",
    newsTrading: true,
    shareAllocation: "80%",
    minTradingDays: "5 Days",
    p2MinTradingDays: "3 Days",
    withdrawal: "1st - 5th of Month",
  },
  {
    name: "₹5L",
    price: "₹4,999",
    profitTarget: "10%",
    p2ProfitTarget: "5%",
    maxLoss: "10%",
    maxLossAbsolute: "₹50,000",
    dailyLoss: "3%",
    dailyLossAbsolute: "₹15,000",
    tradingWindow: "Unlimited",
    newsTrading: true,
    shareAllocation: "80%",
    minTradingDays: "5 Days",
    p2MinTradingDays: "3 Days",
    withdrawal: "1st - 5th of Month",
  },
  {
    name: "₹10L",
    price: "₹8,999",
    profitTarget: "10%",
    p2ProfitTarget: "5%",
    maxLoss: "10%",
    maxLossAbsolute: "₹1,00,000",
    dailyLoss: "3%",
    dailyLossAbsolute: "₹30,000",
    tradingWindow: "Unlimited",
    newsTrading: true,
    shareAllocation: "80%",
    minTradingDays: "5 Days",
    p2MinTradingDays: "3 Days",
    withdrawal: "1st - 5th of Month",
  },
];

export const stepOneTiers: AssessmentTier[] = [
  {
    name: "₹2L",
    price: "₹4,999",
    profitTarget: "10%",
    maxLoss: "6%",
    maxLossAbsolute: "₹12,000",
    dailyLoss: "2%",
    dailyLossAbsolute: "₹4,000",
    tradingWindow: "Unlimited",
    newsTrading: true,
    shareAllocation: "80%",
    minTradingDays: "5 Days",
    withdrawal: "1st - 5th of Month",
  },
  {
    name: "₹5L",
    price: "₹7,999",
    profitTarget: "10%",
    maxLoss: "6%",
    maxLossAbsolute: "₹30,000",
    dailyLoss: "2%",
    dailyLossAbsolute: "₹10,000",
    tradingWindow: "Unlimited",
    newsTrading: true,
    shareAllocation: "80%",
    minTradingDays: "5 Days",
    withdrawal: "1st - 5th of Month",
  },
  {
    name: "₹10L",
    price: "₹12,999",
    profitTarget: "10%",
    maxLoss: "6%",
    maxLossAbsolute: "₹60,000",
    dailyLoss: "2%",
    dailyLossAbsolute: "₹20,000",
    tradingWindow: "Unlimited",
    newsTrading: true,
    shareAllocation: "80%",
    minTradingDays: "5 Days",
    withdrawal: "1st - 5th of Month",
  },
];

export const featuresList = [
  {
    icon: "📊",
    title: "Intraday Only",
    description: "All positions must be squared off by market close. Clean intraday discipline enforced by the platform — no overnight risk exposure.",
  },
  {
    icon: "🔒",
    title: "Simulated Trading",
    description: "No real capital deployed. Trade in a fully simulated environment with live market data, with zero financial risk to you.",
  },
  {
    icon: "📈",
    title: "Analytics & Journaling",
    description: "Built-in trade journal, drawdown analytics, win-rate heatmaps, and AI-powered performance insights after every session.",
  },
  {
    icon: "💳",
    title: "Secure Payment Gateway",
    description: "Evaluation fees processed through PCI-DSS compliant gateways. Stipends transferred directly to verified bank accounts.",
  },
  {
    icon: "📰",
    title: "News Trading Allowed",
    description: "Unlike most prop firms, we allow trading through high-impact macro events. Your strategy, your call — just manage the risk.",
  },
  {
    icon: "⚡",
    title: "Real-Time Performance",
    description: "Live dashboard showing P&L, risk metrics, and assessment progress. No end-of-day surprises — know where you stand always.",
  },
];
