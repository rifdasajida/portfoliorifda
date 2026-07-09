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

function MetricCard({ value, label, sub, variant = "default" }: { value: string; label: string; sub?: string; variant?: "default" | "danger" | "success" }) {
  const colors: Record<string, string> = { default: "#4B5FE0", danger: "#C54545", success: "#1F9B6E" };
  return (
    <div className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
      <div className="text-[36px] font-extrabold leading-none mb-1 tracking-[-0.03em]" style={{ color: colors[variant] }}>{value}</div>
      <div className="text-[12px] font-bold text-[#8591A3] uppercase tracking-wide mb-1">{label}</div>
      {sub && <div className="text-[11px] text-[#B0BAC9]">{sub}</div>}
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

      {/* ── Hero ── */}
      <div className="pt-28 pb-0" style={{ background: "#EEF0FD" }}>
        <div className="max-w-[760px] mx-auto px-7">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#8591A3] hover:text-[#0F1A2E] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-7">
              {[
                { label: "Real Project", highlight: true },
                { label: "User Research" },
                { label: "Flow Redesign" },
                { label: "Mobile App" },
                { label: "Fraud & Ops Tradeoffs" },
              ].map((tag) => (
                <span key={tag.label} className="px-4 py-[7px] rounded-full text-xs font-semibold shadow-sm border"
                  style={tag.highlight ? { background: "#4B5FE0", color: "#fff", borderColor: "#4B5FE0" } : { background: "#fff", color: "#2B3648", borderColor: "#E0E5EF" }}>
                  {tag.label}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.028em] text-[#0F1A2E] mb-5 max-w-[680px]">
              Merchant Onboarding Flow
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[620px] mb-10 leading-[1.55]">
              How we turned an 8.52% merchant verification rate into a streamlined, fraud-resilient onboarding flow — by going deep on the three root causes that made registration fail.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[20px] overflow-hidden shadow-2xl">
            <img src={`${BASE}images/${study.image}`} alt="Dipay Merchant Onboarding" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* TL;DR */}
          <Reveal>
            <div className="bg-white border border-[#E4E8F0] rounded-2xl p-8 shadow-sm">
              <div className="text-[10px] font-bold tracking-[.15em] text-[#8591A3] uppercase mb-4" style={{ fontFamily: "'JetBrains Mono',monospace" }}>TL;DR</div>
              {[
                { k: "Context", v: "Dipay Bisnis drives ~95% of QRIS transactions through its Acquirer on-us model. Getting merchants verified is the most critical step in growing that network." },
                { k: "Problem", v: "Only 8.52% of registered merchants completed verification — meaning ~91.48% of potential merchants were lost before ever going live." },
                { k: "Root Causes", v: "Three ops rejection reasons accounted for the majority of failures: outlet photos not meeting requirements, selfie + e-KTP photos failing review, and incomplete outlet addresses." },
                { k: "Solution", v: "Gallery upload with GPS watermark, Liveness verification replacing the selfie+KTP step, and cascading address dropdowns tied to PTEN — each designed to eliminate the failure mode, not just reduce it." },
              ].map((row, i) => (
                <div key={i} className="grid gap-4 py-3 border-t border-[#EEF1F7] first:border-t-0" style={{ gridTemplateColumns: "100px 1fr" }}>
                  <div className="text-[13px] font-bold text-[#0F1A2E]">{row.k}</div>
                  <div className="text-[14.5px] leading-[1.6] text-[#4A5568]">{row.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Overview */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">📊 Overview</h2>
            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-7">
              <img src={`${BASE}images/dipay-onboarding-overview.png`} alt="Dipay onboarding funnel — 8.52% conversion rate" className="w-full h-auto block" />
            </figure>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              <strong className="text-[#0F1A2E]">Dipay Bisnis</strong> plays a vital role in the QRIS transaction ecosystem, contributing to around <strong className="text-[#0F1A2E]">95% of total QRIS transactions</strong> through its Acquirer on-us model. This highlights how crucial merchant verification success is to driving transaction growth.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              However, in the last 6 months, the <strong className="text-[#0F1A2E]">conversion rate from registered to verified merchants was only 8.52%</strong>. In other words, more than <strong className="text-[#0F1A2E]">91% of interested merchants failed to complete verification</strong>, even after showing intent to join.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-7">
              <MetricCard value="8.52%" label="All Conversion Rate" sub="Registered → Verified" variant="danger" />
              <MetricCard value="~91.48%" label="Potential Merchants Lost" sub="Per year" variant="danger" />
            </div>

            <p className="text-[#4A5568] leading-[1.7] mb-4">
              This low verification success rate became a <strong className="text-[#0F1A2E]">critical bottleneck</strong> that limited Dipay Bisnis' full potential. To tackle this, I led a product initiative focused on:
            </p>
            <ul className="space-y-2 text-[14.5px] text-[#4A5568] leading-[1.7] ml-1">
              <li>• <strong className="text-[#0F1A2E]">Identifying key frictions</strong> in the registration and verification journey, from both Merchant and Legal perspectives.</li>
              <li>• <strong className="text-[#0F1A2E]">Streamlining the flow</strong> to make registration & verification faster, clearer, and less error-prone.</li>
            </ul>
          </Reveal>

          {/* Research & Problem Framing */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">🔍 Research & Problem Framing</h2>
            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-7">
              <img src={`${BASE}images/dipay-onboarding-problem-framing.png`} alt="Research & Problem Framing" className="w-full h-auto block" />
            </figure>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              Before touching any design, we needed to understand where and why merchants were failing. Over an 8-month observation period, the majority of merchants who began registration never completed verification — <strong className="text-[#0F1A2E]">less than 5 in 10 made it through</strong>. This wasn't a minor drop-off — it was systematic failure at the most critical gate in the funnel.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The funnel told us where the problem lived. Drop-off at the business information step was manageable. But at the verification stage, the numbers collapsed — a majority of merchants who reached this point didn't make it past it.
            </p>

            <div className="bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-sm mb-6">
              <p className="text-[14px] text-[#4A5568] mb-3">The ops rejection data told us why. Three causes accounted for most failures:</p>
              <ol className="space-y-2 text-[14.5px] text-[#0F1A2E] font-semibold">
                <li>1. Outlet photo didn't meet requirements</li>
                <li>2. Selfie + e-KTP photo failed review</li>
                <li>3. Incomplete outlet address</li>
              </ol>
            </div>
          </Reveal>

          {/* Digging Deeper */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">🧩 Digging Into Each Failure</h2>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mb-3">1. The Outlet Photo Problem</h3>
            <p className="text-[#4A5568] leading-[1.7] mb-5">
              The outlet photo issue had more depth than a single fix could address. When we broke down why photos were rejected, three distinct patterns emerged: merchants photographing from another device, submitting random images, or uploading photos that didn't match their registered business type.
            </p>
            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-10">
              <img src={`${BASE}images/dipay-onboarding-research-outlet.png`} alt="Outlet photo research and ideation" className="w-full h-auto block" />
            </figure>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mb-3">2. Selfie + e-KTP & Incomplete Address</h3>
            <p className="text-[#4A5568] leading-[1.7] mb-5">
              Photo quality for the selfie + e-KTP step depended entirely on the device. Many merchants also didn't fill in their address completely — there was only a single freetext field with no validation and no guidance on what level of detail was expected.
            </p>
            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
              <img src={`${BASE}images/dipay-onboarding-research-ktp.png`} alt="Selfie+KTP and address research and ideation" className="w-full h-auto block" />
            </figure>
          </Reveal>

          {/* Solutions */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">✏️ Solutions & Key Decisions</h2>

            {/* Solution 1 */}
            <div className="mb-10">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-[18px] font-bold text-[#0F1A2E]">1. Outlet Photo</h3>
                <span className="text-[13px] text-[#8591A3]">Gallery upload, location watermark, and business type differentiation</span>
              </div>
              <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-5">
                <img src={`${BASE}images/dipay-onboarding-solution-outlet.png`} alt="Outlet photo solution — gallery upload and business type" className="w-full h-auto block" />
              </figure>
              <p className="text-[#4A5568] leading-[1.7] mb-4">
                The most common failure wasn't negligence — it was timing. Most merchants registered at night, away from their outlet, making live photo capture impossible. My proposal was to allow gallery uploads, removing the core blocker for the majority of cases.
              </p>
              <p className="text-[#4A5568] leading-[1.7] mb-4">
                The fraud tradeoff was real. The PM countered with location watermarking: GPS coordinates are captured at submission and embedded on the photo, letting ops cross-reference location against the registered address. Gallery flexibility with accountability built in.
              </p>
              <p className="text-[#4A5568] leading-[1.7]">
                For merchants without a physical storefront — online sellers, service-based businesses — no photo guidance would have solved the problem. The fix was to ask earlier: a business type selection upstream in the flow routed physical and online merchants to separate paths, so no one reached a step that didn't apply to them.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="mb-10">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-[18px] font-bold text-[#0F1A2E]">2. Selfie + e-KTP</h3>
                <span className="text-[13px] text-[#8591A3]">Liveness with face comparison</span>
              </div>
              <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-5">
                <img src={`${BASE}images/dipay-onboarding-solution-liveness.png`} alt="Liveness verification flow" className="w-full h-auto block" />
              </figure>
              <p className="text-[#4A5568] leading-[1.7] mb-4">
                The original flow required a selfie while holding an ID. Image quality depended entirely on the user's device, and the face comparison relied on an external service that was expensive per call.
              </p>
              <p className="text-[#4A5568] leading-[1.7] mb-4">
                Replacing both with a single Liveness check solved the problem at multiple levels: it confirms the merchant is a real, present human, captures a live facial image for direct comparison against the ID photo, and does it at lower cost than the previous approach. One step replacing two, with better fraud coverage and reduced operational spend.
              </p>
              <p className="text-[#4A5568] leading-[1.7]">
                My role was designing the interaction so the technical requirement didn't become a new drop-off point. Most users who fail liveness aren't fraudsters — they just don't know what's being asked. Instruction clarity and failure state design were where the real UX work happened.
              </p>
            </div>

            {/* Solution 3 */}
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-[18px] font-bold text-[#0F1A2E]">3. Address</h3>
                <span className="text-[13px] text-[#8591A3]">Structured dropdowns tied to PTEN</span>
              </div>
              <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-5">
                <img src={`${BASE}images/dipay-onboarding-solution-address.png`} alt="Redesigned address input with cascading dropdowns" className="w-full h-auto block" />
              </figure>
              <p className="text-[#4A5568] leading-[1.7] mb-4">
                The single freetext field was replaced with cascading dropdowns: province → city/regency → district → postal code, each narrowing the next. Data sourced from PTEN and cross-referenced against the national postal code database means every submission is structurally valid before it reaches ops.
              </p>
              <p className="text-[#4A5568] leading-[1.7]">
                Incomplete address submissions became structurally impossible, not just less likely.
              </p>
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── Back link ── */}
      <div className="pb-20 max-w-[760px] mx-auto px-7">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#8591A3] hover:text-[#0F1A2E] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      <Footer />
    </div>
  );
}
