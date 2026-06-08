import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function DipayCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif", background: "#F5F6FA", color: "#44505E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .dp-hero-wrap { background: #0F1229; padding: 80px 0 0; position: relative; overflow: hidden; }
        .dp-hero-wrap::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 80% 20%, rgba(75,95,224,.22) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(224,107,75,.12) 0%, transparent 70%); pointer-events: none; }
        .dp-hero-wrap::after { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%); }
        .dp-pill { display: inline-flex; align-items: center; gap: 6px; padding: 7px 16px; border-radius: 100px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); font-size: 12px; font-weight: 600; color: rgba(255,255,255,.7); }
        .dp-pill.real { background: #4B5FE0; color: #fff; border-color: #4B5FE0; box-shadow: 0 4px 16px rgba(75,95,224,.4); }
        .dp-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,.5); }
        .dp-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; font-weight: 700; letter-spacing: .18em; color: #4B5FE0; text-transform: uppercase; background: #EBEDF8; padding: 5px 14px; border-radius: 100px; border: 1px solid rgba(75,95,224,.2); margin-bottom: 18px; }
        .dp-eyebrow::before { content: '◆'; font-size: 7px; }
        .dp-tldr { background: #fff; border: 1px solid #E0E4EE; border-radius: 16px; padding: 32px; position: relative; overflow: hidden; box-shadow: 0 1px 3px rgba(13,17,35,.05); }
        .dp-tldr::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, #4B5FE0, #A5AFFF); }
        .dp-tldr-lbl { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; letter-spacing: .2em; color: #4B5FE0; text-transform: uppercase; margin-bottom: 20px; }
        .dp-tldr-row { display: grid; grid-template-columns: 100px 1fr; gap: 20px; padding: 14px 0; border-top: 1px solid #ECEEF5; }
        .dp-tldr-row:first-of-type { border-top: none; padding-top: 0; }
        .dp-tldr-k { font-size: 13px; font-weight: 700; color: #0D1117; }
        .dp-tldr-v { font-size: 14.5px; line-height: 1.68; color: #44505E; }
        .dp-callout { border-radius: 16px; padding: 26px 30px; margin: 24px 0; border: 1px solid rgba(75,95,224,.25); background: #EBEDF8; }
        .dp-lifecycle { background: #fff; border: 1px solid #E0E4EE; border-radius: 16px; padding: 28px; margin: 24px 0; box-shadow: 0 1px 3px rgba(13,17,35,.05); }
        .dp-lc-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; letter-spacing: .18em; color: #8494A8; text-transform: uppercase; margin-bottom: 20px; }
        .dp-lc-step { display: grid; grid-template-columns: 28px 1fr; gap: 16px; padding: 12px 0; border-top: 1px solid #ECEEF5; align-items: start; }
        .dp-lc-step:first-child { border-top: none; padding-top: 0; }
        .dp-lc-n { width: 24px; height: 24px; border-radius: 6px; background: #EBEDF8; border: 1px solid rgba(75,95,224,.2); display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; color: #4B5FE0; flex-shrink: 0; margin-top: 2px; }
        .dp-pain { background: #fff; border: 1px solid #E0E4EE; border-radius: 16px; padding: 26px 28px; box-shadow: 0 1px 3px rgba(13,17,35,.05); display: grid; grid-template-columns: 44px 1fr; gap: 20px; align-items: start; }
        .dp-pain-n { width: 36px; height: 36px; border-radius: 10px; background: #EBEDF8; border: 1px solid rgba(75,95,224,.2); display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; color: #4B5FE0; }
        .dp-timeline { margin: 28px 0; position: relative; padding-left: 32px; }
        .dp-timeline::before { content: ''; position: absolute; left: 11px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(180deg, #4B5FE0, rgba(75,95,224,.1)); }
        .dp-tl-item { margin-bottom: 32px; position: relative; }
        .dp-tl-item:last-child { margin-bottom: 0; }
        .dp-tl-dot { position: absolute; left: -32px; top: 4px; width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 2px solid #4B5FE0; display: flex; align-items: center; justify-content: center; }
        .dp-tl-dot-inner { width: 8px; height: 8px; border-radius: 50%; background: #4B5FE0; }
        .dp-decision { background: #fff; border: 1px solid #E0E4EE; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(13,17,35,.05); }
        .dp-decision-q { background: #F8F9FC; padding: 18px 24px; font-size: 15px; font-weight: 700; color: #0D1117; border-bottom: 1px solid #ECEEF5; display: flex; align-items: center; gap: 12px; }
        .dp-decision-q::before { content: '?'; width: 26px; height: 26px; border-radius: 50%; background: #EBEDF8; color: #1E2D9E; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; font-family: 'JetBrains Mono', monospace; flex-shrink: 0; }
        .dp-decision-a { padding: 18px 24px; font-size: 14.5px; line-height: 1.68; color: #44505E; }
        .dp-sol { background: #fff; border: 1px solid #E0E4EE; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(13,17,35,.05); }
        .dp-sol-head { background: linear-gradient(135deg, #EBEDF8, #fff); padding: 20px 24px; border-bottom: 1px solid #ECEEF5; display: flex; align-items: center; gap: 14px; }
        .dp-sol-icon { width: 38px; height: 38px; border-radius: 10px; background: #4B5FE0; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(75,95,224,.3); }
        .dp-impact { background: linear-gradient(135deg, #1E2D9E 0%, #3548C9 40%, #4B5FE0 100%); border-radius: 24px; padding: 52px 40px; margin: 36px 0; text-align: center; color: #fff; position: relative; overflow: hidden; box-shadow: 0 16px 48px rgba(75,95,224,.2); }
        .dp-impact::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,.04) 1px, transparent 0); background-size: 22px 22px; pointer-events: none; }
        .dp-stat-ribbon { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin: 28px 0; }
        .dp-stat-card { background: #fff; border: 1px solid #E0E4EE; border-radius: 16px; padding: 22px 20px; box-shadow: 0 1px 3px rgba(13,17,35,.05); }
        .dp-stat-n { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 32px; color: #1A9E6E; letter-spacing: -.02em; line-height: 1; margin-bottom: 6px; }
        .dp-stat-lbl { font-size: 11.5px; font-weight: 600; color: #8494A8; line-height: 1.4; text-transform: uppercase; letter-spacing: .06em; }
        .dp-lesson { display: grid; grid-template-columns: 52px 1fr; gap: 20px; padding: 24px 0; border-top: 1px solid #ECEEF5; }
        .dp-lesson:first-child { border-top: none; padding-top: 8px; }
        .dp-lesson-n { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 38px; color: #4B5FE0; line-height: 1; opacity: .3; }
        .dp-reflection { background: #0F1229; border-radius: 24px; padding: 48px 40px; margin: 40px 0; color: #fff; position: relative; overflow: hidden; }
        .dp-reflection::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 50% 60% at 80% 50%, rgba(75,95,224,.18) 0%, transparent 70%); pointer-events: none; }
        .dp-stack-pill { padding: 7px 15px; border-radius: 100px; background: #fff; border: 1px solid #E0E4EE; font-size: 13px; font-weight: 600; color: #1A2040; display: inline-flex; align-items: center; gap: 7px; box-shadow: 0 1px 3px rgba(13,17,35,.05); }
        .dp-stack-dot { width: 5px; height: 5px; border-radius: 50%; background: #4B5FE0; }
        .dp-screenshot { border-radius: 16px; overflow: hidden; border: 1px solid #E0E4EE; background: #fff; box-shadow: 0 1px 3px rgba(13,17,35,.05); margin: 20px 0; }
        .dp-screenshot img { width: 100%; height: auto; display: block; }
        .dp-screenshot-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; letter-spacing: .18em; color: #8494A8; text-transform: uppercase; padding: 14px 20px; background: #F8F9FC; border-bottom: 1px solid #ECEEF5; }
        .dp-quote { border-left: 3px solid #4B5FE0; padding: 14px 24px; margin: 24px 0; background: #F8F9FC; border-radius: 0 12px 12px 0; }
        .dp-quote p { margin: 0; font-size: 15.5px; line-height: 1.65; color: #1E2D9E; font-style: italic; }
        @media (max-width: 640px) {
          .dp-tldr-row { grid-template-columns: 1fr; gap: 6px; }
          .dp-pain { grid-template-columns: 1fr; }
          .dp-stat-ribbon { grid-template-columns: 1fr 1fr; }
          .dp-impact { padding: 36px 24px; }
          .dp-reflection { padding: 36px 24px; }
          .dp-lesson { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <div className="dp-hero-wrap">
        <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <motion.div {...fade()}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.5)", textDecoration: "none", marginBottom: 28, transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
            >
              <ArrowLeft style={{ width: 14, height: 14 }} /> Back to Portfolio
            </Link>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
              <span className="dp-pill real"><span className="dp-dot" /> Real Project</span>
              <span className="dp-pill">Fintech · B2B</span>
              <span className="dp-pill">Operational UX</span>
              <span className="dp-pill">Internal Tool</span>
              <span className="dp-pill">Design System</span>
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-.032em", color: "#fff", marginBottom: 22, maxWidth: 680 }}>
              Redesigning{" "}
              <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#A5AFFF", fontWeight: 400 }}>Settlement Operations</em>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.65)", maxWidth: 600, marginBottom: 48 }}>
              Reducing settlement delays, preventing disbursement errors, and saving 4-5 hours per settlement cycle through automated reconciliation.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} style={{ borderRadius: "16px 16px 0 0", overflow: "hidden", marginTop: 8 }}>
            <img
              src={`${import.meta.env.BASE_URL}images/dipay-settlement-banner.png`}
              alt="Dipay Settlement dashboard screens"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 28px" }}>

          {/* Overview */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Overview</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              Settlement is one of the most critical operational processes at Dipay
            </h2>
            <p>As a QRIS acquirer, Dipay is responsible for ensuring merchant funds are disbursed accurately and on time. As transaction volume continued to grow, settlement operations became increasingly difficult to manage. Settlement processing often extended beyond working hours, delaying merchant payouts and generating complaints from business partners waiting for their funds.</p>
            <p>At the same time, operational teams faced recurring risks caused by manual validation processes. Issues such as reconciliation mismatches, settlement failures, and even duplicate settlement cases required significant effort to investigate and resolve before funds could be safely disbursed.</p>
            <p>To address these challenges, I redesigned Dipay's settlement workflow by introducing <strong style={{ color: "#0D1117" }}>automated reconciliation, exception-based reviews, structured approval flows, and settlement monitoring tools</strong> that reduced operational processing time by approximately 4-5 hours per settlement cycle.</p>

            <div className="dp-tldr" style={{ marginTop: 40 }}>
              <div className="dp-tldr-lbl">At a Glance</div>
              {[
                ["My Role", "Product Designer"],
                ["Collaborators", "PM, Backend Engineers, Finance Team, Operations Team"],
                ["Impact", "4-5 hours saved per settlement cycle, faster payouts, reduced operational risk, eliminated spreadsheet workflows, improved visibility and control"],
              ].map(([k, v]) => (
                <div key={k} className="dp-tldr-row">
                  <div className="dp-tldr-k">{k}</div>
                  <div className="dp-tldr-v">{v}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* The Business Problem */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">The Business Problem</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              Why does settlement take so long, and why are issues still occurring despite extensive checks?
            </h2>
            <p>This project was to reduce settlement delays, prevent disbursement errors, and save 4-5 hours per settlement cycle through automated reconciliation. As transaction volume increased, settlement processing regularly became a bottleneck.</p>
            <p>Finance and Operations teams frequently worked late to complete settlement cycles, particularly after weekends when transaction volume accumulated significantly. Delayed settlement meant merchants received their funds later than expected, creating complaints and increasing operational pressure from business teams.</p>
            <p>More concerningly, several settlement issues highlighted weaknesses in the existing process:</p>
            <ul style={{ paddingLeft: 20, margin: "16px 0", fontSize: 15.5, lineHeight: 1.7, color: "#44505E" }}>
              <li>Duplicate settlement attempts</li>
              <li>Settlement failures</li>
              <li>Transaction mismatches</li>
              <li>Inconsistent reconciliation results</li>
              <li>Manual investigation efforts before disbursement</li>
            </ul>
            <p>Because settlement directly impacts merchant funds, even a single mistake could create <strong style={{ color: "#0D1117" }}>financial loss, operational overhead, and trust issues</strong>. Understanding why these issues occurred became the starting point of the project.</p>
          </motion.section>

          {/* Investigation & Discovery */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Investigation & Discovery</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              Settlement was not slow because approval took too long. It was slow because <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#3548C9", fontWeight: 400 }}>validation</em> took too long.
            </h2>
            <p>Rather than immediately redesigning the dashboard, I worked with Finance and Operations teams to understand how settlement decisions were actually made.</p>

            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", letterSpacing: "-.015em", margin: "32px 0 10px" }}>Understanding Reconciliation</h3>
            <p>As a QRIS acquirer, Dipay records transaction data internally. However, before funds can be disbursed, those records must be validated against external payment infrastructure.</p>
            <p>The Finance team performs reconciliation to ensure that transaction records stored inside Dipay match records received from switchers and bank mutation reports.</p>
            <div className="dp-quote">
              <p>Can we confidently prove that the money being disbursed is backed by valid transaction records?</p>
            </div>
            <p>Any discrepancy must be investigated before settlement can proceed. Examples include missing mutation records, amount mismatches, invalid or missing RRN data, inconsistent transaction statuses, and duplicate settlement attempts.</p>
            <p>Only after reconciliation is completed can a transaction move forward to settlement.</p>

            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", letterSpacing: "-.015em", margin: "32px 0 10px" }}>What Actually Happened Behind the Scenes</h3>
            <p>Through workflow observations and discussions with Finance teams, I discovered that reconciliation was still heavily manual.</p>
            <div className="dp-lifecycle">
              <div className="dp-lc-label">Manual Reconciliation Loop (Before)</div>
              {[
                ["1", "Download QRIS transaction reports", "For every settlement cycle"],
                ["2", "Download mutation reports", "Per merchant, one-by-one"],
                ["3", "Compare both datasets manually", "Row-by-row validation"],
                ["4", "Validate settlement eligibility", "Check every condition manually"],
                ["5", "Investigate discrepancies", "If anything doesn't match"],
                ["6", "Repeat the process for every merchant", "A single batch often contained 50-70 merchants"],
              ].map(([n, strong, sub]) => (
                <div key={n} className="dp-lc-step">
                  <div className="dp-lc-n">{n}</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.6 }}>
                    <strong style={{ color: "#0D1117", fontWeight: 700, display: "block", marginBottom: 2 }}>{strong}</strong>
                    <span style={{ color: "#44505E" }}>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <p>Most operational effort was spent preparing and validating data rather than making settlement decisions. As transaction volume increased, the process became increasingly difficult to scale.</p>
          </motion.section>

          {/* Root Causes */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Root Causes</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              The problem was not simply the interface. The problem was a workflow that required humans to validate <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#3548C9", fontWeight: 400 }}>everything</em>.
            </h2>
            <div style={{ display: "grid", gap: 14, marginTop: 28 }}>
              {[
                ["01", "Manual reconciliation", "Transaction validation relied heavily on spreadsheet comparison."],
                ["02", "Poor anomaly visibility", "Problematic transactions looked identical to healthy transactions, forcing operators to review everything."],
                ["03", "High operational effort", "Large amounts of time were spent exporting reports, comparing records, and validating transactions."],
                ["04", "Human error risk", "Despite all the manual checks, settlement mistakes could still occur."],
              ].map(([n, title, desc]) => (
                <div key={n} className="dp-pain">
                  <div className="dp-pain-n">{n}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0D1117", margin: "0 0 8px" }}>{title}</h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Design Principle */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Design Principle</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              How might we reduce settlement risk without requiring Finance teams to manually review every transaction?
            </h2>
            <p>Through discussions with engineers and settlement stakeholders, we discovered that full automation wasn't realistic. Certain edge cases still required human judgment before funds could be safely disbursed.</p>
            <div className="dp-callout">
              <p style={{ margin: 0, fontSize: 15.5, fontWeight: 700, color: "#1E2D9E" }}>
                Automate high-confidence validations and escalate exceptions for human review.
              </p>
            </div>
            <p>This became the core principle behind the redesign. The redesigned workflow shifts Finance teams away from validating every transaction and toward reviewing only transactions that require attention.</p>
          </motion.section>

          {/* The Solution */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">The Solution</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              What we built
            </h2>

            <div style={{ display: "grid", gap: 14, marginTop: 28 }}>
              {[
                ["1", "Automated Reconciliation Engine", "The system automatically validates transaction data and performs reconciliation checks at scale. Instead of manually comparing reports, Finance teams immediately receive reconciliation outcomes generated by the system."],
                ["2", "Two-Status Review Model", "Every transaction receives one of two outcomes: Eligible for Settlement, or Requires Review. This dramatically reduces review volume while maintaining financial control."],
                ["3", "Exception-Based Operational Review", "Rather than checking everything, Finance teams focus only on flagged transactions. This allows operators to spend their time investigating genuine issues instead of performing repetitive validation work."],
                ["4", "Approval & Settlement Monitoring", "Structured approval workflows, settlement visibility, and retry mechanisms help teams safely manage settlement operations while preventing duplicate disbursement risks."],
              ].map(([n, title, body]) => (
                <div key={n} className="dp-sol">
                  <div className="dp-sol-head">
                    <div className="dp-sol-icon">{n}</div>
                    <div>
                      <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#0D1117" }}>{title}</h3>
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <p style={{ fontSize: 14.5, lineHeight: 1.68, margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Impact */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Impact</div>
            <div className="dp-impact">
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 18 }}>Results</div>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(36px,6vw,54px)", fontWeight: 400, lineHeight: 1.05, marginBottom: 16, letterSpacing: "-.025em" }}>4-5 hours saved<br />per settlement cycle</div>
                <div style={{ fontSize: 17, color: "rgba(255,255,255,.78)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>The redesign transformed settlement operations from a spreadsheet-heavy validation process into an exception-based operational workflow.</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
                  {[['4-5h', 'Time saved per cycle'], ['Faster', 'Merchant payouts'], ['Reduced', 'Operational risk'], ['Better', 'Visibility & control']].map(([n, l]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: 42, color: "#fff", letterSpacing: "-.03em", lineHeight: 1, marginBottom: 6 }}>{n}</div>
                      <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".06em" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dp-stat-ribbon">
              {[
                ["4-5h", "Processing time reduced per settlement cycle"],
                ["Auto", "Reconciliation -- no more spreadsheets"],
                ["Instant", "Anomaly identification"],
                ["Scale", "Operations support growing volume"],
              ].map(([n, l]) => (
                <div key={l} className="dp-stat-card">
                  <div className="dp-stat-n">{n}</div>
                  <div className="dp-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Learnings */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Key Learnings</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              What this project changed about how I design
            </h2>
            <div>
              {[
                ["01", "Internal tools are often business-critical systems", "The challenge was not designing a dashboard. The challenge was designing a safer operational process."],
                ["02", "Automation is most effective when paired with human judgment", "Financial operations require both scalability and control. The solution was not replacing humans -- it was helping them focus on the right problems."],
                ["03", "Root causes matter more than symptoms", "Settlement delays initially appeared to be an operational efficiency problem. In reality, they were the result of a reconciliation process that required humans to validate almost everything manually."],
              ].map(([n, title, desc]) => (
                <div key={n} className="dp-lesson">
                  <div className="dp-lesson-n">{n}</div>
                  <div>
                    <h3 style={{ margin: "0 0 7px", fontSize: 16.5, fontWeight: 700, color: "#0D1117" }}>{title}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.68 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Back link */}
          <motion.div {...fade()} style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #E0E4EE" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#4B5FE0", textDecoration: "none" }}>
              Back to portfolio
            </Link>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
