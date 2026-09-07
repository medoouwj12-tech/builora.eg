/**
 * BUILDORA - Services Data
 * 
 * Interactive service catalog with comprehensive specs, features,
 * deliverables, tech stack, and prefilled booking links.
 */

export const servicesData = [
  {
    id: "website-development",
    title: "Website Development",
    shortDescription: "Professional business websites, landing pages, and corporate portals engineered for speed, authority, and high lead conversion.",
    categoryTag: "Core Digital",
    iconName: "Globe",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Custom responsive UI/UX tailored to your brand",
      "Sub-second loading speeds (Google PageSpeed 95+)",
      "Technical SEO & OpenGraph social sharing setup",
      "Lead generation forms & WhatsApp instant connection",
      "Secure HTTPS encryption & cloud CDN hosting"
    ],
    deliverables: [
      "Full responsive website codebase",
      "Domain and SSL configuration",
      "Interactive WhatsApp CTA integration",
      "Google Analytics & Search Console setup",
      "30-day post-launch technical support"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vite", "Node.js"],
    recommendedFor: "Corporate firms, startups, service providers, real estate, and professional consultancies."
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    shortDescription: "Modern online stores with real-time product catalogs, shopping carts, automated inventory tracking, and payment gateways.",
    categoryTag: "Commerce",
    iconName: "ShoppingBag",
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Dynamic product catalog with variants, colors, and sizes",
      "Egyptian & international payment gateways (Paymob, Fawry, Cards)",
      "Automated order notification via WhatsApp & Email",
      "Coupon code discounts & dynamic shipping calculations",
      "Full customer account management and order tracking"
    ],
    deliverables: [
      "High-converting storefront & checkout flow",
      "Intuitive product management dashboard",
      "Payment gateway API integrations",
      "Inventory alerts & low-stock warnings",
      "Staff training & operations guide"
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Paymob API"],
    recommendedFor: "Retail brands, fashion, electronics, cosmetics, and direct-to-consumer businesses."
  },
  {
    id: "custom-business-systems",
    title: "Custom Business Systems",
    shortDescription: "Tailor-made internal software solutions designed specifically around your company's operational workflows, ERP, and CRM.",
    categoryTag: "Enterprise",
    iconName: "Cpu",
    gradient: "from-cyan-400 to-teal-500",
    features: [
      "Custom ERP & CRM designed around your company operations",
      "Inventory tracking, warehouse management & logistics",
      "Employee attendance, task assignment & performance logs",
      "Financial invoicing, expenses, and automated PDF billing",
      "Role-based permission access (Admin, Manager, Staff)"
    ],
    deliverables: [
      "Complete custom management software",
      "Automated automated database backup architecture",
      "Export capabilities (Excel, CSV, PDF)",
      "Team user accounts and permission roles",
      "Comprehensive administration manual"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    recommendedFor: "Trading companies, factories, clinics, logistics, agencies, and service enterprises."
  },
  {
    id: "booking-systems",
    title: "Booking Systems",
    shortDescription: "Advanced appointment, reservation, and scheduling platforms with real-time slot availability, calendar sync, and automated reminders.",
    categoryTag: "Automation",
    iconName: "CalendarCheck",
    gradient: "from-indigo-500 to-purple-600",
    features: [
      "Real-time calendar slot availability with zero double-bookings",
      "Automated WhatsApp & SMS appointment confirmations",
      "Flexible working hours, staff schedules, and holiday blocking",
      "Down-payment or full online deposit collection",
      "Client booking portal with cancellation & reschedule rules"
    ],
    deliverables: [
      "Customer-facing booking widget and direct portal",
      "Staff schedule management calendar dashboard",
      "Automated WhatsApp notification pipeline",
      "Deposit payment gateway connection",
      "Client database and history tracking"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Twilio / WhatsApp API"],
    recommendedFor: "Medical clinics, dental centers, beauty salons, consulting professionals, and rental agencies."
  },
  {
    id: "restaurant-digital-menus",
    title: "Restaurant Digital Menus",
    shortDescription: "Interactive QR code digital menus with real-time admin panels to update food items, photos, ingredients, prices, and special offers instantly.",
    categoryTag: "Hospitality",
    iconName: "QrCode",
    gradient: "from-teal-400 to-cyan-500",
    features: [
      "Instant QR code scanning with zero app installation required",
      "Live admin panel to update dishes, prices, and availability in real-time",
      "High-resolution dish photos, ingredients, and allergen tags",
      "Multi-language support (Arabic / English / French)",
      "Optional direct-to-WhatsApp table ordering and delivery orders"
    ],
    deliverables: [
      "High-speed mobile-first digital menu interface",
      "Secure mobile-friendly admin panel for managers",
      "Print-ready customized QR code vector artwork",
      "Menu categorization (Starters, Mains, Desserts, Beverages)",
      "Daily analytics report on most viewed items"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase / Supabase", "Cloudinary"],
    recommendedFor: "Restaurants, cafes, lounges, hotel dining, food trucks, and bakeries."
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    shortDescription: "Powerful, intuitive control panels for monitoring business analytics, managing website content, user permissions, and sales metrics.",
    categoryTag: "Management",
    iconName: "LayoutDashboard",
    gradient: "from-blue-600 to-cyan-400",
    features: [
      "Interactive data charts, revenue graphs, and conversion KPIs",
      "Role-Based Access Control (RBAC) with granular security permissions",
      "CRUD management for all website content, media, and records",
      "One-click data export to Excel, CSV, and formatted PDF reports",
      "Real-time activity logs and user audit tracking"
    ],
    deliverables: [
      "Full responsive dashboard web application",
      "Modern dark/light UI with fast data tables",
      "Secure token-based authentication (JWT / OAuth)",
      "RESTful / GraphQL backend endpoints",
      "Deployment on secure cloud infrastructure"
    ],
    technologies: ["React", "Next.js", "Chart.js", "Tailwind CSS", "Node.js"],
    recommendedFor: "SaaS founders, business executives, e-commerce managers, and operations leads."
  },
  {
    id: "web-applications",
    title: "Web Applications",
    shortDescription: "Complex, responsive web apps designed with modern reactive architectures, real-time sync, and scalable cloud backends.",
    categoryTag: "Engineering",
    iconName: "Layers",
    gradient: "from-cyan-500 to-indigo-500",
    features: [
      "Dynamic Single-Page (SPA) and Server-Rendered (SSR) architectures",
      "Real-time data synchronization using WebSockets",
      "Robust state management and offline resilience",
      "Seamless API integration with third-party web services",
      "Built for concurrent user traffic and enterprise scaling"
    ],
    deliverables: [
      "Production-ready web application codebase",
      "CI/CD deployment pipeline setup",
      "Comprehensive API documentation",
      "Automated testing suite & QA validation",
      "Scalable cloud infrastructure deployment"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Redis", "Docker"],
    recommendedFor: "Startups building SaaS products, digital platforms, customer portals, and internal tools."
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDescription: "Custom bespoke software engineered to solve unique business challenges with robust backend architectures and clean code.",
    categoryTag: "Bespoke",
    iconName: "Code2",
    gradient: "from-blue-500 to-purple-600",
    features: [
      "Custom microservices and RESTful / GraphQL API architectures",
      "High-security database modeling and migration strategies",
      "Automated system background tasks, queues, and workers",
      "Cross-platform desktop and backend utility integration",
      "Strict unit and integration testing coverage"
    ],
    deliverables: [
      "Fully documented, proprietary source code ownership",
      "Containerized microservices (Docker)",
      "Database schema architecture & documentation",
      "Security compliance and load benchmark reports",
      "Long-term SLA maintenance options"
    ],
    technologies: ["Python", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    recommendedFor: "Organizations with unique proprietary logic, integrations, or high-security requirements."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Futuristic, user-centric interfaces and design systems crafted for maximum engagement, intuitive workflows, and high conversion.",
    categoryTag: "Design",
    iconName: "Palette",
    gradient: "from-purple-500 to-cyan-400",
    features: [
      "Modern dark-mode and futuristic tech aesthetics",
      "User journey mapping, wireframing, and interactive Figma prototyping",
      "Design systems with reusable typography, tokens, and components",
      "Conversion Rate Optimization (CRO) UX principles",
      "Pixel-perfect handoff assets ready for engineering teams"
    ],
    deliverables: [
      "Complete Figma design workspace with components",
      "Clickable interactive high-fidelity prototype",
      "Design tokens (colors, typography, grid, spacing)",
      "Custom icons and vector illustrations",
      "Exported graphics optimized for web rendering"
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Design Tokens"],
    recommendedFor: "Companies looking to overhaul an outdated look, launch a new product, or elevate brand value."
  }
];
