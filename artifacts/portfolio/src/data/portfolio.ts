
/**
 * ============================================================
 *  PORTFOLIO CONTENT — Edit everything here
 * ============================================================
 *
 *  IMAGES
 *  ------
 *  All images live in:  artifacts/portfolio/public/images/
 *
 *  To replace an image:
 *    1. Copy your new image into that folder.
 *    2. Update the filename string below (e.g. "hero-illustration.png").
 *
 *  The BASE_URL prefix is added automatically by the app — you only
 *  need to supply the filename (or a relative path inside /images/).
 *
 * ============================================================
 */

// --------------- HERO ---------------
export const hero = {
  greeting: "Hi! I'm Rifda.",
  subtitle:
    "A Product Designer dedicated to solving problems with data-informed strategy and purposeful design. Building experiences that matter.",
  cta1: { label: "View My Work", href: "#work" },
  cta2: { label: "Get to Know Me", href: "#about" },
  /** Replace with your own illustration filename inside public/images/ */
  image: "Hero-portofolio-image.png ",
  imageAlt: "Product Designer Illustration",
};

// --------------- PHILOSOPHY STRIP ---------------
export const philosophies = [
  {
    title: "Design with Intention",
    description:
      "Every pixel serves a purpose. No decorative fluff, just meaningful choices.",
  },
  {
    title: "Solving Problems",
    description:
      "Focusing on root user pain points rather than surface-level symptoms.",
  },
  {
    title: "Make Impacts",
    description:
      "Driving measurable business metrics through strategic design solutions.",
  },
];

// --------------- CASE STUDIES ---------------
/**
 * Add as many case studies as you like.
 * Each one gets its own detail page at /case-study/<slug>.
 *
 * IMAGES: put cover image in public/images/ and reference filename below.
 *
 * DETAIL PAGE fields:
 *   - overview    : short intro paragraph shown at the top of the detail page
 *   - problem     : what problem were you solving?
 *   - process     : how did you approach it? (supports HTML or plain text)
 *   - outcome     : results / impact
 *   - processSteps: step-by-step breakdown (title + description pairs)
 *   - gallery     : additional images for the detail page (filenames in public/images/)
 */
