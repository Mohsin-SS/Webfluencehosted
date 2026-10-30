export type MetricStatus = "verified" | "illustrative" | "pending";

export interface Metric {
  label: string;
  value: number;
  unit: "%" | "x" | "£" | "PKR" | string;
  direction: "up" | "down";
  status: MetricStatus;
  source: string;
}

export interface CaseStudy {
  client: {
    name: string;
    url: string;
  };
  defaultMode: "live" | "placeholder";
  comparison: string;
  comparisonVerified: string;
  metrics: {
    combined: Metric[];
  };
}

export function formatDelta(m: Metric): string {
  const sign = m.direction === "up" ? "+" : "−";
  if (m.unit === "%") return `${sign}${m.value}%`;
  if (m.unit === "x") return `${m.value}x`;
  return `${sign}${m.value}${m.unit}`;
}

export function isGood(m: Metric): boolean {
  return (
    (m.direction === "up" && ["sales", "revenue", "orders", "traffic", "roas"].some((k) => m.label.toLowerCase().includes(k))) ||
    (m.direction === "down" && ["cost", "cpc", "cpa"].some((k) => m.label.toLowerCase().includes(k)))
  );
}

export const caseStudy: CaseStudy = {
  client: {
    name: "Latch",
    url: "https://wearlatch.com",
  },
  defaultMode: "live",
  comparison: "Illustrative metrics based on comparable Shopify + paid media engagements. Verified numbers added as data is confirmed.",
  comparisonVerified: "Verified via Shopify Analytics and Google / Meta Ads Manager. Compared against the 90-day period before the engagement.",
  metrics: {
    combined: [
      {
        label: "Store sessions",
        value: 48,
        unit: "%",
        direction: "up",
        status: "illustrative",
        source: "Shopify Analytics",
      },
      {
        label: "Conversion rate",
        value: 2.1,
        unit: "x",
        direction: "up",
        status: "illustrative",
        source: "Shopify Analytics",
      },
      {
        label: "Google Ads ROAS",
        value: 3.4,
        unit: "x",
        direction: "up",
        status: "illustrative",
        source: "Google Ads",
      },
      {
        label: "Cost per purchase",
        value: 31,
        unit: "%",
        direction: "down",
        status: "illustrative",
        source: "Meta Ads Manager",
      },
    ],
  },
};
