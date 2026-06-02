import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
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

export default function SmartMurojaahCaseStudy() {
  const study = caseStudies.find((c) => c.slug === "smart-murojaah")!;
  const currentIndex = caseStudies.findIndex((c) => c.slug === "smart-murojaah");
  const prev = caseStudies[currentIndex - 1] ?? null;
  const next = caseStudies[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#E8ECF4] pt-28 pb-0">
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
              {["Product Strategy", "UX Design", "Web App", "Solo Build"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-[7px] rounded-full bg-white border border-[#E0E5EF] text-xs font-semibold text-[#2B3648] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.028em] text-[#0F1A2E] mb-5 max-w-[680px]">
              Smart Murojaah: From Personal Struggle to Product
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[620px] mb-10 leading-[1.55]">
              A Quran memorization tool born from a simple question:{" "}
              <em className="text-[#2B3648]">"What if I just build it myself?"</em>
            </p>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-[20px] overflow-hidden shadow-2xl"
          >
            <img
              src={`${BASE}images/smart-murojaah-banner.png`}
              alt="Smart Murajaah app screens"
              className="w-full h-auto block"
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* Overview */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Overview</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              A few months ago, I joined a murojaah community with my friends to stay consistent in
              memorizing the Quran. The experience was great. We took turns reciting from memory,
              helping validate each other's mistakes, and holding one another accountable.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              But outside those sessions, I noticed something: practicing alone felt very different.
              I kept running into small but recurring challenges that disrupted my murojaah flow.
              I tried searching for existing tools, but none of them matched the way I actually practiced.
            </p>
            <p className="text-[#4A5568] leading-[1.7]">
              So a random thought crossed my mind:{" "}
              <em className="text-[#2B3648]">"What if I just build it myself?"</em> What started as
              my first vibe-coding experiment eventually became a mobile-first web app that I now use
              for my own murojaah practice — and that some of my friends use too.
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
                  v: "Practicing murojaah independently was harder than expected. No one to validate recitation, no tool to randomly prompt verses for sambung ayat, and no way to stay consistent without a practice partner.",
                },
                {
                  k: "Solution",
                  v: "A mobile-first web app that helps users check recitation through voice recognition, practice sambung ayat independently, track memorization progress, and repeat specific verses — no install required.",
                },
                {
                  k: "My role",
                  v: "Solo Builder. Problem discovery, product strategy, UX design, prototyping, frontend development, speech-recognition implementation, database setup, and deployment.",
                },
                {
                  k: "Biggest win",
                  v: (
                    <>
                      AI can significantly lower the barrier to building products, but it does not replace
                      user feedback, accessibility considerations, or iteration. Technology helped me build
                      faster.{" "}
                      <em className="text-[#2B3648]">Real users taught me what actually mattered.</em>
                    </>
                  ),
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

          {/* The Problem */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">The Problem</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-7">
              The inspiration for Smart Murojaah did not come from a business opportunity or a startup idea.
              It came from a personal frustration. While practicing on my own between sessions, I repeatedly
              ran into these problems.
            </p>

            <div className="space-y-0">
              {[
                {
                  title: "The loop of doubt",
                  body: (
                    <>
                      I would close the Mushaf and start reciting confidently. But a few verses later,
                      a thought would suddenly appear:{" "}
                      <em className="text-[#2B3648]">"Wait... was that verse correct?"</em> Then the
                      cycle began. Open the Mushaf. Check the verse. Close it again. Continue reciting.
                      Then doubt returned. Sometimes I would even slip into another surah without
                      realizing it because similar verse endings sounded familiar.
                    </>
                  ),
                },
                {
                  title: "No verse-level repetition",
                  body: "I memorize best when I can loop a specific verse while listening, over and over. But every audio Quran or murotal app only offered full-surah playback. I had to manually pause, rewind, guess the timestamp. The tool was fighting my workflow instead of supporting it.",
                },
                {
                  title: "Practicing sambung ayat alone",
                  body: (
                    <>
                      When preparing for sambung ayat assessments, someone reads part of a verse and
                      you continue from there. The problem was simple:{" "}
                      <em className="text-[#2B3648]">I lived alone.</em> There was no one available
                      to randomly prompt me with verses whenever I wanted to practice.
                    </>
                  ),
                },
                {
                  title: "The limitation of device",
                  body: (
                    <>
                      My first instinct was not to build anything. I simply looked for a tool that
                      could solve my problems. But my phone storage had been permanently fighting for
                      survival at 99%. Downloading yet another app was not really an option. This
                      limitation shaped the solution itself:{" "}
                      <em className="text-[#2B3648]">
                        if I were going to build something, it had to be accessible instantly through a
                        browser, with no installation required.
                      </em>
                    </>
                  ),
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="grid gap-5 py-[22px] border-t border-[#EEF1F7] first:border-t-0 first:pt-[6px]"
                  style={{ gridTemplateColumns: "42px 1fr" }}
                >
                  <div
                    className="w-8 h-8 rounded-full bg-white border-[1.5px] border-[#0F1A2E] flex items-center justify-center text-[12px] font-bold text-[#0F1A2E]"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F1A2E] mb-[6px]">{p.title}</h3>
                    <p className="text-[15px] text-[#4A5568] leading-[1.65] m-0">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Process */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Process</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-8">
              Rather than jumping straight into Figma, I took a builder-first approach: validate the
              hardest technical unknown first, then iterate on design through real user feedback.
            </p>

            {/* Iteration 1 */}
            <div className="mb-8">
              <div
                className="text-[10.5px] font-bold tracking-[.18em] uppercase text-[#1F9B6E] mb-3"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                Iteration 01 — Functionality First
              </div>
              <p className="text-[15px] text-[#4A5568] leading-[1.7] mb-4">
                My goal was not to build a polished product. I simply wanted something that could help
                me solve my own problem. So I entered full builder mode. As a Product Designer, this
                felt unusual because I completely ignored things I normally care about: visual hierarchy,
                interaction patterns, onboarding, and usability.
              </p>
              <p className="text-[15px] text-[#4A5568] leading-[1.7]">
                I focused only on one thing:{" "}
                <strong className="text-[#0F1A2E] font-semibold">making it work</strong> — especially
                de-risking the biggest unknown:{" "}
                <em className="text-[#2B3648]">
                  could the browser's speech recognition API actually understand Arabic recitation well
                  enough to validate memorization?
                </em>{" "}
                The process quickly became a cycle of Build &rarr; Test &rarr; Bug &rarr; Fix &rarr; New Bug.
                Eventually the product became stable enough for my own daily practice.
              </p>
            </div>

            {/* Reality Check */}
            <div className="bg-white border border-[#E4E8F0] rounded-2xl px-8 py-7 mb-8 shadow-sm">
              <div
                className="text-[10.5px] font-bold tracking-[.18em] uppercase text-[#C54545] mb-3"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                The Reality Check
              </div>
              <p className="text-[15px] text-[#4A5568] leading-[1.7] mb-4">
                It should have been enough for me, but my curiosity pushed me further. I made an
                important decision: I asked a few friends to try it.
              </p>
              <p className="text-[15px] text-[#4A5568] leading-[1.7] mb-5">
                What made sense to me did not automatically make sense to others. Some users were
                confused by the flow. Others did not understand certain interactions. A few features
                that I thought were obvious were not obvious at all.
              </p>
              <blockquote className="border-l-[3px] border-[#0F1A2E] pl-5 text-[#2B3648] italic text-[15.5px] leading-[1.7]">
                "Designing for yourself is very different from designing for other people."
              </blockquote>
            </div>

            {/* Iteration 2 */}
            <div className="mb-8">
              <div
                className="text-[10.5px] font-bold tracking-[.18em] uppercase text-[#4B6BF0] mb-3"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                Iteration 02 — Designing for Real Users
              </div>
              <p className="text-[15px] text-[#4A5568] leading-[1.7] mb-5">
                Over the following weeks, I refactored almost everything. The biggest change was shifting
                fully into a mobile-first experience after realizing that every tester accessed the product
                through their phone — I was practically the only desktop user.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Murojaah", desc: "Practice recitation with real-time feedback and validation." },
                  { name: "Hafalanku", desc: "Track memorization progress and manage memorized surahs." },
                  { name: "Dengarkan Ayat", desc: "Repeat selected verses to strengthen memorization." },
                  { name: "Sambung Ayat", desc: "Practice random verse continuation independently." },
                ].map((f) => (
                  <div key={f.name} className="bg-[#F8F9FC] border border-[#E4E8F0] rounded-xl px-5 py-4">
                    <div className="text-[13px] font-bold text-[#0F1A2E] mb-1">{f.name}</div>
                    <div className="text-[13.5px] text-[#4A5568] leading-[1.6]">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 30 days */}
            <div className="bg-[#F0FAF5] border border-[#C9E8D7] rounded-2xl px-8 py-7">
              <div
                className="text-[10.5px] font-bold tracking-[.18em] uppercase text-[#1F9B6E] mb-3"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                30-Day Self Test
              </div>
              <p className="text-[15px] text-[#4A5568] leading-[1.7] mb-3">
                While continuing to improve the product based on Iteration 2 feedback, I committed
                to using it consistently for 30 days. Partly because I genuinely needed it. Partly
                because I wanted to understand what the experience felt like over time.
              </p>
              <p className="text-[15px] text-[#4A5568] leading-[1.7]">
                Repeated usage exposed issues that never appeared during short testing sessions. I
                discovered new bugs, friction points, and small usability problems that only surfaced
                through daily use. The more I used the product, the more opportunities I found to
                improve it.
              </p>
            </div>
          </Reveal>

          {/* Key Product Decisions */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Key Product Decisions</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              Five forks in the road that shaped the app. Each was a trade-off I had to make alone,
              without a PM to argue with.
            </p>
            <div className="bg-white border border-[#E4E8F0] rounded-2xl shadow-sm overflow-hidden">
              {[
                {
                  q: "Guest mode or force login?",
                  a: (
                    <>
                      <strong className="text-[#0F1A2E] font-semibold">Guest, local-only.</strong>{" "}
                      Login-first walls kill first impressions. I let guest users store progress in
                      localStorage and sync to Supabase only after sign-in. Try first, commit later.
                    </>
                  ),
                },
                {
                  q: "Speech recognition or manual input?",
                  a: (
                    <>
                      <strong className="text-[#0F1A2E] font-semibold">Speech, despite the complexity.</strong>{" "}
                      Manual input would have been 10x easier but 10x less useful. Murojaah{" "}
                      <em className="text-[#2B3648]">is</em> reciting out loud. Typing misses the entire
                      point of the exercise.
                    </>
                  ),
                },
                {
                  q: "Per-surah or per-juz picker?",
                  a: (
                    <>
                      <strong className="text-[#0F1A2E] font-semibold">Both, via segmented control.</strong>{" "}
                      Different users think in different units. Exam-prep friends wanted "test me on Juz
                      30". I wanted "test me on Al-Ma'arij". Segmented tabs respect both mental models.
                    </>
                  ),
                },
                {
                  q: "How strict should validation be?",
                  a: (
                    <>
                      <strong className="text-[#0F1A2E] font-semibold">Forgiving, but honest.</strong>{" "}
                      A strict word-by-word matcher caused false errors even on correct recitations. A
                      highly tolerant one risked accepting incorrect recitations. I landed on a lookahead
                      gap-tolerance mechanism — closer to how a real murojaah partner would respond.
                    </>
                  ),
                },
                {
                  q: "Hide technical errors or surface them?",
                  a: (
                    <>
                      <strong className="text-[#0F1A2E] font-semibold">Surface them in Indonesian with a suggested action.</strong>{" "}
                      "Mikrofon belum aktif. Klik ikon kunci di address bar." Users fail gracefully only
                      if they understand what failed. Silent failures are the worst possible UX.
                    </>
                  ),
                },
              ].map((d, i) => (
                <div
                  key={i}
                  className="py-[22px] px-7 border-t border-[#EEF1F7] first:border-t-0"
                >
                  <div className="text-[15px] font-bold text-[#0F1A2E] mb-[6px] tracking-[-0.01em]">
                    {d.q}
                  </div>
                  <div className="text-[14.5px] leading-[1.65] text-[#4A5568]">{d.a}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* UX Iteration Highlights */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">UX Iteration Highlights</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              I kept a running list of every moment a friend hesitated, tapped the wrong thing, or asked
              "wait, how do I...". Each of these fixes came directly from that list.
            </p>
            <div className="space-y-5">
              {[
                {
                  num: "FIX 01",
                  title: "Setoran modal getting cut off",
                  before: (
                    <>
                      Bottom sheet used <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">max-height:100vh</code>. Mobile
                      browser chrome covered the bottom row. Users could not see or reach the ayah range inputs.
                    </>
                  ),
                  after: (
                    <>
                      Capped at <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">92vh</code>. Ayah range promoted to highlighted cell
                      with dashed accent border, pulse animation, larger inputs, auto-select on focus.
                    </>
                  ),
                },
                {
                  num: "FIX 02",
                  title: "\"Skip\" that wasn't skip",
                  before:
                    "Button labeled \"Skip\" (English, in an Indonesian app) that only worked inside retry mode. Outside retry mode, nothing happened. Users assumed the app was broken.",
                  after: (
                    <>
                      Renamed to <em className="text-[#2B3648]">"Lewati"</em>. Rewrote the handler to
                      advance the cursor in non-retry mode, marking remaining words as neutral. One word
                      fix plus one logic fix equals zero confusion.
                    </>
                  ),
                },
                {
                  num: "FIX 03",
                  title: "Dengarkan Ayat form chaos",
                  before:
                    "Three inconsistent inputs with phantom dropdown chevrons. No validation. Users could enter ayah 100 for Al-Fatihah (which has 7). No feedback at all.",
                  after: (
                    <>
                      Standardized fields. Replaced repeat count with a{" "}
                      <em className="text-[#2B3648]">-/+ stepper</em> (still typeable). Live range
                      validation. Dynamic status:{" "}
                      <em className="text-[#2B3648]">
                        "Siap memutar: Al-Ma'arij ayat 1 sampai 5 dengan 3x pengulangan."
                      </em>
                    </>
                  ),
                },
                {
                  num: "FIX 04",
                  title: "Sambung Ayat with no identity",
                  before:
                    "Page jumped straight into a config card with no header. Score tracking lived in a separate disconnected card. Users did not know what screen they were on.",
                  after: (
                    <>
                      Added header inside the config card. Moved score tracking into inline{" "}
                      <em className="text-[#2B3648]">BENAR/SALAH chips</em> in the prompt card header.
                      Chips hidden until a session actually starts.
                    </>
                  ),
                },
                {
                  num: "FIX 05",
                  title: "Silent data leak between users",
                  before:
                    "User A logs in, closes the tab without logging out. User B (shared laptop) opens the app and sees User A's data. Logout handler only cleared topbar UI, not localStorage.",
                  after: (
                    <>
                      Introduced a logged-in marker. On cold start: if marker exists but no active
                      session, purge all local data. Combined with hard reload on logout, XSS escaping,
                      and defense-in-depth{" "}
                      <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">user_id</code> filters.
                    </>
                  ),
                },
              ].map((fix) => (
                <div
                  key={fix.num}
                  className="bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="px-7 pt-5 pb-3 flex items-center gap-3 flex-wrap">
                    <span
                      className="text-[10px] font-bold tracking-[.12em] text-[#8591A3] bg-[#F0F3FA] border border-[#E0E5EF] px-[10px] py-1 rounded-full"
                      style={{ fontFamily: "'JetBrains Mono',monospace" }}
                    >
                      {fix.num}
                    </span>
                    <span className="text-[16px] font-bold text-[#0F1A2E] tracking-[-0.01em]">
                      {fix.title}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 border-t border-[#EEF1F7]">
                    <div className="px-7 py-5 bg-[#FAFBFD] border-b md:border-b-0 md:border-r border-[#EEF1F7]">
                      <h4
                        className="text-[10px] font-bold tracking-[.12em] uppercase mb-[10px] flex items-center gap-1.5"
                        style={{ fontFamily: "'JetBrains Mono',monospace", color: "#C54545" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C54545] inline-block" />
                        Before
                      </h4>
                      <p className="text-[14px] leading-[1.65] text-[#4A5568] m-0">{fix.before}</p>
                    </div>
                    <div className="px-7 py-5">
                      <h4
                        className="text-[10px] font-bold tracking-[.12em] uppercase mb-[10px] flex items-center gap-1.5"
                        style={{ fontFamily: "'JetBrains Mono',monospace", color: "#1F9B6E" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1F9B6E] inline-block" />
                        After
                      </h4>
                      <p className="text-[14px] leading-[1.65] text-[#4A5568] m-0">{fix.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Technical Deep Dive */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Technical Deep Dive</h2>
            <p className="text-[#4A5568] leading-[1.7]">
              As someone who had never gone deep into technical implementation before, this was the
              hardest part of the entire project.
            </p>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-[10px] tracking-[-0.01em]">
              1. Voice Recognition
            </h3>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              At first, I assumed speech recognition would be the easiest part. Modern browsers already
              provide built-in speech-to-text APIs, so I thought I could simply plug it in and start
              validating recitations. I was wrong.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-3">
              After testing, I noticed the same recitation could produce completely different results
              depending on the browser, operating system, or device.
            </p>
            <ul className="mt-3 mb-5 ml-5 space-y-1.5">
              {[
                "Different recognition results across Chrome, Safari, and Android browsers.",
                "Inconsistent microphone permission behavior between platforms.",
                "Varying levels of Arabic language support across devices.",
                "Recognition delays that interrupted the murojaah flow.",
              ].map((li, i) => (
                <li key={i} className="text-[15.5px] text-[#4A5568] leading-[1.75]">
                  {li}
                </li>
              ))}
            </ul>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              Getting recognition to work was only half the challenge. The next question was:{" "}
              <strong className="text-[#0F1A2E] font-semibold">how strict should the validation be?</strong>
            </p>
            <p className="text-[#4A5568] leading-[1.7]">
              A strict word-by-word matcher caused frustration. A single missed word triggered a chain of
              false errors, even when the recitation was mostly correct. On the other hand, a highly
              tolerant matcher risked accepting incorrect recitations. To solve this, I experimented with
              lookahead matching and gap-tolerance mechanisms.
            </p>

            <div className="bg-[#F0FAF5] border border-[#C9E8D7] rounded-2xl px-8 py-7 my-7">
              <h3 className="text-[18px] font-bold text-[#0F1A2E] mb-[10px] mt-0">
                Matcher behavior
              </h3>
              <p className="text-[15.5px] text-[#4A5568] leading-[1.7] m-0">
                Before marking a word wrong, look ahead up to{" "}
                <strong className="text-[#0F1A2E] font-semibold">3 words</strong> in the expected
                sequence. If a match exists within that window, treat skipped words as neutral{" "}
                <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                  'passed'
                </code>. For gaps of 2+ words, require a stricter similarity threshold to prevent the
                matcher from accidentally claiming a wildly different ayah as a match. The goal was
                not perfect accuracy — it was feedback users could trust, something closer to how a
                real murojaah partner would respond:{" "}
                <em className="text-[#2B3648]">forgiving when appropriate, but still honest.</em>
              </p>
            </div>

            <pre
              className="rounded-xl overflow-x-auto my-5 p-5 text-[12.5px] leading-[1.75] shadow-md"
              style={{
                background: "#0F1A2E",
                color: "#D6DBE5",
                fontFamily: "'JetBrains Mono',ui-monospace,monospace",
              }}
            >
{`// Map digit sequences to their Arabic spoken equivalents
const _NUM_TO_AR = {
  '50000': 'خمسين الف',
  '70000': 'سبعين الف',
  '50': 'خمسين', '70': 'سبعين',
  '19': 'تسعة عشر', '12': 'اثنا عشر',
  // ...and so on
};

function _digitsToArabic(text) {
  return text.replace(/\\d+/g, m => _NUM_TO_AR[m] || m);
}`}
            </pre>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-[10px] tracking-[-0.01em]">
              2. Security Considerations
            </h3>
            <p className="text-[#4A5568] leading-[1.7] mb-4">
              As someone building and deploying a product on my own for the first time, security was
              one of the things that made me the most nervous. Once people started using the product,
              they were trusting me with their data. Even though the data was not highly sensitive, I
              still felt responsible for protecting it.
            </p>
            <p className="text-[#4A5568] leading-[1.7] mb-3">
              That concern pushed me to spend significant time learning security fundamentals before
              launching. Some of the areas I explored:
            </p>
            <ul className="mt-3 mb-5 ml-5 space-y-2">
              {[
                <>
                  <strong className="text-[#0F1A2E] font-semibold">Authentication and authorization</strong>{" "}
                  — ensuring users could only access features and data that belonged to them.
                </>,
                <>
                  <strong className="text-[#0F1A2E] font-semibold">Row-Level Security (RLS)</strong>{" "}
                  in Supabase, so users could only read and modify their own records.
                </>,
                <>
                  <strong className="text-[#0F1A2E] font-semibold">Storage access policies</strong>{" "}
                  — preventing users from accessing files belonging to other accounts.
                </>,
                <>
                  <strong className="text-[#0F1A2E] font-semibold">Secure deployment practices</strong>{" "}
                  — environment variable management and protecting API keys.
                </>,
              ].map((li, i) => (
                <li key={i} className="text-[15.5px] text-[#4A5568] leading-[1.75]">
                  {li}
                </li>
              ))}
            </ul>
            <p className="text-[#4A5568] leading-[1.7]">
              This project changed the way I think about security. I used to see it as something
              developers handled behind the scenes. Now I see it as part of building trust with users
              — and therefore part of the product experience itself.
            </p>
          </Reveal>

          {/* Stack */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Stack</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              No framework. No build step. Just static HTML, CSS, and JS. Turns out you do not always
              need Next.js.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Vanilla JS",
                "Custom CSS",
                "Web Speech API",
                "Supabase",
                "Google OAuth",
                "Vercel",
                "Al-Quran Cloud API",
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
          </Reveal>

          {/* Lessons Learned */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Lessons Learned</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              The bugs I fixed are in the codebase. The lessons I learned are here.
            </p>
            <div className="space-y-0">
              {[
                {
                  title: "Solving my problem didn't mean solving everyone's problem",
                  body: "The first version worked perfectly — for me. But once other people started using it, I quickly realized how many assumptions I had made. Features that felt obvious to me were not obvious to others. Flows that felt natural to me felt confusing to them. A personal solution only becomes a product when it works for people beyond yourself.",
                },
                {
                  title: "Design intuition is not a substitute for user feedback",
                  body: "As a Product Designer, I thought I had a pretty good sense of what would work. Then I watched people use the product. Within minutes, I discovered usability issues I had completely missed. Intuition helped me get started, but user feedback showed me what actually needed to improve.",
                },
                {
                  title: "Technical limitations shape the experience",
                  body: "Voice recognition became the most challenging part of the project. Different browsers behaved differently. Recognition was not always accurate. Small delays could interrupt the flow of recitation. At first, I saw these as technical problems. Eventually, I realized they were design problems too. The experience had to be designed around those limitations, not despite them.",
                },
                {
                  title: "Security is part of the user experience",
                  body: "Before this project, I mostly thought of security as something handled by engineers. Building and deploying a product myself changed that perspective. The moment users trust your product with their data, security becomes part of the experience you are responsible for designing. Trust is not built only through interfaces — it is also built through the decisions users never see.",
                },
                {
                  title: "Shipping is a skill",
                  body: "Before this project, \"shipping\" felt like a finish line. Now I see it as a skill. There will always be another bug, another improvement, another feature idea. At some point, you have to decide the product is good enough to be used, learn from real users, and continue improving from there.",
                },
                {
                  title: "Belajar sambil blangsakan",
                  body: "This project was my first real experience working hands-on with development tools, deployment platforms, databases, authentication, and security practices. Many things were messy. Many mistakes were made. But looking back, that messy process was one of the most valuable parts of the journey. Sometimes the fastest way to learn is simply to build something, break it, fix it, and repeat.",
                },
              ].map((lesson, i) => (
                <div
                  key={i}
                  className="grid gap-5 py-6 border-t border-[#EEF1F7] first:border-t-0 first:pt-2"
                  style={{ gridTemplateColumns: "48px 1fr" }}
                >
                  <div
                    className="text-[32px] font-extrabold text-[#0F1A2E] leading-none opacity-20"
                    style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F1A2E] mb-[6px]">{lesson.title}</h3>
                    <p className="text-[15px] text-[#4A5568] leading-[1.65] m-0">{lesson.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* What's Next */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">What's Next</h2>
            <p className="text-[#4A5568] leading-[1.7]">
              Murojaah is live, used, and actively improving. It is not finished — and honestly, I am
              not sure it ever will be, because the moment I "finish" something, friends return with
              new edge cases.
            </p>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-[10px] tracking-[-0.01em]">
              On the roadmap
            </h3>
            <ul className="ml-5 space-y-1.5 mb-8">
              {[
                "IndexedDB persistence for guest-mode audio recordings",
                "Multiple qari voice options (currently single reciter)",
                "Shareable progress snapshots for study groups",
                "Proper onboarding flow for first-time users",
              ].map((li, i) => (
                <li key={i} className="text-[15.5px] text-[#4A5568] leading-[1.75]">
                  {li}
                </li>
              ))}
            </ul>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-0 mb-[10px] tracking-[-0.01em]">
              Known limitations
            </h3>
            <ul className="ml-5 space-y-1.5">
              {[
                "Speech recognition quality varies by browser. iOS Safari remains a gamble.",
                "The Android Chrome listening chime cannot be disabled without a server-side STT pipeline.",
                "Speech-to-text has hard failure modes for tajwid-specific nuances. I am clear about this in-app.",
              ].map((li, i) => (
                <li key={i} className="text-[15.5px] text-[#4A5568] leading-[1.75]">
                  {li}
                </li>
              ))}
            </ul>
          </Reveal>

        </div>
      </div>

      {/* CTA strip */}
      <div
        className="py-[72px] mt-12 text-center relative overflow-hidden"
        style={{ background: "#0F1A2E" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px,rgba(255,255,255,.03) 1px,transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-[760px] mx-auto px-7">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-extrabold text-white mb-[14px] tracking-[-0.025em]">
            Try it yourself.
          </h2>
          <p className="text-white/70 text-[16px] max-w-[480px] mx-auto mb-8">
            The best case studies are not read — they are experienced. Murojaah is live, free, and
            built to be tried on your phone in 30 seconds.
          </p>
          <a
            href="https://smartmurojaahquran.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-[#0F1A2E] px-7 py-[15px] rounded-full text-[14px] font-bold shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            smartmurojaahquran.vercel.app
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="max-w-[760px] mx-auto px-7 pb-20 pt-12">
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
