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

function IssueCard({ icon, title, quote, source }: { icon: string; title: string; quote?: string; source?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-sm">
      <div className="text-2xl mb-3">{icon}</div>
      <div className="text-[15px] font-bold text-[#0F1A2E] mb-2">{title}</div>
      {quote && (
        <p className="text-[13.5px] text-[#4A5568] leading-[1.6] italic border-l-2 pl-3" style={{ borderColor: "#E07A3A" }}>
          "{quote}"
        </p>
      )}
      {source && <div className="text-[11px] text-[#8591A3] mt-2 font-medium">{source}</div>}
    </div>
  );
}

export default function SurplusEcofriendlyCaseStudy() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
  }, []);

  const study = caseStudies.find((c) => c.slug === "surplus-ecofriendly-cashback")!;

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <div className="pt-28 pb-0" style={{ background: "#F0FBF4" }}>
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
                { label: "Flow Redesign" },
                { label: "Multi-Stakeholder" },
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
              Extra Cashback Eco-friendly
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[620px] mb-10 leading-[1.55]">
              Redesigning a broken cashback system for eco-friendly pick-up orders — fixing the flow for customers, merchants, and web admin to make a promising feature actually work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[20px] overflow-hidden shadow-2xl"
          >
            <img
              src={`${BASE}images/${study.image}`}
              alt="Extra Cashback Eco-friendly — Surplus"
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
                  v: "The existing eco-friendly cashback feature had a broken 3-party flow: no web admin system to validate, no manpower to review photos, and merchants didn't understand what to do — leaving users who tried the feature empty-handed.",
                },
                {
                  k: "Discovery",
                  v: "Survey data (2023) showed users who attempted the cashback were confused by unclear T&C, couldn't use vouchers at the same time (and weren't told why), and didn't receive cashback even when they followed the steps.",
                },
                {
                  k: "Solution",
                  v: "Rebuilt the end-to-end flow: renamed the feature to 'Extra Cashback Eco-friendly', automated cashback validation in web admin, added Slack notifications for the finance team, and clarified the customer, merchant, and admin app flows.",
                },
                {
                  k: "Result",
                  v: "A cohesive, automated eco-cashback system reducing manual validation steps, eliminating missed cashback cases, and clearly communicating T&C across all touchpoints.",
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
              🌿 Background
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              Surplus had an existing eco-friendly cashback feature — "Cashback Kotak Makan atau
              Totebag" — designed to reward customers who picked up orders using their own reusable
              containers. The concept was sound, but the execution was fragile.
            </p>
            <p className="text-[#4A5568] leading-[1.7]">
              The flow required three parties to coordinate: the <strong className="text-[#0F1A2E]">customer</strong> to
              toggle the feature and enter a verification code, the <strong className="text-[#0F1A2E]">merchant</strong> to
              photograph the customer's bag, and a <strong className="text-[#0F1A2E]">web admin validator</strong> to
              approve or reject the photo before cashback was granted. In practice, none of the three
              sides were ready.
            </p>
          </Reveal>

          {/* Issues */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              ⚠️ What Was Breaking
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <IssueCard
                icon="🖥️"
                title="Web admin system wasn't ready"
                quote="ada satu fitur yang membingungkan... potensi cashback yang tidak jelas dari penggunaan fitur tersebut"
                source="Survei 2023"
              />
              <IssueCard
                icon="👤"
                title="No manpower to validate"
                quote="Ketika membawa kantong belanja dan harusnya bisa mendapatkan cash back tetapi tidak mendapatkannya"
                source="Survei 2023"
              />
              <IssueCard
                icon="🏪"
                title="Merchants didn't understand the photo step"
              />
            </div>

            <div
              className="rounded-2xl px-8 py-6"
              style={{ background: "#FFF3EA", border: "1px solid #FDDBB6" }}
            >
              <p className="text-[15px] text-[#4A5568] leading-[1.7] m-0">
                Additionally, users who activated the cashback toggle were silently blocked from
                using any voucher — a rule that was never communicated to them at the right moment,
                causing frustration at checkout.
              </p>
            </div>
          </Reveal>

          {/* Improvements */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🛠️ Improvements
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The redesign touched all three sides of the system simultaneously — simplifying the
              customer experience, giving merchants clear instructions, and automating the admin
              validation process.
            </p>

            <div className="space-y-4">
              {[
                {
                  n: "01",
                  title: "Rename & Simplify Scope",
                  desc: "Rebranded to 'Extra Cashback Eco-friendly' and narrowed focus to eco bags, totebags, and paperbags — removing reusable food containers due to the variety of food types on Surplus that make container compatibility unpredictable.",
                },
                {
                  n: "02",
                  title: "Automated Web Admin Cashback Flow",
                  desc: "Built a dedicated 'Cashback' section in the web admin panel. Cashback is now automatically granted after the validator approves the photo — eliminating the manual multi-step process that required no-system support.",
                },
                {
                  n: "03",
                  title: "Slack Notifications for Finance",
                  desc: "Added Slack notifications whenever a cashback request comes in, so the finance team is alerted immediately — reducing latency and missed validations.",
                },
                {
                  n: "04",
                  title: "Clearer Customer App Flow",
                  desc: "Improved wording throughout the T&C, made the voucher restriction visible before activation, and added notifications when cashback is accepted or rejected so users always know the status of their request.",
                },
                {
                  n: "05",
                  title: "Clearer Merchant App Flow",
                  desc: "Gave merchants a step-by-step in-app guide: don't wrap the order, ask for the customer's bag at pick-up, photograph the bag with the food in it, and handle edge cases (e.g. food already in a merchant paperbag).",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-5 items-start bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-sm">
                  <div
                    className="text-[13px] font-bold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ background: "#E07A3A" }}
                  >
                    {item.n}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#0F1A2E] mb-1">{item.title}</div>
                    <div className="text-[14px] text-[#4A5568] leading-[1.6]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* T&C Summary */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              📋 Terms &amp; Conditions Redesigned
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              A key part of the fix was making the rules legible upfront — so users couldn't accidentally violate them and lose their cashback.
            </p>
            <div className="bg-white rounded-2xl border border-[#E4E8F0] p-7 shadow-sm">
              <div className="space-y-4">
                {[
                  "25% cashback on total product price, maximum Rp10,000 — no minimum purchase required.",
                  "Extra cashback cannot be combined with any voucher type.",
                  "Cashback is granted only when the customer is validated as picking up with their own eco-friendly bag (eco bag, totebag, or paperbag).",
                ].map((rule, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5" style={{ background: "#2B8A3E" }}>
                      ✓
                    </div>
                    <p className="text-[14.5px] text-[#4A5568] leading-[1.6] m-0">{rule}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#EEF1F7]">
                <div className="text-[13px] font-bold text-[#0F1A2E] mb-3">Validator Guidelines</div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="rounded-xl px-4 py-3 text-[13.5px] text-[#1F6B3E]" style={{ background: "#E8F5E9", border: "1px solid #A5D6A7" }}>
                    <strong>✓ Accept</strong> — photo shows an eco bag, totebag, or paperbag
                  </div>
                  <div className="rounded-xl px-4 py-3 text-[13.5px] text-[#C54545]" style={{ background: "#FFF5F5", border: "1px solid #F5D4D4" }}>
                    <strong>✗ Reject</strong> — plastic bag, merchant's own paperbag, or no bag visible
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Outcome */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🚀 Outcome
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The redesigned flow addressed all three failure points simultaneously — the system was
              ready, validation was automated, and all parties had clear in-app guidance.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3", label: "Touchpoints Redesigned", sub: "Customer · Merchant · Admin" },
                { value: "0", label: "Manual Validation Steps", sub: "Automated after photo approval" },
                { value: "✓", label: "Slack Alerts Live", sub: "Finance team notified instantly" },
              ].map((m) => (
                <div key={m.value} className="bg-white border border-[#E4E8F0] rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-[36px] font-extrabold leading-none mb-1 tracking-[-0.03em]" style={{ color: "#2B8A3E" }}>
                    {m.value}
                  </div>
                  <div className="text-[12px] font-bold text-[#8591A3] uppercase tracking-wide mb-1">{m.label}</div>
                  <div className="text-[11px] text-[#B0BAC9]">{m.sub}</div>
                </div>
              ))}
            </div>
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
