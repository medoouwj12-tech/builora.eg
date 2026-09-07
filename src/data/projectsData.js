/**
 * BUILDORA - Projects Portfolio Data
 * 
 * Centralized, CMS-style project repository.
 * To add a new project in the future, simply copy one of the objects below
 * and append it to the `projectsData` array!
 * 
 * Fields:
 * - id: unique string
 * - projectTitle: Name of the project
 * - category: 'Business Websites' | 'E-Commerce' | 'Booking Systems' | 'Restaurant Systems' | 'Dashboards' | 'Web Applications' | 'Software'
 * - clientType: Type of company (e.g., 'Enterprise Corp', 'Retail Brand', 'Specialized Clinic')
 * - projectDescription: Short summary displayed on cards
 * - projectURL: Live website or demo URL
 * - projectImage: Screenshot / visual UI representation
 * - technologies: Array of tech tags (e.g. ['React', 'Next.js', 'Tailwind'])
 * - featured: boolean (true makes it prominent in the grid)
 * - caseStudy: Detailed case study object (challenge, solution, features, results, metrics)
 */

export const projectCategories = [
  "All",
  "Business Websites",
  "E-Commerce",
  "Booking Systems",
  "Restaurant Systems",
  "Dashboards",
  "Web Applications",
  "Software"
];

