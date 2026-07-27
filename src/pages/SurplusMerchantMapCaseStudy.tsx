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

function MetricCard({
  value,
  label,
  variant = "default",
}: {
  value: string;
  label: string;
  variant?: "default" | "danger" | "success";
}) {
  const colors: Record<string, string> = {
    default: "#E07A3A",
    danger: "#C54545",
    success: "#1F9B6E",
  };
  return (
    <div className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
      <div
        className="text-[36px] font-extrabold leading-none mb-2 tracking-[-0.03em]"
        style={{ color: colors[variant] }}
      >
        {value}
      </div>
      <div className="text-[13px] font-semibold text-[#8591A3] uppercase tracking-[.05em]">
        {label}
      </div>
    </div>
  );
}

function Quote({ text }: { text: string }) {
  return (
    <div
      className="border-l-4 pl-5 py-2 italic text-[15px] text-[#4A5568] leading-[1.7]"
      style={{ borderColor: "#E07A3A" }}
    >
      "{text}"
    </div>
  );
}

export default function SurplusMerchantMapCaseStudy() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
  }, []);

  const study = caseStudies.find((c) => c.slug === "surplus-merchant-map")!;

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      <Navbar />
      {/* ── Hero ── */}
      <div className="pt-28 pb-0" style={{ background: "#FFF3EA" }}>
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
                { label: "User Research" },
                { label: "Feature Design" },
                { label: "Usability Testing" },
                { label: "Mobile App" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="px-4 py-[7px] rounded-full text-xs font-semibold shadow-sm border"
                  style={
                    tag.highlight
                      ? { background: "#E07A3A", color: "#fff", borderColor: "#E07A3A" }
                      : { background: "#fff", color: "#2B3648", borderColor: "#E0E5EF" }
                  }
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.028em] text-[#0F1A2E] mb-5 max-w-[680px]">
              Help user find merchant easily
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[620px] mb-10 leading-[1.55]">How a map-based discovery feature helped Surplus users find nearby merchants without opening each one</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[20px] overflow-hidden shadow-2xl"
          >
            <img
              src={`${BASE}images/surplus-map-cover.png`}
              alt="Help user find merchant easily — Surplus"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* ── Content ── */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* TL;DR */}
          <Reveal>
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
                  v: "Only 10.80% of active Surplus users completed a transaction in H1 2023. 31% of users struggled to find merchants — higher than struggles with registration or the transaction process itself.",
                },
                {
                  k: "Discovery",
                  v: "Users with self pick-up behaviour couldn't see all nearby merchant locations at a glance. They had to open each merchant card one by one — causing frustration and drop-off in the discovery flow.",
                },
                {
                  k: "Solution",
                  v: "A map view feature showing all Surplus merchants within a 20 km radius, with tap-to-preview cards at the bottom so users can scan and plan without leaving the map.",
                },
                {
                  k: "Result",
                  v: "72.9% adoption rate post-launch, contributing to higher order completion rates across the platform.",
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

          {/* Background */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              📊 Background
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              In the first half of 2023, Surplus was facing a critical growth challenge: the average
              conversion rate from active users to completed transactions was only{" "}
              <strong className="text-[#0F1A2E] font-semibold">10.80%</strong>. The team needed to
              understand where users were dropping off — and why.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-7">
              <MetricCard value="10.80%" label="Active → Transaction Rate" variant="danger" />
              <MetricCard value="31%" label="Users Struggling to Find Merchants" variant="danger" />
              <MetricCard value="#1" label="Discovery Drop-Off Ranked Highest" variant="default" />
            </div>

            <p className="text-[#4A5568] leading-[1.7]">
              A satisfaction survey (Survei Kepuasan) revealed that{" "}
              <strong className="text-[#0F1A2E] font-semibold">
                31% of users struggled to find merchants and products
              </strong>{" "}
              — a figure higher than difficulties with registration or even the transaction process.
              This pointed to merchant/product discovery as the biggest drop-off in the funnel.
            </p>
          </Reveal>

          {/* User Research */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🔍 Understanding the User
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              Through user interviews and behavioral analysis, two clear patterns emerged: users
              with self pick-up behavior, and users who open the app when exploring a new area.
              Both groups relied heavily on location proximity — but the app made it nearly
              impossible to get a spatial overview.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-7">
              <div className="bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-sm">
                <div className="text-[13px] font-bold text-[#E07A3A] uppercase tracking-wide mb-3">User Problem</div>
                <ul className="space-y-3 text-[14.5px] text-[#4A5568] leading-[1.6]">
                  <li>• Had to open each merchant card separately just to see its map location</li>
                  <li>• Map data was outdated — listed distances didn't match reality</li>
                  <li>• Merchants listed as nearby sometimes turned out to be &gt;10 km away</li>
                  <li>• Arrived at a pick-up point only to find the address didn't match</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-sm">
                <div className="text-[13px] font-bold text-[#E07A3A] uppercase tracking-wide mb-3">User Behavior</div>
                <ul className="space-y-3 text-[14.5px] text-[#4A5568] leading-[1.6]">
                  <li>• Often opened Surplus when entering a new or unfamiliar area</li>
                  <li>• Location/distance was the #1 filter before considering menu or price</li>
                  <li>• Self pick-up users planned purchases around routes they were already taking</li>
                  <li>• Delivery fees were a strong incentive to self pick-up when nearby</li>
                </ul>
              </div>
            </div>

            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
              <img
                src={`${BASE}images/surplus-map-user-research.png`}
                alt="User Problem and User Behavior — research findings"
                className="w-full h-auto block"
              />
            </figure>
          </Reveal>

          {/* Goal */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🎯 Goal
            </h2>
            <div
              className="rounded-2xl p-8 relative"
              style={{
                background: "linear-gradient(135deg,#FFF3EA 0%,#fff 100%)",
                border: "2px solid #E07A3A",
              }}
            >
              <span className="absolute -top-4 left-6 text-2xl bg-[#F4F6FB] px-2">💡</span>
              <ul className="space-y-4 text-[15px] text-[#4A5568] leading-[1.7]">
                <li>
                  <strong className="text-[#0F1A2E]">1. Surface merchant locations at a glance</strong> — let
                  pick-up users see where all nearby merchants are without opening each detail page.
                </li>
                <li>
                  <strong className="text-[#0F1A2E]">2. Enable spatial planning</strong> — show the
                  broader map of merchants so users can plan a pick-up as part of their existing
                  route, especially when entering a new area.
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Solution */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              ✏️ Solution Design
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The feature converts the existing merchant list (limited to 20 km radius) into an
              interactive map. Users can pan, zoom, and tap merchant pins to preview details —
              all without leaving the map context.
            </p>

            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-6">
              <img
                src={`${BASE}images/surplus-map-solution.png`}
                alt="Search Merchant by Map — prototype flow"
                className="w-full h-auto block"
              />
            </figure>

            <div className="bg-white rounded-2xl border border-[#E4E8F0] p-7 shadow-sm mb-6">
              <h3 className="text-[17px] font-bold text-[#0F1A2E] mb-5">Feature Requirements</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    title: "20 km Radius Cap",
                    desc: "Map shows only merchants within the existing 20 km list radius — zoom in/out but the data set stays consistent.",
                  },
                  {
                    icon: "🟠",
                    title: "3-State Merchant Icons",
                    desc: "Active merchant, non-active merchant, and selected merchant — each with a distinct visual state so users instantly know who's open.",
                  },
                  {
                    icon: "📋",
                    title: "Tap-to-Preview Bottom Bar",
                    desc: "Tapping a map pin shows the restaurant name in a bottom drawer. The bar defaults to the nearest active merchant and scrolls left/right by proximity.",
                  },
                  {
                    icon: "↔️",
                    title: "Swipeable Merchant Bar",
                    desc: "Swiping right reveals merchants further away; swiping left returns to closer ones — giving a natural sense of spatial distance.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-[14px] font-bold text-[#0F1A2E] mb-1">{item.title}</div>
                      <div className="text-[14px] text-[#4A5568] leading-[1.6]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Testing */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🧪 Usability Testing
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The prototype was tested with 4 respondents using opinion-scale questions across
              three dimensions. A score above 8 was set as the "Acceptable" threshold.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-7">
              <div className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
                <div className="text-[36px] font-extrabold leading-none mb-1 tracking-[-0.03em]" style={{ color: "#E07A3A" }}>
                  &gt;8
                </div>
                <div className="text-[13px] font-semibold text-[#8591A3] uppercase tracking-[.05em]">Ease of Use</div>
                <div className="text-[12px] text-[#B0BAC9] mt-1">1–10 scale</div>
              </div>
              <div className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
                <div className="text-[36px] font-extrabold leading-none mb-1 tracking-[-0.03em]" style={{ color: "#E07A3A" }}>
                  &gt;8
                </div>
                <div className="text-[13px] font-semibold text-[#8591A3] uppercase tracking-[.05em]">Speed</div>
                <div className="text-[12px] text-[#B0BAC9] mt-1">1–10 scale</div>
              </div>
              <div className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
                <div className="text-[36px] font-extrabold leading-none mb-1 tracking-[-0.03em]" style={{ color: "#E07A3A" }}>
                  &gt;8
                </div>
                <div className="text-[13px] font-semibold text-[#8591A3] uppercase tracking-[.05em]">Helpfulness</div>
                <div className="text-[12px] text-[#B0BAC9] mt-1">1–10 scale</div>
              </div>
            </div>

            <div
              className="rounded-2xl px-8 py-6"
              style={{ background: "#FFF3EA", border: "1px solid #FDDBB6" }}
            >
              <p className="text-[15px] text-[#4A5568] leading-[1.7] m-0">
                All three dimensions exceeded the acceptable threshold with an average rating above{" "}
                <strong className="text-[#0F1A2E]">8 out of 10</strong> from all 4 respondents —
                confirming the feature met user expectations for ease, speed, and utility.
              </p>
            </div>
          </Reveal>

          {/* Outcome */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🚀 Outcome
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              After launch, the Search Merchant by Map feature saw strong organic adoption and
              contributed measurably to the platform's order completion metrics.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-7">
              <MetricCard value="72.9%" label="Feature Adoption Rate" variant="success" />
              <MetricCard value="↑" label="Order Completion Rate" variant="success" />
            </div>
            <p className="text-[#4A5568] leading-[1.7]">
              The adoption rate of <strong className="text-[#0F1A2E] font-semibold">72.9%</strong>{" "}
              demonstrated that giving users a spatial overview of merchants was a high-value,
              immediately understood interaction — reducing friction in the discovery flow and
              making pick-up planning far more intuitive.
            </p>
          </Reveal>

        </div>
      </div>
      {/* ── Back link ── */}
      <div className="pb-20 max-w-[760px] mx-auto px-7">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8591A3] hover:text-[#0F1A2E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
      <Footer />
    </div>
  );
}
