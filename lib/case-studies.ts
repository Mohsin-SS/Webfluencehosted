export type CaseStudy = {
  slug: string
  n: string
  name: string
  sector: string
  place: string
  gradient: string
  summary: string
  stats: { k: string; v: string }[]
  services: string[]
  images: string[]
  paragraphs: string[]
  /** Client logo, shown on the homepage card and as a watermark on the case study page */
  logo?: string
  /** Short testimonial or highlight quote */
  quote?: string
  /** The challenge section */
  challenge?: string
  /** Our approach section */
  approach?: string
  /** The results section */
  results?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fastaxi-uk",
    n: "01",
    name: "Fastaxi UK",
    sector: "Transport · Website",
    place: "United Kingdom, 2025",
    gradient: "from-brand-teal/10 to-brand-amber/10",
    summary:
      "Rescued a buggy freelance WordPress build and turned it into a stable UK taxi platform with a custom fare calculator.",
    stats: [
      { k: "UK", v: "Rebuilt for real UK operations" },
      { k: "Custom", v: "Dynamic fare calculator" },
    ],
    services: ["WordPress", "Bug fixing & optimisation", "Custom fare calculator", "Email system fix"],
    images: ["/work/fast-taxi-1.jpg", "/work/fast-taxi-2.jpg"],
    logo: "/logos/fastaxi.png",
    challenge:
      "Fast Taxi approached Webfluence with a WordPress website originally built by a freelancer. The platform was unstable, had multiple bugs, and several key features were incomplete or not functioning properly. It also contained dummy data and was not aligned with their actual UK taxi operations. Their requirement was to stabilize the existing system and transform it into a fully functional website tailored to their real business needs without losing the current structure.",
    approach:
      "We began by auditing and optimizing the existing WordPress setup, fixing broken features, resolving bugs, and improving overall performance. We then customized the platform to match their UK-based operations, replacing all dummy content with real, structured business data. A major enhancement we implemented was a custom fare calculator that dynamically calculates ride prices based on their specific logic and service requirements, improving accuracy and customer experience. Alongside this, we fixed a critical issue in their email system, which was not functioning properly, ensuring smooth communication for bookings and inquiries.",
    results:
      "After these improvements, the Fast Taxi website became stable, fully functional, and aligned with their operational workflow. The client was highly satisfied with the outcome, and we continue to work with them on further enhancements and feature development.",
    quote: "Webfluence turned our broken website into something we're genuinely proud of. The fare calculator alone has saved us countless hours.",
    paragraphs: [
      "Fast Taxi approached Webfluence with a WordPress website originally built by a freelancer. The platform was unstable, had multiple bugs, and several key features were incomplete or not functioning properly. It also contained dummy data and was not aligned with their actual UK taxi operations.",
      "Their requirement was to stabilise the existing system and transform it into a fully functional website tailored to their real business needs without losing the current structure.",
      "We began by auditing and optimising the existing WordPress setup, fixing broken features, resolving bugs, and improving overall performance. We then customised the platform to match their UK based operations, replacing all dummy content with real, structured business data.",
      "A major enhancement we implemented was a custom fare calculator that dynamically calculates ride prices based on their specific logic and service requirements, improving accuracy and customer experience. Alongside this, we fixed a critical issue in their email system, which was not functioning properly, ensuring smooth communication for bookings and inquiries.",
      "After these improvements, the Fast Taxi website became stable, fully functional, and aligned with their operational workflow. The client was highly satisfied with the outcome, and we continue to work with them on further enhancements and feature development.",
    ],
  },
  {
    slug: "ahm-developers",
    n: "02",
    name: "AHM Developers",
    sector: "Real Estate · CRM",
    place: "Pakistan, 2025",
    gradient: "from-brand-amber/10 to-brand-teal/10",
    summary:
      "Replaced scattered spreadsheets with a custom CRM that tracks every plot, lead, and payment in one place.",
    stats: [
      { k: "1", v: "Platform replacing the spreadsheets" },
      { k: "100%", v: "Deals tracked end to end" },
    ],
    services: ["Custom CRM", "Inventory management", "Sales pipeline", "Reporting"],
    images: ["/work/ahm-developers-1.jpg", "/work/ahm-developers-2.jpg"],
    challenge:
      "AHM Developers, a growing real estate developer, was running its entire sales operation out of spreadsheets and scattered WhatsApp chats. Plot inventory, buyer details, payment schedules, and follow-ups all lived in different places, and nothing talked to each other. As their projects grew, this created real problems — leads slipped through the cracks, payment installments were hard to track, and management had no single view of what was selling or which deals needed attention.",
    approach:
      "We built AHM Developers a custom CRM designed around how a real estate business actually works. Every project, plot, and unit lives in a structured inventory. Each lead flows through a clear pipeline, with team members assigned, follow-ups scheduled, and payment plans tracked automatically. Role-based access lets management see the full picture while agents focus on their own deals, and built-in reporting turned days of manual reconciliation into a single dashboard.",
    results:
      "With everything in one place, AHM Developers now tracks every deal from first inquiry to final payment. The client was highly satisfied, and we continue to add features as their portfolio grows.",
    quote: "We went from spending hours chasing spreadsheets to having everything at our fingertips. It completely changed how we operate.",
    paragraphs: [
      "AHM Developers, a growing real estate developer, was running its entire sales operation out of spreadsheets and scattered WhatsApp chats. Plot inventory, buyer details, payment schedules, and follow ups all lived in different places, and nothing talked to each other.",
      "As their projects grew, this created real problems. Leads slipped through the cracks, payment installments were hard to track, and management had no single view of what was selling or which deals needed attention.",
      "We built AHM Developers a custom CRM designed around how a real estate business actually works. Every project, plot, and unit lives in a structured inventory. Each lead flows through a clear pipeline, with team members assigned, follow ups scheduled, and payment plans tracked automatically.",
      "Role based access lets management see the full picture while agents focus on their own deals, and built in reporting turned days of manual reconciliation into a single dashboard.",
      "With everything in one place, AHM Developers now tracks every deal from first inquiry to final payment. The client was highly satisfied, and we continue to add features as their portfolio grows.",
    ],
  },
  {
    slug: "times-consultant",
    n: "03",
    name: "Times Consultant",
    sector: "Education Consultancy · WhatsApp + CRM",
    place: "Pakistan, 2025",
    gradient: "from-brand-teal/10 to-brand-amber/10",
    summary:
      "A custom WhatsApp Listener synced 400+ counselors' conversations into their CRM for full visibility and accountability.",
    stats: [
      { k: "400+", v: "Counselors monitored" },
      { k: "Real time", v: "Every chat synced to CRM" },
    ],
    services: ["WhatsApp Listener", "CRM integration", "Real-time sync"],
    images: ["/work/times-consultant-1.jpg", "/work/times-consultant-2.jpg"],
    logo: "/logos/times-consultant.png",
    challenge:
      "Times Consultant is an education consultancy with over 400 counselors managing student inquiries, admissions, visa applications, and ongoing client communication. On the surface, everything seemed to be working. But behind the scenes, management faced a challenge that many scaling businesses can relate to — hundreds of WhatsApp conversations were happening every day, yet supervisors had limited visibility into response times, follow-ups, and overall customer handling. As the organization grew, maintaining accountability and consistent service became increasingly difficult.",
    approach:
      "After understanding their workflow and operational challenges, we built a custom WhatsApp Listener and integrated it directly with their CRM. Every conversation is now automatically synced and organized in real time, giving leadership a centralized view of customer interactions across the business. Instead of manually checking phones or relying on reports, supervisors can monitor activity, track lead progress, review conversation history, and identify potential issues before they impact the customer experience.",
    results:
      "The real challenge wasn't getting more inquiries — it was making sure every inquiry received the attention it deserved. With the WhatsApp Listener in place, Times Consultant now has full operational visibility across all 400+ counselors, ensuring no student inquiry falls through the cracks.",
    quote: "For the first time, we can see exactly what's happening across all our counselors in real time. That visibility has been game-changing.",
    paragraphs: [
      "Recently, we worked with Times Consultant, an education consultancy with over 400 counselors managing student inquiries, admissions, visa applications, and ongoing client communication.",
      "On the surface, everything seemed to be working. But behind the scenes, management faced a challenge that many scaling businesses can relate to. Hundreds of WhatsApp conversations were happening every day, yet supervisors had limited visibility into response times, follow ups, and overall customer handling. As the organization grew, maintaining accountability and consistent service became increasingly difficult.",
      "After understanding their workflow and operational challenges, we built a custom WhatsApp Listener and integrated it directly with their CRM. Every conversation is now automatically synced and organized in real time, giving leadership a centralized view of customer interactions across the business.",
      "Instead of manually checking phones or relying on reports, supervisors can monitor activity, track lead progress, review conversation history, and identify potential issues before they impact the customer experience.",
      "What made this project interesting wasn't the technology. It was the business problem behind it. The real challenge wasn't getting more inquiries. It was making sure every inquiry received the attention it deserved.",
      "Projects like this are exactly why we started Webfluence. We are focused on helping businesses build practical systems that improve visibility, accountability, and customer experience without adding unnecessary complexity to their operations.",
    ],
  },
  {
    slug: "property-linkers",
    n: "04",
    name: "Property Linkers",
    sector: "Real Estate · Marketing + Bots",
    place: "Lahore, 2024",
    gradient: "from-brand-amber/10 to-brand-teal/10",
    summary:
      "Built their digital presence from zero — Meta ads, social, and a bulk messaging bot that moved idle inventory.",
    stats: [
      { k: "0 → Full", v: "Digital presence built from scratch" },
      { k: "Idle → Moving", v: "Inventory started selling" },
    ],
    services: ["Meta ad campaigns", "Social media", "Bulk messaging bot", "Web portal"],
    images: ["/work/property-linkers-1.jpg", "/work/property-linkers-2.jpg"],
    logo: "/logos/property-linkers.png",
    challenge:
      "When Property Linkers first approached us, they had a major bottleneck that many real estate agencies face. They had a great inventory of properties in Lahore, but practically zero digital presence. No active social media pages, no ads, and no way for potential buyers to discover them online. As a result, their inventory was sitting idle.",
    approach:
      "We stepped in to build their digital footprint from scratch. Instead of just setting up basic profiles, we built a complete inbound marketing flow. We optimized their Facebook and Instagram profiles, created high-converting Meta ad campaigns, and set up a bulk messaging bot to handle lead inquiries instantly. To keep their feed fresh and engaging, we leveraged automated videos and high-quality posts to showcase their listings.",
    results:
      "The impact was immediate. The digital presence we established didn't just build brand awareness in the Lahore market — it started bringing in highly qualified buyers. Their inventory began moving, they successfully launched and marketed new projects, and their business became highly profitable. We've been working together ever since, and they've partnered with us again for their next big step: building a custom web portal to house their listings.",
    quote: "We went from zero online presence to having buyers reaching out to us daily. Webfluence didn't just market us — they built our entire digital business.",
    paragraphs: [
      "When Property Linkers first approached us, they had a major bottleneck that many real estate agencies face. They had a great inventory of properties in Lahore, but practically zero digital presence. No active social media pages, no ads, and no way for potential buyers to discover them online. As a result, their inventory was sitting idle.",
      "We stepped in to build their digital footprint from scratch. Instead of just setting up basic profiles, we built a complete inbound marketing flow. We optimized their Facebook and Instagram profiles, created high converting Meta ad campaigns, and set up a bulk messaging bot to handle lead inquiries instantly. To keep their feed fresh and engaging, we leveraged automated videos and high quality posts to showcase their listings.",
      "The impact was immediate. The digital presence we established didn't just build brand awareness in the Lahore market, it started bringing in highly qualified buyers. Their inventory began moving, they successfully launched and marketed new projects, and their business became highly profitable.",
      "We have been working together ever since. Now, as they continue to scale, they have partnered with us again for their next big step: building a custom web portal to house their listings and streamline search for their buyers. It has been an incredible journey helping them grow, and we are excited for what is next.",
    ],
  },
  {
    slug: "data-flour-mill",
    n: "05",
    name: "Data Flour Mill",
    sector: "Manufacturing · CRM + Social",
    place: "Pakistan, 2024",
    gradient: "from-brand-teal/10 to-brand-amber/10",
    summary: "A CRM to run daily mill operations, plus managed social media to grow the brand.",
    stats: [
      { k: "1", v: "CRM for daily operations" },
      { k: "Growth", v: "Social presence managed" },
    ],
    services: ["Custom CRM", "Order management", "Social media handling"],
    images: ["/work/data-flour-mill-1.jpg", "/work/data-flour-mill-2.jpg"],
    logo: "/logos/data-flour-mills.png",
    challenge:
      "Data Flour Mill runs a busy manufacturing and distribution operation, but its day-to-day was held together by paper records, phone calls, and memory. Orders, customers, and dispatch details were difficult to track, and nothing was centralized. They came to us with two goals: bring order to their operations, and finally build a real presence for their brand online.",
    approach:
      "We built a custom CRM tailored to their workflow, covering customers, orders, inventory, and dispatch in one system. Staff can now log an order in seconds, see stock at a glance, and follow each delivery from order to dispatch. Alongside the CRM, we took over their social media handling, producing regular, high-quality posts to build recognition and reach new customers in their region.",
    results:
      "The result was a calmer, more organized operation and a brand that finally shows up online. Orders that used to get lost in phone calls are now tracked from start to finish. The client was highly satisfied, and our work together is ongoing as we continue refining their systems.",
    quote: "We used to lose track of orders all the time. Now everything is in one place and our team actually enjoys using the system.",
    paragraphs: [
      "Data Flour Mill runs a busy manufacturing and distribution operation, but its day to day was held together by paper records, phone calls, and memory. Orders, customers, and dispatch details were difficult to track, and nothing was centralized.",
      "They came to us with two goals: bring order to their operations, and finally build a real presence for their brand online.",
      "We built a custom CRM tailored to their workflow, covering customers, orders, inventory, and dispatch in one system. Staff can now log an order in seconds, see stock at a glance, and follow each delivery from order to dispatch.",
      "Alongside the CRM, we took over their social media handling, producing regular, high quality posts to build recognition and reach new customers in their region.",
      "The result was a calmer, more organized operation and a brand that finally shows up online. The client was highly satisfied, and our work together is ongoing.",
    ],
  },
  {
    slug: "education-links",
    n: "06",
    name: "Education Links",
    sector: "Education Consultancy · Automation + Web",
    place: "Pakistan, 2024",
    gradient: "from-brand-amber/10 to-brand-teal/10",
    summary:
      "A WhatsApp chatbot wired to their CRM captured every lead automatically, and we rebuilt their malware-hit site in React.",
    stats: [
      { k: "100%", v: "Leads captured, zero manual entry" },
      { k: "0", v: "Data loss after full rebuild" },
    ],
    services: ["WhatsApp chatbot", "CRM integration", "Malware removal", "React website"],
    images: ["/work/education-links-1.jpg", "/work/education-links-2.jpg"],
    logo: "/logos/education-links.png",
    challenge:
      "Education Links approached Webfluence looking for a better way to manage the large number of student inquiries they received daily. Their team was handling admissions and student visa applications, but lead tracking and follow-ups were becoming increasingly difficult. On top of that, their existing website had been compromised by malware due to poor development work from a previous freelancer.",
    approach:
      "Our first solution was to build a WhatsApp chatbot integrated directly with their CRM. Whenever a prospective student reached out through WhatsApp, their information was automatically captured and stored in the CRM without any manual data entry. Using the CRM, their consultants could monitor each student's journey, assign team members, track document collection, manage application progress, and oversee visa processing workflows. We also removed the malware, secured their systems, and rebuilt their website from the ground up using React, providing them with a fast, modern, and secure online presence.",
    results:
      "The combination of automated lead capture, streamlined CRM workflows, and a completely rebuilt website significantly improved their operations. The client was highly satisfied with the outcome, and our relationship has continued to grow ever since. Today, we are still working together and are currently developing another website for them as they expand their services.",
    quote: "They didn't just fix our problems — they rebuilt everything better than we imagined. We haven't lost a single lead since the chatbot went live.",
    paragraphs: [
      "Education Links approached Webfluence looking for a better way to manage the large number of student inquiries they received daily. Their team was handling admissions and student visa applications, but lead tracking and follow ups were becoming increasingly difficult.",
      "Our first solution was to build a WhatsApp chatbot integrated directly with their CRM. Whenever a prospective student reached out through WhatsApp, their information was automatically captured and stored in the CRM without any manual data entry. This allowed the Education Links team to instantly organize, track, and manage every lead from a single platform.",
      "Using the CRM, their consultants could monitor each student's journey, assign team members, track document collection, manage application progress, and oversee visa processing workflows. Instead of relying on scattered conversations and spreadsheets, the entire admissions and visa management process became centralized, structured, and easy to follow.",
      "During the project, we also discovered that their existing website had been compromised by malware due to poor development work from a previous freelancer. To ensure the security of their business, we removed the malware, secured their systems, and rebuilt their website from the ground up using React, providing them with a fast, modern, and secure online presence.",
      "The combination of automated lead capture, streamlined CRM workflows, and a completely rebuilt website significantly improved their operations. The client was highly satisfied with the outcome, and our relationship has continued to grow ever since. Today, we are still working together and are currently developing another website for them as they expand their services.",
    ],
  },
  {
    slug: "gari-baich",
    n: "07",
    name: "Gari Baich",
    sector: "Automotive Marketplace · App Design + Development",
    place: "Pakistan, 2025",
    gradient: "from-brand-teal/10 to-brand-amber/10",
    summary:
      "Designed and built the frontend for a new car buying and selling app from a blank canvas, ready for a fast public launch.",
    stats: [
      { k: "0 → Live", v: "Full app designed and built from scratch" },
      { k: "Seconds", v: "From browsing to a listing" },
    ],
    services: ["App UI/UX design", "Frontend development", "Listings & search", "Design system"],
    images: ["/neon-finance-app-interface-dark-mode.jpg", "/meditation-app-interface-soft-gradients.jpg"],
    logo: "/logos/gari-baich.png",
    challenge:
      "Gari Baich came to us with just an idea and a name: a simple, no hassle place for people in Pakistan to buy and sell cars. There was no design, no frontend, and no existing product to build on. They needed a partner who could take the concept from a blank page to a real, launch ready app.",
    approach:
      "We started with the UI/UX design from scratch, mapping out how someone actually shops for a used car: browsing listings, filtering by make, model, budget, and city, and messaging a seller directly. Once the design system was signed off, we built out the full frontend, focused on fast load times and a browsing experience that feels closer to a modern marketplace app than a classifieds site. Every screen, from search to a single listing page, was built to get a buyer from curiosity to a conversation as fast as possible.",
    results:
      "Gari Baich launched with a frontend that looks and feels like a mature product, not a first version. The client was highly satisfied with how quickly design turned into working screens, and we continue to work with them as they add more features to the platform.",
    quote: "We came in with just an idea. Webfluence gave us an app that actually feels like gari baich.com — no hassle, no wait.",
    paragraphs: [
      "Gari Baich came to us with just an idea and a name: a simple, no hassle place for people in Pakistan to buy and sell cars. There was no design, no frontend, and no existing product to build on.",
      "They needed a partner who could take the concept from a blank page to a real, launch ready app. We started with the UI/UX design from scratch, mapping out how someone actually shops for a used car: browsing listings, filtering by make, model, budget, and city, and messaging a seller directly.",
      "Once the design system was signed off, we built out the full frontend, focused on fast load times and a browsing experience that feels closer to a modern marketplace app than a classifieds site.",
      "Every screen, from search to a single listing page, was built to get a buyer from curiosity to a conversation as fast as possible. Gari Baich launched with a frontend that looks and feels like a mature product, not a first version.",
      "The client was highly satisfied with how quickly design turned into working screens, and we continue to work with them as they add more features to the platform.",
    ],
  },
  {
    slug: "pitstop-63",
    n: "08",
    name: "Pitstop 63",
    sector: "Hospitality · POS & Billing System",
    place: "Pakistan, 2025",
    gradient: "from-brand-amber/10 to-brand-teal/10",
    summary:
      "Built a custom POS and billing system for a new coffee shop, ready to run the till from day one.",
    stats: [
      { k: "100%", v: "Digital billing, zero manual entry" },
      { k: "Day 1", v: "Ready for opening day" },
    ],
    services: ["POS system", "Billing & invoicing", "Inventory tracking", "Staff accounts"],
    images: ["/meditation-app-interface-soft-gradients.jpg", "/neon-finance-app-interface-dark-mode.jpg"],
    logo: "/logos/pitstop63.jpeg",
    challenge:
      "Pitstop 63 was opening as a brand new coffee shop and needed a point of sale system before day one. Running a till on notebooks or a generic off the shelf tool was not going to work for a menu that changes, staff shifts that rotate, and an owner who wanted real numbers on what is actually selling.",
    approach:
      "We built a custom POS and billing system tailored to how a coffee shop actually runs. Staff can ring up an order in a few taps, apply modifiers and discounts, and print or send a receipt without friction. Behind the till, the system tracks inventory as items sell, gives staff their own accounts, and rolls everything up into simple daily and weekly sales reports the owner can actually use to make decisions.",
    results:
      "Pitstop 63 opened its doors with a billing system built around their exact menu and workflow, not a generic template. The client was highly satisfied with how smooth day one felt, and we continue to refine the system as the shop grows.",
    quote: "Everything was ready before we even opened. Our staff picked it up in minutes and we finally see real numbers on what's selling.",
    paragraphs: [
      "Pitstop 63 was opening as a brand new coffee shop and needed a point of sale system before day one. Running a till on notebooks or a generic off the shelf tool was not going to work for a menu that changes, staff shifts that rotate, and an owner who wanted real numbers on what is actually selling.",
      "We built a custom POS and billing system tailored to how a coffee shop actually runs. Staff can ring up an order in a few taps, apply modifiers and discounts, and print or send a receipt without friction.",
      "Behind the till, the system tracks inventory as items sell, gives staff their own accounts, and rolls everything up into simple daily and weekly sales reports the owner can actually use to make decisions.",
      "Pitstop 63 opened its doors with a billing system built around their exact menu and workflow, not a generic template. The client was highly satisfied with how smooth day one felt, and we continue to refine the system as the shop grows.",
    ],
  },
  {
    slug: "carology",
    n: "09",
    name: "The Carology",
    sector: "Automotive · AR/VR Visualiser",
    place: "Pakistan, 2025",
    gradient: "from-brand-teal/10 to-brand-amber/10",
    summary:
      "A virtual try-on tool that lets a customer place a number plate or any car part onto a photo of their own car before they buy.",
    stats: [
      { k: "Real time", v: "Instant visual try-on renders" },
      { k: "Any part", v: "From plates to full accessory kits" },
    ],
    services: ["AR/VR development", "3D visualiser", "Virtual try-on", "Car parts configurator"],
    images: ["/space-website-interface-futuristic.jpg", "/neon-finance-app-interface-dark-mode.jpg"],
    logo: "/logos/the-carology.png",
    challenge:
      "The Carology sells number plates and car parts and accessories, but buying either one online has always meant guessing. A customer could see a product photo, but had no real way to know how a plate or a part would actually look mounted on their own car before it arrived.",
    approach:
      "We built a visual try-on tool that closes that gap. A customer uploads a photo of their own car, selects a number plate or a specific part, and the tool places it onto their car in the image so they can see it in context before buying. We built this for their full catalogue, from plates to individual car parts, so the same try-on experience works across everything The Carology sells, not just one product line.",
    results:
      "Customers can now make a confident decision before they buy instead of guessing from a product photo. The client was highly satisfied with the outcome, and it has become a core part of how they sell online.",
    quote: "Customers stopped asking 'how will this look on my car' and started just seeing it for themselves. It's changed how people shop with us.",
    paragraphs: [
      "The Carology sells number plates and car parts and accessories, but buying either one online has always meant guessing. A customer could see a product photo, but had no real way to know how a plate or a part would actually look mounted on their own car before it arrived.",
      "We built a visual try-on tool that closes that gap. A customer uploads a photo of their own car, selects a number plate or a specific part, and the tool places it onto their car in the image so they can see it in context before buying.",
      "We built this for their full catalogue, from plates to individual car parts, so the same try-on experience works across everything The Carology sells, not just one product line.",
      "Customers can now make a confident decision before they buy instead of guessing from a product photo. The client was highly satisfied with the outcome, and it has become a core part of how they sell online.",
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}

/** Best-effort mapping of case studies to the service they best demonstrate. */
const SERVICE_CASE_STUDY_MAP: Record<string, string[]> = {
  "web-development": ["fastaxi-uk", "education-links", "property-linkers"],
  "mobile-apps": ["gari-baich"],
  "ar-vr-development": ["carology"],
  "crm-erp-systems": ["ahm-developers", "times-consultant", "data-flour-mill", "education-links"],
  "desktop-applications": ["pitstop-63"],
  "ai-integration": ["times-consultant", "education-links"],
}

/**
 * Case studies that best demonstrate a given service. Falls back to a
 * curated recent selection when a service has no direct match yet, so the
 * "related work" section is never empty.
 */
export function getCaseStudiesForService(serviceSlug: string, limit = 3): CaseStudy[] {
  const slugs = SERVICE_CASE_STUDY_MAP[serviceSlug] ?? []
  const matched = slugs.map((s) => getCaseStudy(s)).filter((c): c is CaseStudy => Boolean(c))
  if (matched.length > 0) return matched.slice(0, limit)
  return caseStudies.slice(0, limit)
}
