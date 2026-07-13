import {
  Globe,
  Smartphone,
  Boxes,
  Database,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  slug: string
  n: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  tags: string[]
  /* detail page */
  intro: string
  deliverables: string[]
  outcomes: { k: string; v: string }[]
}

export const services: Service[] = [
  {
    slug: "web-development",
    n: "01",
    icon: Globe,
    title: "Web Development",
    tagline: "Marketing sites to complex platforms",
    description:
      "Fast, SEO ready marketing sites and full web applications with auth, dashboards, and payments, built to scale.",
    tags: ["Next.js", "Laravel", "Postgres", "Stripe"],
    intro:
      "From a five page marketing site to a multi tenant SaaS platform, we build web products that load fast, rank well, and hold up under real traffic. Every project ships in your repo, on your infrastructure.",
    deliverables: [
      "Marketing sites, CMS builds, and full web applications",
      "Authentication, roles, dashboards, and admin panels",
      "Payment gateways and third party API integrations",
      "SEO setup, analytics, and performance budgets",
      "CI/CD pipelines and a documented deploy handover",
    ],
    outcomes: [
      { k: "4.1×", v: "Faster checkout for a DTC client" },
      { k: "97", v: "Median Lighthouse score at launch" },
    ],
  },
  {
    slug: "mobile-apps",
    n: "02",
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "iOS, Android, cross platform",
    description:
      "Native Swift and Kotlin or cross platform React Native and Flutter, with App Store and Play Store submission included.",
    tags: ["Swift", "Kotlin", "React Native", "Flutter"],
    intro:
      "We design and build mobile apps people keep on their home screen. Native where it matters, cross platform where it makes sense, always with store submission and post launch support handled.",
    deliverables: [
      "Native Swift / Kotlin or React Native / Flutter builds",
      "Offline support, push notifications, and deep links",
      "App Store and Play Store submission and review handling",
      "Analytics, crash reporting, and release pipelines",
      "Design system and reusable component library",
    ],
    outcomes: [
      { k: "4.8★", v: "Average store rating across launches" },
      { k: "2", v: "Platforms from one shared codebase" },
    ],
  },
  {
    slug: "ar-vr-development",
    n: "03",
    icon: Boxes,
    title: "AR / VR Development",
    tagline: "Immersive apps, training, retail",
    description:
      "Unity and WebXR experiences for product visualisation, employee training, real estate walkthroughs, and retail try on.",
    tags: ["Unity", "Unreal", "WebXR", "ARKit"],
    intro:
      "Immersive experiences that do a real job: sell a property before it is built, train staff without the risk, or let shoppers try before they buy. We build for headsets, phones, and the browser.",
    deliverables: [
      "WebXR and Unity apps for product and property visualisation",
      "AR try on and in context previews for retail",
      "VR training simulations with progress tracking",
      "3D asset optimisation and interaction design",
      "Cross device delivery from headset to phone to browser",
    ],
    outcomes: [
      { k: "3.2×", v: "More buyers converted with WebXR tours" },
      { k: "42%", v: "Overseas buyer share after launch" },
    ],
  },
  {
    slug: "crm-erp-systems",
    n: "04",
    icon: Database,
    title: "CRM & ERP Systems",
    tagline: "Sales, ops, accounting in one",
    description:
      "Built from scratch CRMs and ERPs tailored to your processes, or Odoo, SuiteCRM, and ERPNext implementations done right.",
    tags: ["Odoo", "ERPNext", "Laravel", "SuiteCRM"],
    intro:
      "Replace the tangle of spreadsheets and disconnected tools with one system that matches how you actually work. We build custom platforms or implement Odoo, ERPNext, and SuiteCRM without the usual chaos.",
    deliverables: [
      "Custom CRM and ERP builds around your real workflow",
      "Odoo, ERPNext, and SuiteCRM implementation and migration",
      "Sales, inventory, accounting, and HR modules",
      "Role based access, approvals, and audit trails",
      "Data migration from spreadsheets and legacy tools",
    ],
    outcomes: [
      { k: "47%", v: "Faster order to dispatch for a manufacturer" },
      { k: "₨8.2M", v: "Annual licensing saved" },
    ],
  },
  {
    slug: "desktop-applications",
    n: "05",
    icon: MonitorSmartphone,
    title: "Desktop Applications",
    tagline: "Windows, macOS, Linux",
    description:
      "Cross platform Electron and Tauri apps, or native C# and Swift builds for POS, kiosk, broadcast, and back office tools.",
    tags: ["Electron", "Tauri", "C#", "Qt"],
    intro:
      "When the work happens on a desktop, we build fast, reliable software that fits the hardware. Point of sale, kiosk, broadcast, and back office tools that run offline and update themselves.",
    deliverables: [
      "Cross platform Electron and Tauri applications",
      "Native C#, Swift, and Qt builds where performance demands it",
      "POS, kiosk, and broadcast tooling",
      "Offline first data sync and auto updates",
      "Hardware and peripheral integration",
    ],
    outcomes: [
      { k: "100%", v: "Offline capable, syncs when back online" },
      { k: "3 OS", v: "One codebase across Windows, macOS, Linux" },
    ],
  },
  {
    slug: "ai-integration",
    n: "06",
    icon: Sparkles,
    title: "AI Integration",
    tagline: "Chatbots, agents, automation",
    description:
      "RAG over your documents, custom agents with tools and evals, and the plumbing that makes them work in production.",
    tags: ["OpenAI", "LangGraph", "pgvector", "Llama"],
    intro:
      "AI that ships and stays reliable. We build retrieval over your own documents, agents that use real tools, and the evaluation and monitoring that keep them trustworthy once they are live.",
    deliverables: [
      "RAG search and assistants over your private data",
      "Custom agents with tools, guardrails, and evals",
      "Workflow automation and inbox to CRM capture",
      "Model routing across OpenAI, Llama, and local models",
      "Monitoring, cost controls, and quality dashboards",
    ],
    outcomes: [
      { k: "100%", v: "Leads captured automatically, zero manual entry" },
      { k: "24/7", v: "Assistants that never clock off" },
    ],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
