import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { Link } from "wouter";
import { caseStudies } from "@/data/portfolio";

const BASE = import.meta.env.BASE_URL;

type RealProject = (typeof caseStudies)[number] & { comingSoon?: false };
type ComingSoonProject = {
  comingSoon: true;
  title: string;
  description: string;
  image: string;
  color: string;
  tags: string[];
};
type Project = RealProject | ComingSoonProject;

const workGroups: {
  id: string;
  company: string;
  logoColor: string;
  logoLetter: string;
  logoImage?: string;
  period: string;
  description: string;
  scroll?: boolean;
  projects: Project[];
}[] = [
  {
    id: "dipay",
    company: "Dipay",
    logoColor: "#4B5FE0",
    logoLetter: "D",
    logoImage: "logo-dipay.png",
    period: "2024 – present",
    description:
      "Building fintech products that simplify payments, empower merchants, and improve operational efficiency.",
    cols: 3,
    projects: [
      caseStudies.find((c) => c.slug === "dipay-settlement")! as RealProject,
      {
        comingSoon: true,
        title: "Increasing Verified Merchant Conversion",
        description: "Redesigning the merchant registration and verification flow to reduce drop-off and get more merchants successfully onboarded.",
        image: "dipay-merchant-conversion-cover.png",
        color: "bg-blue-50",
        tags: ["Conversion Funnel", "Mobile App", "User Research"],
      },
      {
        comingSoon: true,
        title: "Open API Account Linkage",
        description: "Designing the account linking flow that connects third-party platforms to Dipay via Open API — enabling seamless wallet activation and balance access across partner apps.",
        image: "dipay-open-api-cover.png",
        color: "bg-blue-50",
        tags: ["Open API", "Integration UX", "Mobile App"],
      },
    ],
  },
  {
    id: "surplus",
    company: "Surplus",
    logoColor: "#2BB5A0",
    logoLetter: "S",
    logoImage: "logo-surplus.png",
    period: "2023 – 2024",
    description:
      "Designing marketplace experiences that connect merchants and buyers while reducing food waste.",
    cols: 3,
    projects: [
      caseStudies.find((c) => c.slug === "ecommerce-checkout")! as RealProject,
      caseStudies.find((c) => c.slug === "surplus-merchant-map")! as RealProject,
      caseStudies.find((c) => c.slug === "surplus-ecofriendly-cashback")! as RealProject,
    ],
  },
  {
    id: "other",
    company: "Other Projects",
    logoColor: "#2B8A3E",
    logoLetter: "✦",
    period: "Still active",
    description:
      "Experiments, side projects, and freelance work exploring accessibility, AI, and emerging product opportunities.",
    scroll: true,
    projects: [
      caseStudies.find((c) => c.slug === "smart-murojaah")! as RealProject,
      caseStudies.find((c) => c.slug === "shonic-ecommerce")! as RealProject,
      caseStudies.find((c) => c.slug === "water-hydration-reminder")! as RealProject,
      caseStudies.find((c) => c.slug === "dearhope")! as RealProject,
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = "comingSoon" in project && project.comingSoon;

  const inner = (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300">
      <div className={`relative aspect-[16/9] overflow-hidden ${project.color} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={`${BASE}images/${project.image}`}
          alt={project.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {isComingSoon && (
          <div className="absolute inset-0 z-20 bg-black/60 flex flex-col items-center justify-center gap-2">
            <Lock className="w-5 h-5 text-white/70" />
            <span className="text-white font-semibold text-sm tracking-wide">Coming Soon</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-[15px] font-bold mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-[13px] mb-4 flex-grow line-clamp-2">
          {project.description}
        </p>

        <div className={`flex items-center text-xs font-semibold mt-auto ${isComingSoon ? "text-muted-foreground" : "text-primary"}`}>
          {isComingSoon ? "Coming Soon" : "View Case Study"}
          {!isComingSoon && <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
        </div>
      </div>
    </div>
  );

  if (isComingSoon) {
    return <div className="flex flex-col h-full cursor-default">{inner}</div>;
  }

  const real = project as RealProject;
  if ("externalUrl" in real && real.externalUrl) {
    return (
      <a href={real.externalUrl as string} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        {inner}
      </a>
    );
  }

  return (
    <Link href={`/case-study/${real.slug}`} className="flex flex-col h-full">
      {inner}
    </Link>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl">Work</h2>
          <p className="text-lg text-[#4c5757] w-full">
            A selection of products I've helped shape, from uncovering user problems to delivering measurable business impact.
          </p>
        </motion.div>

        <div className="space-y-20">
          {workGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              {/* Company header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex-shrink-0 shadow-sm overflow-hidden"
                  style={{ backgroundColor: group.logoColor }}
                >
                  {group.logoImage ? (
                    <img src={`${BASE}images/${group.logoImage}`} alt={`${group.company} logo`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      {group.logoLetter}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-[18px] font-extrabold text-foreground leading-tight">{group.company}</h3>
                  {group.period && (
                    <span className="text-[13px] text-muted-foreground font-medium">{group.period}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#4c5757] mb-7 w-full text-[16px]">
                {group.description}
              </p>

              {/* Project cards */}
              {group.scroll ? (
                <div className="overflow-x-auto -mx-6 px-6 pb-4">
                  <div className="flex gap-5" style={{ width: "max-content" }}>
                    {group.projects.map((project, pi) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: pi * 0.08 }}
                        style={{ width: "calc((100vw - 96px) / 3)" }}
                        className="flex flex-col min-w-[280px] max-w-[380px]"
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {group.projects.map((project, pi) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: pi * 0.08 }}
                      className="flex flex-col"
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
