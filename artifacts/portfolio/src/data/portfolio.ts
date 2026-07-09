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
    "I enjoy working across research, design, and collaboration to solve complex problems and build products that are useful, meaningful, and accessible for the people.",
  cta1: { label: "View My Work", href: "#work" },
  cta2: { label: "Get to Know Me", href: "#about" },
  /** Replace with your own illustration filename inside public/images/ */
  image: "Hero-portofolio-image.png ",
  imageAlt: "Product Designer Illustration",
};

// --------------- PHILOSOPHY STRIP ---------------
export const philosophies = [
  {
    title: "Connect the Dots",
    description:
      "Bringing together user needs, business goals, and technical realities to solve problems and shape better solutions.",
  },
  {
    title: "Design with Intention",
    description: "Understanding the why before shaping the how.",
  },
  {
    title: "Create Meaningful Impact",
    description:
      "Turning insights and ideas into improvements people can actually feel.",
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
    slug: "dipay-onboarding",
    title: "Merchant Onboarding Flow",
    description:
      "Turning an 8.52% merchant verification rate into a streamlined flow — by solving the three root causes that made registration fail: outlet photos, selfie+KTP, and incomplete addresses.",
    tags: ["Real Project", "User Research", "Flow Redesign", "Mobile App", "Fraud & Ops Tradeoffs"],
    image: "gallery-dipay-mobile.png",
    color: "bg-blue-50",
    overview:
      "Dipay Bisnis drives ~95% of QRIS transactions through its Acquirer on-us model. Yet only 8.52% of registered merchants completed verification — meaning ~91.48% were lost before going live.",
    problem:
      "Three ops rejection reasons caused most failures: outlet photos not meeting requirements, selfie+e-KTP photos failing review, and incomplete outlet addresses.",
    outcome:
      "Gallery upload with GPS watermark, Liveness verification replacing selfie+KTP, and cascading address dropdowns tied to PTEN — each designed to eliminate the failure mode, not just reduce it.",
    processSteps: [
      { title: "Funnel Analysis", description: "Analyzed 8 months of registration data. Less than 5 in 10 merchants who began registration completed verification — a systematic failure at the most critical gate." },
      { title: "Ops Rejection Deep-dive", description: "Mapped the three top rejection reasons from ops data and conducted user research to understand the why behind each failure pattern." },
      { title: "Solution Design", description: "Designed three targeted fixes: gallery upload + GPS watermark for outlet photos, Liveness check for identity, and PTEN-linked dropdowns for address." },
    ],
    gallery: [],
  },
  {
    slug: "surplus-ecofriendly-cashback",
    title: "Extra Cashback Eco-friendly",
    description:
      "Redesigning a broken eco-friendly cashback system — fixing the flow across customer app, merchant app, and web admin to make a promising sustainability feature finally work.",
    tags: ["Sustainability", "Multi-platform", "Flow Redesign", "Mobile App"],
    image: "surplus-ecofriendly-cover.png",
    color: "bg-green-50",
    overview:
      "Surplus had an eco-friendly cashback feature that rewarded customers for using their own bags at pick-up. But the 3-party flow (customer → merchant → web admin) was broken at every step: no system, no manpower, and no clear guidance.",
    problem:
      "Users who tried the feature didn't receive cashback. Merchants didn't know what to photograph. Web admin had no validation tool. Survey data showed users were confused and frustrated.",
    outcome:
      "Rebuilt the end-to-end flow with automated cashback validation, Slack notifications for finance, and clear in-app guidance for all three parties.",
    processSteps: [
      { title: "Survey & UX Audit", description: "Analyzed 2023 satisfaction survey data and audited the existing 3-party flow to identify the exact failure points on each side." },
      { title: "Flow Redesign", description: "Rebuilt the customer, merchant, and web admin flows in parallel — automating validation, clarifying T&C, and adding real-time notifications." },
      { title: "Scoping & Rules", description: "Narrowed the feature scope to eco bags/totebags/paperbags and documented clear accept/reject criteria for validators and merchants." },
    ],
    gallery: [],
  },
  {
    slug: "surplus-merchant-map",
    title: "Search Merchant by Map",
    description:
      "A map-based discovery feature that lets Surplus users see all nearby merchant locations at a glance — eliminating the friction of opening each merchant card one by one.",
    tags: ["Map Discovery", "User Research", "Mobile App", "Usability Testing"],
    image: "surplus-map-cover.png",
    color: "bg-orange-50",
    overview:
      "In H1 2023, only 10.80% of active Surplus users completed a transaction. Research showed 31% struggled to find merchants — the highest pain point in the funnel. This feature introduced a map view so pick-up users could discover and plan purchases spatially.",
    problem:
      "Users had to open each merchant card individually to check location. Distances shown in the list were often inaccurate, causing frustration for pick-up users who rely on proximity as their first filter.",
    outcome:
      "The feature achieved a 72.9% adoption rate post-launch, contributing to higher order completion rates across the Surplus platform.",
    processSteps: [
      {
        title: "Data Analysis & Survey",
        description:
          "Analyzed Mixpanel and Google Analytics data for H1 2023. Cross-referenced with a user satisfaction survey (Survei Kepuasan) that revealed 31% of users struggled with merchant discovery.",
      },
      {
        title: "User Interviews",
        description:
          "Conducted in-depth interviews to understand pick-up behavior. Found that location/distance was the primary consideration before menu or price, and users often planned pick-ups around existing routes.",
      },
      {
        title: "Feature Design",
        description:
          "Designed an interactive map view showing merchants within a 20 km radius with 3 icon states (active, non-active, selected) and a swipeable bottom bar for previewing merchant details.",
      },
      {
        title: "Usability Testing",
        description:
          "Tested a Figma prototype with 4 respondents across ease of use, speed, and helpfulness scales. All dimensions scored above 8/10 (Acceptable threshold).",
      },
    ],
    gallery: [],
  },
  {
    slug: "smart-murojaah",
    title: "Smart Murojaah: From Personal Struggle to Shipped Product",
    description:
      "A mobile-first web app built to support independent Quran memorization through recitation validation, verse repetition, memorization progress tracking, and sambung ayat practice.",
    tags: ["Solo Build", "Mobile Web App", "EdTech", "AI"],
    /** Cover image shown in the card grid */
    image: "smart-murojaah-banner.png",
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
    slug: "dipay-settlement",
    title: "Streamlining Settlement & Reconciliation Process",
    description:
      "Redesigning Dipay's internal settlement operations to eliminate manual reconciliation and save Finance teams 4–5 hours per settlement cycle.",
    tags: ["Operational UX", "Internal Tool", "Dashboard", "Fintech"],
    image: "dipay-settlement-banner.png",
    color: "bg-blue-50",
    overview:
      "Finance teams at Dipay spent almost an entire working day per settlement cycle manually comparing spreadsheets and downloading reports one-by-one. This project redesigned the full settlement and reconciliation workflow inside Dipay's Core Dashboard.",
    problem:
      "Settlement operations relied on manual reconciliation across 50–70 merchants per batch, with a UI that reset filters after every export — making every Monday a multi-hour ordeal of repetitive, error-prone work.",
    outcome:
      "Automated reconciliation engine reduced processing time by 4–5 hours per cycle, eliminated manual spreadsheet exports, and surfaced anomalies instantly instead of requiring row-by-row comparison.",
    processSteps: [
      {
        title: "Operational Research",
        description:
          "Conducted deep interviews and workflow walkthroughs with Finance and Operations teams to map where time was actually being lost — mostly outside the 'decision-making' process, in downloads, refreshes, and manual comparisons.",
      },
      {
        title: "Settlement Lifecycle Mapping",
        description:
          "Documented the full lifecycle from Settlement Request to Disbursement & Retry, identifying bottlenecks at the reconciliation and operational review stages.",
      },
      {
        title: "Automation Boundary Design",
        description:
          "Worked with backend engineers to define what could safely be automated. Designed a hybrid model: automate high-confidence cases, escalate uncertain ones for human review.",
      },
      {
        title: "System & UI Design",
        description:
          "Designed the two-status reconciliation engine, anomaly highlighting, multi-level approval workflow, and failed settlement retry flow — each addressing a specific operational failure mode.",
      },
    ],
    gallery: ["gallery-dipay.png"],
  },

  {
    slug: "ecommerce-checkout",
    title: "Decrease the cancellation rate of Surplus Order",
    description:
      "Redesigning the end-to-end checkout flow to reduce order cancellation and improve conversion across the Surplus marketplace.",
    tags: ["Checkout Flow", "Data Analysis", "Conversion", "Mobile App"],
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
    title: "AMAN Dashboard Revamping",
    description:
      "Simplifying complex data visualization to help marketing managers make faster, more confident decisions.",
    tags: ["Dashboard", "Design System", "B2B SaaS", "Data Viz"],
    image: "case-study-aman.png",
    color: "bg-green-50",
    externalUrl: "https://grave-pentagon-89c.notion.site/AMAN-Dashboard-Revamp-37a2139deaac803a8288fa6ccdf2d806",
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
    tags: ["E-Commerce", "UI Design", "Design System", "Usability Testing"],
    image: "shonic-banner.webp",
    color: "bg-blue-50",
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
    tags: ["Wellness App", "Behavioral Design", "Mobile App", "Prototyping"],
    image: "water-hydration-banner.webp",
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
    slug: "dearhope",
    title: "DearHope, Bring New Hope",
    description:
      "Designing a mental health companion app that provides mood tracking, self-care recommendations, and a safe space for users to share their feelings.",
    tags: ["Mental Health", "Mobile App", "UI Design"],
    image: "dear-hope-banner.png",
    color: "bg-blue-50",
    externalUrl:
      "https://grave-pentagon-89c.notion.site/Dear-Hope-0289acea37fe47ce9db642774af14d67",
    overview:
      "DearHope is a mental health companion app designed to help users track their mood, access self-care content, and connect with a supportive community.",
    problem:
      "Many people struggle to find accessible and non-stigmatizing mental health support in their daily lives.",
    outcome:
      "The app provides a safe, personalized space for users to reflect on their emotions and take proactive steps toward better mental well-being.",
    processSteps: [],
    gallery: [],
  },

  {
    slug: "the-analog-cameras-platform",
    title: "The Analog — Analog Cameras Platform",
    description:
      "Crafting a community-driven marketplace and discovery platform for analog photography enthusiasts to buy, sell, and celebrate film cameras.",
    tags: ["Exploration Project", "Desk Research", "Storyboard", "Conceptual model", "Wireframe", "UI Design"],
    image: "analog-cameras-banner.webp",
    color: "bg-slate-100",
    /** Opens an external URL instead of the internal case study page */
    externalUrl:
      "https://grave-pentagon-89c.notion.site/The-Analog-Analog-Cameras-Platform-36b2139deaac80a9a11fc97642b316df?pvs=143",
    overview:
      "The Analog is a platform designed for film photography lovers — a space to discover, trade, and celebrate analog cameras with a community that shares the same passion.",
    problem:
      "Analog camera enthusiasts had no dedicated space that combined a trusted marketplace with community content, leaving them scattered across generic listing sites and social media groups.",
    outcome:
      "The platform launched with 1,200 early sign-ups in the first two weeks. Listing-to-inquiry conversion reached 34%, well above the 18% benchmark for niche marketplaces.",
    processSteps: [
      {
        title: "Community Research",
        description:
          "Interviewed 20 analog photographers and lurked in film photography communities to understand buying behaviour, trust signals, and the emotional connection to gear.",
      },
      {
        title: "Marketplace Architecture",
        description:
          "Designed a listing flow that captures camera condition, provenance, and test shots — building trust between strangers buying vintage equipment.",
      },
      {
        title: "Visual Identity",
        description:
          "Developed a warm, grain-textured aesthetic inspired by darkroom aesthetics and vintage camera manuals to feel authentic to the community.",
      },
      {
        title: "Discovery & Feed",
        description:
          "Built a curated editorial feed alongside the marketplace so users could browse inspiration and community stories, not just listings.",
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
    title: "Dipay — Mobile App",
    tag: "Mobile UI",
    image: "gallery-dipay-mobile.png",
  },
  {
    title: "Bakeriou — Bakery App",
    tag: "Mobile UI",
    image: "gallery-bakeriou.png",
  },
  {
    title: "E-Class — Learning Platform",
    tag: "Mobile UI",
    image: "gallery-eclass.png",
  },
  {
    title: "Sport — Fitness App",
    tag: "Mobile UI",
    image: "gallery-sport.png",
  },
  {
    title: "Dear Hope — Mental Health App",
    tag: "Mobile UI",
    image: "gallery-dearhope.png",
  },
  {
    title: "Aman — Health Benefits Platform",
    tag: "Web UI",
    image: "gallery-aman.png",
  },
  {
    title: "Kiss the Ground — Web Redesign",
    tag: "Web UI",
    image: "gallery-kissground.png",
  },
  {
    title: "Techno — SaaS Landing Page",
    tag: "Web UI",
    image: "gallery-techno.png",
  },
  {
    title: "MIA — Migrant Worker Platform",
    tag: "Mobile & Web",
    image: "gallery-mia.png",
  },
];

// --------------- ABOUT ME ---------------
export const about = {
  /** Your profile photo filename in public/images/ */
  avatar: "rifda-photo.png",
  bio: [
    "Coming from an Agriculture background, I discovered design through curiosity, communities, and a willingness to learn by doing. What began with graphic design gradually evolved into UI/UX, where I found myself fascinated by the intersection of technology, human behavior, and problem-solving.",
    "As I gained experience, I realized that designing interfaces alone wasn't enough. I became increasingly interested in understanding the bigger picture: Why are we building this? What problem are we solving? How do user needs, business goals, and technical constraints come together?",
    "Those questions eventually led me to Product Design, where I found the balance between research, systems thinking, collaboration, and design craft. Today, I enjoy working across different stages of the product development process, helping teams turn complex challenges into experiences that are useful, thoughtful, and grounded in real needs.",
    "Beyond my day-to-day work, I'm continuously learning about digital accessibility and inclusive design. Through community involvement, research, and advocacy, I'm exploring how technology can create better experiences for people with diverse abilities and contexts.",
  ],
  skills: [
    "Product Discovery",
    "UX Research",
    "Usability Testing",
    "Product Metrics",
    "Data Analysis",
    "Storyboard",
    "Design System",
    "Design Accessibility",
    "Interface Design",
    "Interactive Prototyping",
    "Vibe Coding",
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
    slug: "accessibility-changed-the-way-i-think-about-design",
    date: "Feb 15, 2025",
    readTime: "8 min read",
    title: "Accessibility Changed the Way I Think About Design",
    excerpt:
      "A journey from understanding accessibility as an abstract concept to experiencing it firsthand through a screen reader, and how it fundamentally shifted my perspective on what good design means.",
    href: "/blog/accessibility-changed-the-way-i-think-about-design",
    content: `If someone asked me a few years ago whether accessibility was important, I would have immediately said yes.

I knew accessibility mattered. I knew products should be usable by as many people as possible. I knew it was something designers should care about.

But if I'm being honest, at that time accessibility was still an abstract concept to me. I understood the idea, but I had never really felt the impact of it.

## The Video That Changed Everything

That changed when I came across a video of a blind person using a smartphone with a screen reader.

I really remember that feeling — watching someone struggle with something that many of us take for granted every day. The person wasn't confused because they didn't know how to use technology. They weren't struggling because they lacked experience. The problem was much simpler: the application wasn't designed in a way that worked properly with a screen reader.

As I watched the video, I found myself paying attention to things I had never thought about before. Buttons that looked perfectly normal suddenly became meaningless because they weren't announced correctly. Information that was obvious visually became difficult to understand when experienced through audio. Actions that seemed simple became frustrating obstacles.

For the first time, accessibility stopped being a concept and became a real experience.

> "Wow, this is a problem I have never truly considered."

## Testing My Own Work

That curiosity led me somewhere more uncomfortable.

I started wondering what would happen if I tried using some of the products I had worked on with a screen reader. So I turned on TalkBack and began exploring.

To be honest, I expected a few issues. Maybe some minor things that could be improved. What I didn't expect was how quickly I would realize that many parts of the experience weren't accessible at all.

Some elements weren't announced properly. Some interactions felt confusing. Information that seemed clear on the screen became difficult to navigate through audio alone.

These weren't random products. These were products that I had helped design.

And for the first time, I wasn't evaluating them as a designer looking at layouts, flows, or visual consistency. I was trying to experience them from a completely different perspective.

## The Uncomfortable Feeling

That experience left me with something unexpected: guilt.

Not because I intentionally ignored accessibility. Not because I didn't care. But because I realized there was a gap between what I believed I was designing and what some users were actually experiencing.

As designers, we often say that our job is to make things easier for people. We talk about solving problems, reducing friction, and creating better experiences. Yet here I was, looking at products that were meant to help people, while realizing that some people might struggle to use them in the first place.

## How Big the Topic Really Is

At first, I thought the solution would be relatively straightforward. Maybe I just needed to learn a few guidelines, understand color contrast requirements, or remember to add proper labels. I assumed accessibility was another design skill that I could gradually master.

The deeper I went, the more I realized how much bigger the topic actually was.

Accessibility isn't only about colors, typography, or screen readers. It affects how information is structured, how interactions are designed, how content is written, and even how components are implemented in code. Many accessibility issues can't be solved by designers alone, just as many can't be solved by developers alone.

> Accessibility isn't a feature that can simply be added at the end of a project. It's something that needs to be considered throughout the entire process.

As designers, it's comforting to believe that we can solve problems through better design. Accessibility taught me that some challenges require much broader collaboration — designers, developers, product teams, content writers, researchers, and stakeholders all need to care about the same thing.

## The Biggest Shift: Thinking Differently

Before learning about accessibility, I often assumed that if something felt easy to use for me, it would probably feel easy for most people. I rarely questioned that assumption because it felt natural. After all, we all tend to use our own experiences as a reference point.

Accessibility challenged that mindset completely.

Something that feels intuitive to me might be confusing for someone else. Something that feels effortless to me might require significant effort from another person. The experience I consider "normal" is only one of many possible experiences.

Accessibility didn't just teach me how to design differently. It taught me how to think differently.

It made me more aware of the assumptions hidden inside my design decisions. It made me more curious about experiences that are different from my own. Most importantly, it reminded me that good design is not about creating experiences that work well for people like me.

> It's about recognizing that people are different, and that those differences deserve consideration.

## Where I Am Now

I still make mistakes. There are still accessibility issues that I miss. There are still things I don't know. Sometimes the more I learn, the more I realize how much there is left to learn.

But that's okay.

Accessibility no longer feels like a box that needs to be checked. Instead, it feels like a continuous practice of learning, listening, and improving.

The journey is much longer than I initially imagined, and I'm still somewhere near the beginning of it. But if there's one thing I'm grateful for, it's that moment when a simple video made me realize that accessibility wasn't just another design topic.

It was a reminder that the experiences we design are never experienced by everyone in the same way.

And once I saw that, it became impossible to unsee.`,
  },
  {
    slug: "user-interview-with-myself",
    date: "Aug 08, 2024",
    readTime: "5 min read",
    title: "A User Interview With Myself",
    excerpt:
      "We spend our days trying to understand users. But have you ever done the same thing for yourself? A reflection on self-awareness, needs, and the design thinking we rarely apply to our own lives.",
    href: "/blog/user-interview-with-myself",
    content: `A few days ago, I attended a UI/UX webinar and heard a sentence that unexpectedly stayed with me long after the session ended.

> "We are product designers. We spend our days trying to make people's lives easier. We try to understand users' problems, needs, wants, and frustrations. But have you ever done the same thing for yourself?"

At first, I laughed. It sounded like one of those reflective quotes that speakers often use near the end of a presentation. The kind that makes everyone pause for a moment, nod in agreement, and then move on to the next slide.

But somehow, this one followed me home.

## The Thought That Wouldn't Let Go

The more I sat with it, the more questions started appearing. Have I ever tried to understand myself with the same curiosity I bring into user interviews? If I spend so much time thinking about how to create better experiences for users, am I intentionally creating a better experience for myself?

As product designers, understanding is where everything begins. Before proposing solutions, we spend time learning about the people we're designing for. When users feel frustrated, we don't dismiss their feelings — we become curious. We try to find out what expectation wasn't met, what need exists underneath that frustration.

Somewhere in all of this reflection, I realized I rarely offer the same curiosity to myself.

So I imagined conducting a user interview — with myself.

## Question 1: "How has your experience been so far?"

The first question was simple. And surprisingly, I didn't know how to answer.

Not because it was difficult, but because I had never really asked it before. Most of the time, I evaluate my life through achievements, responsibilities, and unfinished goals. I rarely stop and ask what it actually feels like to be me these days.

Am I enjoying this experience? Am I constantly rushing through it? Am I building a life that feels meaningful to me, or am I simply trying to survive one week after another?

## Question 2: "What problems are you facing right now?"

At first, I listed practical things — work deadlines, uncertainty, the usual challenges of adulthood. But the longer I sat with the question, the more I realized some of the struggles I carry aren't really about those things.

Some of them come from not fully understanding myself.

There have been moments when I felt upset but couldn't explain why. Moments when I felt disappointed but quickly convinced myself I was overreacting. Moments when I adapted so much to other people's expectations that I slowly lost sight of what I actually wanted.

## Question 3: "What do you need?"

And then came the question that stopped me completely.

I wish I could say I had an answer ready. I didn't.

What surprised me wasn't the question itself — it was how uncomfortable it felt. There was nobody judging me. Nobody waiting to reject my answer. It was just me. And yet, I still struggled to answer.

> Perhaps expressing our needs isn't only difficult when talking to other people. Sometimes we haven't even admitted those needs to ourselves.

We become so focused on being adaptable, understanding, and accommodating that we stop checking in with what we actually need. Maybe that's why certain frustrations keep showing up.

## Frustration as a Signal

For a long time, I treated frustration as something to eliminate. If I felt disappointed or resentful, my instinct was to move on as quickly as possible. I wanted to be mature. I wanted to avoid creating problems.

But lately, I've been wondering if frustration is trying to tell us something.

When users feel frustrated with a product, we don't tell them their frustration is wrong — we investigate it. Frustration is often a signal that something isn't working as expected. An expectation wasn't met. A need wasn't fulfilled. A problem remains unsolved.

> What if our emotions work the same way? What if some of the frustrations we carry are not signs of weakness, but signals that deserve our attention?

Maybe there is a need that has been ignored. Maybe there is a value that has been compromised. Maybe there is a boundary that has quietly been crossed.

I think that's what makes self-awareness more difficult than it sounds. The moment we become honest about our needs, we can no longer pretend they don't exist. We have to decide what to do with that knowledge — what to communicate, what boundaries to protect.

## Design Begins With Understanding

Looking back, I think the reason that webinar quote stayed with me wasn't because it offered a life-changing realization. It stayed because it quietly challenged something I already believed as a designer.

Every design process I've been part of begins with understanding. Before sketches, wireframes, or prototypes, there is always an attempt to understand what people are experiencing, what they need, and what frustrates them. Without understanding, even the most beautiful solution can end up solving the wrong problem.

What surprised me is how rarely I apply the same principle to myself.

When I feel frustrated, I focus on getting rid of the feeling instead of understanding it. Yet if a user came to me with those same frustrations, I would spend hours trying to understand them — asking questions, looking for patterns, uncovering the unmet need. I would treat their experience as something worth understanding.

So why is it sometimes easier to offer that empathy to others than to ourselves?

## A Practice Worth Starting

Maybe we should occasionally become researchers of our own lives. Interview ourselves with the same empathy we offer users. Investigate our frustrations before dismissing them. Become curious about our needs instead of feeling ashamed of them.

Not because every frustration needs to be fixed, and not because every need can be fulfilled immediately.

> But because understanding has always been the first step of good design. And if we believe people deserve products designed with empathy, perhaps we deserve that too.

After all, before we can create better experiences for others, we also deserve to understand the experience we're living ourselves.`,
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