export const caseStudies = [
  {
    slug: "smart-murojaah",
    title: "Smart Murojaah Web App to Solve My Problem",
    description:
      "A comprehensive web application designed to help users track and maintain their memorization routines efficiently through gamification.",
    tags: ["Product Strategy", "UX Research", "Web App"],
    /** Cover image shown in the card grid */
    image: "case-study-1.png",
    /** Light background behind the card image */
    color: "bg-blue-50",
    // ---- Detail page content ----
    overview:
      "As a hafidz who struggled to maintain my Quran memorization routine, I decided to design and build a tool that solves my own problem — then scaled it for others facing the same challenge.",
    problem:
      "Memorizing and reviewing the Quran (murojaah) requires daily repetition, but without a structured tracker, it's easy to lose progress, forget which sections were reviewed, and lose motivation over time.",
    outcome:
      "After 3 months of iteration, the app achieved a 78% daily retention rate among early users, with an average session length of 18 minutes — well above the initial target of 10 minutes.",
    processSteps: [
      {
        title: "Discovery & Research",
        description:
          "Conducted 12 user interviews with active memorizers across three Islamic schools. Identified the top pain points: no visibility into streaks, inability to schedule reviews, and lack of progress milestones.",
      },
      {
        title: "Information Architecture",
        description:
          "Mapped out the memorization curriculum structure (30 Juz → Surah → Ayah) and designed a data model that could track granular progress at each level without overwhelming the UI.",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Built three low-fidelity wireframe prototypes in Figma and tested each with 5 users. Iterated on the dashboard layout twice based on task-completion feedback.",
      },
      {
        title: "Visual Design & Handoff",
        description:
          "Designed a calm, focused visual system using a cool green palette to evoke clarity. Delivered a Figma component library and detailed specs to the development team.",
      },
    ],
    /** Extra images shown in the detail page gallery (filenames in public/images/) */
    gallery: ["case-study-1.png"],
  },

  {
    slug: "ecommerce-checkout",
    title: "E-commerce Checkout Optimization",
    description:
      "Redesigning the checkout flow to reduce cart abandonment rate by 24% for a mid-sized fashion retailer.",
    tags: ["Conversion", "A/B Testing", "Mobile UI"],
    image: "case-study-surplus.png",
    color: "bg-orange-50",
    overview:
      "Partnered with an online fashion retailer to diagnose and redesign a checkout experience that was costing them significant revenue through high abandonment rates.",
    problem:
      "The existing checkout had 7 steps, required account creation, and showed shipping costs only at the final step — a classic dark pattern that was driving 68% abandonment.",
    outcome:
      "The redesigned checkout reduced abandonment by 24%, increased mobile conversion by 31%, and raised the average order value by 12% through smart upsell placement.",
    processSteps: [
      {
        title: "Funnel & Heatmap Analysis",
        description:
          "Analyzed 90 days of Hotjar session recordings and Google Analytics funnel data. Pinpointed the exact step where 40% of users dropped off (step 5: shipping options).",
      },
      {
        title: "Competitive Benchmarking",
        description:
          "Audited checkout flows from 8 leading e-commerce brands. Identified best practices: guest checkout, progress indicators, inline validation, and upfront cost transparency.",
      },
      {
        title: "Rapid Iteration",
        description:
          "Collapsed 7 steps into 3. Moved shipping cost preview to the cart page. Added a persistent order summary sidebar. Ran an A/B test with 50/50 traffic split.",
      },
      {
        title: "Results & Measurement",
        description:
          "Monitored KPIs for 30 days post-launch. Checkout completion rate rose from 32% to 56%. Mobile UX score (SUS) improved from 62 to 81.",
      },
    ],
    gallery: ["case-study-2.png"],
  },

  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard Redesign",
    description:
      "Simplifying complex data visualization to help marketing managers make faster, more confident decisions.",
    tags: ["Data Viz", "Design System", "B2B SaaS"],
    image: "case-study-aman.png",
    color: "bg-green-50",
    overview:
      "A B2B SaaS client needed their analytics dashboard redesigned — their power users loved the depth, but new users churned within the first two weeks because the interface was overwhelming.",
    problem:
      "The original dashboard had 14 widgets on a single screen, no progressive disclosure, and required users to understand SQL-like filter syntax to get value.",
    outcome:
      "New user activation (reaching 'first insight') improved by 47%. Average time-to-first-insight dropped from 22 minutes to 6 minutes. NPS improved from +12 to +34.",
    processSteps: [
      {
        title: "User Segmentation",
        description:
          "Identified three distinct user personas: Power Users, Casual Reviewers, and Executive Viewers. Each had fundamentally different needs and usage patterns.",
      },
      {
        title: "Information Hierarchy Redesign",
        description:
          "Applied progressive disclosure: a top-level summary view for Executives, a drill-down layer for Casual Reviewers, and an advanced mode for Power Users — all accessible without cluttering the default view.",
      },
      {
        title: "Design System Creation",
        description:
          "Built a chart component library from scratch with 12 chart types, consistent color encoding for metrics, and accessible contrast ratios (WCAG AA).",
      },
      {
        title: "Usability Testing",
        description:
          "Ran moderated usability tests with 9 participants across all three persona types. The redesigned interface passed all critical task scenarios in under 3 minutes.",
      },
    ],
    gallery: ["case-study-3.png"],
  },

  {
    slug: "shonic-ecommerce",
    title: "SHONIC Electronic E-Commerce",
    description:
      "Designing an end-to-end shopping experience for an electronics retailer — from product discovery to seamless checkout.",
    tags: ["E-Commerce", "Mobile UI", "UX Research"],
    image: "case-study-surplus.png",
    color: "bg-indigo-50",
    /** Opens an external URL instead of the internal case study page */
    externalUrl:
      "https://grave-pentagon-89c.notion.site/SHONIC-Electronic-E-Commerce-36b2139deaac802db96aebc27e665a19?pvs=143",
    overview:
      "SHONIC is an electronics e-commerce platform redesigned to help users confidently compare, choose, and purchase gadgets with a fast and trustworthy experience.",
    problem:
      "Users struggled to compare technical specs across products, had low trust in product authenticity, and faced a cluttered checkout that led to high cart abandonment.",
    outcome:
      "The redesign improved product page engagement by 41%, reduced checkout drop-off by 29%, and raised the mobile NPS from +18 to +46.",
    processSteps: [
      {
        title: "Discovery & Research",
        description:
          "Conducted competitive analysis of leading electronics e-commerce platforms and interviewed 15 shoppers to map pain points around product comparison and trust signals.",
      },
      {
        title: "Information Architecture",
        description:
          "Restructured category navigation and spec comparison flows to reduce cognitive load and help users reach the right product faster.",
      },
      {
        title: "UI Design",
        description:
          "Created a clean, tech-forward visual system with a dark-accent palette, high-quality product imagery, and a streamlined 3-step checkout.",
      },
      {
        title: "Usability Testing",
        description:
          "Ran 2 rounds of moderated testing with 8 participants. Iterated on the comparison table and cart summary based on task-failure feedback.",
      },
    ],
    gallery: ["case-study-surplus.png"],
  },

  {
    slug: "water-hydration-reminder",
    title: "Water Hydration Reminder Feature",
    description:
      "Designing a smart hydration tracking feature that nudges users to drink more water through personalized reminders and progress visualization.",
    tags: ["Health App", "Feature Design", "Mobile UI"],
    image: "case-study-2.png",
    color: "bg-cyan-50",
    /** Opens an external URL instead of the internal case study page */
    externalUrl:
      "https://grave-pentagon-89c.notion.site/Water-Hydration-Reminder-Feature-36b2139deaac8045a471ddadc88fd167?pvs=143",
    overview:
      "Designed a hydration reminder feature for a wellness app that helps users build consistent daily water intake habits through gentle nudges, visual progress, and smart scheduling.",
    problem:
      "Most users knew they should drink more water but consistently forgot throughout the day — existing reminder apps felt intrusive and were quickly disabled.",
    outcome:
      "Daily active usage of the feature reached 68% within the first month. Users who engaged with the reminder logged 40% more water intake on average.",
    processSteps: [
      {
        title: "User Research",
        description:
          "Surveyed 200+ users and ran diary studies to understand when and why people forget to hydrate throughout the day.",
      },
      {
        title: "Behavioral Design",
        description:
          "Designed a non-intrusive reminder system that adapts timing based on user activity patterns, reducing notification fatigue.",
      },
      {
        title: "Progress Visualization",
        description:
          "Created a satisfying water glass fill animation and daily ring chart so users feel rewarded for each log entry.",
      },
      {
        title: "Personalization Flow",
        description:
          "Built an onboarding flow that calculates a recommended daily goal based on weight, activity level, and climate — and lets users adjust it at any time.",
      },
    ],
    gallery: ["case-study-2.png"],
  },

  {
    slug: "healthcare-appointment",
    title: "Healthcare Appointment Booking",
    description:
      "Reimagining a hospital's appointment booking system to reduce no-shows and make scheduling 3x faster for patients.",
    tags: ["Healthcare", "Service Design", "Mobile UI"],
    image: "case-study-3.png",
    color: "bg-pink-50",
    overview:
      "Partnered with a regional hospital network to overhaul their patient-facing appointment booking — both the mobile app and the web portal — to reduce friction for patients and admin overhead for staff.",
    problem:
      "The legacy system required patients to call during office hours, used confusing medical terminology, and had a 22% no-show rate due to lack of reminders and easy reschedule options.",
    outcome:
      "Self-service bookings rose by 71%, no-show rate dropped to 9%, and call-center booking volume decreased by 54% — freeing up staff for higher-value support.",
    processSteps: [
      {
        title: "Patient Journey Mapping",
        description:
          "Mapped the end-to-end patient experience from symptom recognition to post-visit follow-up across 4 patient personas.",
      },
      {
        title: "Plain-Language Specialty Selector",
        description:
          "Replaced medical jargon with symptom-based search ('Why are you visiting?') that maps to the correct specialty automatically.",
      },
      {
        title: "Smart Scheduling",
        description:
          "Designed a calendar view that shows real-time availability across nearby clinics, with one-tap reschedule and auto-reminders via SMS and push.",
      },
      {
        title: "Staff Companion App",
        description:
          "Built a lightweight admin view for front-desk staff to manage walk-ins and reassign appointments without leaving the same system patients use.",
      },
    ],
    gallery: ["case-study-3.png"],
  },
];

