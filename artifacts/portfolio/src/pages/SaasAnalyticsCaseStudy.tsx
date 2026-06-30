import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const BASE = import.meta.env.BASE_URL;

const SERIF = "'Fraunces', Georgia, serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const C = {
  bg: "#FAFCFC",
  bgHero: "#E0F4F3",
  card: "#FFFFFF",
  cardAlt: "#F7FAFA",
  ink: "#0A1F1F",
  inkSoft: "#1F3838",
  inkBody: "#4A5959",
  inkMute: "#7A8888",
  accent: "#1FB5B0",
  accentDeep: "#0D8B86",
  accentDarkest: "#063E3C",
  accentSoft: "#D0F0EE",
  accentGlow: "#7FE4DF",
  rule: "#DEE8E7",
  ruleSoft: "#EDF3F2",
  ok: "#1F9B6E",
  err: "#C54545",
  pill: "#E8F2F2",
  pillBorder: "#D0E0E0",
};

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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[11px] font-bold uppercase mb-3.5 flex items-center gap-2.5"
      style={{ fontFamily: MONO, letterSpacing: ".18em", color: C.accentDeep }}
    >
      <span className="inline-block w-6 h-[1.5px]" style={{ background: C.accent }} />
      {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[30px] font-extrabold mb-[18px]"
      style={{ color: C.ink, letterSpacing: "-0.025em", lineHeight: 1.15 }}
    >
      {children}
    </h2>
  );
}

function Italic({ children }: { children: React.ReactNode }) {
  return (
    <em style={{ fontFamily: SERIF, fontStyle: "italic", color: C.accentDeep, fontWeight: 700 }}>
      {children}
    </em>
  );
}

