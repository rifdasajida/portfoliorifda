import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const BASE = import.meta.env.BASE_URL;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-bold tracking-[.15em] text-white uppercase px-2.5 py-1 rounded-md" style={{ background: "#4B5FE0" }}>{n}</span>
      <h2 className="text-[22px] font-extrabold text-[#0F1A2E] tracking-[-0.018em] m-0">{title}</h2>
    </div>
  );
}

function ProblemBlock({
  n, title, sub, finding, children,
}: { n: string; title: string; sub: string; finding: string; children?: React.ReactNode }) {
  return (
    <div className="border-t border-[#E4E8F0] pt-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-[13px] font-bold text-[#4B5FE0]">{n}</span>
        <h3 className="text-[18px] font-bold text-[#0F1A2E] m-0">{title}</h3>
      </div>
      <p className="text-[13px] text-[#8591A3] mb-4">{sub}</p>
      <div className="rounded-xl px-5 py-4 mb-5 text-[14px] leading-[1.65] text-[#0F1A2E]" style={{ background: "#EEF0FD", borderLeft: "3px solid #4B5FE0" }}>
        <strong>Key finding:</strong> {finding}
      </div>
      {children}
    </div>
  );
}

function SolutionBlock({
  n, title, sub, img, imgAlt, children,
}: { n: string; title: string; sub: string; img: string; imgAlt: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[#E4E8F0] pt-10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-[13px] font-bold text-[#4B5FE0]">{n}</span>
        <h3 className="text-[18px] font-bold text-[#0F1A2E] m-0">{title}</h3>
      </div>
      <p className="text-[13px] text-[#8591A3] mb-5">{sub}</p>
      <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-6">
        <img src={`${BASE}images/${img}`} alt={imgAlt} className="w-full h-auto block" />
      </figure>
      <div className="space-y-3 text-[14.5px] text-[#4A5568] leading-[1.7]">{children}</div>
    </div>
  );
}

export default function DipayOnboardingCaseStudy() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
  }, []);

  const study = caseStudies.find((c) => c.slug === "dipay-onboarding")!;

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-0" style={{ background: "#EBEDF8" }}>
        <div className="max-w-[760px] mx-auto px-7">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#8591A3] hover:text-[#0F1A2E] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            <div className="flex flex-wrap gap-2 mb-7">
              {["Real Project", "User Research", "Flow Redesign", "Mobile App", "Fraud & Ops Tradeoffs"].map((tag, i) => (
                <span key={tag} className="px-4 py-[7px] rounded-full text-xs font-semibold shadow-sm border"
                  style={i === 0 ? { background: "#4B5FE0", color: "#fff", borderColor: "#4B5FE0" } : { background: "#fff", color: "#2B3648", borderColor: "#E0E5EF" }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-[clamp(36px,5.5vw,52px)] font-extrabold leading-[1.1] tracking-[-0.028em] text-[#0F1A2E] mb-4 max-w-[680px]">
              Merchant Onboarding Flow
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[600px] mb-10 leading-[1.55]">
              Dipay Bisnis was losing ~91% of potential merchants at the verification gate. I led the end-to-end redesign to fix the three root causes behind that number.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[20px] overflow-hidden shadow-2xl">
            <img src={`${BASE}images/${study.image}`} alt="Dipay Merchant Onboarding" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-14">

          {/* 01 — Overview */}
          <Reveal>
            <SectionLabel n="01" title="Overview" />
            <p className="text-[15px] text-[#4A5568] leading-[1.75] mb-5">
              Dipay Bisnis drives <strong className="text-[#0F1A2E]">~95% of all QRIS transactions</strong> through its Acquirer on-us model — making merchant verification the most critical growth lever on the platform. But the numbers told a different story.
            </p>
            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-6">
              <img src={`${BASE}images/dipay-onboarding-overview.png`} alt="Merchant registration funnel — 8.52% conversion" className="w-full h-auto block" />
            </figure>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
                <div className="text-[38px] font-extrabold leading-none mb-1 tracking-[-0.04em]" style={{ color: "#C54545" }}>8.52%</div>
                <div className="text-[12px] font-bold text-[#8591A3] uppercase tracking-wide">All Conversion Rate</div>
                <div className="text-[11px] text-[#B0BAC9] mt-1">Registered → Verified</div>
              </div>
              <div className="bg-[#FFF5F5] border border-[#F5D4D4] rounded-2xl p-6 text-center shadow-sm">
                <div className="text-[38px] font-extrabold leading-none mb-1 tracking-[-0.04em]" style={{ color: "#C54545" }}>~91%</div>
                <div className="text-[12px] font-bold text-[#8591A3] uppercase tracking-wide">Potential Merchants Lost</div>
                <div className="text-[11px] text-[#B0BAC9] mt-1">Per year</div>
              </div>
            </div>
            <p className="text-[15px] text-[#4A5568] leading-[1.75]">
              This became a critical bottleneck. I led a focused initiative to identify where merchants were failing and redesign the flow to remove those barriers — without compromising fraud resilience.
            </p>
          </Reveal>

          {/* 02 — Problem Framing */}
          <Reveal>
            <SectionLabel n="02" title="Research & Problem Framing" />
            <p className="text-[15px] text-[#4A5568] leading-[1.75] mb-6">
              Over 8 months of data, the pattern was clear: drop-off at business information was manageable. The collapse happened at verification — the final gate. Ops rejection data narrowed it to three causes accounting for the majority of failures.
            </p>
            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-6">
              <img src={`${BASE}images/dipay-onboarding-problem-framing.png`} alt="Research & problem framing" className="w-full h-auto block" />
            </figure>
            <div className="bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-sm">
              <p className="text-[13px] font-bold text-[#0F1A2E] uppercase tracking-wide mb-4">Top 3 Ops Rejection Causes</p>
              <div className="space-y-3">
                {[
                  { n: "1", label: "Outlet photo didn't meet requirements" },
                  { n: "2", label: "Selfie + e-KTP photo failed review" },
                  { n: "3", label: "Incomplete outlet address" },
                ].map((item) => (
                  <div key={item.n} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[11px] font-bold" style={{ background: "#4B5FE0" }}>{item.n}</div>
                    <span className="text-[14.5px] text-[#0F1A2E] font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 03 — Digging Deeper */}
          <Reveal>
            <SectionLabel n="03" title="Digging Into Each Failure" />
            <div className="space-y-10">
              <ProblemBlock
                n="Problem 1"
                title="Outlet Photo"
                sub="Why photos were rejected — and why it wasn't just a quality issue"
                finding="Most merchants registered at night, away from their outlet. Live photo capture was structurally impossible for the majority of cases — the problem wasn't willingness, it was timing."
              >
                <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
                  <img src={`${BASE}images/dipay-onboarding-research-outlet.png`} alt="Outlet photo research and ideation" className="w-full h-auto block" />
                </figure>
              </ProblemBlock>

              <ProblemBlock
                n="Problem 2 & 3"
                title="Selfie + e-KTP & Incomplete Address"
                sub="Device dependency and freetext failure"
                finding="Selfie quality depended entirely on the merchant's device — a variable we couldn't control. For addresses, a single freetext field with no validation meant merchants didn't know what level of detail was expected, and many simply didn't provide it."
              >
                <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
                  <img src={`${BASE}images/dipay-onboarding-research-ktp.png`} alt="Selfie+KTP and address research" className="w-full h-auto block" />
                </figure>
              </ProblemBlock>
            </div>
          </Reveal>

          {/* 04 — Solutions */}
          <Reveal>
            <SectionLabel n="04" title="Solutions & Key Decisions" />
            <div className="space-y-0">

              <SolutionBlock
                n="Solution 1"
                title="Outlet Photo"
                sub="Gallery upload · GPS watermark · Business type differentiation"
                img="dipay-onboarding-solution-outlet.png"
                imgAlt="Outlet photo solution"
              >
                <p>
                  Allowing gallery uploads removed the core blocker — merchants could now submit a photo they had taken earlier. The fraud tradeoff was addressed with <strong className="text-[#0F1A2E]">GPS watermarking</strong>: coordinates are captured at submission and embedded on the photo, letting ops cross-reference location against the registered address.
                </p>
                <p>
                  For online sellers and service-based merchants with no physical storefront, no photo guidance would have helped. A <strong className="text-[#0F1A2E]">business type selection upstream</strong> in the flow routes physical and online merchants to separate paths — so no one reaches a step that doesn't apply to them.
                </p>
              </SolutionBlock>

              <SolutionBlock
                n="Solution 2"
                title="Selfie + e-KTP"
                sub="Liveness verification with face comparison"
                img="dipay-onboarding-solution-liveness.png"
                imgAlt="Liveness verification flow"
              >
                <p>
                  The original selfie+KTP step was replaced with a single <strong className="text-[#0F1A2E]">Liveness check</strong>. It confirms presence, captures a live facial image for direct comparison against the ID photo, and costs less per call than the previous external service. One step replacing two, with better fraud coverage.
                </p>
                <p>
                  My role was making sure the technical requirement didn't create a new drop-off. Most users who fail liveness aren't fraudsters — they don't understand what's being asked. <strong className="text-[#0F1A2E]">Instruction clarity and failure state design</strong> were where the real UX work happened.
                </p>
              </SolutionBlock>

              <SolutionBlock
                n="Solution 3"
                title="Address"
                sub="Structured cascading dropdowns tied to PTEN"
                img="dipay-onboarding-solution-address.png"
                imgAlt="Redesigned address input"
              >
                <p>
                  The freetext field was replaced with <strong className="text-[#0F1A2E]">cascading dropdowns</strong>: province → city/regency → district → postal code, each narrowing the next. Data is sourced from PTEN and cross-referenced against the national postal code database — every submission is structurally valid before it reaches ops.
                </p>
                <p>
                  Incomplete address submissions became <strong className="text-[#0F1A2E]">structurally impossible</strong>, not just less likely.
                </p>
              </SolutionBlock>

            </div>
          </Reveal>

        </div>
      </div>

      {/* Back */}
      <div className="pb-20 max-w-[760px] mx-auto px-7">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#8591A3] hover:text-[#0F1A2E] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      <Footer />
    </div>
  );
}