// --------------- UI GALLERY ---------------
/**
 * Gallery items shown in the UI Gallery section.
 * Add more items by appending to this array.
 */
export const galleryItems = [
  {
    title: "Dashboard Components",
    tag: "Web UI",
    /** Image filename in public/images/ */
    image: "gallery-1.png",
  },
  {
    title: "Mobile App Screens",
    tag: "Mobile UI",
    image: "gallery-dipay.png",
  },
  {
    title: "Data Visualization",
    tag: "Data Kit",
    image: "gallery-3.png",
  },
];

// --------------- ABOUT ME ---------------
export const about = {
  /** Your profile photo filename in public/images/ */
  avatar: "avatar.png",
  bio: [
    "I'm a Product Designer with over 5 years of experience crafting digital products that balance user needs with business goals. My background in psychology and data science gives me a unique perspective on human-computer interaction.",
    "I believe great design isn't just about how things look — it's about how they work, how they feel, and how they solve real problems. I thrive in agile environments where I can collaborate closely with engineering and product management teams.",
    "When I'm not pushing pixels, you can find me analyzing user behavioral patterns, building comprehensive design systems, or mentoring junior designers in the community.",
  ],
  skills: [
    "Product Strategy",
    "UX Research",
    "Data Analysis",
    "Design Systems",
    "Prototyping",
    "A/B Testing",
    "Information Architecture",
    "Behavioral Design",
  ],
  availabilityBadge: "Currently available for new opportunities",
};

