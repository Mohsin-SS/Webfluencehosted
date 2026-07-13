export type Currency = "PKR" | "USD"

export type Tier = {
  name: string
  price: { PKR: string; USD: string }
  prefix?: string
  blurb: string
  features: string[]
  cta: string
  popular?: boolean
}

/** Package tiers per service slug. Numbers are firm after the discovery sprint. */
export const pricingByService: Record<string, Tier[]> = {
  "web-development": [
    {
      name: "Landing site",
      price: { PKR: "₨100,000", USD: "$360" },
      blurb: "1 to 5 pages, mobile optimised",
      features: ["Up to 5 pages", "Mobile and tablet responsive", "Contact form and analytics", "Domain and hosting setup", "2 week delivery"],
      cta: "Brief a site",
    },
    {
      name: "Multi page website",
      price: { PKR: "₨150,000", USD: "$540" },
      blurb: "Up to 12 pages, CMS powered",
      features: ["Up to 12 pages", "WordPress or Strapi CMS", "Blog and publishing", "SEO setup and sitemap", "3 week delivery", "30 day warranty"],
      cta: "Plan the website",
      popular: true,
    },
    {
      name: "Web application",
      price: { PKR: "₨200,000", USD: "$720" },
      prefix: "From",
      blurb: "Auth, dashboard, and admin",
      features: ["User auth and roles", "Custom dashboard and admin", "Payment gateway integration", "Up to 4 third party APIs", "4 week delivery"],
      cta: "Scope the web app",
    },
  ],
  "mobile-apps": [
    {
      name: "MVP app",
      price: { PKR: "₨350,000", USD: "$1,260" },
      prefix: "From",
      blurb: "Single platform, core flow",
      features: ["iOS or Android", "Up to 6 screens", "Auth and push notifications", "Store submission", "6 week delivery"],
      cta: "Brief an app",
    },
    {
      name: "Cross platform app",
      price: { PKR: "₨550,000", USD: "$1,980" },
      blurb: "iOS and Android from one codebase",
      features: ["React Native or Flutter", "iOS and Android builds", "Payments and push", "Analytics and crash reporting", "Both store submissions", "8 week delivery"],
      cta: "Plan the app",
      popular: true,
    },
    {
      name: "Native + backend",
      price: { PKR: "₨800,000", USD: "$2,880" },
      prefix: "From",
      blurb: "Native modules and custom API",
      features: ["Native Swift or Kotlin", "Custom backend and admin", "Offline sync and deep links", "Third party integrations", "10 week delivery"],
      cta: "Scope the build",
    },
  ],
  "ar-vr-development": [
    {
      name: "AR product viewer",
      price: { PKR: "₨300,000", USD: "$1,080" },
      prefix: "From",
      blurb: "WebAR, no app install",
      features: ["Up to 5 3D models", "In browser AR try on", "Optimised assets", "Embed on your site", "4 week delivery"],
      cta: "Brief a viewer",
    },
    {
      name: "VR training module",
      price: { PKR: "₨650,000", USD: "$2,340" },
      blurb: "Unity, headset ready",
      features: ["Up to 3 scenarios", "Progress tracking", "Voiceover and prompts", "Headset and desktop builds", "8 week delivery"],
      cta: "Plan the module",
      popular: true,
    },
    {
      name: "Immersive platform",
      price: { PKR: "₨1,000,000", USD: "$3,600" },
      prefix: "From",
      blurb: "Multi scene, headset and web",
      features: ["Multi scene experiences", "WebXR and headset delivery", "Admin and content tools", "Analytics", "12 week delivery"],
      cta: "Scope the platform",
    },
  ],
  "crm-erp-systems": [
    {
      name: "CRM starter",
      price: { PKR: "₨250,000", USD: "$900" },
      prefix: "From",
      blurb: "Contacts, pipeline, roles",
      features: ["Contacts and companies", "Sales pipeline", "Roles and permissions", "Basic reporting", "4 week delivery"],
      cta: "Brief a CRM",
    },
    {
      name: "CRM + automations",
      price: { PKR: "₨450,000", USD: "$1,620" },
      blurb: "WhatsApp and email automation",
      features: ["Everything in Starter", "WhatsApp and email automation", "Lead capture from forms and chat", "Dashboards and reports", "6 week delivery", "30 day warranty"],
      cta: "Plan the CRM",
      popular: true,
    },
    {
      name: "Full ERP",
      price: { PKR: "₨900,000", USD: "$3,240" },
      prefix: "From",
      blurb: "Sales, inventory, accounting, HR",
      features: ["Custom or Odoo / ERPNext", "Inventory and accounting", "HR and payroll modules", "Data migration", "12 week delivery"],
      cta: "Scope the ERP",
    },
  ],
  "desktop-applications": [
    {
      name: "Single platform tool",
      price: { PKR: "₨300,000", USD: "$1,080" },
      prefix: "From",
      blurb: "One OS, Electron or Tauri",
      features: ["Windows, macOS, or Linux", "Auto updates", "Local data storage", "Installer and signing", "5 week delivery"],
      cta: "Brief a tool",
    },
    {
      name: "Cross platform app",
      price: { PKR: "₨500,000", USD: "$1,800" },
      blurb: "Windows, macOS, and Linux",
      features: ["One shared codebase", "All three desktop OSes", "Offline first sync", "Auto updates", "8 week delivery"],
      cta: "Plan the app",
      popular: true,
    },
    {
      name: "Native + hardware",
      price: { PKR: "₨750,000", USD: "$2,700" },
      prefix: "From",
      blurb: "POS, kiosk, peripherals",
      features: ["Native C# / Swift / Qt", "Peripheral and hardware integration", "POS and kiosk modes", "Back office dashboard", "10 week delivery"],
      cta: "Scope the build",
    },
  ],
  "ai-integration": [
    {
      name: "AI assistant",
      price: { PKR: "₨250,000", USD: "$900" },
      prefix: "From",
      blurb: "RAG over your documents",
      features: ["Chat widget for your site", "Retrieval over your docs", "Source citations", "Basic analytics", "4 week delivery"],
      cta: "Brief an assistant",
    },
    {
      name: "Custom agent",
      price: { PKR: "₨500,000", USD: "$1,800" },
      blurb: "Tools, evals, automation",
      features: ["Agent with real tools", "Guardrails and evals", "Workflow automation", "Monitoring dashboard", "6 week delivery", "30 day warranty"],
      cta: "Plan the agent",
      popular: true,
    },
    {
      name: "AI platform",
      price: { PKR: "₨900,000", USD: "$3,240" },
      prefix: "From",
      blurb: "Multi agent, in production",
      features: ["Multiple agents and tools", "Model routing and cost controls", "Quality and cost dashboards", "Team access and roles", "10 week delivery"],
      cta: "Scope the platform",
    },
  ],
}

export const retainerFrom: { PKR: string; USD: string } = { PKR: "₨120,000", USD: "$450" }
