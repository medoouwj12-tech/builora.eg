/**
 * BUILDORA - Centralized Site Configuration
 * 
 * All company details, phone numbers, WhatsApp configurations, social links,
 * statistics, FAQs, and brand messaging are defined here.
 * You can edit any value in this file without modifying the UI components.
 */

export const siteConfig = {
  // Brand Identity
  companyName: "BUILDORA",
  tagline: "Building Digital Experiences That Matter",
  secondaryTagline: "We Build. You Grow.",
  badgeText: "NEXT-GEN SOFTWARE & PROGRAMMING",
  description: "Buildora creates high-performance websites, web applications, business systems, e-commerce platforms, booking engines, and custom software solutions designed to turn ideas into real digital products.",
  
  // Contact & Social Details
  contact: {
    phoneDisplay: "01157554462",
    phoneTel: "+201157554462",
    whatsappNumber: "201157554462",
    whatsappUrl: "https://wa.me/201157554462",
    email: "contact@buildora.net",
    address: "Cairo, Egypt",
    workingHours: "Saturday – Thursday: 10:00 AM – 8:00 PM (Cairo Time)",
    responseGuarantee: "Under 15 minutes via WhatsApp"
  },

  socialLinks: {
    whatsapp: "https://wa.me/201157554462",
    facebook: "https://www.facebook.com/share/1C2LbwU41n/",
    instagram: "https://www.instagram.com/buildorra.eg/",
    linkedin: "https://linkedin.com/company/buildora",
    github: "https://github.com/buildora-tech"
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  // Trust & Counter Statistics (Editable)
  statistics: [
    {
      id: "projects",
      number: 45,
      suffix: "+",
      label: "Projects Completed",
      subtext: "Delivered on schedule & budget"
    },
    {
      id: "clients",
      number: 38,
      suffix: "+",
      label: "Happy Clients",
      subtext: "Across Egypt & the MENA region"
    },
    {
      id: "websites",
      number: 30,
      suffix: "+",
      label: "Websites Delivered",
      subtext: "High-speed, SEO optimized"
    },
    {
      id: "systems",
      number: 15,
      suffix: "+",
      label: "Custom Systems Built",
      subtext: "ERPs, CRMs & custom workflows"
    }
  ],

  // Trust Badges
  trustBadges: [
    "Enterprise Security Standards",
    "99.9% Uptime Guarantee",
    "Continuous Post-Launch Support",
    "Tailored Scalable Architecture"
  ],

  // Process Steps (7 Steps)
  processSteps: [
    {
      step: "01",
      title: "Discovery",
      description: "We deeply analyze your business model, customer journey, specific requirements, and long-term expansion goals.",
      deliverable: "Project Scope & Technical Roadmap",
      icon: "Search"
    },
    {
      step: "02",
      title: "Planning",
      description: "We architect the software structure, database schemas, feature requirements, and technical technology stack.",
      deliverable: "System Architecture & Milestones",
      icon: "Layers"
    },
    {
      step: "03",
      title: "Design",
      description: "We craft an ultra-modern, intuitive user interface with high-fidelity prototypes and conversion-focused UX patterns.",
      deliverable: "Interactive UI/UX Prototypes",
      icon: "Layout"
    },
    {
      step: "04",
      title: "Development",
      description: "Our engineering team writes clean, modular, and high-performance code adhering to international enterprise best practices.",
      deliverable: "Scalable Full-Stack Application",
      icon: "Code2"
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous quality assurance: end-to-end functionality, cross-browser compatibility, mobile responsiveness, and load testing.",
      deliverable: "QA Security & Performance Audit",
      icon: "ShieldCheck"
    },
    {
      step: "06",
      title: "Launch",
      description: "Zero-downtime deployment to secure production cloud servers, CDN configuration, domain linking, and database initialization.",
      deliverable: "Live Production Deployment",
      icon: "Rocket"
    },
    {
      step: "07",
      title: "Support",
      description: "Continuous proactive monitoring, system maintenance, regular security patches, backups, and feature enhancements.",
      deliverable: "Dedicated 24/7 SLA & Maintenance",
      icon: "HeartHandshake"
    }
  ],

  // 10 Pillars: Why Choose Buildora
  whyChooseUs: [
    {
      title: "Modern Technology",
      description: "We utilize cutting-edge frameworks (React, Next.js, Node.js, Python, Tailwind) that ensure your digital product stays modern for years.",
      icon: "Cpu"
    },
    {
      title: "Custom Solutions",
      description: "No generic templates. Every line of code and user interface is engineered specifically for your business workflow.",
      icon: "Wrench"
    },
    {
      title: "Responsive Design",
      description: "Flawless mobile, tablet, laptop, and ultra-wide desktop experiences with touch-optimized interfaces and micro-interactions.",
      icon: "Smartphone"
    },
    {
      title: "High Performance",
      description: "Sub-second load times, optimized assets, efficient algorithms, and 95+ Google Lighthouse scores for maximum speed.",
      icon: "Zap"
    },
    {
      title: "Professional UI/UX",
      description: "World-class visual aesthetics that elevate your brand equity and guide users intuitively toward conversions.",
      icon: "Sparkles"
    },
    {
      title: "Scalable Architecture",
      description: "Engineered to effortlessly handle 10x traffic spikes, data growth, and future feature expansions without rewrites.",
      icon: "TrendingUp"
    },
    {
      title: "SEO-Friendly Development",
      description: "Semantic HTML5, automated schema markup, rapid SSR/SSG rendering, and OpenGraph integration for top Google rankings.",
      icon: "SearchCheck"
    },
    {
      title: "Secure Development",
      description: "Enterprise data encryption, sanitized inputs, CSRF protection, secure auth protocols, and regular vulnerability audits.",
      icon: "ShieldAlert"
    },
    {
      title: "Continuous Support",
      description: "We partner with you for the long run with proactive maintenance, server monitoring, and on-demand technical guidance.",
      icon: "LifeBuoy"
    },
    {
      title: "Fast Communication",
      description: "Direct WhatsApp hotline with rapid response times and transparent sprint updates throughout your project lifecycle.",
      icon: "MessageSquareQuote"
    }
  ],

  // FAQ Accordion Data
  faqs: [
    {
      question: "How much does a website or custom software cost?",
      answer: "Every project is tailored to your exact business requirements. We offer flexible tiers starting from affordable landing pages to complex enterprise custom systems. You can select your estimated budget range in our project request form (from under 5,000 EGP to 50,000+ EGP), and we provide a transparent, itemized proposal before starting any work."
    },
    {
      question: "How long does a project take to complete?",
      answer: "A standard high-performance business website or restaurant digital menu typically takes 7 to 14 business days. Complex custom business management systems, custom booking platforms, or full-scale e-commerce solutions usually take between 3 to 6 weeks. We establish clear milestone timelines at the start."
    },
    {
      question: "Can Buildora create custom software specifically for my business workflow?",
      answer: "Yes! Custom software development is our specialty. We build tailor-made internal systems, ERP solutions, warehouse/inventory trackers, employee management platforms, and automated workflow tools designed around how your company actually operates."
    },
    {
      question: "Do you build online booking and reservation systems?",
      answer: "Absolutely. We build interactive appointment and booking engines for clinics, salons, consulting firms, rental services, and event venues with automated WhatsApp/email notifications, time slot locking, and payment gateway integration."
    },
    {
      question: "Can you create custom admin dashboards for my business?",
      answer: "Yes. We build powerful, secure, real-time admin dashboards with role-based access control (RBAC), analytics charts, data export (Excel/PDF), customer logs, and full management controls so you can effortlessly oversee your entire operation."
    },
    {
      question: "Do you build e-commerce websites with payment gateways?",
      answer: "Yes! We build modern online stores equipped with product catalogs, shopping carts, discount systems, order tracking, and seamless integration with Egyptian and international payment gateways (Paymob, Fawry, Vodafone Cash, Stripe, Credit Cards)."
    },
    {
      question: "Can you redesign or upgrade my existing website?",
      answer: "Definitely. We can take your existing website or application and modernize its UI/UX, re-code it on a modern tech stack, optimize its speed, make it mobile-responsive, and integrate new features without losing your existing content or SEO ranking."
    },
    {
      question: "Do you provide technical support after launch?",
      answer: "Yes, all Buildora projects include a complimentary post-launch warranty and technical support period. We also offer ongoing monthly maintenance packages covering cloud backups, security updates, feature additions, and 24/7 emergency monitoring."
    }
  ],

  // Testimonials Structure (Clean, professional, ready for verified client reviews)
  testimonials: [
    {
      id: 1,
      name: "Ahmed Mostafa",
      role: "Founder & CEO",
      company: "Apex Logistics & Trade",
      content: "Buildora built our custom business management system and transformed how our operations team handles cargo tracking and billing. The system is fast, intuitive, and the WhatsApp customer notification integration saved us dozens of hours weekly.",
      rating: 5,
      projectType: "Custom ERP & Operations System"
    },
    {
      id: 2,
      name: "Dr. Sherif El-Gazzar",
      role: "Medical Director",
      company: "Elite Care Specialized Clinics",
      content: "Our clinic booking system developed by Buildora has been completely flawless. Patients easily book consultations on mobile, staff schedules are synchronized in real-time, and no-shows dropped by over 40%. Highly professional engineers.",
      rating: 5,
      projectType: "Clinic Booking & Patient Portal"
    },
    {
      id: 3,
      name: "Karim Mansour",
      role: "Managing Partner",
      company: "Urban Bistro Hospitality Group",
      content: "The QR digital menu and ordering dashboard Buildora created for our 3 branches is incredible. Our managers can update prices, food photos, and specials instantly from their phones. Customers love the smooth, futuristic design.",
      rating: 5,
      projectType: "Restaurant QR Digital Menu & POS"
    }
  ]
};