// --------------- BLOG POSTS ---------------
/**
 * Add or edit blog post entries here.
 * These are displayed in the Latest Thoughts section.
 */
export const blogPosts = [
  {
    date: "Oct 24, 2024",
    readTime: "5 min read",
    title: "The Role of Data in Design Decisions",
    excerpt:
      "How to balance qualitative user research with quantitative analytics to make better product design choices.",
    href: "#",
  },
  {
    date: "Sep 12, 2024",
    readTime: "8 min read",
    title: "Building Design Systems That Scale",
    excerpt:
      "A practical guide to architecting a design system that developers and designers actually want to use.",
    href: "#",
  },
  {
    date: "Aug 05, 2024",
    readTime: "4 min read",
    title: "User Research in Agile Environments",
    excerpt:
      "Strategies for integrating continuous user discovery into rapid two-week development sprints.",
    href: "#",
  },
  {
    date: "Jul 18, 2024",
    readTime: "6 min read",
    title: "The Psychology of Onboarding",
    excerpt:
      "Why the first 5 minutes define your product's retention rate, and how to optimize for the 'Aha!' moment.",
    href: "#",
  },
];

// --------------- CONTACT / FOOTER ---------------
export const contact = {
  heading: "Let's Work Together",
  subtext:
    "I'm always interested in discussing new opportunities, design challenges, or just having a conversation about design strategy and user research.",
  email: "hello@rifda.design",
  socials: {
    linkedin: "https://linkedin.com/in/rifda",
    dribbble: "https://dribbble.com/rifda",
    twitter: "https://twitter.com/rifda",
  },
  copyright: "Rifda",
};
