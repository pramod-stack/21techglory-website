export interface ProjectRegistryItem {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  industrySlug: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  depth: "full" | "card_link" | "on_request";
  isConfidential?: boolean;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  duration: string;
  location: string;
  recommendedModules: string[];
  recommendedIndustryPreset: string;
  image?: string;
}

export const PROJECT_REGISTRY: ProjectRegistryItem[] = [
  {
    id: "liger-fitness",
    title: "Liger Fitness — Multi-Branch Brand & Local Acquisition Engine",
    client: "Liger Fitness",
    category: "Fitness Web Development, Marketing & Local Ranking",
    industry: "Fitness & Gyms",
    industrySlug: "fitness-gyms",
    liveUrl: "https://www.ligerfitness.co.in/",
    caseStudyUrl: "/work/liger-fitness",
    depth: "full",
    tagline: "High-conversion web presence with multi-location Google Maps domination across 4 branches (3 in Kerala, 1 in Bangalore).",
    description: "Architected a lightning-fast digital platform for Liger Fitness with high-impact visuals, multi-location Google Maps ranking for 4 branches (3 in Kerala, 1 in Bangalore), and automatic member enquiry routing.",
    problem: "Liger Fitness was scaling across 4 physical branches (3 in Kerala and 1 in Bangalore), but online lead capture was losing momentum due to fragmented local search listings, slow mobile links, and manual enquiry management.",
    solution: "Built a high-conversion modern Next.js website with instant class trial booking, multi-location Google Maps local ranking campaigns for all 4 branches, and localized WhatsApp lead routing.",
    results: [
      "Sub-second load times (<1.2s LCP) on mobile 4G",
      "Streamlined trial bookings directly synced with WhatsApp desk notifications",
      "Ranked #1 for local fitness and gym keywords across all 4 branch vicinities (Kerala & Bangalore)"
    ],
    metrics: [
      { label: "Trial Bookings", value: "+180%" },
      { label: "Mobile Speed", value: "<1.2s" },
      { label: "Local Map Rank", value: "#1 (4 Branches)" },
      { label: "Locations", value: "3 Kerala + 1 BLR" }
    ],
    stack: ["Next.js", "Tailwind CSS", "WhatsApp API", "Multi-Location Local SEO"],
    duration: "4 Weeks",
    location: "4 Branches (3 in Kerala, 1 in Bangalore)",
    recommendedModules: ["website", "gmb", "whatsapp", "automation"],
    recommendedIndustryPreset: "Local Business",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "education-career-bridge",
    title: "Education to Career Bridge — Higher Education & Career Transition Platform",
    client: "Education to Career Bridge",
    category: "Web Development, Education Marketing & Local Ranking",
    industry: "Education & Career Services",
    industrySlug: "software-it-services",
    liveUrl: "https://educationtocareerbridge.com/",
    caseStudyUrl: "/work/education-career-bridge",
    depth: "full",
    tagline: "Career guidance and higher education platform with localized search authority and counselor booking.",
    description: "Designed and engineered a high-authority educational portal with structured program pathways, regional search ranking dominance, and automated student consultation booking.",
    problem: "Education to Career Bridge struggled with search engine invisibility, mobile bounce rates, and missed candidate inquiries looking for regional career pathways.",
    solution: "Engineered a lightning-fast responsive Next.js platform with educational schema, Google Maps local ranking optimization, and direct counselor WhatsApp consultation pipelines.",
    results: [
      "Top #1 local search ranking for key career transition and counseling queries",
      "+250% increase in verified student enrollment inquiries",
      "Cut counselor response turnaround time to under 2 minutes"
    ],
    metrics: [
      { label: "Student Inquiries", value: "+250%" },
      { label: "Local Rank", value: "#1 Local Pack" },
      { label: "Counselor Response", value: "<2 mins" }
    ],
    stack: ["Next.js", "Tailwind CSS", "Educational SEO Schema", "WhatsApp API"],
    duration: "4 Weeks",
    location: "India",
    recommendedModules: ["website", "seo", "whatsapp", "automation"],
    recommendedIndustryPreset: "Education / Professional Services",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "namo-cranes",
    title: "Namo Cranes & Services — B2B Industrial Equipment Portal",
    client: "Namo Cranes & Services",
    category: "Industrial Web Infrastructure & B2B Inquiries",
    industry: "Cranes & Material Handling",
    industrySlug: "industrial-manufacturing",
    liveUrl: "https://namocranes.com/",
    caseStudyUrl: "/work/namo-cranes",
    depth: "full",
    tagline: "Industrial equipment catalog and high-intent B2B quotation engine.",
    description: "Engineered a robust industrial website with modular crane specifications, downloadable technical brochures, and automated B2B RFQ routing.",
    problem: "Namo Cranes required an authoritative digital presence to handle complex industrial quotation requests without relying on unstructured email chains.",
    solution: "Designed a clean technical showcase with specification builders, instant quotation workflows, and direct CRM integration.",
    results: [
      "Structured RFQ pipeline delivering qualified industrial leads",
      "100% mobile-responsive engineering specifications viewer",
      "Zero quotation data loss with resilient form queuing"
    ],
    metrics: [
      { label: "B2B Enquiries", value: "+220%" },
      { label: "Catalog Views", value: "3.5x" },
      { label: "Uptime", value: "99.9%" }
    ],
    stack: ["Next.js", "Tailwind CSS", "CRM Integration", "B2B SEO"],
    duration: "6 Weeks",
    location: "India",
    recommendedModules: ["website", "seo", "crm", "automation"],
    recommendedIndustryPreset: "Full Growth Engine",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "slv-pg",
    title: "SLV Home Like PG — Premium Co-Living & Local Maps Domination",
    client: "SLV Home Like PG",
    category: "Local SEO & Website Redesign",
    industry: "Real Estate & Co-Living",
    industrySlug: "software-it-services",
    liveUrl: "https://wa.me/917795354043?text=Hi,%20I'm%20inquiring%20about%20the%20SLV%20PG%20case%20study.",
    depth: "full",
    tagline: "Executive co-living positioning, #1 Google Maps ranking, and 100% building occupancy.",
    description: "Architected a high-converting bento grid website and executed targeted Local SEO in the Manyata Tech Park corridor to triple tenant inquiries.",
    problem: "Outdated web presence and invisible on Google Maps amidst fierce competition near Manyata Tech Park.",
    solution: "Cinematic web layout, localized keyword citations, and automated instant WhatsApp lead booking.",
    results: [
      "#1 ranking on local Google Maps within 3 months",
      "+300% increase in inbound tenant booking leads",
      "Reached sustained 100% full building occupancy"
    ],
    metrics: [
      { label: "Increase in Leads", value: "+300%" },
      { label: "Google Maps Rank", value: "#1 Rank" },
      { label: "Occupancy Rate", value: "100% Full" }
    ],
    stack: ["Next.js", "Tailwind CSS", "Local SEO", "WhatsApp Automation"],
    duration: "3 Weeks",
    location: "Manyata Tech Park, Bangalore",
    recommendedModules: ["website", "gmb", "whatsapp", "automation"],
    recommendedIndustryPreset: "Local Business",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "conceive-clinics",
    title: "Conceive Clinics — Authority Healthcare Architecture & Patient Booking",
    client: "Conceive Clinics",
    category: "Healthcare Web Architecture & Brand Authority",
    industry: "Clinics & Healthcare",
    industrySlug: "clinics-hospitals",
    liveUrl: "https://www.conceiveclinics.com",
    caseStudyUrl: "/work/clinic-seo-bangalore",
    depth: "full",
    tagline: "Luxury medical brand aesthetic, clinical trust architecture, and 2x patient consultation inquiries.",
    description: "Re-engineered patient journey for leading fertility clinic with empathetic aesthetics, physician credentials, and direct WhatsApp triage.",
    problem: "Cold, clinical legacy website failed to inspire trust for high-stakes IVF medical consultations.",
    solution: "Aesthetic digital overhaul with transparent care roadmaps and friction-free direct WhatsApp inquiry routing.",
    results: [
      "+45% increase in online patient consultation conversions",
      "Doubled high-intent fertility treatment inquiries",
      "Sub-second (0.9s) mobile patient booking experience"
    ],
    metrics: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "Patient Inquiries", value: "2x Volume" },
      { label: "Mobile Speed", value: "0.9s LCP" }
    ],
    stack: ["Next.js", "Tailwind CSS", "Medical Schema", "WhatsApp API"],
    duration: "5 Weeks",
    location: "Bangalore, India",
    recommendedModules: ["website", "gmb", "crm", "whatsapp"],
    recommendedIndustryPreset: "Clinic / Salon",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "maxim-automation",
    title: "Maxim Automation — Industrial Automation & Control Systems",
    client: "Maxim Automation",
    category: "Industrial Tech & Engineering",
    industry: "Industrial Automation",
    industrySlug: "industrial-manufacturing",
    liveUrl: "https://maxim-automation.com/",
    depth: "card_link",
    tagline: "Precision industrial automation showcase and client inquiry portal.",
    description: "Modern enterprise website highlighting automation solutions, PLC integrations, and engineering capabilities with structured enquiry capture.",
    problem: "Outdated legacy website did not reflect high-tech engineering standards.",
    solution: "Deployed sleek dark-mode interface with product matrix and instant technical support links.",
    results: ["Enhanced corporate authority", "Direct B2B engineering lead flow"],
    metrics: [
      { label: "Brand Trust", value: "Enterprise" },
      { label: "Speed", value: "Sub-second" }
    ],
    stack: ["Next.js", "Tailwind CSS", "Modern Web Architecture"],
    duration: "3 Weeks",
    location: "India",
    recommendedModules: ["website", "seo", "crm"],
    recommendedIndustryPreset: "Full Growth Engine",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "cosmaty",
    title: "Cosmaty — D2C Cosmetics & Beauty Brand Experience",
    client: "Cosmaty",
    category: "Beauty & E-Commerce",
    industry: "Beauty & Cosmetics",
    industrySlug: "beauty-cosmetics",
    liveUrl: "https://cosmaty.in/",
    depth: "card_link",
    tagline: "High-aesthetic digital storefront for premium skincare and beauty formulations.",
    description: "Crafted a luxury visual layout with fast product previews, ingredients showcases, and direct social commerce links.",
    problem: "Generic store templates slowed down checkout and lacked brand distinction.",
    solution: "Custom frontend design with silky-smooth micro-animations and friction-free purchase paths.",
    results: ["Elevated brand perception", "Sub-second product browsing"],
    metrics: [
      { label: "Engagement", value: "+65%" },
      { label: "Mobile Bounce", value: "-40%" }
    ],
    stack: ["React", "Next.js", "E-Commerce Optimization", "Framer Motion"],
    duration: "4 Weeks",
    location: "India",
    recommendedModules: ["website", "ads", "analytics", "whatsapp"],
    recommendedIndustryPreset: "E-commerce",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "centurian-apps",
    title: "Centurian Apps & Solutions — Enterprise Software Solutions",
    client: "Centurian Apps & Solutions",
    category: "Software & IT Solutions",
    industry: "Software / IT Services",
    industrySlug: "software-it-services",
    liveUrl: "https://centurianapps.com/",
    depth: "card_link",
    tagline: "Enterprise software development and digital transformation agency platform.",
    description: "Engineered a scalable corporate website highlighting cloud services, custom software engineering, and client case histories.",
    problem: "Needed a modern, fast tech-stack showcase to attract overseas enterprise software clients.",
    solution: "Delivered a clean, high-performance portal with service taxonomy and consultation booking.",
    results: ["Global client positioning", "Sub-second global CDN response"],
    metrics: [
      { label: "Global Speed", value: "<1.0s" },
      { label: "Client Inquiries", value: "2.4x" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Global Edge CDN"],
    duration: "5 Weeks",
    location: "India",
    recommendedModules: ["website", "seo", "crm", "automation"],
    recommendedIndustryPreset: "Full Growth Engine",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=500&auto=format&fit=crop"
  },
  {
    id: "elite-elevators",
    title: "ELITE ELEVATORS — Luxury Home Elevator Brand Experience",
    client: "ELITE ELEVATORS PRIVATE LIMITED",
    category: "Luxury Engineering & Manufacturing",
    industry: "Elevator Manufacturing",
    industrySlug: "industrial-manufacturing",
    liveUrl: "https://www.eliteelevators.com/",
    depth: "card_link",
    tagline: "Premium residential mobility & high-ticket lead capture architecture.",
    description: "Designed a luxury product presentation showcasing certified European home lifts, video brochures, and VIP consultation booking flows.",
    problem: "High-ticket luxury elevator buyers require an ultra-premium, trustworthy digital experience.",
    solution: "Developed an elegant visual architecture with high-resolution 3D models, architectural specifications, and direct concierge routing.",
    results: ["Substantial increase in qualified homeowner consultations", "Seamless multi-city showroom locator"],
    metrics: [
      { label: "Consultation Rate", value: "+50%" },
      { label: "Brand Positioning", value: "Luxury #1" }
    ],
    stack: ["Next.js", "High-Performance Asset Pipeline", "CRM Automation"],
    duration: "6 Weeks",
    location: "Bangalore / Pan-India",
    recommendedModules: ["website", "seo", "crm", "ads", "whatsapp"],
    recommendedIndustryPreset: "Full Growth Engine",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&h=500&auto=format&fit=crop"
  },
  // Confidential / On Request projects (Annex D §7-15)
  {
    id: "iit-alumni-council",
    title: "National Alumni & Tech Initiative Portal",
    client: "IIT Alumni Council",
    category: "Education & Alumni Network",
    industry: "Education / Alumni",
    industrySlug: "software-it-services",
    depth: "on_request",
    isConfidential: true,
    tagline: "Secure institutional infrastructure and high-volume stakeholder portal.",
    description: "Enterprise portal and communication system engineered under strict privacy specifications.",
    problem: "Large-scale institutional coordination requiring encrypted routing and high availability.",
    solution: "Secure, custom-architected web application with role-based access control.",
    results: ["Full data governance compliance", "High-availability deployment"],
    metrics: [
      { label: "Confidentiality", value: "100%" },
      { label: "Availability", value: "99.99%" }
    ],
    stack: ["Secure Cloud Architecture", "Next.js", "Enterprise RBAC"],
    duration: "On Request",
    location: "India",
    recommendedModules: ["website", "crm", "automation"],
    recommendedIndustryPreset: "Full Growth Engine"
  },
  {
    id: "ashmolean-fund",
    title: "Private Investment & Asset Management Architecture",
    client: "Ashmolean Fund",
    category: "Finance & Funds",
    industry: "Finance / Funds",
    industrySlug: "software-it-services",
    depth: "on_request",
    isConfidential: false,
    tagline: "Ultra-secure institutional investor interface and compliance reporting.",
    description: "Case study available on request with client clearance.",
    problem: "Private fund requirements for secure investor engagement.",
    solution: "Custom financial portal architecture with verification gateways.",
    results: ["Institutional investor security", "Encrypted document flow"],
    metrics: [
      { label: "Security Tier", value: "Bank Grade" },
      { label: "Status", value: "Active" }
    ],
    stack: ["Secure Web Architecture", "Next.js", "CRM"],
    duration: "On Request",
    location: "International",
    recommendedModules: ["website", "crm", "automation"],
    recommendedIndustryPreset: "Full Growth Engine"
  },
  {
    id: "brew-hospitality",
    title: "Premium F&B & Craft Brewery Customer Acquisition",
    client: "Brew",
    category: "Hospitality & F&B",
    industry: "Hospitality / F&B",
    industrySlug: "clinics-hospitals",
    depth: "on_request",
    isConfidential: false,
    tagline: "Automated table reservations, menu showcase, and WhatsApp VIP club.",
    description: "Case study available on request.",
    problem: "Weekend table booking bottlenecks and customer retention.",
    solution: "WhatsApp reservation automation and dynamic digital menus.",
    results: ["Automated table bookings", "Zero manual reservation errors"],
    metrics: [
      { label: "Reservations", value: "Automated" },
      { label: "WhatsApp Club", value: "Active" }
    ],
    stack: ["Next.js", "WhatsApp API", "Booking Flow"],
    duration: "On Request",
    location: "Bangalore, India",
    recommendedModules: ["website", "whatsapp", "booking", "gmb"],
    recommendedIndustryPreset: "Local Business"
  },
  {
    id: "jaipur-riding-polo",
    title: "Luxury Sports & Equestrian Membership System",
    client: "Jaipur Riding & Polo Club",
    category: "Sports & Leisure",
    industry: "Sports & Leisure",
    industrySlug: "clinics-hospitals",
    depth: "on_request",
    isConfidential: false,
    tagline: "Heritage sports club branding, membership intake, and event coordination.",
    description: "Case study available on request.",
    problem: "Managing high-ticket membership applications with premium brand prestige.",
    solution: "Heritage visual design and structured concierge inquiry flow.",
    results: ["Elevated luxury positioning", "Concierge lead routing"],
    metrics: [
      { label: "Exclusivity", value: "Heritage" },
      { label: "Inquiries", value: "Streamlined" }
    ],
    stack: ["Next.js", "Tailwind CSS", "Concierge Intake"],
    duration: "On Request",
    location: "Jaipur, India",
    recommendedModules: ["website", "crm", "whatsapp"],
    recommendedIndustryPreset: "Local Business"
  }
];

