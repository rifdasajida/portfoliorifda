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
              Redesigning a broken cashback system for eco-friendly pick-up orders — fixing the flow for customers, merchants, and web admin so a promising feature could finally work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[20px] overflow-hidden shadow-2xl"
          >
            <img
              src={`${BASE}images/surplus-ecofriendly-cover.png`}
              alt="Redesigning System of Ecofriendly Cashback — Surplus"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* 1. Complaints → user satisfaction */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              😟 We Had a Lot of Complaints
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The eco-friendly cashback feature was intended to reward customers who picked up their
              Surplus orders using their own reusable bags — a win for the user's wallet and a win
              for the environment. But in reality, it was generating frustration, not goodwill.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div
                className="rounded-2xl p-6"
                style={{ background: "#FFF3EA", border: "1px solid #FDDBB6" }}
              >
                <div className="text-[13px] font-bold text-[#E07A3A] uppercase tracking-wide mb-3">User Survey 2023</div>
                <p className="text-[14.5px] text-[#4A5568] leading-[1.7] italic m-0">
                  "Ada satu fitur yang membingungkan yaitu fitur pengambilan dengan menggunakan
                  tempat/tas belanja dari rumah... potensi cashback yang tidak jelas dari
                  penggunaan fitur tersebut."
                </p>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{ background: "#FFF3EA", border: "1px solid #FDDBB6" }}
              >
                <div className="text-[13px] font-bold text-[#E07A3A] uppercase tracking-wide mb-3">User Survey 2023</div>
                <p className="text-[14.5px] text-[#4A5568] leading-[1.7] italic m-0">
                  "Ketika membawa kantong belanja dan harusnya bisa mendapatkan cashback tetapi
                  tidak mendapatkannya."
                </p>
              </div>
            </div>

            <p className="text-[#4A5568] leading-[1.7]">
              Users were following the steps, bringing their own bags, yet never receiving the
              promised cashback. This was eroding trust in the feature and, more broadly, in the
              Surplus experience.
            </p>
          </Reveal>

          {/* 2. Understanding the current flow */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🔍 Understanding the Current Flow
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              Before jumping to solutions, I mapped out what actually happened across the full
              flow — from the customer toggling the feature to the moment cashback was (or wasn't)
              received. The system involved three parties that all had to work in sequence.
            </p>

            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-5">
              <img
                src={`${BASE}images/ecofriendly-current-flow.png`}
                alt="Current Flow — 3-party system diagram"
                className="w-full h-auto block"
              />
            </figure>
            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm">
              <img
                src={`${BASE}images/ecofriendly-current-system.png`}
                alt="Current System — Cashback Kotak Makan atau Totebag screenshots"
                className="w-full h-auto block"
              />
            </figure>
          </Reveal>

          {/* 3. Three main problems */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              ⚠️ Three Main Problems
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              After mapping the flow end to end, it became clear the feature wasn't failing because
              of one issue — it was broken at every layer of the system simultaneously.
            </p>

            <div className="space-y-4">
              {[
                {
                  n: "01",
                  title: "Web admin system wasn't ready",
                  desc: "There was no dedicated validation interface for the admin team. Reviewers had to work around the system, making the approval process slow, inconsistent, and easy to miss.",
                  color: "#C54545",
                  bg: "#FFF5F5",
                  border: "#F5D4D4",
                },
                {
                  n: "02",
                  title: "No manpower to validate",
                  desc: "Even when photos were submitted, there was no clear ownership of the validation task — leading to cashback requests sitting unreviewed and users never hearing back.",
                  color: "#C54545",
                  bg: "#FFF5F5",
                  border: "#F5D4D4",
                },
                {
                  n: "03",
                  title: "Merchants didn't understand their role",
                  desc: "The merchant app gave no clear instruction about when or how to photograph the bag. Many merchants skipped this step entirely without realising it blocked the cashback.",
                  color: "#C54545",
                  bg: "#FFF5F5",
                  border: "#F5D4D4",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="flex gap-5 items-start rounded-2xl p-6"
                  style={{ background: item.bg, border: `1px solid ${item.border}` }}
                >
                  <div
                    className="text-[13px] font-bold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ background: item.color }}
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

          {/* 4. Improvements */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">
              🛠️ Improvements
            </h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The redesign addressed all three failure points in parallel — simplifying the
              customer experience, giving merchants clear step-by-step guidance, and building the
              admin tooling that should have existed from the start.
            </p>

            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mb-6">
              <img
                src={`${BASE}images/ecofriendly-new-flow.png`}
                alt="Redesigned cashback flow diagram"
                className="w-full h-auto block"
              />
            </figure>

            <div className="space-y-4">
              {[
                {
                  n: "01",
                  title: "Rename & Simplify Scope",
                  desc: "Rebranded to 'Extra Cashback Eco-friendly' and narrowed the focus to eco bags, totebags, and paperbags — removing reusable food containers due to the variety of food types on Surplus that make container compatibility unpredictable.",
                },
                {
                  n: "02",
                  title: "Automated Web Admin Cashback Flow",
                  desc: "Built a dedicated 'Cashback' section in the web admin panel. After the validator approves the photo, cashback is granted automatically — eliminating the manual, error-prone multi-step process.",
                },
                {
                  n: "03",
                  title: "Slack Notifications for Finance",
                  desc: "Added Slack alerts whenever a cashback request comes in, so the finance team is notified immediately — reducing latency and eliminating missed validations.",
                },
                {
                  n: "04",
                  title: "Clearer Customer App Flow",
                  desc: "Improved wording throughout, made the voucher restriction visible before activation, and added in-app notifications so users know whether their cashback was accepted or rejected.",
                },
                {
                  n: "05",
                  title: "Clearer Merchant App Flow",
                  desc: "Gave merchants a step-by-step in-app guide: don't pre-wrap the order, ask for the customer's bag at pick-up, photograph the bag with food inside, and follow the rules for edge cases (e.g. food that already comes in a merchant's paperbag).",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="flex gap-5 items-start bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-sm"
                >
                  <div
                    className="text-[13px] font-bold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ background: "#2B8A3E" }}
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

            <figure className="rounded-xl overflow-hidden border border-[#E4E8F0] shadow-sm mt-6">
              <img
                src={`${BASE}images/ecofriendly-improvement-screens.png`}
                alt="Improvement screens — Merchant App, Customer App, and Web Admin"
                className="w-full h-auto block"
              />
            </figure>
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