function BeforeAfter({
  num,
  title,
  before,
  after,
}: {
  num: string;
  title: string;
  before: string;
  after: string;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden mb-5 shadow-sm"
      style={{ background: C.card, border: `1px solid ${C.rule}` }}
    >
      <div className="px-7 pt-5 pb-3 flex items-center gap-3 flex-wrap">
        <span
          className="text-[10px] font-bold tracking-[.12em] px-2.5 py-1 rounded-full"
          style={{
            fontFamily: MONO,
            color: C.accentDeep,
            background: C.accentSoft,
            border: `1px solid ${C.accentGlow}`,
          }}
        >
          {num}
        </span>
        <span className="text-[16px] font-bold" style={{ color: C.ink, letterSpacing: "-0.01em" }}>
          {title}
        </span>
      </div>
      <div
        className="grid md:grid-cols-2"
        style={{ borderTop: `1px solid ${C.ruleSoft}` }}
      >
        <div
          className="px-7 py-5"
          style={{ background: C.cardAlt, borderRight: `1px solid ${C.ruleSoft}` }}
        >
          <h4
            className="text-[10px] font-bold uppercase mb-2.5 flex items-center gap-1.5"
            style={{ fontFamily: MONO, letterSpacing: ".12em", color: C.err }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: C.err }} />
            Before
          </h4>
          <p className="text-[14px] leading-[1.65] m-0" style={{ color: C.inkBody }}>
            {before}
          </p>
        </div>
        <div className="px-7 py-5">
          <h4
            className="text-[10px] font-bold uppercase mb-2.5 flex items-center gap-1.5"
            style={{ fontFamily: MONO, letterSpacing: ".12em", color: C.ok }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: C.ok }} />
            After
          </h4>
          <p className="text-[14px] leading-[1.65] m-0" style={{ color: C.inkBody }}>
            {after}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SaasAnalyticsCaseStudy() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "";
  }, []);

  const study = caseStudies.find((c) => c.slug === "saas-analytics-dashboard")!;
  const currentIndex = caseStudies.findIndex((c) => c.slug === "saas-analytics-dashboard");
  const prev = caseStudies[currentIndex - 1] ?? null;
  const next = caseStudies[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen font-sans" style={{ background: C.bg, color: C.inkBody }}>
      <Navbar />

      {/* ── Hero ── */}
      <div className="pt-28 pb-0 relative overflow-hidden" style={{ background: C.bgHero }}>
        {/* Decorative glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(31,181,176,.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div className="max-w-[760px] mx-auto px-7 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity mb-8"
              style={{ color: C.inkMute }}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-7">
              {[
                { label: "Real Project", highlight: true },
                { label: "Revamp" },
                { label: "Site Map" },
                { label: "Design System" },
                { label: "Interactive Prototyping" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center px-4 py-[7px] rounded-full text-xs font-semibold shadow-sm"
                  style={
                    tag.highlight
                      ? { background: C.accent, color: "#fff", border: `1px solid ${C.accent}` }
                      : { background: C.card, color: C.inkSoft, border: `1px solid ${C.pillBorder}` }
                  }
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-2"
                    style={{ background: tag.highlight ? "#fff" : C.accent }}
                  />
                  {tag.label}
                </span>
              ))}
            </div>

            <h1
              className="font-extrabold mb-5 max-w-[680px]"
              style={{
                fontSize: "clamp(36px, 5.5vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: C.ink,
              }}
            >
              AMAN Dashboard Revamping
            </h1>
            <p
              className="max-w-[620px] mb-10"
              style={{ fontSize: 18, lineHeight: 1.55, color: C.inkBody }}
            >
              How I transformed a B2B insurtech dashboard plagued by 6 different table styles, 4
              competing detail page layouts, and zero design system into a unified, scalable product
              — without breaking what already worked.
            </p>
          </motion.div>

          {/* Cover image — the AMAN banner */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(31,181,176,.18)" }}
          >
            <img
              src={`${BASE}images/${study.image}`}
              alt="AMAN Dashboard Case Study"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* Italic Intro */}
          <Reveal>
            <p
              className="py-6 m-0"
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 17,
                lineHeight: 1.6,
                color: C.inkSoft,
                borderTop: `1px solid ${C.rule}`,
                borderBottom: `1px solid ${C.rule}`,
              }}
            >
              Aman is an insurtech start-up with the vision to supercharge & simplify employee health
              benefits experience in Indonesia, focusing on B2B product models of healthcare products
              as added value.
            </p>
          </Reveal>

          {/* Overview */}
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <H2>
              The dashboard that everyone used, and <Italic>no one</Italic> liked
            </H2>
            <p style={{ color: C.inkBody, lineHeight: 1.7, marginBottom: "1.1em" }}>
              Dashboards play a multitude of roles within our business, serving both our clients and
              internal teams. They're the daily operating surface for sales, claims, member
              management, and merchant operations — touched by dozens of people, every day.
            </p>
            <p style={{ color: C.inkBody, lineHeight: 1.7 }}>
              However, the current state of our dashboard presented a real challenge.{" "}
              <strong style={{ color: C.ink, fontWeight: 600 }}>
                It was complex and disordered.
              </strong>{" "}
              Lacking consistency and standardization, it fell short of meeting our usability
              standards. This case study walks through how we overhauled it and established a uniform
              structure — enhancing both consistency and user-friendliness.
            </p>
          </Reveal>

          {/* TL;DR */}
          <Reveal delay={0.05}>
            <div
              className="rounded-2xl p-8 shadow-sm"
              style={{ background: C.card, border: `1px solid ${C.rule}` }}
            >
              <div
                className="text-[10px] font-bold uppercase mb-4 flex items-center gap-2.5"
                style={{ fontFamily: MONO, letterSpacing: ".18em", color: C.accentDeep }}
              >
                TL;DR
                <span className="flex-1 h-px" style={{ background: C.rule }} />
              </div>
              {[
                {
                  k: "Problem",
                  v: "No design system. 6 different table styles, 4 different detail page layouts, unclear icons, missing navigation states, and brand-new branding that had never made it into the dashboard.",
                },
                {
                  k: "Approach",
                  v: "Audit every screen → group issues by pattern → standardize at the component & flow level → leave room for customization where genuine variation was needed.",
                },
                {
                  k: "Solution",
                  v: "A unified design system covering tables, detail pages, forms, navigation, and iconography — paired with the rollout of AMAN's new brand identity (logo, colors, typography, mascot).",
                },
                {
                  k: "My role",
                  v: "Lead the audit, define the standardization strategy, design the component library, and ship the redesigned dashboard pages alongside engineering.",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid gap-4 py-3.5"
                  style={{
                    gridTemplateColumns: "110px 1fr",
                    borderTop: i === 0 ? "none" : `1px solid ${C.ruleSoft}`,
                  }}
                >
                  <div className="text-[13px] font-bold" style={{ color: C.ink }}>
                    {row.k}
                  </div>
                  <div className="text-[14.5px]" style={{ color: C.inkBody, lineHeight: 1.65 }}>
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Background & Condition */}
          <Reveal>
            <Eyebrow>Background & Condition</Eyebrow>
            <H2>Why now?</H2>
            <p style={{ color: C.inkBody, lineHeight: 1.7, marginBottom: "1.1em" }}>
              Two pressures collided at the same time — and that collision is what made this revamp
              finally happen.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3
                  className="text-[22px] font-bold mb-2.5"
                  style={{ color: C.ink, letterSpacing: "-0.02em" }}
                >
                  Inconsistency
                </h3>
                <p style={{ color: C.inkBody, fontSize: 15.5, lineHeight: 1.65 }}>
                  The revamp was triggered when the product design team was asked to build a new
                  feature on the dashboard. We saw inconsistent components, flows, and interactions
                  everywhere — with no documentation explaining why. We were genuinely confused about
                  what patterns to follow for the new feature, which is itself a bad sign for any
                  team.
                </p>
              </div>
              <div>
                <h3
                  className="text-[22px] font-bold mb-2.5"
                  style={{ color: C.ink, letterSpacing: "-0.02em" }}
                >
                  Aman Design Rebranding
                </h3>
                <p style={{ color: C.inkBody, fontSize: 15.5, lineHeight: 1.65 }}>
                  At the same time, Aman had introduced new branding across the wider product suite —
                  refreshed logo, new primary color, updated typography, and a mascot. Unfortunately,
                  none of this had been implemented in the dashboard yet. The two pressures together
                  made it clear: this was the moment to revamp.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Case Gathering */}
          <Reveal>
            <Eyebrow>Case Gathering</Eyebrow>
            <H2>
              Deep dive into the <Italic>condition</Italic> of our current dashboard
            </H2>
            <p style={{ color: C.inkBody, lineHeight: 1.7, marginBottom: "1.5em" }}>
              Before designing anything new, I started by collecting every dashboard screen — every
              menu, every flow, every form — and grouping them by similar issues. The goal wasn't to
              redesign on instinct, but to let the patterns of inconsistency surface on their own.
              Here's what we found.
            </p>

            {[
              {
                num: "01",
                title: "Inconsistency of Tables",
                body: (
                  <>
                    Dashboards live and die by tables — and ours had a lot of data poured into them.
                    The problem?{" "}
                    <strong style={{ color: C.ink, fontWeight: 600 }}>
                      Six different table styles existed across the product
                    </strong>
                    , with no shared rules. Different headers, different row heights, different
                    filter placements, different action button treatments, different empty states.
                  </>
                ),
              },
              {
                num: "02",
                title: "Inconsistency of Detail Pages",
                body: (
                  <>
                    Many features had a "detail page" — the second-level view that shows the full
                    record behind a table row. We found{" "}
                    <strong style={{ color: C.ink, fontWeight: 600 }}>
                      four different detail page layouts
                    </strong>
                    , each with its own approach to content hierarchy, component placement,
                    navigation back to the list, and inline editing. Users essentially had to relearn
                    the page every time they entered a different module.
                  </>
                ),
              },
              {
                num: "03",
                title: "Limited Space to Input/Edit Data",
                body: (
                  <>
                    Some data fields require many characters — full names, company addresses, ICD-10
                    codes, currency amounts. But the dashboard supported{" "}
                    <strong style={{ color: C.ink, fontWeight: 600 }}>
                      inline editing directly inside table rows
                    </strong>
                    , where the available width was tiny. Users couldn't see what they were typing,
                    couldn't tell which fields were required, and couldn't validate their input
                    visually.
                  </>
                ),
              },
            ].map((c, i) => (
              <div
                key={c.num}
                className="my-12 pt-2"
                style={{
                  borderTop: i === 0 ? "none" : `1px solid ${C.ruleSoft}`,
                  marginTop: i === 0 ? 24 : 48,
                  paddingTop: i === 0 ? 0 : 8,
                }}
              >
                <div
                  className="text-[13px] font-bold mb-1.5"
                  style={{ fontFamily: MONO, color: C.accent, letterSpacing: ".05em" }}
                >
                  {c.num}
                </div>
                <h3
                  className="text-[24px] font-extrabold mb-3"
                  style={{ color: C.accentDeep, letterSpacing: "-0.02em", lineHeight: 1.25 }}
                >
                  {c.title}
                </h3>
                <p style={{ color: C.inkBody, fontSize: 16, lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}

            {/* Issue 04 */}
            <div
              className="my-12 pt-2"
              style={{ borderTop: `1px solid ${C.ruleSoft}`, marginTop: 48, paddingTop: 8 }}
            >
              <div
                className="text-[13px] font-bold mb-1.5"
                style={{ fontFamily: MONO, color: C.accent, letterSpacing: ".05em" }}
              >
                04
              </div>
              <h3
                className="text-[24px] font-extrabold mb-3"
                style={{ color: C.accentDeep, letterSpacing: "-0.02em", lineHeight: 1.25 }}
              >
                Unclear Conditions & Affordances
              </h3>
              <p style={{ color: C.inkBody, fontSize: 16, lineHeight: 1.7, marginBottom: "1.1em" }}>
                Two related problems lived under this label, both about{" "}
                <em style={{ color: C.inkSoft, fontStyle: "italic" }}>
                  users not knowing what they were looking at
                </em>
                .
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div>
                  <h4
                    className="text-[16px] font-bold mb-1.5"
                    style={{ color: C.ink, letterSpacing: "-0.01em" }}
                  >
                    Navigation has no current state
                  </h4>
                  <p style={{ fontSize: 14.5, color: C.inkBody, lineHeight: 1.65 }}>
                    The sidebar should tell the user{" "}
                    <em style={{ color: C.inkSoft, fontStyle: "italic" }}>where they are</em> — which
                    menu, which sub-menu. But the active state simply wasn't visible. Users opened
                    the dashboard with no anchor point.
                  </p>
                </div>
                <div>
                  <h4
                    className="text-[16px] font-bold mb-1.5"
                    style={{ color: C.ink, letterSpacing: "-0.01em" }}
                  >
                    Icons that mean nothing
                  </h4>
                  <p style={{ fontSize: 14.5, color: C.inkBody, lineHeight: 1.65 }}>
                    Bare icons like "+", "?", and undecorated chevrons appeared throughout the UI
                    without labels or tooltips. Users guessed at what they did — and guessed wrong.
                  </p>
                </div>
              </div>
            </div>

            {/* Pivot */}
            <div
              className="rounded-3xl px-10 py-9 my-9 grid md:grid-cols-[1fr_auto] gap-6 items-center"
              style={{
                background: `linear-gradient(135deg, ${C.accentSoft} 0%, #fff 100%)`,
                border: `1px solid ${C.accentGlow}`,
                boxShadow: "0 4px 16px rgba(10,31,31,.06)",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.4,
                  color: C.ink,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                After gathering the issues and discussing them as a team, we decided to revamp the
                design — and make it consistent and easy to use.
              </div>
              <div className="text-5xl leading-none text-center md:text-left">🐻</div>
            </div>
          </Reveal>

          {/* Standardization */}
          <Reveal>
            <Eyebrow>Standardization</Eyebrow>
            <H2>
              Before designing, I went <Italic>back into</Italic> the dashboard
            </H2>
            <p style={{ color: C.inkBody, lineHeight: 1.7, marginBottom: "1.1em" }}>
              It was tempting to jump straight into Figma. But that would have just produced four
              prettier table styles instead of six ugly ones. Instead, I went back into the dashboard
              one more time — this time looking for the{" "}
              <strong style={{ color: C.ink, fontWeight: 600 }}>
                common content, common actions, and common flows
              </strong>{" "}
              that every screen shared underneath the visual chaos.
            </p>
            <p style={{ color: C.inkBody, lineHeight: 1.7 }}>
              The standardization had two goals: make the dashboard consistent, but{" "}
              <em style={{ color: C.inkSoft, fontStyle: "italic" }}>still</em> leave room for genuine
              customization where the data demanded it. A claims table and an invoices table look
              similar — they don't have to be identical.
            </p>

            <h3
              className="text-[18px] font-bold mt-8 mb-4"
              style={{ color: C.ink, letterSpacing: "-0.01em" }}
            >
              What standardization actually covered
            </h3>
            <div className="grid md:grid-cols-2 gap-3.5">
              {[
                {
                  tag: "01 · Tables",
                  title: "One table, infinite content",
                  body: "Header, table-head, table-body, footer — locked. Filters, search, column visibility, pagination — same place, every time.",
                },
                {
                  tag: "02 · Detail Pages",
                  title: "Predictable second-level",
                  body: "Back button. Page title. Status pill. Tabbed left navigation. Content panel. Same skeleton, different content per module.",
                },
                {
                  tag: "03 · Forms",
                  title: "Modals, not table cells",
                  body: "Add / Edit moved into proper modals with full-width inputs, required-field markers, and visible validation states.",
                },
                {
                  tag: "04 · Navigation",
                  title: "You are here",
                  body: "Sidebar with explicit active state, sub-menu indentation, badge counts, and brand-aligned visual treatment.",
                },
                {
                  tag: "05 · Iconography",
                  title: "Icon + label, always",
                  body: "No bare \"+\" buttons. Every action icon paired with a clear label or tooltip. Consistent stroke weight across the set.",
                },
                {
                  tag: "06 · Brand",
                  title: "Aman Design 2.0",
                  body: "New logo, primary teal, refreshed typography, and the mascot — finally implemented in the dashboard, fully.",
                },
              ].map((card) => (
                <div
                  key={card.tag}
                  className="rounded-2xl p-[22px] shadow-sm"
                  style={{ background: C.card, border: `1px solid ${C.rule}` }}
                >
                  <span
                    className="inline-block text-[10px] font-bold mb-2.5 px-2 py-[3px] rounded-full"
                    style={{
                      fontFamily: MONO,
                      color: C.accentDeep,
                      letterSpacing: ".12em",
                      background: C.accentSoft,
                      textTransform: "uppercase",
                    }}
                  >
                    {card.tag}
                  </span>
                  <h4
                    className="text-[15px] font-bold mb-1.5"
                    style={{ color: C.ink, letterSpacing: "-0.01em" }}
                  >
                    {card.title}
                  </h4>
                  <p style={{ fontSize: 13.5, color: C.inkBody, lineHeight: 1.6 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Design Execution */}
          <Reveal>
            <Eyebrow>Design Execution</Eyebrow>
            <H2>
              Make it <Italic>consistent</Italic> and easy to use
            </H2>
            <p style={{ color: C.inkBody, lineHeight: 1.7, marginBottom: "1.5em" }}>
              From the standardized patterns, the actual screens followed quickly. Below are the
              highest-impact fixes — paired with the original problems they solve.
            </p>

            <h3
              className="text-[18px] font-bold mt-8 mb-3"
              style={{ color: C.ink, letterSpacing: "-0.01em" }}
            >
              Table standardization
            </h3>
            <BeforeAfter
              num="FIX 01"
              title="From 6 table styles to 1 anatomy"
              before="Six different table styles. Filter inputs in different positions. Inconsistent action buttons. Empty and loading states handled ad-hoc per screen."
              after="One canonical anatomy: Header → Table Head → Table Body → Footer. Filters always above headers. Consistent row hover, status pills, and inline action menu."
            />

            <h3
              className="text-[18px] font-bold mt-8 mb-3"
              style={{ color: C.ink, letterSpacing: "-0.01em" }}
            >
              Overview pages, unified
            </h3>
            <p style={{ color: C.inkBody, lineHeight: 1.7 }}>
              The same skeleton scales across{" "}
              <strong style={{ color: C.ink, fontWeight: 600 }}>
                Employers, Members, Healthcare Facilities, Leads, Claims, Invoices, Merchants
              </strong>
              , and more. Each module gets the columns and KPIs it actually needs — but lands the
              user on a layout they already know how to read.
            </p>

            <h3
              className="text-[18px] font-bold mt-8 mb-3"
              style={{ color: C.ink, letterSpacing: "-0.01em" }}
            >
              Detail pages, predictable
            </h3>
            <BeforeAfter
              num="FIX 02"
              title="From 4 detail layouts to 1 navigation pattern"
              before="Four different detail page layouts. Users had to relearn navigation, status indicators, and edit affordances every time they entered a different module."
              after="Tabbed left nav as the canonical pattern. Status pill in the header. Inline edit on the right panel only. Same back button, same breadcrumb, same place — every time."
            />

            <h3
              className="text-[18px] font-bold mt-8 mb-3"
              style={{ color: C.ink, letterSpacing: "-0.01em" }}
            >
              Add & Edit, finally with breathing room
            </h3>
            <BeforeAfter
              num="FIX 03"
              title="Inline editing → proper modals"
              before="Editing happened inside table cells. Tiny inputs. No required-field signals. No validation feedback. Users typed blind."
              after="Add/Edit modals with grouped sections, full-width inputs, required-field asterisks, real-time validation, and a sticky footer with Cancel + Save."
            />
          </Reveal>

          {/* Process */}
          <Reveal>
            <Eyebrow>Process Recap</Eyebrow>
            <H2>The five-step path from chaos to system</H2>
            <div className="my-6">
              {[
                {
                  n: "1",
                  title: "Audit every screen",
                  body: "Collected every dashboard menu, every flow, every form. Treated the existing UI as the research artifact rather than starting from a blank Figma file.",
                },
                {
                  n: "2",
                  title: "Group by issue, not by feature",
                  body: (
                    <>
                      Sorted screens by the{" "}
                      <em style={{ color: C.inkSoft, fontStyle: "italic" }}>type</em> of inconsistency
                      — table styles together, detail pages together, navigation issues together. The
                      patterns surfaced themselves.
                    </>
                  ),
                },
                {
                  n: "3",
                  title: "Map common content, action, and flow",
                  body: "Built a sitemap-style diagram of every recurring component: table head, table body, pagination, filter, search, batch actions, empty states. Same exercise for detail pages.",
                },
                {
                  n: "4",
                  title: "Standardize, with escape hatches",
                  body: "Locked the skeleton (header, body, footer regions, navigation patterns) but left module-level customization for genuinely different data needs. Consistency without rigidity.",
                },
                {
                  n: "5",
                  title: "Roll out branding alongside structure",
                  body: "Implemented Aman Design 2.0 — logo, primary teal, typography, mascot — together with the structural revamp, so users experienced the new dashboard as a single coherent change rather than two confusing ones.",
                },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className="grid gap-5 py-5"
                  style={{
                    gridTemplateColumns: "42px 1fr",
                    borderTop: i === 0 ? "none" : `1px solid ${C.ruleSoft}`,
                    paddingTop: i === 0 ? 8 : 20,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold"
                    style={{
                      background: C.accent,
                      color: "#fff",
                      boxShadow: "0 4px 10px rgba(31,181,176,.25)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3
                      className="text-[16px] font-bold mb-1.5"
                      style={{ color: C.ink, letterSpacing: "-0.01em" }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 15, color: C.inkBody, lineHeight: 1.65 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Result */}
          <Reveal>
            <Eyebrow>The Outcome</Eyebrow>
            <H2>One dashboard, finally aligned</H2>

            <div
              className="rounded-3xl px-10 py-14 my-10 text-center text-white relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${C.accentDarkest} 0%, ${C.accentDeep} 50%, ${C.accent} 100%)`,
                boxShadow: "0 20px 60px rgba(31,181,176,.18)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,.05) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: -150,
                  right: -150,
                  width: 300,
                  height: 300,
                  background: "radial-gradient(circle, rgba(127,228,223,.2) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
              />
              <div className="relative z-10">
                <div
                  className="text-[11px] uppercase mb-4"
                  style={{
                    fontFamily: MONO,
                    letterSpacing: ".22em",
                    color: "rgba(255,255,255,.6)",
                  }}
                >
                  Welcome to Aman Design 2.0
                </div>
                <div
                  className="font-extrabold mb-4"
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "clamp(36px, 6vw, 52px)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  From 6 table styles
                  <br />
                  to one consistent system.
                </div>
                <div
                  style={{
                    fontSize: 17,
                    color: "rgba(255,255,255,.85)",
                    maxWidth: 480,
                    margin: "0 auto",
                    lineHeight: 1.55,
                  }}
                >
                  A unified, scalable dashboard that finally reflects Aman's brand — and gives the
                  team a foundation to build new features on, without confusion.
                </div>
              </div>
            </div>

            {/* Stat ribbon */}
            <div
              className="rounded-2xl shadow-sm overflow-hidden grid grid-cols-2 md:grid-cols-4"
              style={{ background: C.card, border: `1px solid ${C.rule}` }}
            >
              {[
                { num: "6→1", label: "Table Styles\nUnified" },
                { num: "4→1", label: "Detail Page\nPatterns" },
                { num: "100%", label: "Brand 2.0\nAdoption" },
                { num: "∞", label: "Future\nScalability" },
              ].map((s, i, arr) => (
                <div
                  key={i}
                  className="text-center px-4 py-6"
                  style={{
                    borderRight:
                      i < arr.length - 1 && (i + 1) % 4 !== 0
                        ? `1px solid ${C.ruleSoft}`
                        : "none",
                    borderBottom: i < 2 ? `1px solid ${C.ruleSoft}` : "none",
                  }}
                >
                  <div
                    className="font-extrabold mb-1.5"
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: 36,
                      color: C.accentDeep,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[11px] font-semibold uppercase whitespace-pre-line"
                    style={{ color: C.inkMute, letterSpacing: ".08em", lineHeight: 1.3 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Lessons Learned */}
          <Reveal>
            <Eyebrow>Lessons Learned</Eyebrow>
            <H2>
              What this project actually <Italic>taught</Italic> me
            </H2>
            <div className="my-6">
              {[
                {
                  n: "01",
                  title: "Audit before you redesign",
                  body: (
                    <>
                      The temptation when a UI feels broken is to open Figma. The real win came from
                      going <em style={{ color: C.inkSoft, fontStyle: "italic" }}>backwards</em>{" "}
                      first — collecting screens, grouping by issue, letting the patterns surface.
                      The redesign was almost trivial once the audit was done.
                    </>
                  ),
                },
                {
                  n: "02",
                  title: "Standardization ≠ uniformity",
                  body: "Locking the skeleton while leaving module-level customization meant the system held up for genuinely different data — claims, invoices, merchants, members — without forcing one shape over all of them. Rigid systems break the moment edge cases appear.",
                },
                {
                  n: "03",
                  title: "Branding alone won't fix structure",
                  body: "The new logo, color, and mascot were ready — but on top of an inconsistent dashboard they would have just been lipstick. Pairing the brand rollout with structural standardization is what made the whole thing feel new.",
                },
                {
                  n: "04",
                  title: "Inconsistency is a leadership signal",
                  body: "Six table styles don't appear because designers can't draw tables. They appear because no one owns the system. The most valuable output of this project wasn't the new dashboard — it was the shared language the team now uses to discuss what \"consistent\" actually means.",
                },
              ].map((lesson, i) => (
                <div
                  key={lesson.n}
                  className="grid gap-5 py-6"
                  style={{
                    gridTemplateColumns: "48px 1fr",
                    borderTop: i === 0 ? "none" : `1px solid ${C.ruleSoft}`,
                    paddingTop: i === 0 ? 8 : 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: 38,
                      fontWeight: 800,
                      color: C.accentDeep,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      opacity: 0.35,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {lesson.n}
                  </div>
                  <div>
                    <h3
                      className="text-[16px] font-bold mb-1.5"
                      style={{ color: C.ink, letterSpacing: "-0.01em" }}
                    >
                      {lesson.title}
                    </h3>
                    <p style={{ fontSize: 15, color: C.inkBody, lineHeight: 1.65 }}>{lesson.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Scope & Role */}
          <Reveal>
            <Eyebrow>Scope & My Role</Eyebrow>
            <H2>What I owned on this project</H2>
            <p style={{ color: C.inkBody, lineHeight: 1.7, marginBottom: "1.5em" }}>
              End-to-end ownership across audit, system design, and execution — alongside the
              engineering and brand team for rollout.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "UI Audit",
                "Design System",
                "Component Library",
                "UI Standardization",
                "Information Architecture",
                "Brand Implementation",
                "Stakeholder Collaboration",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm"
                  style={{
                    background: C.card,
                    border: `1px solid ${C.rule}`,
                    color: C.inkSoft,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: C.accent }}
                  />
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

        </div>
      </div>

      {/* Prev / Next */}
      <div className="max-w-[760px] mx-auto px-7 pb-20 pt-4">
        <div
          className="flex justify-between items-center pt-12 gap-4"
          style={{ borderTop: `1px solid ${C.rule}` }}
        >
          {prev ? (
            <Link href={`/case-study/${prev.slug}`} className="group flex flex-col gap-1 max-w-xs">
              <span className="text-xs flex items-center gap-1" style={{ color: C.inkMute }}>
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
              <span className="text-xs flex items-center gap-1" style={{ color: C.inkMute }}>
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
