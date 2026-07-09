import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

function MetricCard({ value, label, variant = "default" }: { value: string; label: string; variant?: "default" | "danger" | "success" }) {
  const colors: Record<string, string> = {
    default: "#4B5FE0",
    danger: "#C54545",
    success: "#1F9B6E",
  };
  return (
    <div className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
      <div className="text-[36px] font-extrabold leading-none mb-2 tracking-[-0.03em]" style={{ color: colors[variant] }}>
        {value}
      </div>
      <div className="text-[13px] font-semibold text-[#8591A3] uppercase tracking-[.05em]">{label}</div>
    </div>
  );
}

export default function DipayCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const currentIndex = caseStudies.findIndex((c) => c.slug === "dipay-settlement");
  const prev = caseStudies[currentIndex - 1] ?? null;
  const next = caseStudies[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      <Navbar />
      {/* Hero */}
      <div className="bg-[#EBEDF8] pt-28 pb-0">
        <div className="max-w-[760px] mx-auto px-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#8591A3] hover:text-[#0F1A2E] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-7">
              {[
                { label: "Real Project", highlight: true },
                { label: "UX Audit" },
                { label: "User Interview" },
                { label: "Design Operational UX" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="px-4 py-[7px] rounded-full text-xs font-semibold shadow-sm border"
                  style={
                    tag.highlight
                      ? { background: "#4B5FE0", color: "#fff", borderColor: "#4B5FE0" }
                      : { background: "#fff", color: "#2B3648", borderColor: "#E0E5EF" }
                  }
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.028em] text-[#0F1A2E] mb-5 max-w-[680px]">
              Streamlining Settlement & Reconciliation Process
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[620px] mb-10 leading-[1.55]">Reducing settlement delays, preventing disbursement errors, and saving 4-5 hours through automated reconciliation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[20px] overflow-hidden shadow-2xl"
          >
            <img
              src={`${BASE}images/dipay-settlement-banner.png`}
              alt="Dipay Settlement dashboard screens"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* Content */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* Overview */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              Overview
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              Settlement is one of the most critical operational processes at Dipay. As a QRIS
              acquirer, Dipay is responsible for ensuring merchant funds are disbursed accurately and
              on time. As transaction volume continued to grow, settlement operations became
              increasingly difficult to manage. Settlement processing often extended beyond working
              hours, delaying merchant payouts and generating complaints from business partners waiting
              for their funds.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              At the same time, operational teams faced recurring risks caused by manual validation
              processes. Issues such as reconciliation mismatches, settlement failures, and even
              duplicate settlement cases required significant effort to investigate and resolve before
              funds could be safely disbursed.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              To address these challenges, I redesigned Dipay's settlement workflow by introducing{" "}
              <strong className="text-[#0F1A2E] font-semibold">
                automated reconciliation, exception-based reviews, structured approval flows, and
                settlement monitoring tools
              </strong>{" "}
              that reduced operational processing time by approximately 4-5 hours per settlement cycle.
            </p>

            {/* TL;DR */}
            <div className="bg-white border border-[#E4E8F0] rounded-2xl p-8 shadow-sm mt-8">
              <div
                className="text-[10px] font-bold tracking-[.15em] text-[#8591A3] uppercase mb-4"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                At a Glance
              </div>
              {[
                { k: "My Role", v: "Product Designer" },
                { k: "Collaborators", v: "PM, Developers, Finance Team, Operations Team" },
                { k: "Impact", v: "4-5 hours saved per settlement cycle, faster payouts, reduced operational risk, eliminated spreadsheet workflows, improved visibility and control" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid gap-4 py-3 border-t border-[#EEF1F7] first:border-t-0"
                  style={{ gridTemplateColumns: "120px 1fr" }}
                >
                  <div className="text-[13px] font-bold text-[#0F1A2E]">{row.k}</div>
                  <div className="text-[14.5px] leading-[1.6] text-[#4A5568]">{row.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* The Business Problem */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🎯 The Business Problem
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              This project was to reduce settlement delays, prevent disbursement errors, and save 4-5
              hours per settlement cycle through automated reconciliation. As transaction volume
              increased, settlement processing regularly became a bottleneck.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              Finance and Operations teams frequently worked late to complete settlement cycles,
              particularly after weekends when transaction volume accumulated significantly. Delayed
              settlement meant merchants received their funds later than expected, creating complaints
              and increasing operational pressure from business teams.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              More concerningly, several settlement issues highlighted weaknesses in the existing
              process:
            </p>
            <ul className="text-[#4A5568] leading-[1.7] mb-4 space-y-1 pl-5 list-disc">
              <li>Duplicate settlement attempts</li>
              <li>Settlement failures</li>
              <li>Transaction mismatches</li>
              <li>Inconsistent reconciliation results</li>
              <li>Manual investigation efforts before disbursement</li>
            </ul>
            <p className="text-[#4A5568] leading-[1.7]">
              Because settlement directly impacts merchant funds, even a single mistake could create{" "}
              <strong className="text-[#0F1A2E] font-semibold">
                financial loss, operational overhead, and trust issues
              </strong>
              . Understanding why these issues occurred became the starting point of the project.
            </p>
          </Reveal>

          {/* Investigation & Discovery */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🔍 Investigation & Discovery
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-4">Settlement was not slow because approval took too long. It was slow because validation took too long. Rather than immediately redesigning the dashboard, I worked with Finance and Operations teams to understand how settlement decisions were actually made.</p>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-4 tracking-[-0.01em]">
              Understanding Reconciliation
            </h3>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              As a QRIS acquirer, Dipay records transaction data internally. However, before funds can
              be disbursed, those records must be validated against external payment infrastructure.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              The Finance team performs reconciliation to ensure that transaction records stored
              inside Dipay match records received from switchers and bank mutation reports.
            </p>
            <div className="bg-[#EBEDF8] border border-[#C8D0F0] rounded-2xl px-8 py-7 mb-6">
              <p className="text-[15.5px] text-[#1E2D9E] leading-[1.7] m-0 italic">
                Can we confidently prove that the money being disbursed is backed by valid transaction
                records?
              </p>
            </div>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              Any discrepancy must be investigated before settlement can proceed. Examples include
              missing mutation records, amount mismatches, invalid or missing RRN data, inconsistent
              transaction statuses, and duplicate settlement attempts.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              Only after reconciliation is completed can a transaction move forward to settlement.
            </p>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-4 tracking-[-0.01em]">
              What Actually Happened Behind the Scenes
            </h3>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              Through workflow observations and discussions with Finance teams, I discovered that
              reconciliation was still heavily manual.
            </p>

            <div className="bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="px-8 pt-6 pb-2">
                <div
                  className="text-[10px] font-bold tracking-[.15em] text-[#8591A3] uppercase mb-4"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}
                >Deep Dive to The Current Flow of Recontiliation and Settlement</div>
              </div>
              <img
                src={`${BASE}images/Rekon-Manual.png`}
                alt="Settlement Cycle User Journey Storyboard — How Finance team manually processes settlement before any disbursement can happen"
                className="w-full object-cover"
              />
            </div>

            <p className="text-[#4A5568] leading-[1.7]">
              Most operational effort was spent preparing and validating data rather than making
              settlement decisions. As transaction volume increased, the process became increasingly
              difficult to scale.
            </p>
          </Reveal>

          {/* Root Causes */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🚨 Root Causes
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              The problem was not simply the interface. The problem was a workflow that required
              humans to validate{" "}
              <strong className="text-[#0F1A2E] font-semibold">everything</strong>.
            </p>

            <div className="space-y-4">
              {[
                { n: "01", title: "Manual reconciliation", desc: "Transaction validation relied heavily on spreadsheet comparison." },
                { n: "02", title: "Poor anomaly visibility", desc: "Problematic transactions looked identical to healthy transactions, forcing operators to review everything." },
                { n: "03", title: "High operational effort", desc: "Large amounts of time were spent exporting reports, comparing records, and validating transactions." },
                { n: "04", title: "Human error risk", desc: "Despite all the manual checks, settlement mistakes could still occur." },
              ].map((item) => (
                <div
                  key={item.n}
                  className="bg-white border border-[#E4E8F0] rounded-2xl p-7 shadow-sm grid gap-5 items-start"
                  style={{ gridTemplateColumns: "44px 1fr" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-[#EBEDF8] border border-[#C8D0F0] flex items-center justify-center text-[12px] font-bold text-[#4B5FE0] flex-shrink-0"
                    style={{ fontFamily: "'JetBrains Mono',monospace" }}
                  >
                    {item.n}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F1A2E] mb-2">{item.title}</h3>
                    <p className="text-[14.5px] leading-[1.65] text-[#4A5568] m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Design Principle */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">💡Brainstorm Ideation </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              How might we reduce settlement risk without requiring Finance teams to manually review
              every transaction?
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">Through discussions with engineers and stakeholders, we discovered that full automation wasn't realistic. Certain edge cases still required human judgment before funds could be safely disbursed.</p>
            <div className="bg-[#EBEDF8] border border-[#C8D0F0] rounded-2xl px-8 py-7 mb-6">
              <h3 className="text-[18px] font-bold text-[#1E2D9E] mb-[10px] mt-0">
                Automate high-confidence validations and escalate exceptions for human review.
              </h3>
            </div>
            <p className="text-[#4A5568] leading-[1.7]">
              This became the core principle behind the redesign. The redesigned workflow shifts
              Finance teams away from validating every transaction and toward reviewing only
              transactions that require attention.
            </p>

            <div className="bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden shadow-sm mt-6">
              <div className="px-8 pt-6 pb-2 bg-[#f2f2f2fa]">
                <div
                  className="text-[10px] font-bold tracking-[.15em] text-[#8591A3] uppercase mb-4"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}
                >
                  Ideation of Improved Flow
                </div>
              </div>
              <img
                src={`${BASE}images/business-settlement-ideation.png`}
                alt="Business Settlement — Ideation of Improved Flow diagram"
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          {/* The Solution */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🎨 Design Solution 
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              What we built
            </p>

            <div className="bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="px-8 pt-6 pb-2 bg-[#f2f2f2fa]">
                <div
                  className="text-[10px] font-bold tracking-[.15em] text-[#8591A3] uppercase mb-4"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}
                >
                  Improved Reconciliation & Settlement
                </div>
              </div>
              <img
                src={`${BASE}images/dipay-improved-reconciliation.png`}
                alt="Dipay transaction reconciliation table showing all transaction data with automated reconciliation results"
                className="w-full object-cover"
              />
            </div>

            <div className="space-y-5">
              {[
                {
                  num: "01",
                  title: "Automated Reconciliation Engine",
                  body: "The system automatically validates transaction data and performs reconciliation checks at scale. Instead of manually comparing reports, Finance teams immediately receive reconciliation outcomes generated by the system.",
                },
                {
                  num: "02",
                  title: "Two-Status Review Model",
                  body: "Every transaction receives one of two outcomes: Eligible for Settlement, or Requires Review. This dramatically reduces review volume while maintaining financial control.",
                },
                {
                  num: "03",
                  title: "Exception-Based Operational Review",
                  body: "Rather than checking everything, Finance teams focus only on flagged transactions. This allows operators to spend their time investigating genuine issues instead of performing repetitive validation work.",
                },
                {
                  num: "04",
                  title: "Approval & Settlement Monitoring",
                  body: "Structured approval workflows, settlement visibility, and retry mechanisms help teams safely manage settlement operations while preventing duplicate disbursement risks.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="px-7 pt-5 pb-3 flex items-center gap-3">
                    <span
                      className="text-[10px] font-bold tracking-[.12em] text-[#8591A3] bg-[#F0F3FA] border border-[#E0E5EF] px-[10px] py-1 rounded-full"
                      style={{ fontFamily: "'JetBrains Mono',monospace" }}
                    >
                      {item.num}
                    </span>
                    <span className="text-[16px] font-bold text-[#0F1A2E]">{item.title}</span>
                  </div>
                  <div className="px-7 py-5 border-t border-[#EEF1F7]">
                    <p className="text-[14.5px] leading-[1.65] text-[#4A5568] m-0">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Impact */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              📈 Impact
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              The redesign transformed settlement operations from a spreadsheet-heavy validation
              process into an exception-based operational workflow.
            </p>

            <div
              className="rounded-[20px] p-12 mb-7 text-center text-white relative overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg,#1E2D9E 0%,#3548C9 50%,#4B5FE0 100%)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px,rgba(255,255,255,.05) 1px,transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative">
                <div
                  className="text-[11px] tracking-[.2em] uppercase mb-4"
                  style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(255,255,255,.6)" }}
                >
                  Results
                </div>
                <div className="text-[clamp(56px,10vw,80px)] font-extrabold tracking-[-0.04em] leading-none mb-4">
                  4-5h
                </div>
                <div className="text-[18px] max-w-[400px] mx-auto" style={{ color: "rgba(255,255,255,.85)" }}>
                  Saved per settlement cycle through automated reconciliation
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <MetricCard value="4-5h" label="Time saved per cycle" variant="success" />
              <MetricCard value="Auto" label="Reconciliation" variant="default" />
              <MetricCard value="Instant" label="Anomaly detection" variant="default" />
            </div>
          </Reveal>

          {/* Key Learnings */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              📝 Key Learnings
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              What this project changed about how I design
            </p>
            <div className="space-y-0">
              {[
                {
                  n: "01",
                  title: "Internal tools are often business-critical systems",
                  body: "The challenge was not designing a dashboard. The challenge was designing a safer operational process.",
                },
                {
                  n: "02",
                  title: "Automation is most effective when paired with human judgment",
                  body: "Financial operations require both scalability and control. The solution was not replacing humans -- it was helping them focus on the right problems.",
                },
                {
                  n: "03",
                  title: "Root causes matter more than symptoms",
                  body: "Settlement delays initially appeared to be an operational efficiency problem. In reality, they were the result of a reconciliation process that required humans to validate almost everything manually.",
                },
              ].map((lesson) => (
                <div
                  key={lesson.n}
                  className="grid gap-5 py-6 border-t border-[#EEF1F7] first:border-t-0 first:pt-2"
                  style={{ gridTemplateColumns: "48px 1fr" }}
                >
                  <div
                    className="text-[32px] font-extrabold text-[#0F1A2E] leading-none opacity-20"
                    style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em" }}
                  >
                    {lesson.n}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F1A2E] mb-[6px]">{lesson.title}</h3>
                    <p className="text-[15px] text-[#4A5568] leading-[1.65] m-0">{lesson.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Scope & Role */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🏗️ Scope & My Role
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              End-to-end product design across research, workflow mapping, system design, and
              iteration -- in close collaboration with engineering, finance, and operations.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Workflow Mapping",
                "Operational Research",
                "Information Architecture",
                "UX & Interaction Design",
                "Edge-Case Handling",
                "Dashboard Redesign",
                "Cross-functional Alignment",
                "Stakeholder Collaboration",
              ].map((pill) => (
                <span
                  key={pill}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E4E8F0] rounded-full text-[13px] font-semibold text-[#2B3648] shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B5FE0] inline-block" />
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
      {/* Prev / Next */}
      <div className="max-w-[760px] mx-auto px-7 pb-20 pt-4">
        <div className="flex justify-between items-center border-t border-[#E4E8F0] pt-12 gap-4">
          {prev ? (
            <Link href={`/case-study/${prev.slug}`} className="group flex flex-col gap-1 max-w-xs">
              <span className="text-xs text-[#8591A3] flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" /> Previous
              </span>
              <span className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/case-study/${next.slug}`}
              className="group flex flex-col items-end gap-1 max-w-xs text-right"
            >
              <span className="text-xs text-[#8591A3] flex items-center gap-1">
                Next <ArrowRight className="w-3 h-3" />
              </span>
              <span className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
