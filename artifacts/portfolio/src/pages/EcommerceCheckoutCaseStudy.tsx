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
    default: "#2E7D32",
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

export default function EcommerceCheckoutCaseStudy() {
  const study = caseStudies.find((c) => c.slug === "ecommerce-checkout")!;
  const currentIndex = caseStudies.findIndex((c) => c.slug === "ecommerce-checkout");
  const prev = caseStudies[currentIndex - 1] ?? null;
  const next = caseStudies[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <div className="bg-[#E8F5E9] pt-28 pb-0">
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
                { label: "Data analysis" },
                { label: "UI/UX Audit" },
                { label: "Storyboard" },
                { label: "Design" },
                { label: "Concept Testing" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="px-4 py-[7px] rounded-full text-xs font-semibold shadow-sm border"
                  style={
                    tag.highlight
                      ? { background: "#2E7D32", color: "#fff", borderColor: "#2E7D32" }
                      : { background: "#fff", color: "#2B3648", borderColor: "#E0E5EF" }
                  }
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.028em] text-[#0F1A2E] mb-5 max-w-[680px]">
              Decrease the cancellation rate of Surplus Order
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[620px] mb-10 leading-[1.55]">
              How a deep dive into analytics revealed that users weren't canceling because of slow
              delivery—they were missing critical pickup time information hidden in plain sight.
            </p>
          </motion.div>

          {/* Cover image — the Surplus banner */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[20px] overflow-hidden shadow-2xl"
          >
            <img
              src={`${BASE}images/${study.image}`}
              alt="Surplus App Case Study"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* Overview */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Overview</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              In the early period of joining Surplus, I was tasked by the CEO to explore and analyze
              existing data across Google Analytics, Mixpanel, and the Surplus Dashboard. The goal:
              understand user growth, transaction trends, funneling patterns, and merchant activation.
            </p>
            <figure className="my-6 rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
              <img
                src={`${BASE}images/surplus-analytics-report.png`}
                alt="Analytics Report Customer App January - June 2023"
                className="w-full h-auto block"
              />
            </figure>
            <p className="text-[#4A5568] leading-[1.7]">
              One metric immediately stood out —{" "}
              <strong className="text-[#0F1A2E] font-semibold">the high number of canceled orders</strong>.
              These cancellations occurred right at the end of the main process, after users had gone
              through the effort of browsing, selecting, and paying. These weren't casual window
              shoppers; they had strong purchase intent. Yet we were losing them at the finish line.
            </p>
          </Reveal>

          {/* TL;DR */}
          <Reveal delay={0.05}>
            <div className="bg-white border border-[#E4E8F0] rounded-2xl p-8 shadow-sm">
              <div
                className="text-[10px] font-bold tracking-[.15em] text-[#8591A3] uppercase mb-4"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                TL;DR
              </div>
              {[
                {
                  k: "Problem",
                  v: "~30% of completed orders were being canceled. Users blamed \"slow delivery\" but the real issue was something else entirely.",
                },
                {
                  k: "Discovery",
                  v: "86% of cancellations were due to perceived long delivery time. But user interviews revealed users were missing the pickup time information — they ordered food for lunch that wasn't available until dinner.",
                },
                {
                  k: "Solution",
                  v: "Redesigned the menu card to prominently display pickup time and added a confirmation popup before checkout to ensure users understood when their order would be ready.",
                },
                {
                  k: "Result",
                  v: "Cancellation rate dropped from ~30% to ~6% — a 76% reduction in canceled orders without impacting total order volume.",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid gap-4 py-3 border-t border-[#EEF1F7] first:border-t-0"
                  style={{ gridTemplateColumns: "100px 1fr" }}
                >
                  <div className="text-[13px] font-bold text-[#0F1A2E]">{row.k}</div>
                  <div className="text-[14.5px] leading-[1.6] text-[#4A5568]">{row.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Deep Dive into The Data */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              📊 Deep Dive into The Data
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              The data revealed that over the past six months, our cancellation rate had averaged
              around <strong className="text-[#0F1A2E] font-semibold">30%</strong>. This means that
              out of every 1,000 customers who completed a purchase, we were losing around 300 of them
              in the end.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-7">
              <MetricCard value="~30%" label="Cancellation Rate" variant="danger" />
              <MetricCard value="6 months" label="Data Period" />
              <MetricCard value="300/1000" label="Orders Lost" variant="danger" />
            </div>

            <div className="bg-[#FFF5F5] border border-[#F5D4D4] rounded-2xl px-8 py-7">
              <h3 className="text-[18px] font-bold text-[#0F1A2E] mb-[10px] mt-0">Revenue Impact</h3>
              <p className="text-[15.5px] text-[#4A5568] leading-[1.7] m-0">
                This undoubtedly has a significant impact on revenue. If this issue isn't fixed, we
                will always lose sales — not from lack of interest, but from a breakdown somewhere in
                the experience.
              </p>
            </div>
          </Reveal>

          {/* Gathering Insight */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🔍 Gathering Insight
            </h2>

            <div
              className="rounded-2xl p-8 mb-7 relative"
              style={{
                background: "linear-gradient(135deg,#E8F5E9 0%,#fff 100%)",
                border: "2px solid #2E7D32",
              }}
            >
              <span className="absolute -top-4 left-6 text-2xl bg-[#F4F6FB] px-2">💡</span>
              <h3 className="text-[20px] font-bold mb-3 mt-0" style={{ color: "#2E7D32" }}>
                86% of cancellations are due to perceived long delivery time
              </h3>
              <p className="text-[15.5px] text-[#4A5568] leading-[1.7] m-0">
                We gathered feedback from the dashboard of refund requests and customer service
                complaints. The primary reason users cited for canceling was that delivery was taking
                too long.
              </p>
            </div>

            <figure className="mb-7 rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
              <img
                src={`${BASE}images/surplus-user-complaints.png`}
                alt="User complaints about long waiting time"
                className="w-full h-auto block"
              />
            </figure>

            <p className="text-[#4A5568] leading-[1.7]">
              However, understanding this issue prompted us to delve deeper.{" "}
              <strong className="text-[#0F1A2E] font-semibold">
                Is it solely an issue with the delivery process, or could there be third-party factors
                at play?
              </strong>
            </p>
          </Reveal>

          {/* Deep Dive into The Problem */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🎯 Deep Dive into The Problem
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              As we continued our in-depth research through{" "}
              <strong className="text-[#0F1A2E] font-semibold">
                user interviews and examining transaction details
              </strong>
              , we were surprised to find that the cancellation orders were not primarily due to
              delivery delays.
            </p>

            <div className="flex flex-col md:flex-row gap-5 mb-7 items-start">
              <div className="bg-[#F0FAF5] border border-[#C9E8D7] rounded-2xl px-8 py-7 flex-1">
                <h3 className="text-[18px] font-bold text-[#0F1A2E] mb-[10px] mt-0">The Real Discovery</h3>
                <p className="text-[15.5px] text-[#4A5568] leading-[1.7] m-0">
                  Users were missing the "pickup time" information, leading to cancellations. They
                  weren't aware that the food they ordered wouldn't be available until hours later.
                </p>
              </div>
              <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm md:w-[220px] flex-shrink-0">
                <img
                  src={`${BASE}images/surplus-product-card.png`}
                  alt="Product card showing pickup time"
                  className="w-full h-auto block"
                />
              </figure>
            </div>

            <p className="text-[#4A5568] leading-[1.7] mb-5">
              From that missing information, we found a critical gap: the time between when users
              ordered and when the merchant's pickup time was set. For example:
            </p>

            <figure className="mb-5 rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
              <img
                src={`${BASE}images/surplus-jam-pengambilan.png`}
                alt="Transaction data showing mismatch between order time and pickup time"
                className="w-full h-auto block"
              />
            </figure>

            <p className="text-[#4A5568] leading-[1.7]">
              <strong className="text-[#0F1A2E] font-semibold">Note:</strong>{" "}
              <em className="text-[#2B3648]">Order Date</em> = The time when the user ordered;{" "}
              <em className="text-[#2B3648]">Pickup Time</em> = The time set by the merchant as a mark
              when the menu can be picked up (almost the same as the store open time).
            </p>
          </Reveal>

          {/* User Journey Map */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🗺️ Case Story: The Cancellation Journey
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              Based on this discovery, we conducted a UI/UX audit on the checkout flow and created a
              case story illustration to understand the problem from the user's perspective.
            </p>

            <figure className="mb-7 rounded-2xl overflow-hidden border border-[#E4E8F0] shadow-sm bg-white">
              <img
                src={`${BASE}images/surplus-case-story.png`}
                alt="Case Story: User cancel cause missed pick up time"
                className="w-full h-auto block"
              />
            </figure>

            <div className="bg-[#FFF9F0] border border-[#F5E4C5] rounded-2xl px-8 py-7 mb-7">
              <h3 className="text-[18px] font-bold text-[#0F1A2E] mb-[10px] mt-0">Key Questions We Raised</h3>
              <p className="text-[15.5px] text-[#4A5568] leading-[1.7] m-0">
                Why does our app's system rely on the pickup time? Could we streamline the process by
                only displaying menus available for immediate order and processing? Is this akin to a
                pre-order system?
              </p>
            </div>

            <p className="text-[#4A5568] leading-[1.7]">
              Before proceeding, we initiated{" "}
              <strong className="text-[#0F1A2E] font-semibold">
                discussions with stakeholders and other teams to gain clarity on the concept of pickup
                time
              </strong>{" "}
              and validated our hypothesis about the root cause.
            </p>
          </Reveal>

          {/* The Design Solution */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🎨 The Design Solution
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              We were certain that we'd outlined our issues clearly and were keen to address them
              swiftly. Our goal:{" "}
              <strong className="text-[#0F1A2E] font-semibold">
                make users more aware of the pickup time
              </strong>{" "}
              to prevent misunderstandings and avoid disappointing users with what they've chosen.
            </p>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-4 tracking-[-0.01em]">
              Solution 1: Redesigned Menu Card
            </h3>
            {[
              {
                num: "CHANGE 01",
                title: "Menu Card Information Hierarchy",
                before: "Pickup time information was buried or barely visible. Users focused on food images and prices, missing the critical timing information.",
                after: "Pickup time prominently displayed at the top of the card with clear visual styling. Relayout prioritizes timing information alongside the menu details.",
              },
            ].map((change) => (
              <div
                key={change.num}
                className="bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden shadow-sm mb-5"
              >
                <div className="px-7 pt-5 pb-3 flex items-center gap-3">
                  <span
                    className="text-[10px] font-bold tracking-[.12em] text-[#8591A3] bg-[#F0F3FA] border border-[#E0E5EF] px-[10px] py-1 rounded-full"
                    style={{ fontFamily: "'JetBrains Mono',monospace" }}
                  >
                    {change.num}
                  </span>
                  <span className="text-[16px] font-bold text-[#0F1A2E]">{change.title}</span>
                </div>
                <div className="grid md:grid-cols-2 border-t border-[#EEF1F7]">
                  <div className="px-7 py-5 bg-[#FAFBFD] border-b md:border-b-0 md:border-r border-[#EEF1F7]">
                    <h4 className="text-[10px] font-bold tracking-[.12em] uppercase mb-[10px] flex items-center gap-1.5" style={{ fontFamily: "'JetBrains Mono',monospace", color: "#C54545" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C54545] inline-block" />Before
                    </h4>
                    <p className="text-[14px] leading-[1.65] text-[#4A5568] m-0">{change.before}</p>
                  </div>
                  <div className="px-7 py-5">
                    <h4 className="text-[10px] font-bold tracking-[.12em] uppercase mb-[10px] flex items-center gap-1.5" style={{ fontFamily: "'JetBrains Mono',monospace", color: "#1F9B6E" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F9B6E] inline-block" />After
                    </h4>
                    <p className="text-[14px] leading-[1.65] text-[#4A5568] m-0">{change.after}</p>
                  </div>
                </div>
                <figure className="border-t border-[#EEF1F7] overflow-hidden">
                  <img
                    src={`${BASE}images/surplus-merchant-page.png`}
                    alt="Merchant page before and after redesign"
                    className="w-full h-auto block"
                  />
                </figure>
              </div>
            ))}

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-4 tracking-[-0.01em]">
              Solution 2: Confirmation Popup
            </h3>
            <div className="bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="px-7 pt-5 pb-3 flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[.12em] text-[#8591A3] bg-[#F0F3FA] border border-[#E0E5EF] px-[10px] py-1 rounded-full" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                  CHANGE 02
                </span>
                <span className="text-[16px] font-bold text-[#0F1A2E]">Pre-Checkout Confirmation</span>
              </div>
              <div className="grid md:grid-cols-2 border-t border-[#EEF1F7]">
                <div className="px-7 py-5 bg-[#FAFBFD] border-b md:border-b-0 md:border-r border-[#EEF1F7]">
                  <h4 className="text-[10px] font-bold tracking-[.12em] uppercase mb-[10px] flex items-center gap-1.5" style={{ fontFamily: "'JetBrains Mono',monospace", color: "#C54545" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C54545] inline-block" />Before
                  </h4>
                  <p className="text-[14px] leading-[1.65] text-[#4A5568] m-0">
                    Users could proceed directly to payment without any confirmation of the pickup time.
                    No friction meant no awareness.
                  </p>
                </div>
                <div className="px-7 py-5">
                  <h4 className="text-[10px] font-bold tracking-[.12em] uppercase mb-[10px] flex items-center gap-1.5" style={{ fontFamily: "'JetBrains Mono',monospace", color: "#1F9B6E" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F9B6E] inline-block" />After
                  </h4>
                  <p className="text-[14px] leading-[1.65] text-[#4A5568] m-0">
                    Added a popup confirmation that highlights the pickup time information with a clear
                    message. Users must acknowledge they understand when their order will be ready before
                    proceeding.
                  </p>
                </div>
              </div>
              <figure className="border-t border-[#EEF1F7] overflow-hidden">
                <img
                  src={`${BASE}images/surplus-popup.png`}
                  alt="Pre-checkout confirmation popup"
                  className="w-full h-auto block"
                />
              </figure>
            </div>

            <p className="text-[#4A5568] leading-[1.7]">
              Based on our internal testing, we were confident that this card design could better
              accommodate user needs and prevent the misunderstanding that led to cancellations.
            </p>
          </Reveal>

          {/* The Outcome */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🚀 The Outcome
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              We collected data again after{" "}
              <strong className="text-[#0F1A2E] font-semibold">3 months post-release</strong>. The
              results were quite satisfying.
            </p>

            <div
              className="rounded-[20px] p-12 mb-7 text-center text-white relative overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg,#1B5E20 0%,#2E7D32 50%,#388E3C 100%)" }}
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
                  Reduction in Cancellation Rate
                </div>
                <div className="text-[clamp(56px,10vw,80px)] font-extrabold tracking-[-0.04em] leading-none mb-4">
                  ~76%
                </div>
                <div className="text-[18px] max-w-[400px] mx-auto" style={{ color: "rgba(255,255,255,.85)" }}>
                  Cancellation rate dropped from ~30% to ~6% every month, without impacting total order
                  volume.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <MetricCard value="~30%" label="Before" variant="danger" />
              <MetricCard value="~6%" label="After" variant="success" />
              <MetricCard value="3 mo." label="Time to Results" variant="success" />
            </div>
          </Reveal>

          {/* Lessons Learned */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              📝 Lessons Learned
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              This project reinforced several important principles about product design and
              problem-solving.
            </p>
            <div className="space-y-0">
              {[
                {
                  n: "01",
                  title: "Simple improvements can have massive impact",
                  body: "This may seem like a simple improvement, but this case taught me the importance of being aware of issues in our app. The fix wasn't a complete redesign — it was making critical information visible at the right moment.",
                },
                {
                  n: "02",
                  title: "Small changes, significant results",
                  body: "Sometimes we don't always need groundbreaking improvements. Even small changes can have a significant impact when they address the right problem. A popup and a relayout solved what seemed like a complex delivery issue.",
                },
                {
                  n: "03",
                  title: "User complaints reveal symptoms, not causes",
                  body: "Users blamed \"slow delivery\" but the real problem was information architecture. If we had taken their feedback at face value and focused on speeding up delivery, we would have missed the actual issue entirely.",
                },
                {
                  n: "04",
                  title: "Data analysis is the starting point, not the answer",
                  body: (
                    <>
                      The data told us <em className="text-[#2B3648]">what</em> was happening (high
                      cancellations). User interviews and transaction analysis told us{" "}
                      <em className="text-[#2B3648]">why</em>. Both were essential to finding the right
                      solution.
                    </>
                  ),
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
              Scope & My Role
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              This project covered the full product design cycle from discovery to validation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Data Analysis",
                "UX Research",
                "User Interviews",
                "UI Design",
                "Concept Testing",
                "Stakeholder Collaboration",
              ].map((pill) => (
                <span
                  key={pill}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E4E8F0] rounded-full text-[13px] font-semibold text-[#2B3648] shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F9B6E] inline-block" />
                  {pill}
                </span>
              ))}
            </div>
            <p className="text-[#4A5568] leading-[1.7]">
              I led the investigation from initial data analysis through to the final design solution,
              working closely with the CEO, customer service team, and development team to ship the
              improvement.
            </p>
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
