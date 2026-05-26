import { useEffect } from "react";
import { Link } from "wouter";
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
        .dp-visual { border-radius: 16px 16px 0 0; overflow: hidden; background: #161830; border: 1px solid rgba(255,255,255,.08); border-bottom: none; box-shadow: 0 -20px 80px rgba(75,95,224,.15); margin-top: 8px; }
        .dp-visual-bar { background: #0D1117; padding: 14px 20px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(255,255,255,.06); }
        .dp-hv-dot { width: 10px; height: 10px; border-radius: 50%; }
        .dp-visual-title { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(255,255,255,.3); margin-left: auto; letter-spacing: .08em; }
        .dp-visual-body { padding: 32px 28px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; min-height: 220px; }
        .dp-hv-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07); border-radius: 10px; padding: 20px; }
        .dp-hv-label { font-family: 'JetBrains Mono', monospace; font-size: 9.5px; color: rgba(255,255,255,.35); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px; }
        .dp-hv-val { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-size: 28px; color: #fff; line-height: 1; margin-bottom: 6px; }
        .dp-hv-sub { font-size: 11px; color: rgba(255,255,255,.4); }
        .dp-hv-status { display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; border-radius: 100px; font-size: 10.5px; font-weight: 600; font-family: 'JetBrains Mono', monospace; letter-spacing: .05em; margin-top: 10px; }
        .dp-hv-ok { background: rgba(26,158,110,.2); color: #4ADE80; border: 1px solid rgba(74,222,128,.2); }
        .dp-hv-warn { background: rgba(217,119,6,.15); color: #FCD34D; border: 1px solid rgba(252,211,77,.2); }
        .dp-hv-err { background: rgba(217,64,64,.15); color: #FCA5A5; border: 1px solid rgba(252,165,165,.2); }
        .dp-hv-bar { height: 4px; border-radius: 100px; background: rgba(255,255,255,.08); overflow: hidden; margin-top: 6px; }
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
        .dp-status-box { background: #0D1117; border-radius: 16px; padding: 24px 28px; margin: 20px 0; display: flex; flex-wrap: wrap; gap: 10px; border: 1px solid rgba(255,255,255,.06); }
        .dp-tag { display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 100px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; font-weight: 700; letter-spacing: .04em; }
        .dp-tag::before { content: '●'; font-size: 6px; opacity: .7; }
        .dp-tag-ok { background: #E0F5EC; color: #1A9E6E; border: 1px solid rgba(26,158,110,.25); }
        .dp-tag-warn { background: #FEF3C7; color: #D97706; border: 1px solid rgba(217,119,6,.3); }
        .dp-tag-err { background: #FDEAEA; color: #D94040; border: 1px solid rgba(217,64,64,.25); }
        .dp-ba { background: #fff; border: 1px solid #E0E4EE; border-radius: 16px; overflow: hidden; margin: 20px 0; box-shadow: 0 1px 3px rgba(13,17,35,.05); }
        .dp-ba-head { padding: 18px 24px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #ECEEF5; }
        .dp-ba-num { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; color: #1E2D9E; letter-spacing: .1em; background: #EBEDF8; padding: 4px 10px; border-radius: 100px; border: 1px solid rgba(75,95,224,.2); }
        .dp-ba-title { font-size: 15px; font-weight: 700; color: #0D1117; }
        .dp-ba-body { display: grid; grid-template-columns: 1fr 1fr; }
        .dp-ba-col { padding: 20px 24px; }
        .dp-ba-col.before { background: #F8F9FC; border-right: 1px solid #ECEEF5; }
        .dp-ba-col h4 { font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin: 0 0 10px; display: flex; align-items: center; gap: 6px; }
        .dp-ba-col.before h4 { color: #D94040; }
        .dp-ba-col.before h4::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #D94040; }
        .dp-ba-col.after h4 { color: #1A9E6E; }
        .dp-ba-col.after h4::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #1A9E6E; }
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
        @media (max-width: 640px) {
          .dp-visual-body { grid-template-columns: 1fr; }
          .dp-tldr-row { grid-template-columns: 1fr; gap: 6px; }
          .dp-pain { grid-template-columns: 1fr; }
          .dp-stat-ribbon { grid-template-columns: 1fr 1fr; }
          .dp-ba-body { grid-template-columns: 1fr; }
          .dp-ba-col.before { border-right: none; border-bottom: 1px solid #ECEEF5; }
          .dp-impact { padding: 36px 24px; }
          .dp-reflection { padding: 36px 24px; }
          .dp-lesson { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <div className="dp-hero-wrap">
        <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <motion.div {...fade()}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
              <span className="dp-pill real"><span className="dp-dot" /> Real Project</span>
              <span className="dp-pill">Fintech · B2B</span>
              <span className="dp-pill">Operational UX</span>
              <span className="dp-pill">Internal Tool</span>
              <span className="dp-pill">Design System</span>
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-.032em", color: "#fff", marginBottom: 22, maxWidth: 680 }}>
              Redesigning{" "}
              <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#A5AFFF", fontWeight: 400 }}>settlement</em>
              {" "}so Finance teams stopped working like accountants in 2005
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.65)", maxWidth: 600, marginBottom: 48 }}>
              Inside Dipay's Core Dashboard, reconciliation meant spreadsheets, manual downloads, hundreds of refreshes, and a full working day per settlement cycle. This is how we fixed it.
            </p>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div {...fade(0.15)} className="dp-visual">
            <div className="dp-visual-bar">
              <div className="dp-hv-dot" style={{ background: "#FF5F57" }} />
              <div className="dp-hv-dot" style={{ background: "#FFBD2E" }} />
              <div className="dp-hv-dot" style={{ background: "#28C840" }} />
              <div className="dp-visual-title">Dipay Core Dashboard · Settlement Bisnis</div>
            </div>
            <div className="dp-visual-body">
              <div className="dp-hv-card">
                <div className="dp-hv-label">Total Transaksi</div>
                <div className="dp-hv-val">2,840</div>
                <div className="dp-hv-sub">settlement batch aktif</div>
                <div className="dp-hv-status dp-hv-ok">● Dapat Disettle</div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)", fontFamily: "'JetBrains Mono', monospace" }}>82% reconciled</div>
                  <div className="dp-hv-bar"><div style={{ width: "82%", height: "100%", borderRadius: 100, background: "linear-gradient(90deg,#22C55E,#4ADE80)" }} /></div>
                </div>
              </div>
              <div className="dp-hv-card">
                <div className="dp-hv-label">Perlu Ditinjau</div>
                <div className="dp-hv-val">341</div>
                <div className="dp-hv-sub">transaksi butuh dicek</div>
                <div className="dp-hv-status dp-hv-warn">⚠ Butuh Dicek</div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)", fontFamily: "'JetBrains Mono', monospace" }}>12% flagged</div>
                  <div className="dp-hv-bar"><div style={{ width: "12%", height: "100%", borderRadius: 100, background: "linear-gradient(90deg,#F59E0B,#FCD34D)" }} /></div>
                </div>
              </div>
              <div className="dp-hv-card">
                <div className="dp-hv-label">Settlement Gagal</div>
                <div className="dp-hv-val">27</div>
                <div className="dp-hv-sub">perlu retry / eskalasi</div>
                <div className="dp-hv-status dp-hv-err">✕ Gagal</div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)", fontFamily: "'JetBrains Mono', monospace" }}>1% failed</div>
                  <div className="dp-hv-bar"><div style={{ width: "1%", height: "100%", borderRadius: 100, background: "linear-gradient(90deg,#EF4444,#FCA5A5)" }} /></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 28px" }}>

          {/* Overview */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Overview</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              The settlement problem nobody saw coming
            </h2>
            <p>As Dipay's transaction volume continued to grow, the internal settlement workflow became increasingly difficult to manage. Finance and Operations teams spent hours manually validating transactions before funds could be disbursed to business partners.</p>
            <p>The challenge wasn't just operational complexity — <strong style={{ color: "#0D1117" }}>it was financial accuracy.</strong> As an acquirer, Dipay needed to ensure that every transaction recorded internally matched transaction data from third-party payment switchers before settlement could happen. Even small inconsistencies could lead to failed settlements, incorrect fund disbursement, or serious operational risk.</p>
            <p>Before this revamp, Finance teams created spreadsheets manually, downloaded QRIS transaction reports and mutation reports one-by-one per merchant, then compared the data manually to validate settlement eligibility. This project redesigned that end-to-end workflow inside Dipay's Core Dashboard.</p>
          </motion.section>

          {/* TL;DR */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-tldr">
              <div className="dp-tldr-lbl">TL;DR</div>
              {[
                ["Problem", "Settlement operations relied on manual reconciliation. Finance teams spent hours downloading mutation data, comparing spreadsheets, and repeatedly refreshing a dashboard that reset their filters — for every merchant in every batch."],
                ["Approach", "Deep operational interviews → map the full settlement lifecycle → work with engineers to define what could safely be automated → design a hybrid system that automates high-confidence cases and surfaces exceptions for human review."],
                ["Solution", "Automated reconciliation engine, structured operational review, multi-level approval workflow, real-time settlement visibility, anomaly highlighting, and retry handling for failed settlements."],
                ["Impact", "Reduced settlement and reconciliation operational processing time by approximately 4–5 hours per cycle."],
                ["My role", "Solo product designer. Collaborated with PMs, backend engineers, Finance team, Operations team, and settlement approval stakeholders."],
              ].map(([k, v]) => (
                <div key={k} className="dp-tldr-row">
                  <div className="dp-tldr-k">{k}</div>
                  <div className="dp-tldr-v">{v}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* The Problem */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">The Problem</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              Settlement in Dipay wasn't simply "sending money to merchants"
            </h2>
            <p>Before any funds could be disbursed, Dipay had to validate whether its internal transaction records matched data from external payment infrastructure — switchers, bank mutation records, and installment data. Every mismatch was a risk.</p>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", letterSpacing: "-.015em", margin: "32px 0 10px" }}>Everything that had to be true before a settlement could proceed</h3>
            <div className="dp-callout">
              <p style={{ margin: 0, fontSize: 15 }}>For each settlement request, Finance teams had to verify: transaction amounts matched · mutation records existed · RRN (Retrieval Reference Number) was valid · transactions hadn't been settled before · installments were already paid · merchant totals met minimum thresholds · merchant accounts weren't suspended.</p>
              <p style={{ marginTop: 10, marginBottom: 0, fontSize: 15, color: "#1E2D9E", fontWeight: 600 }}>Every single check. For every merchant. In every batch.</p>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", letterSpacing: "-.015em", margin: "32px 0 10px" }}>What the process actually looked like day-to-day</h3>
            <div className="dp-lifecycle">
              <div className="dp-lc-label">Manual Reconciliation Loop (Before)</div>
              {[
                ["1", "Create manual checking worksheet", "Start from scratch in spreadsheet, for every cycle"],
                ["2", "Download mutation reports per merchant", "One-by-one. 50–70 merchants per batch."],
                ["3", "Download QRIS transaction reports", "Again, one-by-one. Filters reset after every export."],
                ["4", "Compare both data sources manually", "Row-by-row, across two different file formats"],
                ["5", "Validate settlement eligibility", "Manually check every condition listed above"],
                ["6", "Repeat for the next merchant", "Back to step 1. Every time. Sometimes hundreds of times in a single cycle."],
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
            <p>On average, each settlement batch contained <strong style={{ color: "#0D1117" }}>50–70 merchants</strong>. Operational checking could consume <strong style={{ color: "#0D1117" }}>almost an entire working day</strong>. Mondays were especially brutal — settlement volume accumulated from Friday–Sunday transactions hit all at once.</p>
          </motion.section>

          {/* Pain Points */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Pain Points</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              Five things that made every Monday{" "}
              <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#3548C9", fontWeight: 400 }}>miserable</em>
            </h2>
            <div style={{ display: "grid", gap: 14, marginTop: 28 }}>
              {[
                ["01", "Manual and repetitive reconciliation", "Every check was performed by hand — download mutation data, download QRIS data, compare manually, validate individually. As transaction volume increased, this process became impossible to scale."],
                ["02", "Low operational efficiency", "The majority of time was spent on administrative work rather than actual financial decision-making. A huge amount of cognitive energy was wasted before Finance teams could do the one thing they were there to do: validate settlements."],
                ["03", "High risk of human error", "Manual comparison at scale is inherently error-prone. Incorrect transaction validation, overlooked mismatches, duplicate settlement risks, calculation mistakes — each one had direct financial consequences."],
                ["04", "Poor operational visibility", "Problematic transactions were visually indistinguishable from clean ones. Finance teams couldn't quickly identify mismatches, failed reconciliations, or unsettled transactions — making reviews cognitively exhausting and slow."],
                ["05", "UI friction that compounded at scale", "Filter states reset after every export. The dashboard required repeated page refreshes. Multiple report generations were needed for a single merchant. These small frictions repeated hundreds of times daily became enormous operational burdens."],
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

          {/* Process */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Process</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              Understand the operational ecosystem first,{" "}
              <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#3548C9", fontWeight: 400 }}>design later</em>
            </h2>
            <p>Rather than redesigning screens immediately, I spent significant time understanding the financial workflow behind settlement processing — because the UI was only one layer of a much larger operational ecosystem.</p>
            <div className="dp-timeline">
              {[
                ["1 — Mapping the existing workflow", "Collaborated with Finance and Operations through interviews, workflow walkthroughs, and reconciliation observation. Key insight: most of the time was consumed outside the actual \"decision-making\" process — in downloads, refreshes, filters, and comparisons."],
                ["2 — Mapping the settlement lifecycle", "Together with stakeholders, I documented the full lifecycle to identify where bottlenecks occurred most: Settlement Request → Cut-off Config → Eligibility Validation → Reconciliation → Operational Review → Approval → Disbursement → Monitoring & Retry."],
                ["3 — Aligning with technical feasibility", "The Finance team wanted maximum automation — but the real design challenge was determining how far automation could safely go. I worked closely with backend engineers to understand switcher data flows, mutation validation, and reconciliation logic. Not every mismatch could be resolved programmatically."],
                ["4 — Defining the automation boundaries", "Rather than full automation, we designed a hybrid model: automate high-confidence validation cases, escalate uncertain cases for manual review. This shaped the two-status system that became the core of the redesign."],
                ["5 — Designing for operational clarity", "The redesign's core principle: help operations teams make faster and safer financial decisions, not just use a 'cleaner interface.' Every design decision was evaluated against that standard."],
              ].map(([title, desc]) => (
                <div key={title} className="dp-tl-item">
                  <div className="dp-tl-dot"><div className="dp-tl-dot-inner" /></div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0D1117", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Product Decisions */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Key Product Decisions</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              The hard calls that shaped the system
            </h2>
            <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
              {[
                ["Auto reconciliation vs. fully manual checking?", "Auto reconciliation. Manually validating every transaction no longer scaled. The system automatically checks reconciliation consistency and only surfaces problematic transactions for manual review — shifting Finance from \"check everything\" to \"focus only on exceptions.\""],
                ["If reconciliation is automated, why keep manual review at all?", "Because financial operations require human judgment for edge cases. Automation handles standard validation, but Finance teams still need authority to validate suspicious transactions, reject settlement eligibility, and prevent incorrect disbursements. The system supports operational judgment — it doesn't replace it."],
                ["Why introduce anomaly highlighting?", "One major operational issue was that problematic transactions were visually impossible to identify quickly. The redesign introduced highlighted mismatch states, error indicators, and contextual feedback — so Finance teams immediately know where to look, instead of scanning thousands of rows."],
                ["Why multi-level approval?", "Settlement directly impacts financial disbursement. Separating operational checking from stakeholder approval creates clearer accountability, audit visibility, and safer financial operations. It also reduces ambiguity about who can authorize what."],
                ["Why allow retry only for failed settlements, not all?", "To prevent duplicate disbursement risk. Retry applies only to businesses with Settlement Gagal status. Successful or rejected settlements cannot be retried, ensuring safer operational recovery flows."],
              ].map(([q, a]) => (
                <div key={q} className="dp-decision">
                  <div className="dp-decision-q">{q}</div>
                  <div className="dp-decision-a">{a}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Solution</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              What we built — and{" "}
              <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#3548C9", fontWeight: 400 }}>why</em>
              {" "}each piece matters
            </h2>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0D1117", margin: "32px 0 10px" }}>The two-status reconciliation system</h3>
            <p>The core of the redesign is a clear, binary output from the automated reconciliation engine. Every transaction gets one of two statuses:</p>
            <div className="dp-status-box">
              <span className="dp-tag dp-tag-ok">✓ Dapat Disettle</span>
              <span style={{ color: "rgba(255,255,255,.3)", fontSize: 13, alignSelf: "center" }}>→ cleared for disbursement</span>
              <span className="dp-tag dp-tag-warn" style={{ marginLeft: "auto" }}>⚠ Butuh Dicek</span>
              <span style={{ color: "rgba(255,255,255,.3)", fontSize: 13, alignSelf: "center" }}>→ flagged for human review</span>
            </div>
            <div className="dp-ba">
              <div className="dp-ba-head">
                <span className="dp-ba-num">BEFORE → AFTER</span>
                <span className="dp-ba-title">Reconciliation approach</span>
              </div>
              <div className="dp-ba-body">
                <div className="dp-ba-col before">
                  <h4>Before</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0 }}>Every transaction manually checked by Finance. No system differentiation between clean and problematic transactions. All burden on humans.</p>
                </div>
                <div className="dp-ba-col after">
                  <h4>After</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0 }}>Auto-reconciliation engine categorizes transactions. Finance focuses only on flagged cases — a fraction of the total volume.</p>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gap: 14, marginTop: 28 }}>
              {[
                ["⚡", "Auto Reconciliation Engine", "Automated transaction validation at scale", "When settlement requests are created, the system automatically queries eligible transactions, runs reconciliation rules, generates settlement request IDs, and flags problematic transactions — covering common mismatch cases like missing mutation records, nominal mismatches, unavailable RRN switcher data, inconsistent transaction states, and duplicated settlement attempts."],
                ["🔍", "Structured Operational Review", "Human oversight, intelligently scoped", "Finance teams review only flagged transactions. The system enforces validation completion, blocks progression if unresolved transactions exist, and generates settlement summaries automatically — improving operational control while reducing oversight risk."],
                ["🎯", "Anomaly Highlighting & Visualization", "Problems visible at a glance", "The redesigned dashboard highlights mismatched data, settlement warning indicators, incomplete data markers, inconsistent period indicators, and missing reconciliation alerts — eliminating the need for repetitive manual comparison across spreadsheets."],
                ["✅", "Multi-Level Approval Workflow", "Accountability built into the process", "Stakeholders can approve settlements, reject specific businesses with documented reasons, monitor settlement readiness, and view operational actors transparently. The workflow creates an auditable trail for every settlement decision."],
                ["🔄", "Settlement Monitoring & Retry", "Recovery flows that don't create new risks", "Business-level settlement visibility, failed settlement monitoring, and retry handling with duplicate-prevention validation. Only Settlement Gagal cases can be retried — protecting against double disbursement."],
              ].map(([icon, title, sub, body]) => (
                <div key={title} className="dp-sol">
                  <div className="dp-sol-head">
                    <div className="dp-sol-icon">{icon}</div>
                    <div>
                      <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#0D1117" }}>{title}</h3>
                      <p style={{ margin: 0, fontSize: 12.5, color: "#8494A8" }}>{sub}</p>
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
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", marginBottom: 18 }}>Biggest Operational Impact</div>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(36px,6vw,54px)", fontWeight: 400, lineHeight: 1.05, marginBottom: 16, letterSpacing: "-.025em" }}>4–5 hours saved<br />per settlement cycle</div>
                <div style={{ fontSize: 17, color: "rgba(255,255,255,.78)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>By eliminating repetitive manual validation and giving Finance teams visibility where it matters, every settlement cycle got dramatically shorter.</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
                  {[["↓ 4–5h", "Time per cycle"], ["0×", "Manual exports"], ["↓", "Human error risk"]].map(([n, l]) => (
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
                ["↓ 4–5h", "Processing time reduced per settlement cycle"],
                ["Auto", "Reconciliation — no more spreadsheets"],
                ["Instant", "Anomaly identification (was: scan manually)"],
                ["Scale", "Operations can now grow with volume"],
              ].map(([n, l]) => (
                <div key={l} className="dp-stat-card">
                  <div className="dp-stat-n">{n}</div>
                  <div className="dp-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Lessons Learned */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Lessons Learned</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 18 }}>
              What this project{" "}
              <em style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", color: "#3548C9", fontWeight: 400 }}>changed</em>
              {" "}about how I design
            </h2>
            <div>
              {[
                ["01", "Internal tools are operational systems, not just dashboards", "Designing internal fintech tools requires understanding operational workflows, financial risks, reconciliation systems, approval hierarchies, and transaction dependencies. The UI is only one layer of a much larger ecosystem — and sometimes not the most important one."],
                ["02", "Small operational friction compounds brutally at scale", "A filter resetting, an unnecessary refresh, one extra export click — each is invisible in isolation. When repeated hundreds of times daily, they consume hours. Small UX fixes can create disproportionately large operational impact in internal tools."],
                ["03", "Visibility reduces operational stress more than features do", "Many inefficiencies weren't caused by missing functionality — they were caused by poor visibility. Clear statuses, structured workflows, and actionable states dramatically reduced cognitive load. Seeing the problem is often 80% of solving it."],
                ["04", "Automation without human control is dangerous in fintech", "Fully automated financial operations can cause serious harm when edge cases aren't handled. The most effective system combines scalable automation with human operational oversight — not as a compromise, but as a deliberate design principle."],
                ["05", "Cross-functional collaboration shapes better systems", "Understanding technical constraints behind reconciliation logic shaped workflows that were not only usable, but operationally realistic and financially safe. The final product was heavily influenced by deep conversations with engineers — not just designers."],
                ["06", "Edge cases define fintech products more than happy paths", "The hardest — and most important — design work in this project wasn't the standard flow. It was designing for inconsistent switcher data, failed disbursement recovery, duplicate prevention, reconciliation mismatches, and eligibility changes. In fintech operational tools, edge cases are the product."],
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

          {/* Reflection */}
          <motion.section {...fade()} style={{ marginBottom: 72 }}>
            <div className="dp-eyebrow">Reflection</div>
            <div className="dp-reflection">
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(18px,3vw,23px)", lineHeight: 1.55, color: "rgba(255,255,255,.88)", fontWeight: 400, letterSpacing: "-.005em" }}>
                  This project changed how I think about operational product design.
                </p>
                <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,.6)" }}>
                  Before this, I viewed internal dashboards primarily as workflow interfaces. After working closely with Finance and Operations teams, I realized operational tools are deeply tied to business risk, financial accuracy, and organizational trust. A settlement dashboard isn't a UI challenge — it's a systems challenge that happens to have a UI. Small workflow improvements created significant business impact because they reduced hours of repetitive work while helping teams make safer decisions. That's the version of product design I want to keep doing.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Scope & Role */}
          <motion.section {...fade()} style={{ marginBottom: 40 }}>
            <div className="dp-eyebrow">Scope &amp; My Role</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0D1117", letterSpacing: "-.025em", lineHeight: 1.18, marginBottom: 12 }}>What I owned on this project</h2>
            <p>End-to-end product design across research, workflow mapping, system design, and iteration — in close collaboration with engineering, finance, and operations.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
              {["Workflow Mapping", "Operational Research", "Information Architecture", "UX & Interaction Design", "Edge-Case Handling", "Dashboard Redesign", "Cross-functional Alignment", "Stakeholder Collaboration"].map((s) => (
                <span key={s} className="dp-stack-pill"><span className="dp-stack-dot" />{s}</span>
              ))}
            </div>
          </motion.section>

          {/* Back link */}
          <motion.div {...fade()} style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #E0E4EE" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#4B5FE0", textDecoration: "none" }}>
              ← Back to portfolio
            </Link>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