export const projectsData = [
  {
    id: "apex-logistics-erp",
    projectTitle: "Apex Global Logistics ERP",
    category: "Software",
    clientType: "International Freight & Shipping Co.",
    projectDescription: "Custom enterprise management system with real-time container tracking, automated customs invoicing, and WhatsApp dispatch alerts.",
    projectURL: "https://apex-logistics-demo.buildora.net",
    featured: true,
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "REST API", "Tailwind CSS"],
    badge: "Enterprise Custom System",
    image: {
      type: "svg-mockup",
      accent: "cyan",
      title: "Apex Logistics Operations Hub",
      badge: "Real-Time Telemetry",
      stats: ["4,820 Shipments Active", "99.98% On-Time Delivery", "$1.2M Weekly Volume"]
    },
    caseStudy: {
      client: "Apex Global Cargo Group",
      industry: "Maritime Shipping & Freight Forwarding",
      challenge: "Apex relied on fragmented Excel sheets and phone calls across 4 regional branches, causing shipment tracking delays, billing discrepancies, and manual client inquiries.",
      solution: "Buildora engineered an end-to-end cloud ERP with role-based access, automated airway bill generation, real-time GPS container tracking, and an automated WhatsApp notification bot.",
      features: [
        "Interactive live tracking dashboard for sea and air freight",
        "Automated customs tax calculation and PDF invoice generation",
        "WhatsApp bot for immediate client milestone updates",
        "Driver and warehouse manager mobile portals",
        "Full financial ledger and multi-currency reporting"
      ],
      results: "Cut shipment processing time by 68%, eliminated billing errors completely, and reduced customer service inquiries by 55% within 90 days.",
      metrics: [
        { label: "Processing Speed", value: "+68%" },
        { label: "Billing Accuracy", value: "100%" },
        { label: "Monthly Shipments", value: "15,000+" }
      ]
    }
  },
  {
    id: "lumina-luxury-ecommerce",
    projectTitle: "Lumina Luxury Fashion Store",
    category: "E-Commerce",
    clientType: "High-End Retail & Apparel Brand",
    projectDescription: "High-converting online store with seamless Paymob payment gateway, multi-currency support, smart sizing guide, and automated order fulfillment.",
    projectURL: "https://lumina-store-demo.buildora.net",
    featured: true,
    technologies: ["Next.js", "React", "Tailwind CSS", "Paymob API", "PostgreSQL", "Redis"],
    badge: "Featured E-Commerce",
    image: {
      type: "svg-mockup",
      accent: "blue",
      title: "Lumina Storefront & Checkout",
      badge: "Sub-Second Checkout",
      stats: ["Instant Payment Gateway", "Live Stock Sync", "Cart Abandonment Recovery"]
    },
    caseStudy: {
      client: "Lumina Fashion House",
      industry: "Luxury Fashion & Accessories",
      challenge: "The brand was losing mobile buyers due to a slow, outdated WooCommerce site with a confusing multi-page checkout and frequent payment drop-offs.",
      solution: "Buildora rebuilt the store using a custom headless Next.js architecture with instant single-page checkout, integration with Paymob (cards & digital wallets), and WhatsApp order confirmation.",
      features: [
        "Headless high-speed catalog with instant search and category filtering",
        "One-click checkout integrated with Egyptian payment gateways",
        "Automated WhatsApp order status and tracking links",
        "Integrated inventory sync across physical boutique and online store",
        "Dynamic currency switcher for GCC and international customers"
      ],
      results: "Checkout conversion rate jumped by 142%, mobile bounce rate fell from 58% to 19%, and average page load dropped to 0.4 seconds.",
      metrics: [
        { label: "Mobile Conversion", value: "+142%" },
        { label: "Page Load Time", value: "0.4s" },
        { label: "Cart Abandonment", value: "-45%" }
      ]
    }
  },
  {
    id: "medcare-specialty-clinics",
    projectTitle: "MedCare Clinic & Booking Portal",
    category: "Booking Systems",
    clientType: "Multi-Specialty Medical Center",
    projectDescription: "Intelligent medical appointment reservation engine with real-time doctor availability, digital prescriptions, and automated appointment reminders.",
    projectURL: "https://medcare-booking-demo.buildora.net",
    featured: true,
    technologies: ["React", "TypeScript", "Node.js", "Twilio / WhatsApp API", "PostgreSQL"],
    badge: "Smart Appointment Engine",
    image: {
      type: "svg-mockup",
      accent: "teal",
      title: "MedCare Reservation & Patient Hub",
      badge: "Real-Time Doctor Schedules",
      stats: ["Zero Double Bookings", "Automated WhatsApp Reminders", "Online Consultation Records"]
    },
    caseStudy: {
      client: "MedCare Multi-Specialty Clinics",
      industry: "Healthcare & Private Clinics",
      challenge: "Overbooked clinics and high patient no-show rates (over 35%) were straining reception staff and causing long waiting room delays.",
      solution: "Buildora engineered an appointment portal with calendar slot locking, doctor specialization directory, automated reminder messages 24h & 2h prior, and deposit payments.",
      features: [
        "Direct patient booking by department, doctor, and date",
        "Automated WhatsApp reminder notifications with 1-click confirmation",
        "Receptionist calendar overview and patient check-in dashboard",
        "Digital patient history and follow-up scheduling",
        "Integrated Fawry & card deposit payments to secure slots"
      ],
      results: "Patient no-show rate plummeted from 35% to under 6%, daily booked appointments rose by 48%, and phone reception load dropped by 60%.",
      metrics: [
        { label: "No-Show Drop", value: "-83%" },
        { label: "Bookings Increase", value: "+48%" },
        { label: "Patient Satisfaction", value: "98.5%" }
      ]
    }
  },
  {
    id: "dineqr-smart-menu",
    projectTitle: "DineQR Smart Restaurant Ecosystem",
    category: "Restaurant Systems",
    clientType: "Multi-Branch Casual Dining & Cafes",
    projectDescription: "Interactive contactless QR digital menu with real-time manager pricing dashboard, item availability toggles, and direct kitchen order printing.",
    projectURL: "https://dineqr-demo.buildora.net",
    featured: false,
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase", "WebSockets"],
    badge: "Contactless QR Menu",
    image: {
      type: "svg-mockup",
      accent: "cyan",
      title: "DineQR Interactive Menu & Admin",
      badge: "Live Menu Updates",
      stats: ["Scan & View in 0.2s", "Instant Price Updates", "Table Ordering Ready"]
    },
    caseStudy: {
      client: "Urban Plate Hospitality",
      industry: "Restaurants & Cafes",
      challenge: "Frequent ingredient cost fluctuations made reprinting physical menus costly and slow. Waiters were also overwhelmed during weekend peak hours.",
      solution: "Buildora built a lightning-fast web-based QR menu that loads instantaneously on mobile without any app download, paired with a manager mobile admin panel to adjust prices or mark items sold out in real-time.",
      features: [
        "Ultra-lightweight mobile menu with mouth-watering photography",
        "Manager admin panel accessible from smartphone for instant edits",
        "Bilingual Arabic and English language switch",
        "Category tabs (Breakfast, Main Courses, Steaks, Mocktails, Desserts)",
        "Direct-to-WhatsApp table ordering feature for express service"
      ],
      results: "Eliminated $3,200 annual menu printing costs, increased average dessert upsells by 24%, and reduced customer wait time for service by 12 minutes.",
      metrics: [
        { label: "Print Savings", value: "100%" },
        { label: "Average Upsell", value: "+24%" },
        { label: "Menu Load Speed", value: "0.2s" }
      ]
    }
  },
  {
    id: "nexus-saas-analytics",
    projectTitle: "Nexus Cloud Analytics Dashboard",
    category: "Dashboards",
    clientType: "FinTech & SaaS Platform",
    projectDescription: "Next-generation analytics console with real-time revenue visualization, cohort retention analysis, customer churn tracking, and automated reporting.",
    projectURL: "https://nexus-dashboard-demo.buildora.net",
    featured: false,
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "GraphQL", "Redis"],
    badge: "Executive Analytics Hub",
    image: {
      type: "svg-mockup",
      accent: "purple",
      title: "Nexus High-Concurrency Analytics",
      badge: "Real-Time Telemetry",
      stats: ["Interactive Charts", "Custom Role Permissions", "Automated Excel/PDF Export"]
    },
    caseStudy: {
      client: "Nexus Financial Technologies",
      industry: "Financial Software & B2B SaaS",
      challenge: "Executive management needed a single, unified view of subscription metrics, churn predictions, and customer acquisition costs across multiple payment processors.",
      solution: "Buildora designed and implemented an ultra-responsive dark-theme executive dashboard with live charts, drill-down data tables, and automated weekly PDF summary reports.",
      features: [
        "Real-time ARR, MRR, LTV, and CAC visual telemetry",
        "Interactive cohort retention heatmaps",
        "Customer search with full transaction timelines",
        "Export to spreadsheet and scheduled email reports",
        "Role-based security access for finance and leadership teams"
      ],
      results: "Centralized 4 data sources into one instant dashboard, saving the finance team 15 hours every week on manual metric compilation.",
      metrics: [
        { label: "Weekly Hours Saved", value: "15 hrs" },
        { label: "Query Speed", value: "< 80ms" },
        { label: "Data Accuracy", value: "99.99%" }
      ]
    }
  },
  {
    id: "quantum-holding-corporate",
    projectTitle: "Quantum Group Corporate Portal",
    category: "Business Websites",
    clientType: "Conglomerate Holding & Investment Firm",
    projectDescription: "Prestigious corporate web portal highlighting portfolio subsidiaries, investor relations, sustainability reports, and direct executive inquiries.",
    projectURL: "https://quantum-corp-demo.buildora.net",
    featured: false,
    technologies: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"],
    badge: "Corporate Flagship",
    image: {
      type: "svg-mockup",
      accent: "cyan",
      title: "Quantum Group Corporate Portal",
      badge: "International Standard",
      stats: ["Bilingual Global Reach", "Investor Relations", "Sub-Second Delivery"]
    },
    caseStudy: {
      client: "Quantum Capital & Holdings",
      industry: "Private Equity & Industrial Holdings",
      challenge: "The holding group needed an authoritative international website to attract foreign institutional partners and showcase 8 subsidiary operations.",
      solution: "Buildora designed a futuristic, clean corporate portal with subtle animations, interactive subsidiary profiles, investor press releases, and direct consultation booking.",
      features: [
        "Interactive interactive portfolio timeline and subsidiary grid",
        "Secure document repository for investor financials",
        "Executive leadership bios and corporate governance section",
        "Multi-language switcher (Arabic & English)",
        "Direct executive project request and partnership form"
      ],
      results: "Increased institutional partner inquiries by 85% in the first quarter post-launch and received industry recognition for digital excellence.",
      metrics: [
        { label: "Inquiry Growth", value: "+85%" },
        { label: "Google PageSpeed", value: "98/100" },
        { label: "Global Traffic", value: "+120%" }
      ]
    }
  },
  {
    id: "flowpay-merchant-platform",
    projectTitle: "FlowPay Merchant Checkout & API",
    category: "Web Applications",
    clientType: "FinTech Digital Payments Gateway",
    projectDescription: "High-security payment processing platform with developer API documentation, merchant webhooks, transaction fraud scoring, and live settlement stats.",
    projectURL: "https://flowpay-demo.buildora.net",
    featured: false,
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets"],
    badge: "FinTech Platform",
    image: {
      type: "svg-mockup",
      accent: "blue",
      title: "FlowPay Merchant Engine",
      badge: "PCI-DSS Compliant UX",
      stats: ["Tokenized Transactions", "Fraud Prevention", "Instant Webhooks"]
    },
    caseStudy: {
      client: "FlowPay Digital Systems",
      industry: "Financial Technology",
      challenge: "Building a developer-friendly merchant dashboard and checkout widget capable of processing high-volume transactions with zero downtime.",
      solution: "Buildora built the merchant management console and responsive embeddable payment modal with real-time webhook inspection and automated daily settlement reconciliations.",
      features: [
        "Embeddable secure checkout widget with wallet support",
        "Live transaction stream with fraud risk score indicators",
        "Developer API playground with copyable code snippets",
        "Detailed chargeback and refund management tools",
        "Automated WhatsApp notification for payout confirmations"
      ],
      results: "Successfully processed over 250,000 transactions during beta test with 99.99% system availability and zero data anomalies.",
      metrics: [
        { label: "System Uptime", value: "99.99%" },
        { label: "Beta Transactions", value: "250K+" },
        { label: "Fraud Detection", value: "< 0.01%" }
      ]
    }
  },
  {
    id: "vault-warehouse-inventory",
    projectTitle: "Vault Intelligent Inventory & POS",
    category: "Software",
    clientType: "Industrial Wholesale & Distribution",
    projectDescription: "Bespoke barcode-integrated warehouse management software with multi-location stock transfers, supplier purchase orders, and sales rep mobile tools.",
    projectURL: "https://vault-inventory-demo.buildora.net",
    featured: false,
    technologies: ["React", "Electron", "Node.js", "PostgreSQL", "Tailwind CSS"],
    badge: "Industrial Software",
    image: {
      type: "svg-mockup",
      accent: "teal",
      title: "Vault Warehouse & Stock Manager",
      badge: "Barcode Scanning Enabled",
      stats: ["Multi-Warehouse Sync", "Automated PO Generation", "Offline Cache Engine"]
    },
    caseStudy: {
      client: "Vault Industrial Distribution",
      industry: "Wholesale Electronics & Hardware",
      challenge: "Discrepancies between 3 physical warehouses and sales rep order quotes resulted in stockouts, delayed customer shipments, and lost revenue.",
      solution: "Buildora built a dedicated warehouse management software with handheld barcode scanner support, real-time inventory allocation, and automatic purchase order reorders.",
      features: [
        "Instant barcode scanning for item check-in and checkout",
        "Automated low-inventory thresholds and vendor replenishment alerts",
        "Field sales rep mobile ordering with live warehouse reserve checking",
        "Batch serial number and warranty tracking",
        "Comprehensive gross profit and inventory turnover reports"
      ],
      results: "Warehouse inventory counting time reduced by 75%, and stockout incidents decreased by 92% in the first 6 months.",
      metrics: [
        { label: "Audit Time", value: "-75%" },
        { label: "Stockouts", value: "-92%" },
        { label: "Stock Accuracy", value: "99.8%" }
      ]
    }
  }
];