export const SYSTEM_MODULES = [
  { id: "website", name: "Website", icon: "Code2", desc: "Sub-second Next.js conversion frontend" },
  { id: "seo", name: "SEO", icon: "Search", desc: "Data-driven Google search ranking engine" },
  { id: "gmb", name: "Google Business", icon: "MapPin", desc: "Local #1 Map Pack dominance" },
  { id: "ads", name: "Paid Ads", icon: "BarChart3", desc: "High-intent Google & Meta PPC ads" },
  { id: "crm", name: "CRM", icon: "Bot", desc: "Automated lead routing & deal cards" },
  { id: "whatsapp", name: "WhatsApp", icon: "MessageSquare", desc: "Instant automated WhatsApp replies" },
  { id: "ai_bot", name: "AI Chatbot", icon: "Sparkles", desc: "24/7 intelligent patient/client intake" },
  { id: "automation", name: "Automation", icon: "Layers", desc: "Zero-touch follow-ups and sync" },
  { id: "booking", name: "Booking System", icon: "Calendar", desc: "Frictionless calendar scheduling" },
  { id: "analytics", name: "Analytics", icon: "TrendingUp", desc: "Live ROI & conversion dashboards" },
];

export const SYSTEM_PRESETS: Record<string, { name: string; modules: string[]; description: string }> = {
  "Local Business": {
    name: "Local Business",
    modules: ["website", "gmb", "whatsapp", "automation"],
    description: "Captures local Google Maps traffic, answers on WhatsApp within 60s, and eliminates missed calls."
  },
  "Clinic / Salon": {
    name: "Clinic / Salon",
    modules: ["website", "gmb", "booking", "crm", "whatsapp"],
    description: "Automated patient/client intake, 24/7 calendar booking, and zero-show reminder sequences."
  },
  "E-commerce": {
    name: "E-commerce",
    modules: ["website", "ads", "analytics", "whatsapp", "automation"],
    description: "Lightning-fast storefront, attribution-linked PPC ads, and abandoned cart WhatsApp recovery."
  },
  "Full Growth Engine": {
    name: "Full Growth Engine",
    modules: ["website", "seo", "gmb", "ads", "crm", "whatsapp", "ai_bot", "automation", "booking", "analytics"],
    description: "The complete 10-module customer acquisition infrastructure powering high-growth market leaders."
  }
};
