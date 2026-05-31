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

      {/* ── Hero ── */}
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
              Smart Murajaah Web App to Solve My Problem
            </h1>
            <p className="text-lg text-[#4A5568] max-w-[620px] mb-10 leading-[1.55]">
              A mobile-first Quran memorization tool designed and built end-to-end to solve the
              "loop of doubt" — closing the gap that existing apps left open for serious murojaah
              practice.
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

      {/* ── Content ── */}
      <div className="py-[72px]">
        <div className="max-w-[760px] mx-auto px-7 space-y-16">

          {/* Overview */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Overview</h2>
            <p className="text-[#4A5568] leading-[1.7]">
              As someone on a Quran memorization journey, I struggled daily with a problem no existing
              app solved well. So I decided to design and build a tool that fixed it for{" "}
              <em className="text-[#2B3648]">me</em> — then kept iterating until it worked for my
              community, too. This case study documents that end-to-end journey: the problem, the
              pivots, the technical hurdles, and the lessons.
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
                  v: "Existing Quran apps offer full-surah audio and passive reading — but none handle the real murojaah workflow: verse-level repetition, self-validated recitation, and cross-surah doubt.",
                },
                {
                  k: "Solution",
                  v: 'Mobile-first web app with speech-recognized recitation validation, verse-level audio looping, per-ayah progress tracking, and a "Sambung Ayat" practice mode — no install, no signup wall.',
                },
                {
                  k: "My role",
                  v: "Everything. Problem framing, UX, frontend, speech matcher engine, database schema, RLS security, OAuth, deployment.",
                },
                {
                  k: "Biggest win",
                  v: (
                    <>
                      Shipped a production app end-to-end as a designer. Learned that product thinking
                      and technical execution are the{" "}
                      <em className="text-[#2B3648]">same</em> discipline when you can't hide behind a
                      team.
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
              A few months ago, I joined a murojaah community — a small group of friends committed to
              staying consistent with our Quran memorization. Every week, we'd take turns reciting from
              memory, testing each other, holding each other accountable. And every week, I ran into the
              same two problems.
            </p>

            <div className="space-y-0">
              {[
                {
                  title: "The loop of doubt",
                  body: (
                    <>
                      I'd close the Mushaf and begin to recite. Two ayahs in, a thought:{" "}
                      <em className="text-[#2B3648]">"Wait — was that verse correct?"</em> I'd reopen
                      the Mushaf, check, close it again, continue. Two lines later, the doubt returned.
                      Sometimes I'd unconsciously slip into a different surah because verse endings
                      sounded alike — suddenly I was lost, focus broken.
                    </>
                  ),
                },
                {
                  title: "No verse-level repetition",
                  body: "I memorize best when I can loop a specific verse while listening — over and over, until the rhythm is in my bones. But every audio app I tried only offered full-surah playback. I'd manually pause, rewind, guess the timestamp. The tool was fighting my workflow instead of supporting it.",
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

            <div className="bg-white border border-[#E4E8F0] rounded-2xl px-8 py-7 mt-7 shadow-sm">
              <h3 className="text-[18px] font-bold text-[#0F1A2E] mb-[10px]">
                Why not just download another app?
              </h3>
              <p className="text-[15.5px] text-[#4A5568] leading-[1.7] m-0">
                I looked. I tried browser-based players, native apps, YouTube playlists. Nothing clicked.
                And downloading yet another app wasn't an option — my phone storage has been permanently
                fighting for survival at 99% for months. That's when I thought:{" "}
                <em className="text-[#2B3648]">"What if I just build it myself?"</em>
              </p>
            </div>
          </Reveal>

          {/* Process */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Process</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              Rather than jumping to Figma, I used a builder-first approach: validate the hardest
              technical unknown first, then iterate design based on real user testing.
            </p>
            <div className="space-y-0">
              {[
                {
                  title: "Problem validation & competitive audit",
                  body: (
                    <>
                      Spent a weekend auditing every major Quran app I could find — free, paid, local,
                      international. Looked specifically for verse-level looping, real-time recitation
                      validation, and per-ayah progress tracking. Most apps optimized for{" "}
                      <em className="text-[#2B3648]">reading</em>, not for practicing recitation from
                      memory. The gap was real.
                    </>
                  ),
                },
                {
                  title: "Iteration 01 — builder mode (ugly on purpose)",
                  body: (
                    <>
                      Ignored UX deliberately. Built a rough working version to de-risk the biggest
                      unknown:{" "}
                      <em className="text-[#2B3648]">
                        could the browser's speech recognition API actually understand Arabic recitation
                        well enough to validate memorization?
                      </em>{" "}
                      Once it (barely) worked, I shared it with my murojaah friends to test.
                    </>
                  ),
                },
                {
                  title: "Reality check — user testing",
                  body: (
                    <>
                      What made sense to me did not make sense to anyone else. Friends got confused by
                      the flow, tapped wrong buttons, missed features I thought were obvious. The
                      feedback that stung most:{" "}
                      <em className="text-[#2B3648]">
                        "It works, but I don't understand what to do next."
                      </em>{" "}
                      Five words that reset my approach entirely.
                    </>
                  ),
                },
                {
                  title: "Iteration 02 — designer pivot",
                  body: "Key observation: 100% of my friends opened the app on their phones. I was the only desktop user. I rebuilt top-down with three rules — mobile-first (not mobile-compatible), Indonesian-consistent, and no feature without a verb. Every screen had to answer \"what do I do next?\" within one glance.",
                },
                {
                  title: "Technical hardening & shipping",
                  body: "Added Row-Level Security in Supabase, XSS escaping, defense-in-depth user_id filters, FK cascade for compliance, Google OAuth with custom branding. All invisible to users, all non-negotiable. Deployed to Vercel with a custom domain and tested across mobile browsers before a soft launch to the community.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="grid gap-5 py-5 border-t border-[#EEF1F7] first:border-t-0 first:pt-2"
                  style={{ gridTemplateColumns: "42px 1fr" }}
                >
                  <div className="w-8 h-8 rounded-full bg-white border-[1.5px] border-[#0F1A2E] flex items-center justify-center text-[13px] font-bold text-[#0F1A2E]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F1A2E] mb-[6px]">{step.title}</h3>
                    <p className="text-[15px] text-[#4A5568] leading-[1.65] m-0">{step.body}</p>
                  </div>
                </div>
              ))}
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
                      localStorage and sync to Supabase only after sign-in. This mirrors how I wanted to
                      try the app myself — try first, commit later.
                    </>
                  ),
                },
                {
                  q: "Tab sync or tab independent?",
                  a: (
                    <>
                      <strong className="text-[#0F1A2E] font-semibold">Tab sync (industry standard).</strong>{" "}
                      If a user logs out in one tab, every tab logs out. Forcing per-tab login is worse
                      than the alternative — and matches how Gmail, Notion, and every serious web app
                      behave.
                    </>
                  ),
                },
                {
                  q: "Speech recognition or manual input?",
                  a: (
                    <>
                      <strong className="text-[#0F1A2E] font-semibold">Speech, despite the complexity.</strong>{" "}
                      Manual input would've been 10× easier but 10× less useful. Murojaah{" "}
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

          {/* UX Iteration Highlights — Before/After */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">UX Iteration Highlights</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              I kept a running list of every moment a friend hesitated, tapped the wrong thing, or asked
              "wait, how do I…". Each of these fixes came directly from that list.
            </p>
            <div className="space-y-5">
              {[
                {
                  num: "FIX 01",
                  title: "Setoran modal getting cut off",
                  before: (
                    <>
                      Bottom sheet used <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">max-height:100vh</code>. Mobile
                      browser chrome covered the bottom row. Users couldn't see or reach the ayah range
                      inputs.
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
                  title: '"Skip" that wasn\'t skip',
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
                      <em className="text-[#2B3648]">−/+ stepper</em> (still typeable). Live range
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
                    "Page jumped straight into a config card with no header. Score tracking lived in a separate disconnected card. Users didn't know what screen they were on.",
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
                    "User A logs in, closes the tab without logging out. User B (shared laptop) opens the app — and sees User A's data. Logout handler only cleared topbar UI, not localStorage.",
                  after: (
                    <>
                      Introduced a logged-in marker. On cold start: if marker exists but no active
                      session, purge all local data. Combined with hard reload on logout, XSS escaping,
                      defense-in-depth{" "}
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
              The hardest part wasn't the design — it was teaching a browser to understand a recitation
              in a language it wasn't optimized for.
            </p>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-[10px] tracking-[-0.01em]">
              Speech recognition, and why it broke my brain
            </h3>
            <p className="text-[#4A5568] leading-[1.7]">
              The Web Speech API is the browser's built-in speech-to-text engine. Free. Works. And
              wildly inconsistent — especially for Arabic. I spent more time on this single feature than
              on every other feature combined.
            </p>
            <ul className="mt-3 mb-5 ml-5 space-y-1.5">
              {[
                "Same recitation produced different results on Chrome desktop vs Chrome Android vs Safari iOS.",
                "Microphone permissions behaved differently — granted silently, required user gestures, required HTTPS, revoked between sessions.",
                "Some browsers handled Arabic pronunciation better than others (Chrome best; Safari a gamble).",
                'Android Chrome plays an audible "ding" at recognition start — impossible to disable at app level.',
              ].map((li, i) => (
                <li key={i} className="text-[15.5px] text-[#4A5568] leading-[1.75]">
                  {li}
                </li>
              ))}
            </ul>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-[10px] tracking-[-0.01em]">
              When "fifty thousand" broke everything
            </h3>
            <p className="text-[#4A5568] leading-[1.7]">
              Early on I tested Al-Ma'arij verse 4, which contains the number{" "}
              <strong className="text-[#0F1A2E] font-semibold">50,000 years</strong>. The browser
              transcribed my recitation as{" "}
              <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                "خمسين ألف"
              </code>{" "}
              (phonetic Arabic), but my reference text had{" "}
              <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                "50,000"
              </code>{" "}
              as digits. My matcher compared them character-by-character, decided they didn't match, and
              marked a perfectly correct recitation as wrong.
            </p>

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
              Lookahead & gap tolerance
            </h3>
            <p className="text-[#4A5568] leading-[1.7]">
              Reciters don't always mispronounce — sometimes they{" "}
              <em className="text-[#2B3648]">skip</em> a word, or pause long enough that the API
              interprets it as silence. A strictly sequential matcher would cascade errors from one
              missed word. The fix was a bounded lookahead.
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
                </code>
                . For gaps of 2+ words, require a stricter similarity threshold (
                <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                  MATCH_THRESHOLD + 0.08
                </code>
                ) to prevent the matcher from accidentally claiming a wildly different ayah as a match.
              </p>
            </div>
            <p className="text-[#4A5568] leading-[1.7]">
              This single change turned the matcher from "frustrating and punishing" into "forgiving but
              honest" — exactly the feedback loop a person memorizing the Quran needs.
            </p>

            <h3 className="text-[18px] font-bold text-[#0F1A2E] mt-8 mb-[10px] tracking-[-0.01em]">
              Security is a design decision
            </h3>
            <p className="text-[#4A5568] leading-[1.7]">
              When you're a solo builder launching a personal tool, security feels like the thing you do
              "later". It wasn't.
            </p>
            <ul className="mt-3 mb-5 ml-5 space-y-2">
              {[
                <>
                  <strong className="text-[#0F1A2E] font-semibold">Row-Level Security</strong> on every
                  Supabase table, targeting the{" "}
                  <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                    authenticated
                  </code>{" "}
                  role with correct{" "}
                  <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                    USING
                  </code>{" "}
                  +{" "}
                  <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                    WITH CHECK
                  </code>{" "}
                  clauses.
                </>,
                <>
                  <strong className="text-[#0F1A2E] font-semibold">Storage policies</strong> ensuring
                  users could only upload to folders named with their own{" "}
                  <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                    auth.uid()
                  </code>
                  .
                </>,
                <>
                  <strong className="text-[#0F1A2E] font-semibold">
                    FK{" "}
                    <code className="bg-[#E8ECF4] text-[#2B3648] px-1.5 py-0.5 rounded text-[13px] font-mono">
                      ON DELETE CASCADE
                    </code>
                  </strong>{" "}
                  so deleting a user also deletes all their setoran — compliance with GDPR-style data
                  rights.
                </>,
                <>
                  <strong className="text-[#0F1A2E] font-semibold">XSS escaping</strong> in every
                  modal rendering user-supplied data, plus audio URL scheme validation.
                </>,
                <>
                  <strong className="text-[#0F1A2E] font-semibold">Defense-in-depth filters</strong> at
                  the query level, even with RLS enabled — because one day I might misconfigure RLS, and
                  the code layer would still save me.
                </>,
              ].map((li, i) => (
                <li key={i} className="text-[15.5px] text-[#4A5568] leading-[1.75]">
                  {li}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stack */}
          <Reveal>
            <h2 className="text-[26px] font-extrabold text-[#0F1A2E] tracking-[-0.02em] mb-[18px]">Stack</h2>
            <p className="text-[#4A5568] leading-[1.7] mb-6">
              No framework. No build step. Just static HTML, CSS, and JS. Turns out you don't always
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
              The bugs I fixed are on GitHub. The lessons I learned are here.
            </p>
            <div className="space-y-0">
              {[
                {
                  title: "Personal itch ≠ product success",
                  body: "I built v1 for myself and it worked — for me. The moment anyone else touched it, every assumption became a friction point. A personal tool becomes a product the moment a second human uses it, and the work between those two states is the real design work.",
                },
                {
                  title: "UX intuition is a starting point, not a shortcut",
                  body: "Years of design experience didn't stop me from shipping a v1 that confused testers in 30 seconds. Intuition points you in a direction. Testing tells you if the direction was correct. Skipping the second step is how designers ship bad products.",
                },
                {
                  title: "Technical constraints are design material",
                  body: "The speech API's quirks forced me to design around uncertainty — retry modes, forgiving matchers, visible confidence indicators. Constraints didn't limit the design; they shaped it into something more honest.",
                },
                {
                  title: "Security is a trust decision",
                  body: "RLS, XSS escaping, data isolation — these sound like backend concerns. They're not. They determine whether a user feels safe trusting your app with their recitation recordings. I stopped thinking of security as \"the dev's job\" and started thinking of it as trust design.",
                },
                {
                  title: "Shipping is a skill, not an event",
                  body: "Before this project, shipping felt like a moment — the day you \"go live\". Now I understand shipping as a muscle: cutting scope, holding quality lines, saying \"this version is good enough to show someone\" without flinching. I'm still training that muscle.",
                },
                {
                  title: "Belajar sambil blangsakan",
                  body: "An Indonesian expression that loosely translates to \"learning while making a mess of it\". My first GitHub push. My first Supabase RLS policy. My first OAuth consent screen. Every single one was a mess. Every single one taught me something I now know forever.",
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
              Murajaah is live, used, and actively improving. It's not finished — and honestly, I'm not
              sure it ever will be, because the moment I "finish" something, friends return with new edge
              cases.
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
                'The Android Chrome "listening" chime cannot be disabled without a server-side STT pipeline.',
                "Speech-to-text has hard failure modes for tajwid-specific nuances. I'm clear about this in-app.",
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
            The best case studies aren't read — they're experienced. Murajaah is live, free, and built
            to be tried on your phone in 30 seconds.
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
