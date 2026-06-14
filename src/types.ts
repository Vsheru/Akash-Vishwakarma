/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AssessmentTier {
  name: string;
  price: string;
  profitTarget: string;
  p2ProfitTarget?: string; // only for 2-step
  maxLoss: string;
  maxLossAbsolute: string;
  dailyLoss: string;
  dailyLossAbsolute: string;
  tradingWindow: string;
  newsTrading: boolean;
  shareAllocation: string;
  minTradingDays: string;
  p2MinTradingDays?: string; // only for 2-step
  withdrawal: string;
}

export type ProgramType = "1-Step" | "2-Step";

export interface WaitlistRecord {
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}
