export interface PricingPlan {
  /** Plan name shown on the card. */
  name: string;
  /** Display price, e.g. "NPR 20,000" or "Custom". */
  price: string;
  /** Line under the price, e.g. "per month". */
  priceNote?: string;
  /** Numeric amount for Offer schema. Omitted on quote-only plans. */
  amount?: string;
  /** Schema billing unit for recurring plans, e.g. "MONTH". */
  unitText?: string;
  description: string;
  features: string[];
  cta?: string;
  highlight?: boolean;
}
